import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import "../css/discursos.css";
import VideoGrid from "../components/VideoGrid";
import VideoModal from "../components/VideoModal";
import Footer from "../components/Footer";
import discursosTitulo from "../assets/img/discursos/discursos.png";

const SITE_URL = import.meta.env.VITE_SITE_URL;

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
  const discursos = {
    2024: [
      {
        id: 1,
        titulo: "Diploma de Honor a Veteranos de Malvinas",
        descripcion:
          "Ceremonia de reconocimiento a veteranos de la Guerra de Malvinas mediante la entrega de diplomas de honor, destacando su servicio, compromiso y contribución a la historia nacional.",
        videoUrl: "https://www.youtube.com/watch?v=u8KeWw8w25E",
        fecha: "2024-04",
        categoria: "Senado",
      },
      {
        id: 2,
        titulo: "Mesa de disertación sobre educación",
        descripcion:
          "Espacio de debate sobre el rol de la educación en el desarrollo del país, abordando su importancia como herramienta clave para el progreso, la libertad y el crecimiento social.",
        videoUrl: "https://www.youtube.com/watch?v=nVsSs5gFIAs",
        fecha: "2024-09",
        categoria: "Senado",
      },
      {
        id: 3,
        titulo: "Homenaje a Víctimas del Terrorismo",
        descripcion:
          "Acto realizado en el Senado en conmemoración de las víctimas del terrorismo.",
        videoUrl: "https://youtu.be/lKyikX4_ofw?si=Q-mX2mGvlyfXJH0D",
        fecha: "2024-08",
        categoria: "Senado",
      },
      {
        id: 4,
        titulo: "Mención de Honor al Hospital Militar",
        descripcion:
          "Ceremonia de entrega de una distinción al Hospital Militar Central en reconocimiento a su trayectoria, compromiso profesional y servicio en el sistema de salud argentino.",
        videoUrl: "https://www.youtube.com/watch?v=PCCRWQC-jl4",
        fecha: "2024-10",
        categoria: "Senado",
      },
      {
        id: 5,
        titulo: "Día de Nacional de las Iglesias Evangélicas",
        descripcion:
          "Reconocimiento al rol de las iglesias evangélicas en la sociedad argentina, destacando su aporte en el ámbito social, espiritual y comunitario.",
        videoUrl: "https://www.youtube.com/watch?v=VccxlldDSmE",
        fecha: "2024-11",
        categoria: "Varios",
      },
      {
        id: 6,
        titulo: "40 años del Tratado de Paz y Argentina - Chile",
        descripcion:
          "40° aniversario del Tratado de Paz y Amistad entre Argentina y Chile, destacando su importancia histórica para la paz, la cooperación y la integración regional.",
        videoUrl: "https://www.youtube.com/watch?v=hvteNGBG1Lw",
        fecha: "2024-04",
        categoria: "Senado",
      },
      {
        id: 7,
        titulo:
          "Yapeyú - 246° aniversario del natalicio del General José de San Martín",
        descripcion:
          "Celebración del 246° aniversario del natalicio del General José de San Martín en Yapeyú, destacando su papel en la historia argentina.",
        videoUrl: "https://www.youtube.com/watch?v=ivEwhb_O6lU",
        fecha: "2024-02",
        categoria: "Provincias",
      },
    ],
    2025: [
      {
        id: 1,
        titulo: "Coloquio sobre Turquía",
        descripcion:
          "Participación del coloquio internacional dedicado a analizar el rol estratégico de Türkiye en el escenario global.",
        videoUrl: "https://www.youtube.com/watch?v=J3_Em8E8ryQ",
        fecha: "2025-11",
        categoria: "Senado",
      },
      {
        id: 2,
        titulo: "Corrientes - Homenaje a Cabral",
        descripcion:
          "Ceremonia de traslado y homenaje a los restos del sargento Juan Bautista Cabral, héroe del Combate de San Lorenzo.",
        videoUrl: "https://www.youtube.com/watch?v=i5_KQRjIooo",
        fecha: "2025-08",
        categoria: "Provincias",
      },
      {
        id: 3,
        titulo: "Día del Héroe Formoseño",
        descripcion:
          "Homenaje a los policías caídos en defensa de las instituciones durante el ataque al Regimiento de Infantería de Monte 29 en 1975.",
        videoUrl: "https://www.youtube.com/watch?v=DfvB7XWvXUo",
        fecha: "2025-10",
        categoria: "Provincias",
      },
      {
        id: 4,
        titulo: "Homenaje a Víctimas del Terrorismo",
        descripcion:
          "Acto conmemorativo realizado en el Senado en el marco del Día Internacional de las Víctimas del Terrorismo.",
        videoUrl: "https://www.youtube.com/watch?v=HER2OLIv1Vc",
        fecha: "2025-09",
        categoria: "Senado",
      },
      {
        id: 5,
        titulo: "Malvinas - Epopeya",
        descripcion:
          "Evento dedicado a recordar la Guerra de Malvinas como parte fundamental de la historia argentina.",
        videoUrl: "https://www.youtube.com/watch?v=wvaQF8gSrx0",
        fecha: "2025-04",
        categoria: "Senado",
      },
      {
        id: 6,
        titulo: "Héroes de Manchala",
        descripcion:
          "Ceremonia en el Senado en reconocimiento a los soldados que participaron en el Combate de Manchalá en 1975.",
        videoUrl: "https://www.youtube.com/watch?v=RYOqc7XKhyA",
        fecha: "2025-07",
        categoria: "Senado",
      },
      {
        id: 7,
        titulo: "Día del Niño por Nacer",
        descripcion:
          "Actividad institucional en conmemoración del Día del Niño por Nacer, donde se abordaron temas relacionados con la vida, la familia y el valor de la maternidad.",
        videoUrl: "https://www.youtube.com/watch?v=jA9jWGZTpAg",
        fecha: "2025-03",
        categoria: "Senado",
      },
      {
        id: 8,
        titulo: "A 5 años de la pandemia",
        descripcion:
          "Mensaje institucional en el que la vicepresidente reflexiona sobre el impacto social, económico y humano de la pandemia de COVID-19.",
        videoUrl: "https://www.youtube.com/watch?v=kwQtl0CCZBY",
        fecha: "2025-11",
        categoria: "Senado",
      },
      {
        id: 9,
        titulo: "Premios Labor DDHH",
        descripcion:
          "Ceremonia realizada en el Senado de la Nación donde se entregaron los Premios Derechos Humanos 2025 a organizaciones, fundaciones y personas destacadas por su compromiso social y la defensa de los derechos humanos.",
        videoUrl: "https://www.youtube.com/watch?v=N6kCpgyfeSY",
        fecha: "2025-12",
        categoria: "Senado",
      },
      {
        id: 10,
        titulo: "Día del Veterano en Ushuaia",
        descripcion:
          "Acto conmemorativo realizado en Ushuaia en homenaje a los veteranos y caídos en la Guerra de Malvinas.",
        videoUrl: "https://www.youtube.com/watch?v=2XbWj_LSVRU",
        fecha: "2025-04",
        categoria: "Provincias",
      },
      {
        id: 11,
        titulo: "Chubut - 90° aniversario de Río Mayo",
        descripcion:
          "Durante la ceremonia, Villarruel recordó con emoción su niñez en la localidad de Río Mayo.",
        videoUrl: "https://www.youtube.com/watch?v=NQGe2Y87jGU",
        fecha: "2025-08",
        categoria: "Provincias",
      },
    ],
  };

  const [filtroCategoria, setFiltroCategoria] = useState("Todos");
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  // Categorías disponibles
  const categorias = ["Todos", "Senado", "Provincias", "Varios"];

  // Combinar todos los videos y ordenar por año (más reciente primero)
  const todosLosVideos = useMemo(() => {
    const videos = [];
    // Primero 2025, luego 2024
    if (discursos[2025]) {
      videos.push(...discursos[2025].map((v) => ({ ...v, año: 2025 })));
    }
    if (discursos[2024]) {
      videos.push(...discursos[2024].map((v) => ({ ...v, año: 2024 })));
    }
    return videos;
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
      <h1 className="visually-hidden">
        Discursos y videos de Victoria Villarruel
      </h1>

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
