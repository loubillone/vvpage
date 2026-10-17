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

- No instalar ni actualizar dependencias sin pedirlo.
- Cambios mínimos y con el estilo del archivo: componentes funcionales con arrow functions, CSS plano por componente en `src/css/<nombre>.css`, nombres en español.
- Los comentarios del proyecto explican el _porqué_ de decisiones (fuentes de datos, fases de migración). Mantener esa costumbre y actualizar comentarios que queden desactualizados por un cambio.
- Nunca leer, imprimir ni commitear valores de `.env`.
- Cuando la tarea solicitada sea únicamente de análisis, no crear ni modificar archivos, incluyendo documentación, salvo autorización expresa.
- Antes de implementar cambios, explicar brevemente qué archivos se modificarán y por qué. Trabajar de manera incremental, sin alterar funcionalidades ajenas a la tarea solicitada.

### Git

- Trabajar en ramas `feat/...` o `fix/...`.
- Antes de modificar cualquier archivo, comprobar la rama activa. Si estamos en `main`, consultar antes de realizar cambios.
- No ejecutar `git commit`, `git push`, `merge` ni `rebase` sin autorización expresa.
- No asumir que la integración será siempre por pull request: esperar indicación sobre cómo integrar la rama.
- Al finalizar cada tarea, informar qué archivos fueron modificados.

### Verificaciones y producción

- Ejecutar `npm run build` después de modificar código o datos que afecten la compilación.
- Indicar qué elementos deben verificarse visualmente en el navegador (página, sección, breakpoints).
- Un build exitoso no equivale a una comprobación visual.
- Diferenciar claramente qué se comprobó mediante código, mediante build y en el navegador; no afirmar una comprobación visual que no se hizo.
- No desplegar a producción sin autorización expresa.

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
- `fecha`: texto legible para mostrar ("Abril de 2024"). En Visitas Provinciales y Senado, respetar el formato que ya usa cada sección (la regla de Discursos está más abajo).
- `titulo`; imágenes como **public ID de Cloudinary** (`imagenPortada`, `imagenes[]`), no URLs.
- `descripcion` / `texto`: JSX (`<p>`, `<span className="vv-estilo-detalle">` para destacados, `<blockquote className="cita">` para citas textuales).

Particulares:

- `discursos.js`: `categoria` ∈ `Senado | Provincias | Varios` (deben coincidir con los filtros de `pages/Discursos.jsx`), `videoUrl` de YouTube, `descripcion` en texto plano (se usa como meta description). `id` es legado: no usarlo. `thumbnailPublicId` (opcional): public ID de Cloudinary de una miniatura propia, horizontal 16:9 (subirla a `tpa-web/discursos/`); agregarlo solo al discurso que lo necesite, el resto sigue con la miniatura de YouTube.
  **Formato de fechas en Discursos**
  - Mostrar públicamente las fechas con el formato `"Mes de año"` (ejemplo: `"Octubre de 2026"`).
  - Mantener `fechaISO` con la fecha exacta (`YYYY-MM-DD`) cuando se conozca.
  - Conservar `precisionFecha: "dia"` o `"mes"` según la precisión real.
  - Utilizar `fechaISO` para ordenar cronológicamente los discursos.
  - No mostrar el día en las tarjetas ni en las páginas de detalle, para mantener la uniformidad visual.
- `visitasProvincias.jsx`: objeto indexado por slug de provincia (`"buenos-aires"`, `cordoba`…) con `nombre` y `visitas[]`. Una visita puede tener `actividades[]` (cada una con `titulo`, `imagenes`, `descripcion`) en lugar de `imagenes`/`descripcion` directos. `lugar` opcional. `establecimientosVisitados: [ids]` referencia a `establecimientosProductivos.js` (no duplicar metadata).
- CABA no tiene entrada propia; se suma vía `JURISDICCIONES_EXTRA` en `utils/estadisticasRecorrido.js`.
- Una provincia nueva requiere además su entrada en `provinciasVisitadas`/`mapeoProvincias` de `MapaArgentina.jsx` (la clave debe coincidir con el SVG `public/argentina-map.svg`).
- Estadísticas (`estadisticasRecorrido.js`, `estadisticasProductivas.js`, `tiempoEnCargo.js`, `gestionSenado2025.js`) se **derivan** de los datos; no hardcodear resultados. Las constantes manuales (`VECES_A_CARGO_PRESIDENCIA`, etc.) se actualizan juntas con su fecha de corte.
- Victoria Villarruel asumió la Vicepresidencia el **10 de diciembre de 2023**. En `src/utils/tiempoEnCargo.js` la fecha correcta es `new Date(2023, 11, 10)`: los meses de JavaScript comienzan en 0, por lo que diciembre es 11. El error `new Date(2023, 12, 10)` (= 10/01/2024, un mes menos en el contador) ya fue corregido y no debe volver a introducirse.

### Verificación histórica y editorial

Aplica a discursos, visitas provinciales y actividades del Senado:

- No inventar fechas, declaraciones, acontecimientos ni información histórica.
- Priorizar fuentes oficiales y verificables.
- Diferenciar la fecha de publicación de un video de la fecha real del acontecimiento.
- No atribuir declaraciones a Victoria Villarruel sin verificar su contenido.
- Si no se puede consultar el video original o faltan datos importantes, preguntar antes de incorporar la información.
- Mantener un estilo institucional e informativo, coherente con el contenido existente.
- Citar las fuentes utilizadas al informar sobre una actualización.

### Checklist al agregar contenido

1. Entrada en el archivo de datos con el esquema de arriba.
2. Imágenes subidas a Cloudinary bajo `tpa-web/<seccion>/...`.
3. URL nueva en `public/sitemap.xml` (se mantiene a mano, en el bloque de su sección).
4. `npm run build` y verificar que el script de previews no falle (valida slugs duplicados, campos y archivos faltantes/sobrantes).

## Imágenes

- Cloudinary (cloud `dwb5tmtqg`): usar siempre `getCloudinaryUrl(publicId, preset)` de `src/utils/cloudinary.js`. Presets: `card` (800, 4:3 recortado), `detail` (1400 sin recorte), `bio` (1000 sin recorte), `discurso` (960 sin recorte, para miniaturas propias de discursos en `DiscursoCard`; el encuadre 16:9 lo da la card), `original`. Si hace falta otro tamaño, agregar un preset ahí en vez de armar URLs a mano.
- Galería, Celtyv, Trayectoria, Navegador, Footer e íconos siguen con `.webp` locales en `src/assets/img/` (importados vía Vite). Lo nuevo va a Cloudinary.
- Cards: `loading="lazy" decoding="async"`. Imagen principal de un detalle: `fetchpriority="high"`. Patrón de detalle: imagen de fondo difuminada (`alt=""`, `aria-hidden`) + imagen real.
- Thumbnails de discursos (`DiscursoCard.jsx`): si el discurso tiene `thumbnailPublicId` → `getCloudinaryUrl(thumbnailPublicId, "discurso")`; si no → fallback a `getYouTubeThumbnail(videoUrl)` (hqdefault) de `src/utils/youtube.js`.

## SEO y social previews

- Cada página define con `react-helmet-async`: `<title>`, `meta description`, `link canonical` usando `import.meta.env.VITE_SITE_URL`, y un `<h1>` (a menudo `.visually-hidden`).
- Open Graph por URL lo generan solo los HTML de `dist/_social/` (discursos, visitas y actividades de Senado). `.htaccess` los sirve con rewrite interno; el resto de las rutas usan el OG genérico de `index.html`.
- Imagen de las previews de discursos (`og:image` y `twitter:image`, en `resolveImage()` del script): con `thumbnailPublicId` → Cloudinary `w_1200,h_675,c_fill,g_auto,f_jpg,q_auto` (1200×675 para no recortar una imagen 16:9; JPEG para compatibilidad con WhatsApp/Facebook/X); sin él → thumbnail de YouTube (480×360); sin video válido → `/og_vv.jpg`. Siempre URLs absolutas https. El build falla si `thumbnailPublicId` existe pero está vacío. Visitas y Senado usan otro transform (`w_1200,h_630`, desde `imagenPortada`).
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

- `components/GaleriaDetalle.jsx`: hooks después de un `return` temprano (rules-of-hooks) y `imagenIndex` no se resetea al cambiar de galería (puede quedar `src` indefinido al pasar a una con menos fotos).
- Código sin uso: `FotosIndex.jsx`, `NuestroCompromiso.jsx` (+ su CSS), `home.css`, `malvinas.css`, `utils/estadisticasProductivas.js` (no se consume), dependencias `axios` y `animate.css`, varias imágenes en `src/assets/img/`.
