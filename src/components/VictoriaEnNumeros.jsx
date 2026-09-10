import React, { useEffect, useRef, useState } from "react";
import {
  TOTAL_JURISDICCIONES,
  jurisdiccionesRecorridas,
  porcentajeRecorrido,
  totalVisitas,
} from "../utils/estadisticasRecorrido";
import "../css/victoriaEnNumeros.css";

const DURACION_MS = 1200;

const prefiereMovimientoReducido = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// Anima un número de 0 a valorFinal una sola vez, cuando "activo" pasa
// a true (disparado por IntersectionObserver al entrar en viewport).
// Respeta prefers-reduced-motion mostrando el valor final sin animar.
const useConteo = (valorFinal, activo) => {
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

    const animar = (timestamp) => {
      if (inicio === null) inicio = timestamp;
      const progresoLineal = Math.min((timestamp - inicio) / DURACION_MS, 1);
      const progreso = easeOutCubic(progresoLineal);
      setValor(Math.round(progreso * valorFinal));
      if (progresoLineal < 1) {
        frameId = requestAnimationFrame(animar);
      }
    };

    frameId = requestAnimationFrame(animar);
    return () => cancelAnimationFrame(frameId);
  }, [activo, valorFinal]);

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

  const provinciasAnimadas = useConteo(jurisdiccionesRecorridas, enVista);
  const porcentajeAnimado = useConteo(porcentajeRecorrido, enVista);
  const visitasAnimadas = useConteo(totalVisitas, enVista);

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
            Un resumen de sus recorridas por el país.
          </p>
        </div>

        <div className="victoria-en-numeros-fila">
          <div className="victoria-en-numeros-item">
            <span className="victoria-en-numeros-cifra">
              {provinciasAnimadas}
              <span className="victoria-en-numeros-cifra-total">
                /{TOTAL_JURISDICCIONES}
              </span>
            </span>
            <span className="victoria-en-numeros-etiqueta">
              Provincias recorridas
            </span>
          </div>

          <div className="victoria-en-numeros-item">
            <span className="victoria-en-numeros-cifra">
              {porcentajeAnimado}%
            </span>
            <span className="victoria-en-numeros-etiqueta">
              Del país recorrido
            </span>
          </div>

          <div className="victoria-en-numeros-item">
            <span className="victoria-en-numeros-cifra">
              {visitasAnimadas}
            </span>
            <span className="victoria-en-numeros-etiqueta">
              Visitas documentadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VictoriaEnNumeros;
