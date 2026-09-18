import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import "../css/discursos.css";
import VideoGrid from "../components/VideoGrid";
import VideoModal from "../components/VideoModal";
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

// Función helper para extraer el ID de YouTube de diferentes formatos de URL
const getYouTubeId = (url) => {
  if (!url) return null;

  // Si ya es un ID (sin URL), devolverlo directamente
  if (
    !url.includes("youtube.com") &&
    !url.includes("youtu.be") &&
    !url.includes("http")
  ) {
    return url;
  }

  // Diferentes formatos de URL de YouTube
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/.*[?&]v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};
const Discursos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  // Categorías disponibles
  const categorias = ["Todos", "Senado", "Provincias", "Varios"];

  // Todos los discursos, con el año derivado de fechaISO (no agrupado
  // estructuralmente en los datos, ver src/data/discursos.js).
  //
  // VideoGrid.jsx y VideoModal.jsx parsean "fecha" como "YYYY-MM"
  // (video.fecha.split("-")) para mostrar mes/año. El dato central expone
  // "fecha" como texto legible ("Abril de 2024"), igual que
  // senadoTemas.jsx/visitasProvincias.jsx, así que acá se remapea "fecha" a
  // fechaISO antes de pasarla a esos componentes, sin tener que tocarlos.
  const todosLosVideos = useMemo(() => {
    return discursosData.map((discurso) => ({
      ...discurso,
      año: anioDeFecha(discurso.fechaISO),
      fecha: discurso.fechaISO,
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
    // Ordenar videos dentro de cada año por fecha descendente (más reciente primero)
    Object.keys(agrupados).forEach((año) => {
      agrupados[año].sort((a, b) => {
        // Comparar fechas en formato "YYYY-MM"
        return b.fecha.localeCompare(a.fecha);
      });
    });
    return agrupados;
  }, [videosFiltrados]);

  const handleVideoClick = (video) => {
    setVideoSeleccionado(video);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setVideoSeleccionado(null);
  };

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

        {/* Videos agrupados por año */}
        {Object.keys(videosPorAño)
          .sort((a, b) => b - a) // Ordenar años descendente (2025 primero)
          .map((año) => (
            <div key={año} className="videos-por-año">
              <h3 className="año-titulo">{año}</h3>
              <VideoGrid
                videos={videosPorAño[año]}
                onVideoClick={handleVideoClick}
              />
            </div>
          ))}

        {videosFiltrados.length === 0 && (
          <div className="sin-videos">
            <p>No hay videos disponibles para esta categoría.</p>
          </div>
        )}
      </Container>

      {/* Modal de video */}
      {mostrarModal && videoSeleccionado && (
        <VideoModal video={videoSeleccionado} onClose={cerrarModal} />
      )}

      <Footer />
    </div>
  );
};

export default Discursos;
