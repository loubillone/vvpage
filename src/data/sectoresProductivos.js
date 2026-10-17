// Listas cerradas para la sección Industria y Producción.
//
// Las claves son estables: se guardan en los catálogos de datos
// (establecimientosProductivos.js y actividadesSectoriales.js) y pueden
// usarse en filtros o URLs. El `nombre` es solo el
// texto visible y puede corregirse sin tocar los datos. No agregar valores
// sueltos en los catálogos: toda clave nueva se define primero acá.

// Sectores productivos. `soloActividadesSectoriales` marca los sectores
// que no se asignan a establecimientos (solo a exposiciones, cámaras,
// encuentros, etc.).
export const SECTORES = {
  agroindustria: { nombre: "Agroindustria y alimentos" },
  "vitivinicola-olivicola": { nombre: "Vitivinicultura y olivicultura" },
  "produccion-primaria": {
    nombre: "Producción primaria y economías regionales",
  },
  "servicios-agropecuarios": {
    nombre: "Servicios y maquinaria agropecuaria",
  },
  industria: { nombre: "Industria manufacturera" },
  mineria: { nombre: "Minería y servicios mineros" },
  energia: { nombre: "Energía" },
  artesanal: { nombre: "Producción artesanal" },
  tecnologia: { nombre: "Ciencia y tecnología" },
  multisectorial: {
    nombre: "Multisectorial",
    soloActividadesSectoriales: true,
  },
};

// Tipos de establecimiento (campo `tipo` de establecimientosProductivos.js).
// - empresa: se visitó la organización (sede, oficinas, bodega).
// - planta: instalación industrial, yacimiento o parque de generación.
// - pyme: pequeña o mediana empresa identificada como tal.
// - cooperativa: entidad cooperativa.
// - productor: finca, chacra o productor familiar.
// - emprendimiento: proyecto pequeño o artesanal.
export const TIPOS_ESTABLECIMIENTO = {
  empresa: { nombre: "Empresa" },
  planta: { nombre: "Planta" },
  pyme: { nombre: "PyME" },
  cooperativa: { nombre: "Cooperativa" },
  productor: { nombre: "Productor" },
  emprendimiento: { nombre: "Emprendimiento" },
};

// Categorías de actividades sectoriales (exposiciones, cámaras,
// organismos, etc.): campo `categoria` de actividadesSectoriales.js.
export const CATEGORIAS_SECTORIALES = {
  exposicion: { nombre: "Exposición" },
  feria: { nombre: "Feria" },
  camara: { nombre: "Cámara empresarial" },
  entidad: { nombre: "Entidad sectorial" },
  organismo: { nombre: "Organismo" },
  encuentro: { nombre: "Encuentro" },
  recorrida: { nombre: "Recorrida productiva" },
  formacion: { nombre: "Formación" },
};
