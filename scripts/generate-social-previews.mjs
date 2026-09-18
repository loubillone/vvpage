// scripts/generate-social-previews.mjs
//
// Fase 2A — Social Sharing (SOLO Discursos).
//
// Genera, a partir de src/data/discursos.js, un HTML estático por discurso
// en dist/_social/discursos/{slug}.html, con metadata (title, description,
// canonical, Open Graph, Twitter Card) específica de cada discurso.
//
// NO hace SSR del body: el <body> (incluyendo <div id="root"> y los scripts
// de Vite) se copia intacto desde dist/index.html, así que React sigue
// arrancando en el cliente exactamente igual que hoy.
//
// Estos archivos se sirven mediante una reescritura INTERNA de .htaccess
// (sin redirect, sin cambiar la URL visible) cuando un bot o un navegador
// pide /discursos/:slug directamente. La navegación interna de React Router
// (SPA) no pasa por este mecanismo en absoluto.
//
// Debe ejecutarse DESPUÉS de `vite build` (lee dist/index.html real).
//
// Alcance explícito de esta fase: NO importa visitasProvincias.jsx ni
// senadoTemas.jsx (contienen JSX, se resolverán en una fase posterior).

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import discursos from "../src/data/discursos.js";
import { getYouTubeId, getYouTubeThumbnail } from "../src/utils/youtube.js";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");
const DIST_INDEX_HTML = path.join(DIST_DIR, "index.html");
const SOCIAL_DISCURSOS_DIR = path.join(DIST_DIR, "_social", "discursos");
const ENV_PATH = path.join(ROOT_DIR, ".env");

const ROUTE_META_START = "<!-- ROUTE_META_START -->";
const ROUTE_META_END = "<!-- ROUTE_META_END -->";

const FALLBACK_IMAGE_PATH = "/og_vv.jpg";
const FALLBACK_IMAGE_WIDTH = "1200";
const FALLBACK_IMAGE_HEIGHT = "630";
const YOUTUBE_THUMB_WIDTH = "480";
const YOUTUBE_THUMB_HEIGHT = "360";

// ---------------------------------------------------------------------
// 0. Utilidades
// ---------------------------------------------------------------------

function fail(message) {
  console.error(`\n[generate-social-previews] ERROR: ${message}\n`);
  process.exit(1);
}

// Carga .env solo para completar variables que no estén ya presentes en
// process.env (una variable real de entorno siempre tiene prioridad).
// No se imprime ningún valor leído de acá.
function loadDotEnvFallback(envPath) {
  if (!existsSync(envPath)) return;

  const content = readFileSync(envPath, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const eqIndex = line.indexOf("=");
    if (eqIndex === -1) continue;

    const key = line.slice(0, eqIndex).trim();
    let value = line.slice(eqIndex + 1).trim();

    const isQuoted =
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"));
    if (isQuoted) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

// Escapa texto para usar como contenido de nodo HTML (ej. dentro de <title>).
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Escapa texto para usar como valor de atributo HTML (ej. content="...").
function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function countSubstring(haystack, needle) {
  let count = 0;
  let fromIndex = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const idx = haystack.indexOf(needle, fromIndex);
    if (idx === -1) break;
    count += 1;
    fromIndex = idx + needle.length;
  }
  return count;
}

// ---------------------------------------------------------------------
// 1. Validar SITE_URL
// ---------------------------------------------------------------------

loadDotEnvFallback(ENV_PATH);

const RAW_SITE_URL = process.env.VITE_SITE_URL;

if (!RAW_SITE_URL) {
  fail(
    "Falta VITE_SITE_URL. Definila en el entorno o en .env antes de correr este script."
  );
}

let parsedSiteUrl;
try {
  parsedSiteUrl = new URL(RAW_SITE_URL);
} catch {
  fail(`VITE_SITE_URL no es una URL absoluta válida: "${RAW_SITE_URL}"`);
}

if (parsedSiteUrl.protocol !== "https:") {
  fail(
    `VITE_SITE_URL debe usar https. Valor recibido: "${RAW_SITE_URL}"`
  );
}

// Sin trailing slash, para poder concatenar `${SITE_URL}/discursos/...`
// de forma consistente.
const SITE_URL = RAW_SITE_URL.replace(/\/+$/, "");

console.log(`[generate-social-previews] SITE_URL validado (dominio: ${parsedSiteUrl.hostname}).`);

// ---------------------------------------------------------------------
// 2. Leer dist/index.html y extraer el template por marcadores
// ---------------------------------------------------------------------

if (!existsSync(DIST_INDEX_HTML)) {
  fail(
    `No existe ${DIST_INDEX_HTML}. Corré "vite build" antes de ejecutar este script.`
  );
}

const builtIndexHtml = readFileSync(DIST_INDEX_HTML, "utf8");

const startCount = countSubstring(builtIndexHtml, ROUTE_META_START);
const endCount = countSubstring(builtIndexHtml, ROUTE_META_END);

if (startCount !== 1) {
  fail(
    `dist/index.html debe tener exactamente 1 "${ROUTE_META_START}" (se encontraron ${startCount}).`
  );
}
if (endCount !== 1) {
  fail(
    `dist/index.html debe tener exactamente 1 "${ROUTE_META_END}" (se encontraron ${endCount}).`
  );
}

const startIdx = builtIndexHtml.indexOf(ROUTE_META_START);
const endIdx = builtIndexHtml.indexOf(ROUTE_META_END);

if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
  fail(
    "No se pudieron ubicar correctamente los marcadores ROUTE_META_START/ROUTE_META_END en dist/index.html."
  );
}

// Todo lo anterior al marcador START (incluye <head>, charset, favicon,
// viewport, robots) se conserva intacto.
const HEAD_PRELUDE = builtIndexHtml.slice(0, startIdx);

// Todo lo posterior al marcador END (assets de Vite con hash, </head>,
// <body> con <div id="root"> y scripts, </html>) se conserva intacto.
const TAIL_AFTER_END = builtIndexHtml.slice(endIdx + ROUTE_META_END.length);

// ---------------------------------------------------------------------
// 3. Construir el bloque de metadata por discurso
// ---------------------------------------------------------------------

function resolveImage(videoUrl) {
  const videoId = getYouTubeId(videoUrl);
  if (videoId) {
    return {
      url: getYouTubeThumbnail(videoUrl),
      width: YOUTUBE_THUMB_WIDTH,
      height: YOUTUBE_THUMB_HEIGHT,
    };
  }
  return {
    url: `${SITE_URL}${FALLBACK_IMAGE_PATH}`,
    width: FALLBACK_IMAGE_WIDTH,
    height: FALLBACK_IMAGE_HEIGHT,
  };
}

function buildMetaBlock(discurso) {
  const title = `${discurso.titulo} | Todo por Argentina`;
  const description = discurso.descripcion;
  const canonical = `${SITE_URL}/discursos/${discurso.slug}`;
  const image = resolveImage(discurso.videoUrl);

  const titleEsc = escapeHtml(title);
  const descriptionAttrEsc = escapeAttr(description);
  const canonicalAttrEsc = escapeAttr(canonical);
  const imageAttrEsc = escapeAttr(image.url);

  return `    <meta
      data-rh="true"
      name="description"
      content="${descriptionAttrEsc}"
    />
    <link data-rh="true" rel="canonical" href="${canonicalAttrEsc}" />
    <title data-rh="true">${titleEsc}</title>

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Todo Por Argentina" />
    <meta property="og:title" content="${titleEsc}" />
    <meta property="og:description" content="${descriptionAttrEsc}" />
    <meta property="og:url" content="${canonicalAttrEsc}" />
    <meta property="og:image" content="${imageAttrEsc}" />
    <meta property="og:image:width" content="${image.width}" />
    <meta property="og:image:height" content="${image.height}" />

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${titleEsc}" />
    <meta name="twitter:description" content="${descriptionAttrEsc}" />
    <meta name="twitter:image" content="${imageAttrEsc}" />
`;
}

// ---------------------------------------------------------------------
// 4. Validaciones de datos de entrada
// ---------------------------------------------------------------------

if (!Array.isArray(discursos) || discursos.length === 0) {
  fail("src/data/discursos.js no exportó un array de discursos no vacío.");
}

const slugsVistos = new Set();
for (const discurso of discursos) {
  if (!discurso.slug || typeof discurso.slug !== "string") {
    fail(`Discurso sin slug válido: ${JSON.stringify(discurso.titulo)}`);
  }
  if (slugsVistos.has(discurso.slug)) {
    fail(`Slug duplicado detectado: "${discurso.slug}"`);
  }
  slugsVistos.add(discurso.slug);

  if (typeof discurso.titulo !== "string" || !discurso.titulo.trim()) {
    fail(`Discurso "${discurso.slug}" no tiene titulo válido.`);
  }
  if (typeof discurso.descripcion !== "string" || !discurso.descripcion.trim()) {
    fail(`Discurso "${discurso.slug}" no tiene descripcion (string) válida.`);
  }
}

// ---------------------------------------------------------------------
// 5. (Re)crear dist/_social/discursos/ limpio y generar los archivos
// ---------------------------------------------------------------------

if (existsSync(path.join(DIST_DIR, "_social"))) {
  rmSync(path.join(DIST_DIR, "_social"), { recursive: true, force: true });
}
mkdirSync(SOCIAL_DISCURSOS_DIR, { recursive: true });

for (const discurso of discursos) {
  const metaBlock = buildMetaBlock(discurso);
  const html = HEAD_PRELUDE + metaBlock + TAIL_AFTER_END;
  const outPath = path.join(SOCIAL_DISCURSOS_DIR, `${discurso.slug}.html`);
  writeFileSync(outPath, html, "utf8");
}

console.log(
  `[generate-social-previews] Generados ${discursos.length} HTML en dist/_social/discursos/.`
);

// ---------------------------------------------------------------------
// 6. Auto-verificación: exactamente 1 de cada tag requerido, por archivo
// ---------------------------------------------------------------------

const REQUIRED_TAG_NEEDLES = [
  ["title", "<title"],
  ["meta description", 'name="description"'],
  ["canonical", 'rel="canonical"'],
  ["og:type", 'property="og:type"'],
  ["og:site_name", 'property="og:site_name"'],
  ["og:title", 'property="og:title"'],
  ["og:description", 'property="og:description"'],
  ["og:url", 'property="og:url"'],
  ["og:image", 'property="og:image"'],
  ["twitter:card", 'name="twitter:card"'],
  ["twitter:title", 'name="twitter:title"'],
  ["twitter:description", 'name="twitter:description"'],
  ["twitter:image", 'name="twitter:image"'],
];

let verificationFailed = false;

for (const discurso of discursos) {
  const filePath = path.join(SOCIAL_DISCURSOS_DIR, `${discurso.slug}.html`);
  const html = readFileSync(filePath, "utf8");

  for (const [label, needle] of REQUIRED_TAG_NEEDLES) {
    const count = countSubstring(html, needle);
    if (count !== 1) {
      verificationFailed = true;
      console.error(
        `[generate-social-previews] ${discurso.slug}.html: se esperaba exactamente 1 "${label}", se encontraron ${count}.`
      );
    }
  }
}

// Verificar conteo de archivos vs. slugs de datos (0 faltantes, 0 sobrantes).
const archivosGenerados = readdirSync(SOCIAL_DISCURSOS_DIR)
  .filter((f) => f.endsWith(".html"))
  .map((f) => f.replace(/\.html$/, ""));

const slugsData = discursos.map((d) => d.slug);
const setArchivos = new Set(archivosGenerados);
const setSlugs = new Set(slugsData);

const faltantes = slugsData.filter((s) => !setArchivos.has(s));
const sobrantes = archivosGenerados.filter((s) => !setSlugs.has(s));

if (faltantes.length > 0) {
  verificationFailed = true;
  console.error(
    `[generate-social-previews] Slugs sin HTML generado: ${faltantes.join(", ")}`
  );
}
if (sobrantes.length > 0) {
  verificationFailed = true;
  console.error(
    `[generate-social-previews] Archivos sobrantes sin slug correspondiente: ${sobrantes.join(", ")}`
  );
}

console.log(
  `[generate-social-previews] Verificación: ${slugsData.length} discursos, ${archivosGenerados.length} HTML generados, ${faltantes.length} faltantes, ${sobrantes.length} sobrantes.`
);

if (verificationFailed) {
  fail("La auto-verificación de los HTML generados falló (ver detalle arriba).");
}

console.log("[generate-social-previews] OK — todos los archivos pasaron la verificación.");
