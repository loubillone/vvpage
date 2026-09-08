import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "react-bootstrap";
import "../css/senadoTema.css";
import senadoTemas from "../data/senadoTemas";
import SenadoActividadCard from "../components/SenadoActividadCard";

// Convierte "YYYY-MM" o "YYYY-MM-DD" en el año (número).
const anioDeFecha = (fechaISO) => {
  if (!fechaISO) return 0;
  return parseInt(fechaISO.slice(0, 4), 10) || 0;
};

// Convierte "YYYY-MM" o "YYYY-MM-DD" en un número comparable (YYYYMMDD),
// para poder ordenar actividades sin importar la precisión de la fecha.
const fechaISOaNumero = (fechaISO) => {
  if (!fechaISO) return 0;
  const [anio, mes, dia] = fechaISO.split("-");
  const anioNum = parseInt(anio, 10) || 0;
  const mesNum = mes ? parseInt(mes, 10) : 1;
  const diaNum = dia ? parseInt(dia, 10) : 1;
  return anioNum * 10000 + mesNum * 100 + diaNum;
};

const SenadoAnio = () => {
  const { tema, anio } = useParams();
  const navigate = useNavigate();
  const SITE_URL = import.meta.env.VITE_SITE_URL;

  const data = senadoTemas[tema];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [tema, anio]);

  if (!data) {
    return (
      <div className="container-senado-tema">
        <div className="container">
          <h2>Tema no encontrado</h2>
          <Button onClick={() => navigate("/")} variant="primary">
            Volver al Inicio
          </Button>
        </div>
      </div>
    );
  }

  const anioNum = parseInt(anio, 10);
  const actividadesDelAnio = (data.actividades || [])
    .filter((actividad) => anioDeFecha(actividad.fechaISO) === anioNum)
    .sort((a, b) => fechaISOaNumero(b.fechaISO) - fechaISOaNumero(a.fechaISO));

  if (actividadesDelAnio.length === 0) {
    return (
      <div className="container-senado-tema">
        <div className="container">
          <h2>Año no encontrado</h2>
          <Button as={Link} to={`/senado/${tema}`} variant="primary">
            Volver a {data.titulo}
          </Button>
        </div>
      </div>
    );
  }

  const tituloSEO = `Senado | ${data.titulo} ${anio}`;
  const descripcionSEO = `Actividades de Victoria Villarruel vinculadas a ${
    data.titulo
  } durante ${anio}.`;
  const canonical = `${SITE_URL}/senado/${tema}/${anio}`;

  return (
    <div className="container-senado-tema">
      <Helmet>
        <title>{tituloSEO}</title>
        <meta name="description" content={descripcionSEO} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="container">
        <Button
          as={Link}
          to={`/senado/${tema}`}
          variant="outline-primary"
          className="boton-volver-senado"
        >
          ← Volver a {data.titulo}
        </Button>

        <h1 className="titulo-senado-anio">
          {data.titulo} — {anio}
        </h1>

        <p className="senado-anios-subtitulo">
          {actividadesDelAnio.length}{" "}
          {actividadesDelAnio.length === 1 ? "actividad" : "actividades"}
        </p>

        <div className="senado-actividades-grid">
          {actividadesDelAnio.map((actividad) => (
            <SenadoActividadCard
              key={actividad.slug}
              tema={tema}
              anio={anio}
              actividad={actividad}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SenadoAnio;
