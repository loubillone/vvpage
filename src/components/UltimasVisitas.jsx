import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { visitasProvincias } from "../data/visitasProvincias";
import { getCloudinaryUrl } from "../utils/cloudinary";
import "../css/ultimasVisitas.css";

const CANTIDAD_VISITAS_DESTACADAS = 6;

// Convierte "YYYY-MM-DD" o "YYYY-MM" en un número comparable (YYYYMMDD),
// para poder ordenar visitas sin importar la precisión de la fecha.
// Si solo hay mes/año, se asume el día 1 únicamente a fines de comparar:
// el valor mostrado en la card sigue siendo visita.fecha, sin inventar nada.
const fechaISOaNumero = (fechaISO) => {
  if (!fechaISO) return 0;
  const [anio, mes, dia] = fechaISO.split("-");
  const anioNum = parseInt(anio, 10) || 0;
  const mesNum = mes ? parseInt(mes, 10) : 1;
  const diaNum = dia ? parseInt(dia, 10) : 1;
  return anioNum * 10000 + mesNum * 100 + diaNum;
};

// Aplana visitasProvincias en una sola lista, conservando la provincia de
// origen de cada visita, y se queda con las más recientes según fechaISO.
// Al depender únicamente de la importación estática, se recalcula sola en
// cuanto se agreguen nuevas visitas a visitasProvincias.jsx.
const obtenerVisitasDestacadas = () => {
  const todasLasVisitas = Object.entries(visitasProvincias).flatMap(
    ([provinciaSlug, provincia]) =>
      (provincia.visitas || []).map((visita) => ({
        ...visita,
        provinciaNombre: provincia.nombre,
        provinciaSlug,
      })),
  );

  // Copia antes de ordenar: no se muta el array original de datos.
  const visitasOrdenadas = [...todasLasVisitas].sort(
    (a, b) => fechaISOaNumero(b.fechaISO) - fechaISOaNumero(a.fechaISO),
  );

  return visitasOrdenadas.slice(0, CANTIDAD_VISITAS_DESTACADAS);
};

const VISITAS_DESTACADAS = obtenerVisitasDestacadas();

const prefiereMovimientoReducido = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const UltimasVisitas = () => {
  const scrollRef = useRef(null);
  const [puedeIrAtras, setPuedeIrAtras] = useState(false);
  const [puedeIrAdelante, setPuedeIrAdelante] = useState(false);
  const [hayDesplazamiento, setHayDesplazamiento] = useState(false);

  const actualizarControles = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setHayDesplazamiento(maxScrollLeft > 4);
    setPuedeIrAtras(el.scrollLeft > 4);
    setPuedeIrAdelante(el.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    actualizarControles();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", actualizarControles, { passive: true });
    window.addEventListener("resize", actualizarControles);

    return () => {
      el.removeEventListener("scroll", actualizarControles);
      window.removeEventListener("resize", actualizarControles);
    };
  }, [actualizarControles]);

  const desplazar = (direccion) => {
    const el = scrollRef.current;
    if (!el) return;

    const primeraCard = el.querySelector(".ultima-visita-card-link");
    const anchoCard = primeraCard
      ? primeraCard.getBoundingClientRect().width
      : el.clientWidth;
    const gapPx = parseFloat(getComputedStyle(el).columnGap || "20") || 20;

    el.scrollBy({
      left: direccion * (anchoCard + gapPx),
      behavior: prefiereMovimientoReducido() ? "auto" : "smooth",
    });
  };

  if (VISITAS_DESTACADAS.length === 0) {
    return null;
  }

  return (
    <section className="ultimas-visitas" aria-labelledby="ultimas-visitas-titulo">
      <div className="container">
        <div className="ultimas-visitas-header">
          <h2 id="ultimas-visitas-titulo" className="ultimas-visitas-titulo">
            Últimas visitas
          </h2>
          <p className="ultimas-visitas-subtitulo">
            Conocé las recorridas más recientes de Victoria Villarruel por la
            Argentina.
          </p>
        </div>
      </div>

      <div className="container ultimas-visitas-container">
        {hayDesplazamiento && (
          <button
            type="button"
            className="ultimas-visitas-flecha ultimas-visitas-flecha-prev"
            onClick={() => desplazar(-1)}
            disabled={!puedeIrAtras}
            aria-label="Ver visitas anteriores"
          >
            <span className="ultimas-visitas-flecha-icono">‹</span>
          </button>
        )}

        <div className="ultimas-visitas-scroll" ref={scrollRef}>
          {VISITAS_DESTACADAS.map((visita) => (
            <Link
              key={`${visita.provinciaSlug}-${visita.slug}`}
              to={`/provincia/${visita.provinciaSlug}/${visita.slug}`}
              className="ultima-visita-card-link"
            >
              <article className="ultima-visita-card">
                <div className="ultima-visita-imagen-wrapper">
                  {visita.imagenPortada ? (
                    <img
                      src={getCloudinaryUrl(visita.imagenPortada)}
                      alt={visita.titulo}
                      className="ultima-visita-imagen"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="ultima-visita-placeholder">
                      <span>Imagen no disponible</span>
                    </div>
                  )}
                  <span className="ultima-visita-provincia">
                    {visita.provinciaNombre}
                  </span>
                </div>

                <div className="ultima-visita-body">
                  <h3 className="ultima-visita-titulo">{visita.titulo}</h3>
                  {visita.fecha && (
                    <p className="ultima-visita-fecha">{visita.fecha}</p>
                  )}
                  {visita.lugar && (
                    <p className="ultima-visita-lugar">{visita.lugar}</p>
                  )}
                  <span className="ultima-visita-cta">Ver visita →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {hayDesplazamiento && (
          <button
            type="button"
            className="ultimas-visitas-flecha ultimas-visitas-flecha-next"
            onClick={() => desplazar(1)}
            disabled={!puedeIrAdelante}
            aria-label="Ver visitas siguientes"
          >
            <span className="ultimas-visitas-flecha-icono">›</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default UltimasVisitas;
