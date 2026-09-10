import { visitasProvincias } from "../data/visitasProvincias";

// Fuente única de las estadísticas de recorrido territorial.
// Usada por VictoriaEnNumeros (sección propia) y, si en el futuro
// vuelve a necesitarlas, por MapaArgentina — así se evita mantener
// dos cálculos independientes sobre los mismos datos.

// Universo total: 23 provincias + CABA.
export const TOTAL_JURISDICCIONES = 24;
// CABA se cuenta como jurisdicción recorrida a nivel informativo, pero no
// tiene (ni debe tener) una entrada propia en visitasProvincias.
const JURISDICCIONES_EXTRA = 1;

const provinciasConVisitas = Object.values(visitasProvincias).filter(
  (provincia) => provincia.visitas?.length > 0,
).length;

export const jurisdiccionesRecorridas = provinciasConVisitas + JURISDICCIONES_EXTRA;

export const porcentajeRecorrido = Math.floor(
  (jurisdiccionesRecorridas / TOTAL_JURISDICCIONES) * 100,
);

export const totalVisitas = Object.values(visitasProvincias).reduce(
  (total, provincia) => total + (provincia.visitas?.length ?? 0),
  0,
);
