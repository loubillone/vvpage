// Catálogo central de actividades sectoriales: exposiciones, ferias,
// cámaras empresariales, entidades, organismos, encuentros y recorridas
// productivas vinculadas con las visitas provinciales.
//
// Mismo criterio que establecimientosProductivos.js: cada actividad existe
// una sola vez acá, indexada por un id estable, y las visitas/actividades
// de visitasProvincias.jsx solo guardan la referencia en su propio campo
// `actividadesSectoriales`. Una entidad permanente (ej. COVIAR) puede
// estar referenciada desde más de una visita con el mismo id.
//
// Acá NO se guardan fechas, descripciones, galerías ni URLs: se obtienen
// siempre de la visita que referencia a la actividad.
//
// Convención de ids: los eventos con edición anual llevan el año
// (exposicion-rural-chivilcoy-2026); las entidades permanentes, no (coviar).
//
// `categoria` y `sector` solo admiten las claves definidas en
// sectoresProductivos.js (CATEGORIAS_SECTORIALES y SECTORES).
// Opcionales: `entidades` (organizaciones mencionadas en la visita) e
// `imagenPortada` (public ID de Cloudinary).
export const actividadesSectoriales = {
  "centro-formacion-rural-las-margaritas": {
    nombre: 'Centro de Formación Rural "Las Margaritas"',
    categoria: "formacion",
    sector: "produccion-primaria",
    localidad: "Saladillo",
    provincia: "Buenos Aires",
    entidades: ["Fundación Marzano"],
  },
  "exposicion-rural-chivilcoy-2026": {
    nombre: "74ª Exposición Rural de Chivilcoy",
    categoria: "exposicion",
    sector: "multisectorial",
    localidad: "Chivilcoy",
    provincia: "Buenos Aires",
    entidades: ["Asociación Rural de Chivilcoy"],
    imagenPortada: "tpa-web/provincias/bsas/chivilcoy-rural/bsas-chivilcoy-rural-5.jpg",
  },
  "exposicion-rural-2024": {
    nombre: "Exposición Rural 2024",
    categoria: "exposicion",
    sector: "agroindustria",
    localidad: "Palermo, CABA",
    provincia: "Buenos Aires",
    entidades: ["Sociedad Rural Argentina"],
    imagenPortada: "tpa-web/provincias/bsas/caba/rural2024/caba-rural2024-1.jpg",
  },
  "encuentro-empresarios-bariloche-2024": {
    nombre: "Encuentro con empresarios de Bariloche",
    categoria: "encuentro",
    sector: "multisectorial",
    localidad: "San Carlos de Bariloche",
    provincia: "Río Negro",
    imagenPortada: "tpa-web/provincias/rio-negro/rionegro-bariloche-19.jpg",
  },
  "reunion-cra-2024": {
    nombre: "Reunión con autoridades de Confederaciones Rurales Argentinas",
    categoria: "encuentro",
    sector: "agroindustria",
    localidad: "CABA",
    provincia: "Buenos Aires",
    entidades: ["CRA"],
    imagenPortada: "tpa-web/provincias/bsas/caba/cra/caba-cra-1.jpg",
  },
  "reunion-coninagro-2024": {
    nombre: "Reunión con autoridades de CONINAGRO",
    categoria: "encuentro",
    sector: "agroindustria",
    localidad: "CABA",
    provincia: "Buenos Aires",
    entidades: ["CONINAGRO"],
    imagenPortada: "tpa-web/provincias/bsas/caba/coninagro/caba-coninagro-1.jpg",
  },
  "mesa-carnes-2024": {
    nombre: "Reunión con la Mesa de Carnes Argentinas",
    categoria: "encuentro",
    sector: "agroindustria",
    localidad: "Palermo, CABA",
    provincia: "Buenos Aires",
    entidades: ["Mesa Nacional de las Carnes"],
    imagenPortada: "tpa-web/provincias/bsas/caba/mesa-carnes/caba-mesa-1.jpg",
  },
  "foro-lide-agronegocios-2024": {
    nombre: "XIII Fórum Nacional de Agronegocios",
    categoria: "encuentro",
    sector: "agroindustria",
    localidad: "Puerto Madero, CABA",
    provincia: "Buenos Aires",
    entidades: ["LIDE Argentina"],
    imagenPortada: "tpa-web/provincias/bsas/caba/foro-lide2024/caba-lide2024-1.jpg",
  },
  "encuentro-bersa-2024": {
    nombre: "Encuentro de Defensa y Seguridad 2024 — BERSA",
    categoria: "encuentro",
    sector: "industria",
    localidad: "Campo de Mayo",
    provincia: "Buenos Aires",
    entidades: ["BERSA"],
    imagenPortada: "tpa-web/provincias/bsas/campo-de-mayo/feria-bersa/bsas-bersa-1.jpg",
  },
  "expoagro-2025": {
    nombre: "Expoagro 2025",
    categoria: "exposicion",
    sector: "agroindustria",
    localidad: "San Nicolás",
    provincia: "Buenos Aires",
    imagenPortada: "tpa-web/provincias/bsas/san-nicolas/expoagro2025/bsas-expoagro2025-7.jpg",
  },
  "expoagro-2026": {
    nombre: "Expoagro 2026",
    categoria: "exposicion",
    sector: "agroindustria",
    localidad: "San Nicolás",
    provincia: "Buenos Aires",
    imagenPortada: "tpa-web/provincias/bsas/san-nicolas/expoagro2026/bsas-expoagro2026-1.jpg",
  },
  "fiesta-nacional-poncho-2024": {
    nombre: "Fiesta Nacional e Internacional del Poncho",
    categoria: "feria",
    sector: "artesanal",
    localidad: "San Fernando del Valle de Catamarca",
    provincia: "Catamarca",
  },
  "fiesta-nacional-arroz-2024": {
    nombre: "XVII Fiesta Nacional del Arroz",
    categoria: "exposicion",
    sector: "agroindustria",
    localidad: "San Salvador",
    provincia: "Entre Ríos",
    entidades: ["Federación Agraria Argentina"],
  },
  coviar: {
    nombre: "Corporación Vitivinícola Argentina (COVIAR)",
    categoria: "entidad",
    sector: "vitivinicola-olivicola",
    localidad: "Mendoza",
    provincia: "Mendoza",
  },
  "argentina-texas-summit-2024": {
    nombre: "Argentina-Texas Summit 2024",
    categoria: "encuentro",
    sector: "energia",
    localidad: "Neuquén",
    provincia: "Neuquén",
    imagenPortada: "tpa-web/provincias/neuquen/neuquen-ciudad-2.jpg",
  },
  fecene: {
    nombre: "Federación de Cámaras del Sector Energético de Neuquén (FECENE)",
    categoria: "camara",
    sector: "energia",
    localidad: "Neuquén",
    provincia: "Neuquén",
    imagenPortada: "tpa-web/provincias/neuquen/neuquen-ciudad-10.jpg",
  },
  "zona-nucleo-oil-gas-anelo": {
    nombre: "Zona núcleo de Oil & Gas de Añelo",
    categoria: "recorrida",
    sector: "energia",
    localidad: "Añelo",
    provincia: "Neuquén",
    imagenPortada: "tpa-web/provincias/neuquen/neuquen-ciudad-14.jpg",
  },
  "exposicion-rural-salta-2024": {
    nombre: "80ª Exposición Rural de Salta",
    categoria: "exposicion",
    sector: "produccion-primaria",
    localidad: "Ciudad de Salta",
    provincia: "Salta",
    entidades: ["Sociedad Rural de Salta"],
  },
  "argoliva-2026": {
    nombre: "ArgOliva 2026",
    categoria: "encuentro",
    sector: "vitivinicola-olivicola",
    localidad: "No especificada",
    provincia: "San Juan",
    entidades: [
      "Centro de Referencia en Evaluación Sensorial de Aceite de Oliva y otros Alimentos (CRESA)",
      "Universidad Católica de Cuyo",
    ],
  },
  caprimsa: {
    nombre:
      "Cámara de Proveedores Interdepartamentales Mineros de San Juan (CAPRIMSA)",
    categoria: "camara",
    sector: "mineria",
    localidad: "Las Tapias, Albardón",
    provincia: "San Juan",
  },
  "inta-campo-san-martin": {
    nombre: "Campo San Martín del INTA",
    categoria: "organismo",
    sector: "vitivinicola-olivicola",
    localidad: "Dos Acequias, San Martín",
    provincia: "San Juan",
    entidades: ["INTA"],
    imagenPortada: "tpa-web/provincias/san-juan/inta/sanjuan-inta-2.jpg",
  },
  // Sin imagenPortada: la portada de Producción está pendiente de
  // selección (mientras tanto el índice usa la portada de la visita, que
  // está dedicada solo a esta actividad).
  "agroactiva-2024": {
    nombre: "Agroactiva 2024",
    categoria: "exposicion",
    sector: "agroindustria",
    localidad: "Armstrong",
    provincia: "Santa Fe",
  },
  "expovenado-2026": {
    nombre: "90ª ExpoVenado",
    categoria: "exposicion",
    sector: "multisectorial",
    localidad: "Venado Tuerto",
    provincia: "Santa Fe",
    entidades: ["Sociedad Rural de Venado Tuerto"],
    imagenPortada: "tpa-web/provincias/santa-fe/2026/venado-tuerto/santafe-expovenado-32.jpg",
  },
};
