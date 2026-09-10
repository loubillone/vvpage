// Catálogo central de establecimientos productivos visitados.
//
// Cada establecimiento existe una sola vez acá, indexado por un id
// estable. Las visitas/actividades de visitasProvincias.jsx NO repiten
// esta metadata: solo guardan una referencia (el id) en su propio campo
// `establecimientosVisitados`. Si un mismo establecimiento se menciona en
// más de una publicación (ej. una gira que atraviesa dos provincias),
// todas las referencias deben usar el mismo id acá definido.
//
// Este catálogo es además la fuente para futuras estadísticas agrupadas
// por rubro, tipo, localidad o provincia, sin tener que volver a leer
// visitasProvincias.jsx.
export const establecimientosProductivos = {
  "ostagro-moquehua": {
    nombre: "Ostagro",
    rubro: "Comercialización de maquinaria agrícola",
    tipo: "empresa",
    localidad: "Moquehuá",
    provincia: "Buenos Aires",
  },
  "el-gauchito-chivilcoy": {
    nombre: "El Gauchito",
    rubro: "Empresa quesera",
    tipo: "empresa",
    localidad: "Chivilcoy",
    provincia: "Buenos Aires",
  },
  "lacteos-silvia-suipacha": {
    nombre: "Lácteos Silvia",
    rubro: "Leche larga vida y quesos (empresa familiar)",
    tipo: "empresa",
    localidad: "Suipacha",
    provincia: "Buenos Aires",
  },
  "frigorifico-el-regional-saladillo": {
    nombre: 'Frigorífico "El Regional"',
    rubro: "Faena y elaboración de productos cárnicos",
    tipo: "planta",
    localidad: "Saladillo",
    provincia: "Buenos Aires",
  },
  "cintolo-hermanos-ituzaingo": {
    nombre: "Cíntolo Hermanos",
    rubro: "Metalúrgica",
    tipo: "empresa",
    localidad: "Ituzaingó",
    provincia: "Buenos Aires",
  },
  "fate-victoria-buenos-aires": {
    nombre: "FATE",
    rubro: "Fabricación de neumáticos",
    tipo: "planta",
    localidad: "Victoria",
    provincia: "Buenos Aires",
  },
  "ingenio-la-florida-tucuman": {
    nombre: "Ingenio La Florida (Cía. Azucarera Los Balcanes)",
    rubro: "Agroindustria azucarera y bioetanol",
    tipo: "planta",
    localidad: "La Florida",
    provincia: "Tucumán",
  },
  "finca-campo-alegre-san-pedro-jujuy": {
    nombre: "Finca Campo Alegre",
    rubro: "Producción de caña de azúcar",
    tipo: "productor",
    localidad: "San Pedro",
    provincia: "Jujuy",
  },
  "arcadium-lithium-olaroz": {
    nombre: "Arcadium Lithium",
    rubro: "Extracción de litio",
    tipo: "empresa",
    localidad: "Olaroz",
    provincia: "Jujuy",
  },
  "bodega-catena-zapata-mendoza": {
    nombre: "Bodega Catena Zapata",
    rubro: "Vitivinícola",
    tipo: "planta",
    localidad: "Mendoza",
    provincia: "Mendoza",
  },
  "bodega-vista-larga-la-rioja": {
    nombre: "Bodega Vista Larga",
    rubro: "Vinos, aceite de oliva, aceitunas y nueces (empresa familiar)",
    tipo: "empresa",
    localidad: "La Rioja",
    provincia: "La Rioja",
  },
  "parque-eolico-arauco-la-rioja": {
    nombre: "Parque Eólico Arauco",
    rubro: "Generación de energía eólica",
    tipo: "planta",
    localidad: "La Rioja",
    provincia: "La Rioja",
  },
  "bodega-malma-neuquen": {
    nombre: "Bodega Malma",
    rubro: "Vitivinícola",
    tipo: "emprendimiento",
    localidad: "Neuquén",
    provincia: "Neuquén",
  },
  "minas-de-wanda-misiones": {
    nombre: "Minas de Wanda",
    rubro: "Extracción de piedras semipreciosas (amatista)",
    tipo: "establecimiento productivo",
    localidad: "Colonia Wanda",
    provincia: "Misiones",
  },
  "yacimiento-ypf-las-heras-santa-cruz": {
    nombre: "Yacimiento YPF (Las Heras)",
    rubro: "Producción petrolera",
    tipo: "planta",
    localidad: "Las Heras",
    provincia: "Santa Cruz",
  },
  "girgolar-los-antiguos-santa-cruz": {
    nombre: "GirgolAR",
    rubro: "Cultivo de gírgolas y hongos sobre álamos",
    tipo: "emprendimiento",
    localidad: "Los Antiguos",
    provincia: "Santa Cruz",
  },
  "chacra-la-querencia-los-antiguos-santa-cruz": {
    nombre: "Chacra La Querencia",
    rubro: "Frambuesas, cerezas, manzanas y mermeladas artesanales",
    tipo: "productor",
    localidad: "Los Antiguos",
    provincia: "Santa Cruz",
  },
  "empresa-mtz-san-juan": {
    nombre: "Empresa MTZ",
    rubro: "Logística y transporte para el sector minero",
    tipo: "empresa",
    localidad: "San Juan",
    provincia: "San Juan",
  },
  "arcor-villa-krause-san-juan": {
    nombre: "Planta industrial de ARCOR",
    rubro: "Conservas de tomate y salsas",
    tipo: "planta",
    localidad: "Villa Krause",
    provincia: "San Juan",
  },
  "trilogia-san-juan": {
    nombre: "Trilogía",
    rubro: "Aceite de oliva extra virgen de alta gama (PyME familiar)",
    tipo: "pyme",
    localidad: "Departamento San Martín",
    provincia: "San Juan",
  },
  "taller-antonio-gutierrez-belen-catamarca": {
    nombre: "Taller del artesano Antonio Gutiérrez",
    rubro: "Ponchos artesanales tejidos a mano",
    tipo: "emprendimiento",
    localidad: "Belén",
    provincia: "Catamarca",
  },
  "cooperativa-aranitas-hilanderas-belen-catamarca": {
    nombre: "Cooperativa de las Arañitas Hilanderas",
    rubro: "Hilado y tejido textil artesanal",
    tipo: "cooperativa",
    localidad: "Belén",
    provincia: "Catamarca",
  },
  "cooperativa-arrocera-san-salvador-entre-rios": {
    nombre: "Cooperativa Arrocera de San Salvador Ltda.",
    rubro: "Acopio y procesamiento de arroz",
    tipo: "cooperativa",
    localidad: "San Salvador",
    provincia: "Entre Ríos",
  },
  "invap-bariloche-rio-negro": {
    nombre: "INVAP",
    rubro: "Desarrollo tecnológico (empresa estatal)",
    tipo: "empresa",
    localidad: "San Carlos de Bariloche",
    provincia: "Río Negro",
  },
};
