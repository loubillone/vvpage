// Fecha de asunción como Vicepresidenta de la Nación Argentina.
// (Confirmado por el propio contenido del sitio en GaleriaDetalle.jsx:
// "El 10 de diciembre de 2023, Javier Milei y Victoria Villarruel
// asumieron como presidente y vicepresidente...").
const FECHA_INICIO_VICEPRESIDENCIA = new Date(2023, 11, 10);

// Diferencia en años y meses completos entre dos fechas. No redondea:
// un mes solo se cuenta como completo si ya pasó el día de inicio.
export const calcularAniosYMeses = (desde, hasta) => {
  let anios = hasta.getFullYear() - desde.getFullYear();
  let meses = hasta.getMonth() - desde.getMonth();

  if (hasta.getDate() < desde.getDate()) {
    meses -= 1;
  }
  if (meses < 0) {
    anios -= 1;
    meses += 12;
  }

  return { anios, meses };
};

// Tiempo transcurrido en la Vicepresidencia hasta "fechaActual". Se
// recalcula siempre contra la fecha real del momento en que se llama:
// nunca se hardcodea el resultado.
export const obtenerTiempoEnVicepresidencia = (fechaActual = new Date()) =>
  calcularAniosYMeses(FECHA_INICIO_VICEPRESIDENCIA, fechaActual);

// "Veces a cargo de la Presidencia" y días acumulados en ese rol
// (reemplazos por ausencia/viaje del presidente, según el orden de
// sucesión). A diferencia del tiempo en la Vicepresidencia, no existe en
// el proyecto ninguna fuente estructurada (BOE, actas, etc.) desde la
// que calcular esto automáticamente: es un dato institucional provisto
// manualmente, con una fecha de corte explícita. Actualizar estos tres
// valores juntos cada vez que vuelva a quedar a cargo del Poder
// Ejecutivo.
export const VECES_A_CARGO_PRESIDENCIA = 43;
export const DIAS_A_CARGO_PRESIDENCIA = 130;
export const FECHA_CORTE_A_CARGO_PRESIDENCIA = "2026-09-09";
