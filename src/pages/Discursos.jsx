import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import "../css/discursos.css";
import DiscursoCard from "../components/DiscursoCard";
import Footer from "../components/Footer";
import discursosTitulo from "../assets/img/discursos/discursos.png";
import discursosData from "../data/discursos";

const SITE_URL = import.meta.env.VITE_SITE_URL;

// Convierte "YYYY-MM" o "YYYY-MM-DD" en el año (número). Mismo criterio que
// ya usan SenadoAnio.jsx / SenadoActividadDetalle.jsx para derivar el año
// desde fechaISO en vez de agruparlo estructuralmente en los datos.
const anioDeFecha = (fechaISO) => {
  if (!fechaISO) return 0;
  return parseInt(fechaISO.slice(0, 4), 10) || 0;
};

const Discursos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");

  // Categorías disponibles
  const categorias = ["Todos", "Senado", "Provincias", "Varios"];

  // Todos los discursos, con el año derivado de fechaISO (no agrupado
  // estructuralmente en los datos, ver src/data/discursos.js).
  const todosLosVideos = useMemo(() => {
    return discursosData.map((discurso) => ({
      ...discurso,
      año: anioDeFecha(discurso.fechaISO),
    }));
  }, []);

  // Filtrar videos según categoría seleccionada
  const videosFiltrados = useMemo(() => {
    if (filtroCategoria === "Todos") {
      return todosLosVideos;
    }
    return todosLosVideos.filter(
      (video) => video.categoria === filtroCategoria,
    );
  }, [filtroCategoria, todosLosVideos]);

  // Agrupar videos filtrados por año y ordenar por fecha descendente
  const videosPorAño = useMemo(() => {
    const agrupados = {};
    videosFiltrados.forEach((video) => {
      if (!agrupados[video.año]) {
        agrupados[video.año] = [];
      }
      agrupados[video.año].push(video);
    });
    // Ordenar discursos dentro de cada año por fechaISO descendente (más
    // reciente primero). Se usa fechaISO (formato "YYYY-MM", ordenable
    // lexicográficamente) y no "fecha" (que ahora es el texto legible,
    // "Abril de 2024", que ya no sirve para ordenar).
    Object.keys(agrupados).forEach((año) => {
      agrupados[año].sort((a, b) => b.fechaISO.localeCompare(a.fechaISO));
    });
    return agrupados;
  }, [videosFiltrados]);

  return (
    <div>
      <Helmet>
        <title>Discursos | Victoria Villarruel</title>
        <meta
          name="description"
          content="Discursos y videos de Victoria Villarruel, vicepresidente de la Nación Argentina."
        />
        <link rel="canonical" href={`${SITE_URL}/discursos`} />
      </Helmet>

      <h1 className="visually-hidden">Discursos de Victoria Villarruel</h1>

      <Container className="discursos-container">
        <div className="discursos-header">
          <div className="discursos-titulo-imagen">
            <img src={discursosTitulo} alt="Discursos" />
          </div>

          {/* Filtros */}
          <div className="filtros-container">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={`filtro-btn ${
                  filtroCategoria === categoria ? "active" : ""
                }`}
                onClick={() => setFiltroCategoria(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Discursos agrupados por año */}
        {Object.keys(videosPorAño)
          .sort((a, b) => b - a) // Ordenar años descendente (más reciente primero)
          .map((año) => (
            <div key={año} className="videos-por-año">
              <h3 className="año-titulo">{año}</h3>
              <div className="discursos-grid">
                {videosPorAño[año].map((discurso) => (
                  <DiscursoCard key={discurso.slug} discurso={discurso} />
                ))}
              </div>
            </div>
          ))}

        {videosFiltrados.length === 0 && (
          <div className="sin-videos">
            <p>No hay videos disponibles para esta categoría.</p>
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default Discursos;
