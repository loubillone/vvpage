import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container, Button } from "react-bootstrap";
import "../css/senadoActividadDetalle.css";
import senadoTemas from "../data/senadoTemas";
import { getCloudinaryUrl } from "../utils/cloudinary";
import ShareButtons from "../components/ShareButtons";

// Convierte "YYYY-MM" o "YYYY-MM-DD" en el año (número).
const anioDeFecha = (fechaISO) => {
  if (!fechaISO) return 0;
  return parseInt(fechaISO.slice(0, 4), 10) || 0;
};

const SenadoActividadDetalle = () => {
  const { tema, anio, actividadSlug } = useParams();
  const navigate = useNavigate();
  const SITE_URL = import.meta.env.VITE_SITE_URL;

  const data = senadoTemas[tema];
  const actividades = data?.actividades || [];
  // La actividad debe coincidir por slug Y por año (evita que una URL con
  // el año incorrecto muestre contenido de otro año).
  const actividad = actividades.find(
    (a) =>
      a.slug === actividadSlug && String(anioDeFecha(a.fechaISO)) === anio
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [tema, anio, actividadSlug]);

  if (!data || !actividad) {
    return (
      <div className="container-senado-detalle">
        <Container>
          <h2>Actividad no encontrada</h2>
          {data ? (
            <Button as={Link} to={`/senado/${tema}`} variant="primary">
              Volver a {data.titulo}
            </Button>
          ) : (
            <Button onClick={() => navigate("/")} variant="primary">
              Volver al Inicio
            </Button>
          )}
        </Container>
      </div>
    );
  }

  const descripcionSEO = `${actividad.titulo} — actividad de Victoria Villarruel en el Senado de la Nación (${data.titulo}, ${actividad.fecha}).`;
  const canonical = `${SITE_URL}/senado/${tema}/${anio}/${actividadSlug}`;

  return (
    <div className="container-senado-detalle">
      <Helmet>
        <title>{actividad.titulo} | Todo por Argentina</title>
        <meta name="description" content={descripcionSEO} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Container>
        <Button
          as={Link}
          to={`/senado/${tema}/${anio}`}
          variant="outline-primary"
          className="boton-volver-senado"
        >
          ← Volver a {anio}
        </Button>

        <h1 className="titulo-senado-detalle">{actividad.titulo}</h1>

        <p className="fecha-senado-detalle">
          <strong>Fecha:</strong> {actividad.fecha}
        </p>

        <ShareButtons
          title={actividad.titulo}
          url={canonical}
          contentType="senado_actividad"
          itemId={actividad.slug}
        />

        {actividad.imagenPortada && (
          <div className="imagen-senado-detalle-wrapper">
            <img
              src={getCloudinaryUrl(actividad.imagenPortada)}
              alt={actividad.titulo}
              className="imagen-senado-detalle"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        )}

        <div className="texto-senado-detalle-container">
          <div className="texto-senado-detalle">{actividad.texto}</div>
        </div>
      </Container>
    </div>
  );
};

export default SenadoActividadDetalle;
