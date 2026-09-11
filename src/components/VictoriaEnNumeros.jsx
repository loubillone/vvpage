import React, { useEffect, useRef, useState } from "react";
import { obtenerTiempoEnVicepresidencia } from "../utils/tiempoEnCargo";
import {
  obtenerReduccionPlantaPersonalPorcentaje,
  AHORRO_ANUAL_ESTIMADO_MILLONES,
  FUENTE_GESTION_SENADO_2025,
  FUENTE_GESTION_SENADO_2025_URL,
} from "../utils/gestionSenado2025";
import "../css/victoriaEnNumeros.css";

// Las métricas territoriales (provincias recorridas, % del país, barra
// de progreso, visitas documentadas) ya no viven acá: pertenecen al
// bloque "Victoria Federal" / Mapa y se calculan desde
// src/utils/estadisticasRecorrido.js.
//
// Esta sección muestra métricas institucionales/de gestión:
//
// - Métrica 1 (tiempo en la Vicepresidencia): se recalcula siempre
//   contra la fecha real, nunca se hardcodea.
// - Métrica 2 (Reducción de la planta de personal) y Métrica 3 (Ahorro
//   anual estimado): datos de la gestión 2025 del Senado, provistos
//   desde src/utils/gestionSenado2025.js. El porcentaje de la métrica 2
//   se calcula a partir de la dotación de abril/diciembre de 2025 (nunca
//   se hardcodea); el ahorro de la métrica 3 es un dato institucional
//   informado directamente por el Senado (no hay fórmula pública para
//   derivarlo).

const DURACION_MS = 1200;

const prefiereMovimientoReducido = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// Formatea un número con la convención local (coma decimal), ej.
// 19.8 -> "19,8".
const formatearNumeroEsAr = (valor, decimales = 0) =>
  valor.toLocaleString("es-AR", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });

// Anima un número de 0 a valorFinal una sola vez, cuando "activo" pasa
// a true (disparado por IntersectionObserver al entrar en viewport).
// Respeta prefers-reduced-motion mostrando el valor final sin animar.
// "decimales" permite animar cifras no enteras (ej. un porcentaje).
const useConteo = (valorFinal, activo, decimales = 0) => {
  const [valor, setValor] = useState(0);
  const yaAnimoRef = useRef(false);

  useEffect(() => {
    if (!activo || yaAnimoRef.current) return;
    yaAnimoRef.current = true;

    if (prefiereMovimientoReducido()) {
      setValor(valorFinal);
      return;
    }

    let inicio = null;
    let frameId;
    const factor = 10 ** decimales;

    const animar = (timestamp) => {
      if (inicio === null) inicio = timestamp;
      const progresoLineal = Math.min((timestamp - inicio) / DURACION_MS, 1);
      const progreso = easeOutCubic(progresoLineal);
      setValor(Math.round(progreso * valorFinal * factor) / factor);
      if (progresoLineal < 1) {
        frameId = requestAnimationFrame(animar);
      }
    };

    frameId = requestAnimationFrame(animar);
    return () => cancelAnimationFrame(frameId);
  }, [activo, valorFinal, decimales]);

  return valor;
};

const VictoriaEnNumeros = () => {
  const seccionRef = useRef(null);
  const [enVista, setEnVista] = useState(false);

  useEffect(() => {
    const el = seccionRef.current;
    if (!el) return;

    // Si el navegador no soporta IntersectionObserver, se muestra
    // directamente el valor final sin animación.
    if (typeof IntersectionObserver === "undefined") {
      setEnVista(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnVista(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Se recalcula en cada render contra la fecha real actual: nunca se
  // hardcodea el resultado.
  const { anios, meses } = obtenerTiempoEnVicepresidencia();
  const aniosAnimados = useConteo(anios, enVista);
  const mesesAnimados = useConteo(meses, enVista);

  // El porcentaje siempre representa una reducción: se anima su
  // magnitud (valor absoluto) y el signo "−" se agrega como texto fijo
  // en el JSX, igual que el "+" fijo de la métrica de días.
  const reduccionPorcentaje = obtenerReduccionPlantaPersonalPorcentaje();
  const reduccionAnimada = useConteo(
    Math.abs(reduccionPorcentaje),
    enVista,
    1,
  );

  const ahorroAnimado = useConteo(AHORRO_ANUAL_ESTIMADO_MILLONES, enVista);

  return (
    <section
      className="victoria-en-numeros"
      aria-labelledby="victoria-en-numeros-titulo"
      ref={seccionRef}
    >
      <div className="container">
        <div className="victoria-en-numeros-header">
          <h2
            id="victoria-en-numeros-titulo"
            className="victoria-en-numeros-titulo"
          >
            Victoria en números
          </h2>
          <p className="victoria-en-numeros-subtitulo">
            Un resumen de su gestión al frente del Senado de la Nación.
          </p>
        </div>

        <div className="victoria-en-numeros-fila">
          <div className="victoria-en-numeros-item">
            <span className="victoria-en-numeros-cifra">
              {aniosAnimados}
              <span className="victoria-en-numeros-cifra-unidad">
                {aniosAnimados === 1 ? "año" : "años"}
              </span>{" "}
              {mesesAnimados}
              <span className="victoria-en-numeros-cifra-unidad">
                {mesesAnimados === 1 ? "mes" : "meses"}
              </span>
            </span>
            <span className="victoria-en-numeros-etiqueta">
              En la Vicepresidencia
            </span>
          </div>

          <div className="victoria-en-numeros-item">
            <span className="victoria-en-numeros-cifra">
              −{formatearNumeroEsAr(reduccionAnimada, 1)}%
            </span>
            <span className="victoria-en-numeros-etiqueta">
              De reducción de la planta de personal
            </span>
          </div>

          <div className="victoria-en-numeros-item">
            <span className="victoria-en-numeros-cifra">
              ${ahorroAnimado}
              <span className="victoria-en-numeros-cifra-unidad">M</span>
            </span>
            <span className="victoria-en-numeros-etiqueta victoria-en-numeros-etiqueta--ahorro">
              De ahorro anual estimado
              <br />
              en cargas sociales
            </span>
          </div>
        </div>

        <p className="victoria-en-numeros-fuente">
          {FUENTE_GESTION_SENADO_2025_URL ? (
            <a
              href={FUENTE_GESTION_SENADO_2025_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {FUENTE_GESTION_SENADO_2025}
            </a>
          ) : (
            FUENTE_GESTION_SENADO_2025
          )}
        </p>
      </div>
    </section>
  );
};

export default VictoriaEnNumeros;
