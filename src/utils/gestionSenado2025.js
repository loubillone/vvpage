// Datos institucionales de la gestión 2025 del Senado, informados por el
// propio Honorable Senado de la Nación. No existe en el proyecto una
// fuente estructurada (API, BOE, etc.) desde la que derivar esto
// automáticamente: son datos de gestión provistos manualmente, con su
// fuente documentada más abajo.

// Dotación de agentes de la planta de personal del Senado al inicio y al
// cierre de la gestión 2025.
export const PLANTA_PERSONAL_ABRIL_2025 = 4902;
export const PLANTA_PERSONAL_DICIEMBRE_2025 = 3928;

// Porcentaje de reducción de la planta de personal entre abril y
// diciembre de 2025, calculado a partir de los dos valores anteriores
// (nunca se hardcodea el resultado). Se trunca -no se redondea- a 1
// decimal, tal como lo informa el Senado: -19,8%.
export const obtenerReduccionPlantaPersonalPorcentaje = () => {
  const variacion =
    ((PLANTA_PERSONAL_DICIEMBRE_2025 - PLANTA_PERSONAL_ABRIL_2025) /
      PLANTA_PERSONAL_ABRIL_2025) *
    100;

  return Math.trunc(variacion * 10) / 10;
};

// Adhesiones al régimen de retiro anticipado informadas por el Senado en
// 2025.
export const ADHESIONES_RETIRO_ANTICIPADO_2025 = 305;

// Ahorro anual estimado en cargas sociales, en millones de pesos,
// derivado de esas 305 adhesiones. Es un dato informado directamente por
// el Senado (no hay una fórmula pública para derivarlo desde
// ADHESIONES_RETIRO_ANTICIPADO_2025): se documenta acá como dato
// institucional provisto manualmente, análogo a VECES_A_CARGO_PRESIDENCIA
// en tiempoEnCargo.js.
export const AHORRO_ANUAL_ESTIMADO_MILLONES = 665;

// Referencia de fuente para mostrar de forma discreta debajo de las
// métricas de gestión.
export const FUENTE_GESTION_SENADO_2025 =
  "Datos de gestión 2025 · Fuente: Honorable Senado de la Nación";

// URL oficial que respalda estos datos: PDF del Informe General de
// Gestión 2025 del Senado. Es el enlace visible en la referencia de
// fuente del componente.
export const FUENTE_GESTION_SENADO_2025_URL =
  "https://www.senado.gob.ar/bundles/senadoadministrativo/pdf/informes/2025/INFORMEGRAL.pdf";
