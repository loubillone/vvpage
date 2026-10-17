import { visitasProvincias } from "../data/visitasProvincias";
import { establecimientosProductivos } from "../data/establecimientosProductivos";
import { actividadesSectoriales } from "../data/actividadesSectoriales";
import {
  SECTORES,
  TIPOS_ESTABLECIMIENTO,
  CATEGORIAS_SECTORIALES,
} from "../data/sectoresProductivos";

// Índice de Industria y Producción, derivado de las visitas provinciales.
//
// Los catálogos (establecimientosProductivos.js, actividadesSectoriales.js)
// solo guardan metadatos. Las visitas de visitasProvincias.jsx guardan las
// referencias en `establecimientosVisitados` / `actividadesSectoriales`,
// a nivel visita o dentro de una actividad interna. Este archivo recorre
// las visitas en su orden original y arma, por cada id, sus apariciones con
// los datos de la visita (fechas, lugar, URL, imagen). No copia ni modifica
// nada: si se agrega una referencia en una visita, el índice la incluye solo.
//
// Uso:
// - indiceProduccion: índice ya calculado con los datos reales.
// - construirIndiceProduccion(fuentes) / validarIndiceProduccion(fuentes):
//   aceptan datos alternativos (pruebas) y por defecto usan los reales.
//   validarIndiceProduccion lo ejecuta el build
//   (scripts/generate-social-previews.mjs) y devuelve una lista de errores.

const FUENTES_REALES = {
  visitasProvincias,
  establecimientosProductivos,
  actividadesSectoriales,
  SECTORES,
  TIPOS_ESTABLECIMIENTO,
  CATEGORIAS_SECTORIALES,
};

const CAMPOS_ESTABLECIMIENTO = [
  "nombre",
  "rubro",
  "tipo",
  "sector",
  "localidad",
  "provincia",
];
const CAMPOS_ACTIVIDAD_SECTORIAL = [
  "nombre",
  "categoria",
  "sector",
  "localidad",
  "provincia",
];

// Mismo criterio que ProvinciaDetalle / UltimasVisitas: "YYYY-MM" o
// "YYYY-MM-DD" a un número comparable. El día 1 se asume solo para
// ordenar; nunca se muestra (la fecha visible es siempre `fecha`).
const fechaISOaNumero = (fechaISO) => {
  if (!fechaISO) return 0;
  const [anio, mes, dia] = fechaISO.split("-");
  const anioNum = parseInt(anio, 10) || 0;
  const mesNum = mes ? parseInt(mes, 10) : 1;
  const diaNum = dia ? parseInt(dia, 10) : 1;
  return anioNum * 10000 + mesNum * 100 + diaNum;
};

const esTextoNoVacio = (valor) =>
  typeof valor === "string" && valor.trim().length > 0;

// Primer tramo de un lugar ("Victoria, Buenos Aires" -> "victoria";
// "Oberá – Puerto Iguazú – Colonia Wanda" -> "obera"), sin tildes ni
// mayúsculas, para comparar el `lugar` de una visita con la `localidad`
// de un registro del catálogo.
const primerTramo = (texto) =>
  (texto ?? "")
    .split(/\s*,\s*|\s+[–-]\s+/)[0]
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase();

const cantidadReferencias = (nodo) =>
  (nodo?.establecimientosVisitados?.length ?? 0) +
  (nodo?.actividadesSectoriales?.length ?? 0);

// Recorre todas las visitas (y sus actividades internas) en el orden
// original y devuelve cada referencia del campo indicado con su contexto.
const recorrerReferencias = (visitas, campo) => {
  const referencias = [];

  Object.entries(visitas).forEach(([provinciaSlug, provincia]) => {
    (provincia.visitas ?? []).forEach((visita) => {
      (visita[campo] ?? []).forEach((id) => {
        referencias.push({ id, provinciaSlug, provincia, visita, actividad: null });
      });

      (visita.actividades ?? []).forEach((actividad) => {
        (actividad[campo] ?? []).forEach((id) => {
          referencias.push({ id, provinciaSlug, provincia, visita, actividad });
        });
      });
    });
  });

  return referencias;
};

// Imagen de una aparición (public ID de Cloudinary o null):
// 1. `imagenPortada` del catálogo, si está definida.
// 2. Referencia dentro de una actividad interna que solo referencia a este
//    registro: primera foto de esa actividad.
// 3. Referencia a nivel de una visita sin actividades internas, que solo
//    referencia a este registro y cuyo `lugar` coincide con la `localidad`
//    del catálogo: portada de la visita (visita dedicada).
// 4. En cualquier otro caso (galería compartida): null. Nunca se toma una
//    foto de otra actividad por pertenecer a la misma visita.
const elegirImagen = ({ visita, actividad }, registro) => {
  if (esTextoNoVacio(registro.imagenPortada)) {
    return { imagen: registro.imagenPortada, imagenOrigen: "catalogo" };
  }

  if (actividad) {
    if (cantidadReferencias(actividad) === 1 && actividad.imagenes?.length) {
      return { imagen: actividad.imagenes[0], imagenOrigen: "actividad" };
    }
    return { imagen: null, imagenOrigen: null };
  }

  const visitaDedicada =
    !visita.actividades?.length &&
    cantidadReferencias(visita) === 1 &&
    primerTramo(visita.lugar) === primerTramo(registro.localidad);

  if (visitaDedicada && esTextoNoVacio(visita.imagenPortada)) {
    return { imagen: visita.imagenPortada, imagenOrigen: "visita" };
  }

  return { imagen: null, imagenOrigen: null };
};

const crearAparicion = (referencia, registro) => {
  const { provinciaSlug, provincia, visita, actividad } = referencia;

  return {
    provinciaSlug,
    provinciaNombre: provincia.nombre,
    visitaSlug: visita.slug,
    visitaTitulo: visita.titulo,
    fechaISO: visita.fechaISO,
    precisionFecha: visita.precisionFecha,
    fecha: visita.fecha,
    lugar: visita.lugar,
    actividadTitulo: actividad ? actividad.titulo : null,
    url: `/provincias/${provinciaSlug}/${visita.slug}`,
    ...elegirImagen(referencia, registro),
  };
};

// Agrupa las referencias por id (un registro único con N apariciones),
// ordena las apariciones de la más reciente a la más antigua y los
// registros por su aparición más reciente. Las referencias a ids que no
// existen en el catálogo se ignoran acá (las informa validarIndiceProduccion).
const agruparPorRegistro = (referencias, catalogo, camposCatalogo) => {
  const porId = new Map();

  referencias.forEach((referencia) => {
    const registro = catalogo[referencia.id];
    if (!registro) return;

    if (!porId.has(referencia.id)) {
      const datos = { id: referencia.id };
      camposCatalogo.forEach((campo) => {
        datos[campo] = registro[campo];
      });
      porId.set(referencia.id, { datos, registro, apariciones: [] });
    }

    porId.get(referencia.id).apariciones.push(crearAparicion(referencia, registro));
  });

  const registros = Array.from(porId.values()).map(({ datos, apariciones }) => {
    const ordenadas = [...apariciones].sort(
      (a, b) => fechaISOaNumero(b.fechaISO) - fechaISOaNumero(a.fechaISO)
    );
    return {
      ...datos,
      apariciones: ordenadas,
      cantidadApariciones: ordenadas.length,
      aparicionMasReciente: ordenadas[0],
      imagen: ordenadas.find((a) => a.imagen)?.imagen ?? null,
    };
  });

  return registros.sort(
    (a, b) =>
      fechaISOaNumero(b.aparicionMasReciente.fechaISO) -
      fechaISOaNumero(a.aparicionMasReciente.fechaISO)
  );
};

const contarPor = (registros, campo, clavesIniciales = []) => {
  const conteo = Object.fromEntries(clavesIniciales.map((clave) => [clave, 0]));
  registros.forEach((registro) => {
    conteo[registro[campo]] = (conteo[registro[campo]] ?? 0) + 1;
  });
  return conteo;
};

export const construirIndiceProduccion = (fuentes = {}) => {
  const f = { ...FUENTES_REALES, ...fuentes };

  const referenciasEstablecimientos = recorrerReferencias(
    f.visitasProvincias,
    "establecimientosVisitados"
  );
  const referenciasSectoriales = recorrerReferencias(
    f.visitasProvincias,
    "actividadesSectoriales"
  );

  const establecimientos = agruparPorRegistro(
    referenciasEstablecimientos,
    f.establecimientosProductivos,
    CAMPOS_ESTABLECIMIENTO
  );

  // En las actividades sectoriales, cada aparición es una "participación".
  const actividades = agruparPorRegistro(
    referenciasSectoriales,
    f.actividadesSectoriales,
    [...CAMPOS_ACTIVIDAD_SECTORIAL, "entidades"]
  ).map(
    ({ entidades, apariciones, cantidadApariciones, aparicionMasReciente, ...resto }) => ({
      ...resto,
      entidades: entidades ?? [],
      participaciones: apariciones,
      cantidadParticipaciones: cantidadApariciones,
      participacionMasReciente: aparicionMasReciente,
    })
  );

  const visitasVinculadas = new Set(
    [...referenciasEstablecimientos, ...referenciasSectoriales]
      .filter((r) => f.establecimientosProductivos[r.id] || f.actividadesSectoriales[r.id])
      .map((r) => `${r.provinciaSlug}/${r.visita.slug}`)
  );

  // Registros únicos, apariciones y visitas se cuentan por separado: nunca
  // se suman entre sí ni se presentan como visitas provinciales.
  const estadisticas = {
    totalEstablecimientos: establecimientos.length,
    totalReferenciasEstablecimientos: establecimientos.reduce(
      (total, e) => total + e.cantidadApariciones,
      0
    ),
    totalActividadesSectoriales: actividades.length,
    totalParticipacionesSectoriales: actividades.reduce(
      (total, a) => total + a.cantidadParticipaciones,
      0
    ),
    totalVisitasVinculadas: visitasVinculadas.size,
    establecimientosPorSector: contarPor(
      establecimientos,
      "sector",
      Object.keys(f.SECTORES).filter((s) => !f.SECTORES[s].soloActividadesSectoriales)
    ),
    establecimientosPorProvincia: contarPor(establecimientos, "provincia"),
    actividadesPorCategoria: contarPor(
      actividades,
      "categoria",
      Object.keys(f.CATEGORIAS_SECTORIALES)
    ),
    actividadesPorSector: contarPor(actividades, "sector", Object.keys(f.SECTORES)),
  };

  return { establecimientos, actividadesSectoriales: actividades, estadisticas };
};

// Validaciones de integridad. Devuelve un array de mensajes (vacío si todo
// está bien). No modifica datos.
export const validarIndiceProduccion = (fuentes = {}) => {
  const f = { ...FUENTES_REALES, ...fuentes };
  const errores = [];

  const validarCatalogo = (nombreCatalogo, catalogo, camposObligatorios, validarRegistro) => {
    Object.entries(catalogo).forEach(([id, registro]) => {
      const ubicacion = `${nombreCatalogo} › "${id}"`;
      camposObligatorios.forEach((campo) => {
        if (!esTextoNoVacio(registro?.[campo])) {
          errores.push(`${ubicacion}: falta el campo obligatorio "${campo}".`);
        }
      });
      if (registro?.imagenPortada !== undefined && !esTextoNoVacio(registro.imagenPortada)) {
        errores.push(`${ubicacion}: "imagenPortada" debe ser un public ID no vacío.`);
      }
      validarRegistro(ubicacion, registro ?? {});
    });
  };

  validarCatalogo(
    "establecimientosProductivos",
    f.establecimientosProductivos,
    CAMPOS_ESTABLECIMIENTO,
    (ubicacion, registro) => {
      if (registro.sector && !f.SECTORES[registro.sector]) {
        errores.push(`${ubicacion}: el sector "${registro.sector}" no existe en SECTORES.`);
      } else if (f.SECTORES[registro.sector]?.soloActividadesSectoriales) {
        errores.push(
          `${ubicacion}: el sector "${registro.sector}" está reservado para actividades sectoriales.`
        );
      }
      if (registro.tipo && !f.TIPOS_ESTABLECIMIENTO[registro.tipo]) {
        errores.push(`${ubicacion}: el tipo "${registro.tipo}" no está en TIPOS_ESTABLECIMIENTO.`);
      }
    }
  );

  validarCatalogo(
    "actividadesSectoriales",
    f.actividadesSectoriales,
    CAMPOS_ACTIVIDAD_SECTORIAL,
    (ubicacion, registro) => {
      if (registro.sector && !f.SECTORES[registro.sector]) {
        errores.push(`${ubicacion}: el sector "${registro.sector}" no existe en SECTORES.`);
      }
      if (registro.categoria && !f.CATEGORIAS_SECTORIALES[registro.categoria]) {
        errores.push(
          `${ubicacion}: la categoría "${registro.categoria}" no está en CATEGORIAS_SECTORIALES.`
        );
      }
      if (
        registro.entidades !== undefined &&
        (!Array.isArray(registro.entidades) || !registro.entidades.every(esTextoNoVacio))
      ) {
        errores.push(`${ubicacion}: "entidades" debe ser una lista de textos no vacíos.`);
      }
    }
  );

  const tipos = [
    ["establecimientosVisitados", f.establecimientosProductivos, "establecimientosProductivos"],
    ["actividadesSectoriales", f.actividadesSectoriales, "actividadesSectoriales"],
  ];

  tipos.forEach(([campo, catalogo, nombreCatalogo]) => {
    const referenciados = new Set();

    Object.entries(f.visitasProvincias).forEach(([provinciaSlug, provincia]) => {
      (provincia.visitas ?? []).forEach((visita) => {
        const idsEnVisita = new Set();
        const niveles = [
          [visita, `visitasProvincias › ${provinciaSlug}/${visita.slug}`],
          ...(visita.actividades ?? []).map((actividad) => [
            actividad,
            `visitasProvincias › ${provinciaSlug}/${visita.slug} › actividad "${actividad.titulo}"`,
          ]),
        ];

        niveles.forEach(([nodo, ubicacion]) => {
          const ids = nodo[campo];
          if (ids === undefined) return;
          if (!Array.isArray(ids)) {
            errores.push(`${ubicacion}: "${campo}" debe ser una lista de ids.`);
            return;
          }
          const idsEnNivel = new Set();
          ids.forEach((id) => {
            if (!esTextoNoVacio(id)) {
              errores.push(`${ubicacion}: "${campo}" contiene un id vacío o inválido.`);
              return;
            }
            if (!catalogo[id]) {
              errores.push(`${ubicacion}: "${id}" no existe en ${nombreCatalogo}.`);
            }
            if (idsEnNivel.has(id)) {
              errores.push(`${ubicacion}: "${id}" está repetido en "${campo}".`);
            } else if (idsEnVisita.has(id)) {
              errores.push(
                `${ubicacion}: "${id}" ya está referenciado en otro nivel de la misma visita.`
              );
            }
            idsEnNivel.add(id);
            idsEnVisita.add(id);
            referenciados.add(id);
          });
        });
      });
    });

    Object.keys(catalogo).forEach((id) => {
      if (!referenciados.has(id)) {
        errores.push(
          `${nombreCatalogo} › "${id}": no está vinculado con ninguna visita (campo "${campo}").`
        );
      }
    });
  });

  return errores;
};

export const indiceProduccion = construirIndiceProduccion();
