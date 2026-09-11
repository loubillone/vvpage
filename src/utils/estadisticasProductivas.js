import { visitasProvincias } from "../data/visitasProvincias";
import { establecimientosProductivos } from "../data/establecimientosProductivos";

// Fuente única de las estadísticas de establecimientos productivos
// visitados. Las visitas/actividades de visitasProvincias.jsx no
// guardan la metadata de cada establecimiento: solo una referencia (id)
// en su campo `establecimientosVisitados`. La metadata vive una sola vez
// en establecimientosProductivos.js.
//
// Este archivo recorre TODAS las referencias realmente presentes en
// visitasProvincias (provincia -> visita ->, y cada actividad dentro de
// "actividades" cuando exista), las junta en un Set para deduplicar por
// id (necesario porque un mismo establecimiento puede estar referenciado
// desde más de una publicación, ej. finca-campo-alegre-san-pedro-jujuy
// aparece tanto en la visita de Salta como en la de Jujuy) y expone el
// total a partir de ese Set. El total NUNCA se calcula contando las
// entradas del catálogo: si se agrega un establecimiento al catálogo
// pero todavía no se referencia desde ninguna visita, no debe sumar.

const recolectarIdsReferenciados = () => {
  const ids = new Set();

  Object.values(visitasProvincias).forEach((provincia) => {
    (provincia.visitas ?? []).forEach((visita) => {
      (visita.establecimientosVisitados ?? []).forEach((id) => ids.add(id));

      (visita.actividades ?? []).forEach((actividad) => {
        (actividad.establecimientosVisitados ?? []).forEach((id) =>
          ids.add(id),
        );
      });
    });
  });

  return ids;
};

const idsReferenciados = recolectarIdsReferenciados();

// Referencias rotas: un id presente en visitasProvincias.jsx que no
// existe en establecimientosProductivos.js. Suele ser un error de
// tipeo. No se ignora silenciosamente: se avisa por consola en
// desarrollo para poder corregirlo antes de que llegue a producción.
const idsInexistentes = Array.from(idsReferenciados).filter(
  (id) => !establecimientosProductivos[id],
);

if (import.meta.env.DEV && idsInexistentes.length > 0) {
  idsInexistentes.forEach((id) => {
    console.warn(
      `[estadisticasProductivas] El id "${id}" está referenciado en ` +
        "visitasProvincias.jsx pero no existe en establecimientosProductivos.js. " +
        "Revisar si es un error de tipeo o una referencia rota.",
    );
  });
}

// Ids únicos realmente referenciados y válidos contra el catálogo. Es la
// base para el total y para las estadísticas futuras (rubro, tipo,
// localidad, provincia).
const idsValidos = Array.from(idsReferenciados).filter(
  (id) => establecimientosProductivos[id],
);

// Total de establecimientos productivos únicos efectivamente visitados,
// calculado a partir de las referencias reales en visitasProvincias
// (deduplicadas), no a partir del tamaño del catálogo.
export const totalEstablecimientosProductivos = idsValidos.length;

// Cada establecimiento único realmente visitado, con su metadata ya
// resuelta contra el catálogo. Pensado para reusarse en futuras
// estadísticas agrupadas por rubro, tipo, localidad o provincia sin
// tener que volver a recorrer visitasProvincias.jsx.
export const establecimientosVisitadosUnicos = idsValidos.map((id) => ({
  id,
  ...establecimientosProductivos[id],
}));
