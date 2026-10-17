# CLAUDE.md — Todo por Argentina (vvpage)

Sitio institucional sobre Victoria Villarruel publicado en https://todoporargentina.com.ar/.
SPA React 18 + Vite 4, sin backend. Todo el contenido vive en archivos de datos dentro de `src/data/`.
Idioma del código, comentarios, commits y UI: **español rioplatense** ("Conocé", "Podés").

## Comandos

- `npm run dev` — servidor de desarrollo.
- `npm run build` — `vite build` **y luego** `node scripts/generate-social-previews.mjs`. Nunca correr solo `vite build` para deploy: faltarían los HTML de `dist/_social/`.
- `npm run lint` — hoy falla (~160 problemas preexistentes, la mayoría `react/no-unescaped-entities`, `no-unused-vars`, `react/prop-types`). No introducir problemas nuevos en los archivos que se toquen.
- No hay tests automatizados.

## Reglas de trabajo

- No hacer commit ni push salvo pedido explícito. Trabajar en rama `feat/...` o `fix/...` (el flujo es PR hacia `main`).
- No instalar ni actualizar dependencias sin pedirlo.
- Cambios mínimos y con el estilo del archivo: componentes funcionales con arrow functions, CSS plano por componente en `src/css/<nombre>.css`, nombres en español.
- Los comentarios del proyecto explican el _porqué_ de decisiones (fuentes de datos, fases de migración). Mantener esa costumbre y actualizar comentarios que queden desactualizados por un cambio.
- Nunca leer, imprimir ni commitear valores de `.env`.
- Antes de modificar cualquier archivo, comprobar la rama activa de Git. Si estamos en `main`, consultar antes de realizar cambios.
- Cuando la tarea solicitada sea únicamente de análisis, no crear ni modificar archivos, incluyendo documentación, salvo autorización expresa.
- Antes de implementar cambios, explicar brevemente qué archivos se modificarán y por qué. Trabajar de manera incremental, sin alterar funcionalidades ajenas a la tarea solicitada.

## Arquitectura

```
index.html                 Meta base + bloque ROUTE_META_START/END (lo reemplaza el script de previews)
src/main.jsx               ReactDOM + HelmetProvider + bootstrap.min.css
src/App.jsx                Importa app.css (estilos globales: fondo, .cita, .visually-hidden)
src/router/AppRouter.jsx   Todas las rutas + Navegador, Footer, ScrollToTop, AnalyticsTracker, CookieBanner
src/pages/                 Una página por ruta (Helmet con title/description/canonical)
src/components/            Secciones y cards reutilizables
src/data/                  Contenido (fuente de verdad)
src/utils/                 Cloudinary, YouTube, analytics/consent, estadísticas derivadas
scripts/generate-social-previews.mjs   Post-build: HTML estáticos con Open Graph
public/                    .htaccess, sitemap.xml, robots.txt, argentina-map.svg, og_vv.jpg, logoVV.png
```

### Rutas

| Ruta                                           | Componente                                                                                 | Datos                                       |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------- |
| `/`                                            | `Home` (FlyerHome, VictoriaPresentacion, VictoriaEnNumeros, UltimasVisitas, MapaArgentina) | visitasProvincias, utils                    |
| `/biografia`                                   | `Biografia` → `VictoriaBio`                                                                | inline + Cloudinary                         |
| `/celtyv`                                      | `components/Celtyv`                                                                        | inline + imágenes locales                   |
| `/trayectoria`                                 | `Trayectoria` (imagen timeline)                                                            | local                                       |
| `/senado`                                      | redirige a `/senado/malvinas`                                                              |                                             |
| `/senado/:tema` → `/:anio` → `/:actividadSlug` | `Senado`/`SenadoTemas`, `SenadoAnio`, `SenadoActividadDetalle`                             | `senadoTemas.jsx`                           |
| `/provincias/:slug` → `/:visitaSlug`           | `ProvinciaDetalle`, `VisitaDetalle`                                                        | `visitasProvincias.jsx`                     |
| `/provincia/...`                               | redirect legacy (también 301 en `.htaccess`)                                               |                                             |
| `/discursos` → `/:discursoSlug`                | `Discursos`, `DiscursoDetalle`                                                             | `discursos.js`                              |
| `/galeria` → `/:categoria`                     | `Galeria`/`GaleriaVisor`, `components/GaleriaDetalle` (fullscreen, sin Footer)             | inline en GaleriaDetalle + imágenes locales |
| `/contacto`                                    | `Contacto` (EmailJS + SweetAlert2)                                                         | env                                         |
| `/privacidad`                                  | `Privacidad`                                                                               |                                             |

Temas de Senado válidos: `malvinas`, `victimasDelTerrorismo` (camelCase, ya indexado: no renombrar).
Al agregar una ruta/tema nuevo, actualizar también: `Navegador.jsx`, `Footer.jsx`, `seoData`/`h1Map` en `pages/Senado.jsx`, `BAJADA_POR_TEMA` en `SenadoTemas.jsx` y `public/sitemap.xml`.

## Datos (convenciones obligatorias)

Esquema común a `discursos.js`, `senadoTemas.jsx` y `visitasProvincias.jsx`:

- `slug`: estable y manual, nunca derivado del título; incluye el año (`azul-2024`). **No cambiar slugs publicados** (rompen URLs, sitemap y previews).
- `fechaISO`: `"YYYY-MM"` o `"YYYY-MM-DD"` según la precisión real. Es lo que se usa para ordenar y agrupar por año. No inventar días.
- `precisionFecha`: `"mes"` o `"dia"`, coherente con `fechaISO`.
- `fecha`: texto legible para mostrar ("Abril de 2024").
- `titulo`; imágenes como **public ID de Cloudinary** (`imagenPortada`, `imagenes[]`), no URLs.
- `descripcion` / `texto`: JSX (`<p>`, `<span className="vv-estilo-detalle">` para destacados, `<blockquote className="cita">` para citas textuales).

Particulares:

- `discursos.js`: `categoria` ∈ `Senado | Provincias | Varios` (deben coincidir con los filtros de `pages/Discursos.jsx`), `videoUrl` de YouTube, `descripcion` en texto plano (se usa como meta description). `id` es legado: no usarlo.
- `visitasProvincias.jsx`: objeto indexado por slug de provincia (`"buenos-aires"`, `cordoba`…) con `nombre` y `visitas[]`. Una visita puede tener `actividades[]` (cada una con `titulo`, `imagenes`, `descripcion`) en lugar de `imagenes`/`descripcion` directos. `lugar` opcional. `establecimientosVisitados: [ids]` referencia a `establecimientosProductivos.js` (no duplicar metadata).
- CABA no tiene entrada propia; se suma vía `JURISDICCIONES_EXTRA` en `utils/estadisticasRecorrido.js`.
- Una provincia nueva requiere además su entrada en `provinciasVisitadas`/`mapeoProvincias` de `MapaArgentina.jsx` (la clave debe coincidir con el SVG `public/argentina-map.svg`).
- Estadísticas (`estadisticasRecorrido.js`, `estadisticasProductivas.js`, `tiempoEnCargo.js`, `gestionSenado2025.js`) se **derivan** de los datos; no hardcodear resultados. Las constantes manuales (`VECES_A_CARGO_PRESIDENCIA`, etc.) se actualizan juntas con su fecha de corte.

### Checklist al agregar contenido

1. Entrada en el archivo de datos con el esquema de arriba.
2. Imágenes subidas a Cloudinary bajo `tpa-web/<seccion>/...`.
3. URL nueva en `public/sitemap.xml` (se mantiene a mano, en el bloque de su sección).
4. `npm run build` y verificar que el script de previews no falle (valida slugs duplicados, campos y archivos faltantes/sobrantes).

## Imágenes

- Cloudinary (cloud `dwb5tmtqg`): usar siempre `getCloudinaryUrl(publicId, preset)` de `src/utils/cloudinary.js`. Presets: `card` (800, 4:3 recortado), `detail` (1400 sin recorte), `bio` (1000 sin recorte), `original`. Si hace falta otro tamaño, agregar un preset ahí en vez de armar URLs a mano.
- Galería, Celtyv, Trayectoria, Navegador, Footer e íconos siguen con `.webp` locales en `src/assets/img/` (importados vía Vite). Lo nuevo va a Cloudinary.
- Cards: `loading="lazy" decoding="async"`. Imagen principal de un detalle: `fetchpriority="high"`. Patrón de detalle: imagen de fondo difuminada (`alt=""`, `aria-hidden`) + imagen real.
- Thumbnails de discursos: `getYouTubeThumbnail` (hqdefault) en `src/utils/youtube.js`.

## SEO y social previews

- Cada página define con `react-helmet-async`: `<title>`, `meta description`, `link canonical` usando `import.meta.env.VITE_SITE_URL`, y un `<h1>` (a menudo `.visually-hidden`).
- Open Graph por URL lo generan solo los HTML de `dist/_social/` (discursos, visitas y actividades de Senado). `.htaccess` los sirve con rewrite interno; el resto de las rutas usan el OG genérico de `index.html`.
- No eliminar ni duplicar los comentarios `<!-- ROUTE_META_START -->` / `<!-- ROUTE_META_END -->` de `index.html`: el script aborta si no hay exactamente uno de cada.
- Las URLs canónicas de detalle van **sin** barra final.

## Despliegue

- Hosting Apache (ver `public/.htaccess`: redirects 301 legacy, normalización de slash, rewrite a `_social/` y fallback SPA a `index.html`). Se sube el contenido de `dist/`.
- Variables de entorno (`.env`, ignorado por git): `VITE_SITE_URL`, `VITE_SITE_NAME`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`, `VITE_GA_MEASUREMENT_ID`. El script de previews exige `VITE_SITE_URL`.

## Analytics y privacidad

- GA4 solo en producción, solo con consentimiento (`utils/consent.js`, clave `tpa_analytics_consent` en localStorage). `AnalyticsTracker` envía `page_view` manual por cambio de ruta; `trackEvent` para eventos (p. ej. `share`).
- Si se agrega un servicio externo nuevo, actualizar la lista en `pages/Privacidad.jsx`.

## Estilos

- Bootstrap 5 + react-bootstrap (Navbar, Carousel, Container, Button, Form). Íconos Font Awesome 4 vía script en `index.html` (`fa fa-*`).
- Fuentes locales Raleway/Montserrat (TTF) con nombres `"raleway-regular"`, `"raleway-bold"`, `"raleway-semibold"`, `"monterrat-regular"` (sic). Azul institucional `#0037a0`.
- Breakpoints habituales: `max-width: 480px`, `481–767px`, `768–1024px`. Respetar `prefers-reduced-motion` en animaciones nuevas.

## Problemas conocidos (no "arreglar" de pasada sin avisar)

- `utils/tiempoEnCargo.js`: `new Date(2023, 12, 10)` es 10/01/2024 (mes 0-indexado); el cálculo de tiempo en el cargo queda corrido un mes.
- `components/GaleriaDetalle.jsx`: hooks después de un `return` temprano (rules-of-hooks) y `imagenIndex` no se resetea al cambiar de galería (puede quedar `src` indefinido al pasar a una con menos fotos).
- Código sin uso: `FotosIndex.jsx`, `NuestroCompromiso.jsx` (+ su CSS), `home.css`, `malvinas.css`, `utils/estadisticasProductivas.js` (no se consume), dependencias `axios` y `animate.css`, varias imágenes en `src/assets/img/`.
