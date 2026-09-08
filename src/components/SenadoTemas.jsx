import React from "react";
import { Link } from "react-router-dom";
import "../css/senadoTema.css";
import senadoTemas from "../data/senadoTemas";
import SenadoAnioCard from "./SenadoAnioCard";

// Convierte "YYYY-MM" o "YYYY-MM-DD" en el año (número), para agrupar
// actividades por año sin importar la precisión de la fecha.
const anioDeFecha = (fechaISO) => {
  if (!fechaISO) return 0;
  return parseInt(fechaISO.slice(0, 4), 10) || 0;
};

// Convierte "YYYY-MM" o "YYYY-MM-DD" en un número comparable (YYYYMMDD),
// para poder ordenar actividades dentro de un año sin importar la
// precisión de la fecha.
const fechaISOaNumero = (fechaISO) => {
  if (!fechaISO) return 0;
  const [anio, mes, dia] = fechaISO.split("-");
  const anioNum = parseInt(anio, 10) || 0;
  const mesNum = mes ? parseInt(mes, 10) : 1;
  const diaNum = dia ? parseInt(dia, 10) : 1;
  return anioNum * 10000 + mesNum * 100 + diaNum;
};

// Bajadas editoriales breves por tema, exclusivas de esta vista (no forman
// parte de senadoTemas.jsx porque son un recurso de presentación, igual que
// el h1Map / seoData ya hardcodeados en src/pages/Senado.jsx).
const BAJADA_POR_TEMA = {
  malvinas:
    "Actividades, homenajes y acciones vinculadas a la Causa Malvinas.",
  victimasDelTerrorismo:
    "Homenajes y trabajo del Senado en memoria y reconocimiento de las víctimas del terrorismo.",
};

const SenadoTemas = ({ tema }) => {
  const data = senadoTemas[tema];

  if (!data) {
    return (
      <div className="container-senado-tema">
        <div className="container">
          <h2>Tema no encontrado</h2>
          <Link to="/" className="boton-volver-senado">
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  const actividades = data.actividades || [];

  // Agrupa las actividades por año (sin hardcodear) y, dentro de cada año,
  // las ordena de más reciente a más antigua: de ahí se derivan la imagen
  // representativa (imagenPortada de la primera) y las referencias de
  // título de cada card, sin inventar resúmenes.
  const actividadesPorAnio = actividades.reduce((acc, actividad) => {
    const anio = anioDeFecha(actividad.fechaISO);
    if (!acc[anio]) acc[anio] = [];
    acc[anio].push(actividad);
    return acc;
  }, {});

  // Orden cronológico: más reciente → más antiguo.
  const anios = Object.keys(actividadesPorAnio)
    .map(Number)
    .sort((a, b) => b - a);

  const bajada = BAJADA_POR_TEMA[tema];

  return (
    <div className="container-senado-tema">
      <div className="container">
        <header className="senado-tema-header">
          {data.imagenTitulo && (
            <div className="senado-tema-header-imagen">
              <img src={data.imagenTitulo} alt={data.titulo} />
            </div>
          )}

          {bajada && <p className="senado-tema-bajada">{bajada}</p>}
        </header>

        <div className="senado-anios-grid">
          {anios.map((anio) => {
            const actividadesDelAnio = [...actividadesPorAnio[anio]].sort(
              (a, b) =>
                fechaISOaNumero(b.fechaISO) - fechaISOaNumero(a.fechaISO)
            );
            return (
              <SenadoAnioCard
                key={anio}
                tema={tema}
                anio={anio}
                actividades={actividadesDelAnio}
              />
            );
          })}
        </div>

        <div className="senado-tema-cierre">
          <blockquote className="senado-tema-frase">{data.frase}</blockquote>
        </div>
      </div>
    </div>
  );
};

export default SenadoTemas;
