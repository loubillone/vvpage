// Datos de la sección Discursos: array plano (sin agrupar estructuralmente
// por año). El año de cada discurso se deriva siempre desde fechaISO en el
// componente que los consume (mismo criterio que ya usan SenadoAnio.jsx y
// SenadoActividadDetalle.jsx con senadoTemas.jsx), nunca se hardcodea acá.
//
// Convenciones (iguales a senadoTemas.jsx / visitasProvincias.jsx):
// - fechaISO: fecha en formato "YYYY-MM" o "YYYY-MM-DD", según la precisión
//   real disponible. Hoy los 29 discursos solo tienen precisión de mes.
// - precisionFecha: "mes" o "dia", según fechaISO.
// - fecha: representación legible en español (ej. "Abril de 2024"), pensada
//   para mostrarse en pantalla. NO es la que usan VideoGrid.jsx/VideoModal.jsx
//   para parsear (ver el comentario en Discursos.jsx sobre el remapeo).
//
// slug: identificador estable y permanente de cada discurso, asignado a
// mano (no generado dinámicamente desde el título) para que no cambie si el
// título se corrige más adelante. Es el identificador que se usará para
// /discursos/:discursoSlug en una fase posterior. Varios discursos comparten
// título entre años (ej. "Homenaje a Víctimas del Terrorismo" en 2024 y en
// 2025): el año en el slug evita la colisión.
//
// id: identificador legado, heredado de la estructura anterior (se
// reiniciaba en 1 dentro de cada año en el objeto `discursos` de
// Discursos.jsx). NO es único a nivel global y NO debe usarse como base de
// ninguna URL. Se conserva únicamente por compatibilidad transitoria con
// VideoGrid.jsx (que hoy usa video.id como key de lista). El identificador
// estable de cada discurso es, desde ahora, el slug.
const discursos = [
  // ---------------------------------------------------------------------
  // 2024
  // ---------------------------------------------------------------------
  {
    slug: "diploma-honor-veteranos-malvinas-2024",
    titulo: "Diploma de Honor a Veteranos de Malvinas",
    fechaISO: "2024-04",
    precisionFecha: "mes",
    fecha: "Abril de 2024",
    categoria: "Senado",
    descripcion:
      "Ceremonia de reconocimiento a veteranos de la Guerra de Malvinas mediante la entrega de diplomas de honor, destacando su servicio, compromiso y contribución a la historia nacional.",
    videoUrl: "https://www.youtube.com/watch?v=u8KeWw8w25E",
    id: 1,
  },
  {
    slug: "mesa-disertacion-educacion-2024",
    titulo: "Mesa de disertación sobre educación",
    fechaISO: "2024-09",
    precisionFecha: "mes",
    fecha: "Septiembre de 2024",
    categoria: "Senado",
    descripcion:
      "Espacio de debate sobre el rol de la educación en el desarrollo del país, abordando su importancia como herramienta clave para el progreso, la libertad y el crecimiento social.",
    videoUrl: "https://www.youtube.com/watch?v=nVsSs5gFIAs",
    id: 2,
  },
  {
    slug: "homenaje-victimas-terrorismo-2024",
    titulo: "Homenaje a Víctimas del Terrorismo",
    fechaISO: "2024-08",
    precisionFecha: "mes",
    fecha: "Agosto de 2024",
    categoria: "Senado",
    descripcion:
      "Acto realizado en el Senado en conmemoración de las víctimas del terrorismo.",
    videoUrl: "https://youtu.be/lKyikX4_ofw?si=Q-mX2mGvlyfXJH0D",
    id: 3,
  },
  {
    slug: "mencion-honor-hospital-militar-2024",
    titulo: "Mención de Honor al Hospital Militar",
    fechaISO: "2024-10",
    precisionFecha: "mes",
    fecha: "Octubre de 2024",
    categoria: "Senado",
    descripcion:
      "Ceremonia de entrega de una distinción al Hospital Militar Central en reconocimiento a su trayectoria, compromiso profesional y servicio en el sistema de salud argentino.",
    videoUrl: "https://www.youtube.com/watch?v=PCCRWQC-jl4",
    id: 4,
  },
  {
    slug: "dia-nacional-iglesias-evangelicas-2024",
    titulo: "Día de Nacional de las Iglesias Evangélicas",
    fechaISO: "2024-11",
    precisionFecha: "mes",
    fecha: "Noviembre de 2024",
    categoria: "Varios",
    descripcion:
      "Reconocimiento al rol de las iglesias evangélicas en la sociedad argentina, destacando su aporte en el ámbito social, espiritual y comunitario.",
    videoUrl: "https://www.youtube.com/watch?v=VccxlldDSmE",
    id: 5,
  },
  {
    slug: "tratado-paz-argentina-chile-40-anios-2024",
    titulo: "40 años del Tratado de Paz y Argentina - Chile",
    fechaISO: "2024-04",
    precisionFecha: "mes",
    fecha: "Abril de 2024",
    categoria: "Senado",
    descripcion:
      "40° aniversario del Tratado de Paz y Amistad entre Argentina y Chile, destacando su importancia histórica para la paz, la cooperación y la integración regional.",
    videoUrl: "https://www.youtube.com/watch?v=hvteNGBG1Lw",
    id: 6,
  },
  {
    slug: "yapeyu-246-aniversario-natalicio-san-martin-2024",
    titulo:
      "Yapeyú - 246° aniversario del natalicio del General José de San Martín",
    fechaISO: "2024-02",
    precisionFecha: "mes",
    fecha: "Febrero de 2024",
    categoria: "Provincias",
    descripcion:
      "Celebración del 246° aniversario del natalicio del General José de San Martín en Yapeyú, destacando su papel en la historia argentina.",
    videoUrl: "https://youtu.be/y7lllam9TjE",
    id: 7,
  },
  {
    slug: "almuerzo-dia-trabajador-uthgra-2024",
    titulo: "1° de Mayo - Almuerzo día del trabajador en UTHGRA",
    fechaISO: "2024-05",
    precisionFecha: "mes",
    fecha: "Mayo de 2024",
    categoria: "Varios",
    descripcion:
      "Victoria participó del almuerzo por el día del trabajador organizado por el sindicato UTHGRA.",
    videoUrl: "https://youtu.be/jJc920ysjaQ",
    id: 8,
  },
  {
    slug: "mendoza-almuerzo-bodegas-vendimia-2024",
    titulo:
      "Mendoza - Almuerzo en Bodegas de Argentina por Fiesta de la Vendimia",
    fechaISO: "2024-03",
    precisionFecha: "mes",
    fecha: "Marzo de 2024",
    categoria: "Provincias",
    descripcion:
      "Villarruel participó del almuerzo en Bodegas de Argentina, una de las actividades más importantes de los Festejos por la Fiesta de la Vendimia 2024.",
    videoUrl: "https://youtu.be/LRnlUVxvwi4",
    id: 9,
  },
  {
    slug: "visita-colegio-militar-nacion-2024",
    titulo: "Visita al Colegio Militar de la Nación",
    fechaISO: "2024-06",
    precisionFecha: "mes",
    fecha: "Junio de 2024",
    categoria: "Varios",
    descripcion:
      "Villarruel visitó el Colegio Militar de la Nación, el Jefe del Ejército Grl Presti, el Director del CMN Cnl My Liberatori y su plana mayor la invitaron a conocerlo y almorzar con los cadetes.",
    videoUrl: "https://youtu.be/tQ74cVU9tQI",
    id: 10,
  },
  {
    slug: "conferencia-uca-2024",
    titulo: "Conferencia en la UCA",
    fechaISO: "2024-05",
    precisionFecha: "mes",
    fecha: "Mayo de 2024",
    categoria: "Varios",
    descripcion:
      "Villarruel brindó una conferencia el jueves 9 de mayo en el Campus Puerto Madero en el marco de la Diplomatura en Liderazgo Humanista, dirigida por el Mg. Emilio Pintos.",
    videoUrl: "https://youtu.be/sibAQ4IUnVU?si=tztuA5D7JglgBPkY",
    id: 11,
  },
  {
    slug: "forum-nacional-agronegocios-2024",
    titulo: "XIII Fórum Nacional de Agronegocios",
    fechaISO: "2024-11",
    precisionFecha: "mes",
    fecha: "Noviembre de 2024",
    categoria: "Varios",
    descripcion:
      "Victoria Villarruel dejó un mensaje a los presentes en el XIII Fórum Nacional de Agronegocios LIDE Argentina.",
    videoUrl: "https://youtu.be/NxR-OwvWnZs?si=HhZkdODOfswA---Y",
    id: 12,
  },

  // ---------------------------------------------------------------------
  // 2025
  // ---------------------------------------------------------------------
  {
    slug: "coloquio-turquia-2025",
    titulo: "Coloquio sobre Turquía",
    fechaISO: "2025-11",
    precisionFecha: "mes",
    fecha: "Noviembre de 2025",
    categoria: "Senado",
    descripcion:
      "Participación del coloquio internacional dedicado a analizar el rol estratégico de Türkiye en el escenario global.",
    videoUrl: "https://www.youtube.com/watch?v=J3_Em8E8ryQ",
    id: 1,
  },
  {
    slug: "corrientes-homenaje-cabral-2025",
    titulo: "Corrientes - Homenaje a Cabral",
    fechaISO: "2025-08",
    precisionFecha: "mes",
    fecha: "Agosto de 2025",
    categoria: "Provincias",
    descripcion:
      "Ceremonia de traslado y homenaje a los restos del sargento Juan Bautista Cabral, héroe del Combate de San Lorenzo.",
    videoUrl: "https://youtu.be/lESpMl-vtEQ",
    id: 2,
  },
  {
    slug: "dia-heroe-formoseno-2025",
    titulo: "Día del Héroe Formoseño",
    fechaISO: "2025-10",
    precisionFecha: "mes",
    fecha: "Octubre de 2025",
    categoria: "Provincias",
    descripcion:
      "Homenaje a los policías caídos en defensa de las instituciones durante el ataque al Regimiento de Infantería de Monte 29 en 1975.",
    videoUrl: "https://www.youtube.com/watch?v=DfvB7XWvXUo",
    id: 3,
  },
  {
    slug: "homenaje-victimas-terrorismo-2025",
    titulo: "Homenaje a Víctimas del Terrorismo",
    fechaISO: "2025-09",
    precisionFecha: "mes",
    fecha: "Septiembre de 2025",
    categoria: "Senado",
    descripcion:
      "Acto conmemorativo realizado en el Senado en el marco del Día Internacional de las Víctimas del Terrorismo.",
    videoUrl: "https://www.youtube.com/watch?v=HER2OLIv1Vc",
    id: 4,
  },
  {
    slug: "malvinas-epopeya-2025",
    titulo: "Malvinas - Epopeya",
    fechaISO: "2025-04",
    precisionFecha: "mes",
    fecha: "Abril de 2025",
    categoria: "Senado",
    descripcion:
      "Evento dedicado a recordar la Guerra de Malvinas como parte fundamental de la historia argentina.",
    videoUrl: "https://www.youtube.com/watch?v=wvaQF8gSrx0",
    id: 5,
  },
  {
    slug: "heroes-manchala-2025",
    titulo: "Héroes de Manchala",
    fechaISO: "2025-07",
    precisionFecha: "mes",
    fecha: "Julio de 2025",
    categoria: "Senado",
    descripcion:
      "Ceremonia en el Senado en reconocimiento a los soldados que participaron en el Combate de Manchalá en 1975.",
    videoUrl: "https://www.youtube.com/watch?v=RYOqc7XKhyA",
    id: 6,
  },
  {
    slug: "dia-nino-por-nacer-2025",
    titulo: "Día del Niño por Nacer",
    fechaISO: "2025-03",
    precisionFecha: "mes",
    fecha: "Marzo de 2025",
    categoria: "Senado",
    descripcion:
      "Actividad institucional en conmemoración del Día del Niño por Nacer, donde se abordaron temas relacionados con la vida, la familia y el valor de la maternidad.",
    videoUrl: "https://www.youtube.com/watch?v=jA9jWGZTpAg",
    id: 7,
  },
  {
    slug: "pandemia-5-anios-2025",
    titulo: "A 5 años de la pandemia",
    fechaISO: "2025-12",
    precisionFecha: "mes",
    fecha: "Diciembre de 2025",
    categoria: "Senado",
    descripcion:
      "Mensaje institucional en el que la vicepresidente reflexiona sobre el impacto social, económico y humano de la pandemia de COVID-19.",
    videoUrl: "https://www.youtube.com/watch?v=kwQtl0CCZBY",
    id: 8,
  },
  {
    slug: "premios-labor-ddhh-2025",
    titulo: "Premios Labor DDHH",
    fechaISO: "2025-12",
    precisionFecha: "mes",
    fecha: "Diciembre de 2025",
    categoria: "Senado",
    descripcion:
      "Ceremonia realizada en el Senado de la Nación donde se entregaron los Premios Derechos Humanos 2025 a organizaciones, fundaciones y personas destacadas por su compromiso social y la defensa de los derechos humanos.",
    videoUrl: "https://www.youtube.com/watch?v=N6kCpgyfeSY",
    id: 9,
  },
  {
    slug: "dia-veterano-ushuaia-2025",
    titulo: "Día del Veterano en Ushuaia",
    fechaISO: "2025-04",
    precisionFecha: "mes",
    fecha: "Abril de 2025",
    categoria: "Provincias",
    descripcion:
      "Acto conmemorativo realizado en Ushuaia en homenaje a los veteranos y caídos en la Guerra de Malvinas.",
    videoUrl: "https://www.youtube.com/watch?v=2XbWj_LSVRU",
    id: 10,
  },
  {
    slug: "chubut-90-aniversario-rio-mayo-2025",
    titulo: "Chubut - 90° aniversario de Río Mayo",
    fechaISO: "2025-08",
    precisionFecha: "mes",
    fecha: "Agosto de 2025",
    categoria: "Provincias",
    descripcion:
      "Durante la ceremonia, Villarruel recordó con emoción su niñez en la localidad de Río Mayo.",
    videoUrl: "https://youtu.be/B_THMuajGK0",
    id: 11,
  },
  {
    slug: "disertacion-usal-2025",
    titulo: "Disertación en la USAL",
    fechaISO: "2025-09",
    precisionFecha: "mes",
    fecha: "Septiembre de 2025",
    categoria: "Varios",
    descripcion:
      "Villarruel brindó una disertación titulada “La política como servicio al bien común desde la vivencia personal” ante estudiantes, docentes y autoridades.",
    videoUrl: "https://youtu.be/AV6PgnsRbTY",
    id: 12,
  },
  {
    slug: "reunion-comunidad-iberoamericana-madrid-2025",
    titulo: "Reunión Comunidad Iberoamericana (Madrid)",
    fechaISO: "2025-12",
    precisionFecha: "mes",
    fecha: "Diciembre de 2025",
    categoria: "Varios",
    descripcion:
      " Victoria Villarruel, participó este 5 de diciembre de 2025 en la Reunión de Presidentes de Parlamentos de Países de la Comunidad Iberoamericana.",
    videoUrl: "https://youtu.be/AvOFsP8AjIo",
    id: 13,
  },

  // ---------------------------------------------------------------------
  // 2026
  // ---------------------------------------------------------------------
  {
    slug: "dia-veterano-caidos-malvinas-chivilcoy-2026",
    titulo:
      "2 De Abril - Día del Veterano y de los Caídos en la Guerra de Malvinas",
    fechaISO: "2026-04",
    precisionFecha: "mes",
    fecha: "Abril de 2026",
    categoria: "Provincias",
    descripcion:
      "Victoria Villarruel participó en el acto conmemorativo del 2 de abril, Día del Veterano y de los Caídos en la Guerra de Malvinas, realizado en Chivilcoy, Provincia de Buenos Aires.",
    videoUrl: "https://youtu.be/LYZkWdFRGg0",
    id: 1,
  },
  {
    slug: "reconocimiento-conservacion-restauracion-senado-2026",
    titulo:
      "Reconocimiento al depto de conservación y restauración del Senado",
    fechaISO: "2026-05",
    precisionFecha: "mes",
    fecha: "Mayo de 2026",
    categoria: "Senado",
    descripcion:
      "Victoria Villarruel, participó de la entrega de diplomas de reconocimiento al Departamento de Conservación y Restauración del Senado de la Nación.",
    videoUrl: "https://youtu.be/WgF7TtMzPow",
    id: 2,
  },
  {
    slug: "expovenado-2026",
    titulo: "ExpoVenado 2026",
    fechaISO: "2026-08",
    precisionFecha: "mes",
    fecha: "Agosto de 2026",
    categoria: "Provincias",
    descripcion:
      "Victoria Villarruel participó de la apertura de la 90ª edición de ExpoVenado, en Venado Tuerto, Santa Fe, donde destacó el valor del campo, la industria, la producción y el trabajo argentino como motores del desarrollo nacional.",
    videoUrl: "https://youtu.be/wJd1NgW4Xlk",
    id: 3,
  },
  {
    slug: "exposicion-rural-chivilcoy-2026",
    titulo: "74ª Exposición Rural de Chivilcoy",
    fechaISO: "2026-09",
    precisionFecha: "mes",
    fecha: "Septiembre de 2026",
    categoria: "Provincias",
    descripcion:
      "Victoria Villarruel en la 74ª Exposición Rural de Chivilcoy, donde destacó la importancia del sector agropecuario y la producción nacional para el desarrollo del país.",
    videoUrl: "https://youtu.be/SlGRlKIuZ5Y",
    id: 4,
  },
];

export default discursos;
