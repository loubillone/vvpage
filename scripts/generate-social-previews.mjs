// scripts/generate-social-previews.mjs
//
// Social Sharing — Discursos, visitas provinciales y actividades de Senado.
//
// Genera HTML estático en:
//   dist/_social/discursos/{slug}.html
//   dist/_social/provincias/{provinciaSlug}/{visitaSlug}.html
//   dist/_social/senado/{temaSlug}/{anio}/{actividadSlug}.html
// con metadata (title, description, canonical, Open Graph, Twitter Card).
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
// JSX: una sola instancia de Vite (ssrLoadModule) carga visitasProvincias.jsx
// y senadoTemas.jsx, proyecta campos serializables y genera un HTML por
// visita y por actividad de Senado.

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

import discursos from "../src/data/discursos.js";
import { getYouTubeId, getYouTubeThumbnail } from "../src/utils/youtube.js";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");
const DIST_INDEX_HTML = path.join(DIST_DIR, "index.html");
const SOCIAL_DISCURSOS_DIR = path.join(DIST_DIR, "_social", "discursos");
const SOCIAL_PROVINCIAS_DIR = path.join(DIST_DIR, "_social", "provincias");
const SOCIAL_SENADO_DIR = path.join(DIST_DIR, "_social", "senado");
const CLOUDINARY_CLOUD_NAME = "dwb5tmtqg";
const CLOUDINARY_OG_TRANSFORM = "w_1200,h_630,c_fill,g_auto,f_auto,q_auto";
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

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

async function closeViteSafely(vite) {
  if (!vite) return;
  try {
    await vite.close();
  } catch (closeErr) {
    console.error(
      `[generate-social-previews] ERROR al cerrar Vite: ${closeErr.message}`
    );
  }
}

function anioDeFechaISO(fechaISO) {
  if (!isNonEmptyString(fechaISO)) return "";
  return fechaISO.trim().slice(0, 4);
}

// Una sola instancia: plugin-react del proyecto, middlewareMode, sin puerto.
// Carga visitas (named export) y senado (default export). close() siempre.
async function loadJsxDataModulesFromVite() {
  let vite;
  try {
    vite = await createServer({
      root: ROOT_DIR,
      configFile: path.join(ROOT_DIR, "vite.config.js"),
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: "custom",
      logLevel: "error",
      clearScreen: false,
    });

    const visitasMod = await vite.ssrLoadModule(
      "/src/data/visitasProvincias.jsx"
    );
    if (
      !visitasMod ||
      typeof visitasMod.visitasProvincias !== "object" ||
      visitasMod.visitasProvincias === null
    ) {
      throw new Error(
        "ssrLoadModule no exportó visitasProvincias como objeto (named export)."
      );
    }

    const senadoMod = await vite.ssrLoadModule("/src/data/senadoTemas.jsx");
    if (
      !senadoMod ||
      typeof senadoMod.default !== "object" ||
      senadoMod.default === null
    ) {
      throw new Error(
        "ssrLoadModule no exportó senadoTemas como objeto (default export)."
      );
    }

    return {
      visitasProvincias: visitasMod.visitasProvincias,
      senadoTemas: senadoMod.default,
    };
  } catch (err) {
    throw new Error(`No se pudieron cargar módulos JSX vía Vite: ${err.message}`);
  } finally {
    await closeViteSafely(vite);
  }
}

function projectVisitasSocialMeta(visitasProvincias) {
  const projected = [];
  for (const [provinciaSlug, provincia] of Object.entries(visitasProvincias)) {
    const visitas = Array.isArray(provincia?.visitas) ? provincia.visitas : [];
    for (const visita of visitas) {
      projected.push({
        provinciaSlug,
        provinciaNombre: provincia?.nombre,
        visitaSlug: visita?.slug,
        titulo: visita?.titulo,
        fechaISO: visita?.fechaISO,
        fecha: visita?.fecha,
        lugar: visita?.lugar,
        imagenPortada: visita?.imagenPortada,
      });
    }
  }
  return projected;
}

function validateVisitasSocialMeta(visitasProvincias, projected) {
  const derivedProvinceCount = Object.keys(visitasProvincias).length;
  const derivedVisitCount = Object.values(visitasProvincias).reduce(
    (total, provincia) =>
      total + (Array.isArray(provincia?.visitas) ? provincia.visitas.length : 0),
    0
  );

  if (derivedProvinceCount === 0 || derivedVisitCount === 0) {
    fail("visitasProvincias no contiene provincias o visitas.");
  }

  if (projected.length !== derivedVisitCount) {
    fail(
      `La proyección de visitas (${projected.length}) no coincide con el total derivado de los datos (${derivedVisitCount}).`
    );
  }

  const identities = new Set();
  const PROJECTED_KEYS = [
    "provinciaSlug",
    "provinciaNombre",
    "visitaSlug",
    "titulo",
    "fechaISO",
    "fecha",
    "lugar",
    "imagenPortada",
  ];

  for (const row of projected) {
    for (const key of PROJECTED_KEYS) {
      if (row[key] === undefined) {
        fail(
          `Campo proyectado "${key}" es undefined (provincia: ${row.provinciaSlug}, visita: ${row.visitaSlug}).`
        );
      }
      if (!isNonEmptyString(row[key])) {
        fail(
          `Visita sin ${key} válido: provincia="${row.provinciaSlug}" visita="${row.visitaSlug}".`
        );
      }
    }

    const identity = `${row.provinciaSlug}/${row.visitaSlug}`;
    if (identities.has(identity)) {
      fail(`Slug duplicado dentro de la misma provincia: "${identity}".`);
    }
    identities.add(identity);
  }

  console.log(
    `[generate-social-previews] Visitas cargadas vía Vite: ${derivedProvinceCount} provincias, ${derivedVisitCount} visitas (proyección ${projected.length}).`
  );
}

function inspectSenadoImagenTituloTypes(senadoTemas) {
  for (const tema of Object.values(senadoTemas)) {
    const tipo = typeof tema?.imagenTitulo;
    console.log(
      `[generate-social-previews] imagenTitulo (${tema?.slug ?? "sin-slug"}): typeof=${tipo}, isString=${tipo === "string"}`
    );
  }
}

function projectSenadoSocialMeta(senadoTemas) {
  const projected = [];
  for (const [temaSlug, tema] of Object.entries(senadoTemas)) {
    const actividades = Array.isArray(tema?.actividades) ? tema.actividades : [];
    for (const actividad of actividades) {
      projected.push({
        temaSlug,
        temaTitulo: tema?.titulo,
        anio: anioDeFechaISO(actividad?.fechaISO),
        actividadSlug: actividad?.slug,
        titulo: actividad?.titulo,
        fechaISO: actividad?.fechaISO,
        fecha: actividad?.fecha,
        imagenPortada: actividad?.imagenPortada,
      });
    }
  }
  return projected;
}

function validateSenadoSocialMeta(senadoTemas, projected) {
  const derivedTemaCount = Object.keys(senadoTemas).length;
  const derivedActividadCount = Object.values(senadoTemas).reduce(
    (total, tema) =>
      total + (Array.isArray(tema?.actividades) ? tema.actividades.length : 0),
    0
  );

  if (derivedTemaCount === 0 || derivedActividadCount === 0) {
    fail("senadoTemas no contiene temas o actividades.");
  }

  if (projected.length !== derivedActividadCount) {
    fail(
      `La proyección de actividades (${projected.length}) no coincide con el total derivado de los datos (${derivedActividadCount}).`
    );
  }

  const identities = new Set();
  const PROJECTED_KEYS = [
    "temaSlug",
    "temaTitulo",
    "actividadSlug",
    "titulo",
    "fechaISO",
    "fecha",
    "imagenPortada",
  ];

  for (const row of projected) {
    for (const key of PROJECTED_KEYS) {
      if (row[key] === undefined) {
        fail(
          `Campo proyectado "${key}" es undefined (tema: ${row.temaSlug}, actividad: ${row.actividadSlug}).`
        );
      }
      if (!isNonEmptyString(row[key])) {
        fail(
          `Actividad sin ${key} válido: tema="${row.temaSlug}" actividad="${row.actividadSlug}".`
        );
      }
    }

    if (!/^\d{4}$/.test(row.anio)) {
      fail(
        `Actividad sin anio de 4 dígitos: tema="${row.temaSlug}" actividad="${row.actividadSlug}" anio="${row.anio}".`
      );
    }

    const identity = `${row.temaSlug}/${row.anio}/${row.actividadSlug}`;
    if (identities.has(identity)) {
      fail(`Identidad de actividad duplicada: "${identity}".`);
    }
    identities.add(identity);
  }

  console.log(
    `[generate-social-previews] Senado cargado vía Vite: ${derivedTemaCount} temas, ${derivedActividadCount} actividades (proyección ${projected.length}).`
  );
}

function logSenadoPilotoInspeccion(projected) {
  const piloto = projected.find(
    (row) =>
      row.temaSlug === "malvinas" &&
      row.anio === "2026" &&
      row.actividadSlug === "epopeya-nacional-2026"
  );
  if (!piloto) return;
  console.log(
    `[generate-social-previews] Inspección Senado: ${piloto.temaSlug}/${piloto.anio}/${piloto.actividadSlug}`
  );
  console.log(`[generate-social-previews]   temaTitulo: ${piloto.temaTitulo}`);
  console.log(`[generate-social-previews]   titulo: ${piloto.titulo}`);
  console.log(`[generate-social-previews]   fecha: ${piloto.fecha}`);
  console.log(
    `[generate-social-previews]   imagenPortada: ${piloto.imagenPortada}`
  );
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

// Local a este script: no modifica src/utils/cloudinary.js (w_1000,h_600).
function resolveVisitaOgImage(imagenPortada) {
  if (isNonEmptyString(imagenPortada)) {
    const publicId = imagenPortada.trim().replace(/^\/+/, "");
    return {
      url: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${CLOUDINARY_OG_TRANSFORM}/${publicId}`,
      width: FALLBACK_IMAGE_WIDTH,
      height: FALLBACK_IMAGE_HEIGHT,
    };
  }
  return {
    url: `${SITE_URL}${FALLBACK_IMAGE_PATH}`,
    width: FALLBACK_IMAGE_WIDTH,
    height: FALLBACK_IMAGE_HEIGHT,
  };
}

function buildSenadoMetaBlock(actividad) {
  const title = `${actividad.titulo} | Todo por Argentina`;
  const description = `${actividad.titulo} — actividad de Victoria Villarruel en el Senado de la Nación (${actividad.temaTitulo}, ${actividad.fecha}).`;
  const canonical = `${SITE_URL}/senado/${actividad.temaSlug}/${actividad.anio}/${actividad.actividadSlug}`;
  const image = resolveVisitaOgImage(actividad.imagenPortada);

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

function buildVisitaMetaBlock(visita) {
  const title = `${visita.titulo} | Todo por Argentina`;
  const description = `${visita.titulo} — recorrida de Victoria Villarruel en ${
    visita.provinciaNombre
  }${visita.lugar ? ` (${visita.lugar})` : ""}, ${visita.fecha}.`;
  const canonical = `${SITE_URL}/provincias/${visita.provinciaSlug}/${visita.visitaSlug}`;
  const image = resolveVisitaOgImage(visita.imagenPortada);

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

function extractTaggedContent(html, needle) {
  const idx = html.indexOf(needle);
  if (idx === -1) return null;
  const after = html.slice(idx);
  const contentMatch = after.match(/\bcontent="([^"]*)"/);
  const hrefMatch = after.match(/\bhref="([^"]*)"/);
  if (needle.includes("canonical")) {
    return hrefMatch ? hrefMatch[1] : null;
  }
  return contentMatch ? contentMatch[1] : null;
}

function listSenadoPreviewIdentities(dir) {
  const identities = [];
  if (!existsSync(dir)) return identities;
  for (const temaEntry of readdirSync(dir, { withFileTypes: true })) {
    if (!temaEntry.isDirectory()) continue;
    const temaDir = path.join(dir, temaEntry.name);
    for (const anioEntry of readdirSync(temaDir, { withFileTypes: true })) {
      if (!anioEntry.isDirectory()) continue;
      const anioDir = path.join(temaDir, anioEntry.name);
      for (const file of readdirSync(anioDir)) {
        if (file.endsWith(".html")) {
          identities.push(
            `${temaEntry.name}/${anioEntry.name}/${file.replace(/\.html$/, "")}`
          );
        }
      }
    }
  }
  return identities;
}

function countNestedDirectories(dir) {
  if (!existsSync(dir)) return 0;
  let count = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    count += 1;
    count += countNestedDirectories(path.join(dir, entry.name));
  }
  return count;
}

function listProvinciaPreviewIdentities(dir) {
  const identities = [];
  if (!existsSync(dir)) return identities;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const provinciaDir = path.join(dir, entry.name);
    for (const file of readdirSync(provinciaDir)) {
      if (file.endsWith(".html")) {
        identities.push(`${entry.name}/${file.replace(/\.html$/, "")}`);
      }
    }
  }
  return identities;
}

function htmlHasForbiddenTokens(html) {
  return (
    html.includes("undefined") ||
    html.includes("localhost") ||
    html.includes("127.0.0.1") ||
    html.includes("NaN")
  );
}

function isHttpsAbsoluteUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
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
// 4b. Cargar y validar visitas + Senado (proyección serializable)
// ---------------------------------------------------------------------

let projectedVisitas;
let projectedActividades;
try {
  const { visitasProvincias, senadoTemas } = await loadJsxDataModulesFromVite();
  projectedVisitas = projectVisitasSocialMeta(visitasProvincias);
  validateVisitasSocialMeta(visitasProvincias, projectedVisitas);

  inspectSenadoImagenTituloTypes(senadoTemas);
  projectedActividades = projectSenadoSocialMeta(senadoTemas);
  validateSenadoSocialMeta(senadoTemas, projectedActividades);
  logSenadoPilotoInspeccion(projectedActividades);
} catch (err) {
  fail(err.message || String(err));
}

// ---------------------------------------------------------------------
// 5. (Re)crear dist/_social limpio y generar Discursos + Provincias + Senado
// ---------------------------------------------------------------------

if (existsSync(path.join(DIST_DIR, "_social"))) {
  rmSync(path.join(DIST_DIR, "_social"), { recursive: true, force: true });
}
mkdirSync(SOCIAL_DISCURSOS_DIR, { recursive: true });
mkdirSync(SOCIAL_PROVINCIAS_DIR, { recursive: true });
mkdirSync(SOCIAL_SENADO_DIR, { recursive: true });

for (const discurso of discursos) {
  const metaBlock = buildMetaBlock(discurso);
  const html = HEAD_PRELUDE + metaBlock + TAIL_AFTER_END;
  const outPath = path.join(SOCIAL_DISCURSOS_DIR, `${discurso.slug}.html`);
  writeFileSync(outPath, html, "utf8");
}

console.log(
  `[generate-social-previews] Generados ${discursos.length} HTML en dist/_social/discursos/.`
);

for (const visita of projectedVisitas) {
  const provinciaDir = path.join(SOCIAL_PROVINCIAS_DIR, visita.provinciaSlug);
  mkdirSync(provinciaDir, { recursive: true });
  const metaBlock = buildVisitaMetaBlock(visita);
  const html = HEAD_PRELUDE + metaBlock + TAIL_AFTER_END;
  const outPath = path.join(provinciaDir, `${visita.visitaSlug}.html`);
  writeFileSync(outPath, html, "utf8");
}

console.log(
  `[generate-social-previews] Generados ${projectedVisitas.length} HTML en dist/_social/provincias/.`
);

for (const actividad of projectedActividades) {
  const actividadDir = path.join(
    SOCIAL_SENADO_DIR,
    actividad.temaSlug,
    actividad.anio
  );
  mkdirSync(actividadDir, { recursive: true });
  const metaBlock = buildSenadoMetaBlock(actividad);
  const html = HEAD_PRELUDE + metaBlock + TAIL_AFTER_END;
  const outPath = path.join(actividadDir, `${actividad.actividadSlug}.html`);
  writeFileSync(outPath, html, "utf8");
}

console.log(
  `[generate-social-previews] Generados ${projectedActividades.length} HTML en dist/_social/senado/.`
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

const PROVINCIA_TAG_NEEDLES = [
  ...REQUIRED_TAG_NEEDLES,
  ["og:image:width", 'property="og:image:width"'],
  ["og:image:height", 'property="og:image:height"'],
];

const visitaIdentitiesData = projectedVisitas.map(
  (visita) => `${visita.provinciaSlug}/${visita.visitaSlug}`
);
const visitaArchivosGenerados = listProvinciaPreviewIdentities(
  SOCIAL_PROVINCIAS_DIR
);
const setVisitaArchivos = new Set(visitaArchivosGenerados);
const setVisitaIdentities = new Set(visitaIdentitiesData);

const visitasFaltantes = visitaIdentitiesData.filter(
  (identity) => !setVisitaArchivos.has(identity)
);
const visitasSobrantes = visitaArchivosGenerados.filter(
  (identity) => !setVisitaIdentities.has(identity)
);

if (visitasFaltantes.length > 0) {
  verificationFailed = true;
  console.error(
    `[generate-social-previews] Visitas sin HTML generado: ${visitasFaltantes.join(", ")}`
  );
}
if (visitasSobrantes.length > 0) {
  verificationFailed = true;
  console.error(
    `[generate-social-previews] Archivos provinciales sobrantes: ${visitasSobrantes.join(", ")}`
  );
}

for (const visita of projectedVisitas) {
  const identity = `${visita.provinciaSlug}/${visita.visitaSlug}`;
  const filePath = path.join(
    SOCIAL_PROVINCIAS_DIR,
    visita.provinciaSlug,
    `${visita.visitaSlug}.html`
  );
  const html = readFileSync(filePath, "utf8");

  for (const [label, needle] of PROVINCIA_TAG_NEEDLES) {
    const count = countSubstring(html, needle);
    if (count !== 1) {
      verificationFailed = true;
      console.error(
        `[generate-social-previews] ${identity}.html: se esperaba exactamente 1 "${label}", se encontraron ${count}.`
      );
    }
  }

  if (htmlHasForbiddenTokens(html)) {
    verificationFailed = true;
    console.error(
      `[generate-social-previews] ${identity}.html: contiene undefined, localhost, 127.0.0.1 o NaN.`
    );
  }

  const canonical = extractTaggedContent(html, 'rel="canonical"');
  const ogUrl = extractTaggedContent(html, 'property="og:url"');
  const ogImage = extractTaggedContent(html, 'property="og:image"');

  if (!isHttpsAbsoluteUrl(canonical) || canonical.endsWith("/")) {
    verificationFailed = true;
    console.error(
      `[generate-social-previews] ${identity}.html: canonical inválido (${canonical}).`
    );
  }
  if (!isHttpsAbsoluteUrl(ogUrl) || ogUrl.endsWith("/")) {
    verificationFailed = true;
    console.error(
      `[generate-social-previews] ${identity}.html: og:url inválido (${ogUrl}).`
    );
  }
  if (
    !isHttpsAbsoluteUrl(ogImage) ||
    ogImage.includes("undefined") ||
    ogImage.includes("localhost")
  ) {
    verificationFailed = true;
    console.error(
      `[generate-social-previews] ${identity}.html: og:image inválido (${ogImage}).`
    );
  }
}

const provinciaDirs = existsSync(SOCIAL_PROVINCIAS_DIR)
  ? readdirSync(SOCIAL_PROVINCIAS_DIR, { withFileTypes: true }).filter((entry) =>
      entry.isDirectory()
    ).length
  : 0;

console.log(
  `[generate-social-previews] Verificación: ${visitaIdentitiesData.length} visitas, ${visitaArchivosGenerados.length} HTML generados, ${visitasFaltantes.length} faltantes, ${visitasSobrantes.length} sobrantes, ${provinciaDirs} subdirectorios.`
);

const SENADO_TAG_NEEDLES = [
  ...REQUIRED_TAG_NEEDLES,
  ["og:image:width", 'property="og:image:width"'],
  ["og:image:height", 'property="og:image:height"'],
];

const senadoIdentitiesData = projectedActividades.map(
  (actividad) =>
    `${actividad.temaSlug}/${actividad.anio}/${actividad.actividadSlug}`
);
const senadoArchivosGenerados = listSenadoPreviewIdentities(SOCIAL_SENADO_DIR);
const setSenadoArchivos = new Set(senadoArchivosGenerados);
const setSenadoIdentities = new Set(senadoIdentitiesData);

const senadoFaltantes = senadoIdentitiesData.filter(
  (identity) => !setSenadoArchivos.has(identity)
);
const senadoSobrantes = senadoArchivosGenerados.filter(
  (identity) => !setSenadoIdentities.has(identity)
);

if (senadoFaltantes.length > 0) {
  verificationFailed = true;
  console.error(
    `[generate-social-previews] Actividades de Senado sin HTML generado: ${senadoFaltantes.join(", ")}`
  );
}
if (senadoSobrantes.length > 0) {
  verificationFailed = true;
  console.error(
    `[generate-social-previews] Archivos de Senado sobrantes: ${senadoSobrantes.join(", ")}`
  );
}

for (const actividad of projectedActividades) {
  const identity = `${actividad.temaSlug}/${actividad.anio}/${actividad.actividadSlug}`;
  const filePath = path.join(
    SOCIAL_SENADO_DIR,
    actividad.temaSlug,
    actividad.anio,
    `${actividad.actividadSlug}.html`
  );
  const html = readFileSync(filePath, "utf8");

  for (const [label, needle] of SENADO_TAG_NEEDLES) {
    const count = countSubstring(html, needle);
    if (count !== 1) {
      verificationFailed = true;
      console.error(
        `[generate-social-previews] ${identity}.html: se esperaba exactamente 1 "${label}", se encontraron ${count}.`
      );
    }
  }

  if (htmlHasForbiddenTokens(html)) {
    verificationFailed = true;
    console.error(
      `[generate-social-previews] ${identity}.html: contiene undefined, localhost, 127.0.0.1 o NaN.`
    );
  }

  const canonical = extractTaggedContent(html, 'rel="canonical"');
  const ogUrl = extractTaggedContent(html, 'property="og:url"');
  const ogImage = extractTaggedContent(html, 'property="og:image"');

  if (!isHttpsAbsoluteUrl(canonical) || canonical.endsWith("/")) {
    verificationFailed = true;
    console.error(
      `[generate-social-previews] ${identity}.html: canonical inválido (${canonical}).`
    );
  }
  if (!isHttpsAbsoluteUrl(ogUrl) || ogUrl.endsWith("/")) {
    verificationFailed = true;
    console.error(
      `[generate-social-previews] ${identity}.html: og:url inválido (${ogUrl}).`
    );
  }
  if (
    !isHttpsAbsoluteUrl(ogImage) ||
    ogImage.includes("undefined") ||
    ogImage.includes("localhost")
  ) {
    verificationFailed = true;
    console.error(
      `[generate-social-previews] ${identity}.html: og:image inválido (${ogImage}).`
    );
  }
}

const senadoDirs = countNestedDirectories(SOCIAL_SENADO_DIR);

console.log(
  `[generate-social-previews] Verificación: ${senadoIdentitiesData.length} actividades, ${senadoArchivosGenerados.length} HTML generados, ${senadoFaltantes.length} faltantes, ${senadoSobrantes.length} sobrantes, ${senadoDirs} subdirectorios.`
);

if (verificationFailed) {
  fail("La auto-verificación de los HTML generados falló (ver detalle arriba).");
}

console.log("[generate-social-previews] OK — todos los archivos pasaron la verificación.");
