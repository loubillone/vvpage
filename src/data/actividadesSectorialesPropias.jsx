// Actividades del sector productivo con página propia
// (/industria-produccion/:actividadSlug).
//
// Son las actividades de actividadesSectoriales.js que NO se hicieron en el
// marco de una visita provincial (p. ej. reuniones en el Senado): no tienen
// una visita de visitasProvincias.jsx de la que tomar fecha, descripción y
// galería, así que esos datos viven acá. No se suman a las visitas
// provinciales, al mapa ni a Últimas visitas.
//
// Indexado por el mismo id del catálogo (que es también el slug de la URL:
// estable, no cambiarlo una vez publicado). Nombre, categoría, sector y
// portada se siguen leyendo de actividadesSectoriales.js: no duplicarlos.
//
// Campos: `fechaISO` / `precisionFecha` / `fecha` (mismo criterio que las
// visitas), `lugar`, `ubicacion` (opcional), `imagenes[]` (public IDs de
// Cloudinary), `descripcion` (JSX) y `descripcionSEO` (texto plano para la
// meta description). Los valida validarIndiceProduccion en el build.
export const actividadesSectorialesPropias = {
  "reunion-capa-2026": {
    fechaISO: "2026-11-03",
    precisionFecha: "dia",
    fecha: "Noviembre de 2026",
    lugar: "Senado de la Nación",
    ubicacion: "Ciudad Autónoma de Buenos Aires",
    imagenes: [
      "tpa-web/provincias/bsas/caba/capa/senado-capa-1.jpg",
      "tpa-web/provincias/bsas/caba/capa/senado-capa-2.jpg",
    ],
    descripcionSEO:
      "Victoria Villarruel se reunió con la Cámara Argentina del Papel y Afines (CAPA) en el Senado para conocer los desafíos de la industria del papel y cartón.",
    descripcion: (
      <>
        <p>
          La vicepresidente de la Nación,{" "}
          <span className="vv-estilo-detalle">Victoria Villarruel</span>,
          mantuvo una reunión en el{" "}
          <span className="vv-estilo-detalle">Senado de la Nación</span> con
          representantes de la{" "}
          <span className="vv-estilo-detalle">
            Cámara Argentina del Papel y Afines (CAPA)
          </span>
          , con el objetivo de conocer la realidad del sector, sus principales
          desafíos y las problemáticas que enfrenta una actividad fundamental
          para la industria nacional.
        </p>
        <p>
          Durante el encuentro se abordaron distintos aspectos de la{" "}
          <span className="vv-estilo-detalle">
            cadena productiva y comercial del papel
          </span>
          , desde su distribución y comercialización hasta la fabricación de
          productos derivados, como el cartón corrugado y los estuches
          utilizados en diversas industrias. También se analizaron las
          necesidades de importación de determinados tipos de papel e insumos.
        </p>
        <p>
          El intercambio permitió profundizar en las dificultades que
          atraviesan las empresas del sector, particularmente en materia de{" "}
          <span className="vv-estilo-detalle">
            importaciones, infraestructura y carga impositiva
          </span>
          , así como en su evolución y perspectivas de desarrollo. La reunión
          formó parte de una agenda de diálogo con los sectores productivos,
          orientada a conocer sus necesidades y los desafíos que enfrentan para
          producir y generar empleo en la Argentina.
        </p>
      </>
    ),
  },
  "reunion-monapy-2026": {
    fechaISO: "2026-06-18",
    precisionFecha: "dia",
    fecha: "Junio de 2026",
    lugar: "Senado de la Nación",
    ubicacion: "Ciudad Autónoma de Buenos Aires",
    imagenes: [
      "tpa-web/provincias/bsas/caba/MONAPY/senado-monapy-1.jpg",
      "tpa-web/provincias/bsas/caba/MONAPY/senado-monapy-2.jpg",
      "tpa-web/provincias/bsas/caba/MONAPY/senado-monapy-3.jpg",
    ],
    descripcionSEO:
      "Victoria Villarruel recibió en el Senado a autoridades del Movimiento Nacional PyME (MONAPY) para conocer la situación de las pequeñas y medianas empresas argentinas.",
    descripcion: (
      <>
        <p>
          La vicepresidente de la Nación,{" "}
          <span className="vv-estilo-detalle">Victoria Villarruel</span>,
          recibió en el{" "}
          <span className="vv-estilo-detalle">Senado de la Nación</span> a
          autoridades del{" "}
          <span className="vv-estilo-detalle">
            Movimiento Nacional PyME (MONAPY)
          </span>
          , en un encuentro destinado a conocer las dificultades y obstáculos
          que enfrentan las pequeñas y medianas empresas argentinas, así como
          los desafíos para su desarrollo y sostenimiento.
        </p>
        <p>
          Durante la reunión se abordó la situación del{" "}
          <span className="vv-estilo-detalle">sector PyME</span>, fundamental
          para la economía nacional por su contribución a la producción, la
          generación de empleo y la inserción laboral en todo el territorio
          argentino. Entre las principales preocupaciones se destacó la{" "}
          <span className="vv-estilo-detalle">
            caída de la actividad y el cierre de empresas
          </span>
          , en un contexto que afecta especialmente a los pequeños y medianos
          emprendimientos.
        </p>
        <p>
          El encuentro permitió escuchar las necesidades de quienes emprenden,
          producen y generan puestos de trabajo, y reafirmar la importancia de{" "}
          <span className="vv-estilo-detalle">
            acompañar y fortalecer a las PyMEs argentinas
          </span>{" "}
          como motor del desarrollo económico y productivo del país.
        </p>
      </>
    ),
  },
};
