import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container, Button } from "react-bootstrap";
import "../css/discursoDetalle.css";
import discursosData from "../data/discursos";
import { getYouTubeEmbedUrl } from "../utils/youtube";

const DiscursoDetalle = () => {
  const { discursoSlug } = useParams();
  const SITE_URL = import.meta.env.VITE_SITE_URL;

  const discurso = discursosData.find((d) => d.slug === discursoSlug);

  if (!discurso) {
    return (
      <div className="container-discurso-detalle">
        <Container>
          <h2>Discurso no encontrado</h2>
          <Button as={Link} to="/discursos" variant="primary">
            Volver a Discursos
          </Button>
        </Container>
      </div>
    );
  }

  const canonical = `${SITE_URL}/discursos/${discurso.slug}`;
  const embedUrl = getYouTubeEmbedUrl(discurso.videoUrl);

  return (
    <div className="container-discurso-detalle">
      <Helmet>
        <title>{`${discurso.titulo} | Todo por Argentina`}</title>
        <meta name="description" content={discurso.descripcion} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Container>
        <Button
          as={Link}
          to="/discursos"
          variant="outline-primary"
          className="boton-volver-discursos"
        >
          ← Volver a Discursos
        </Button>

        <h1 className="titulo-discurso-detalle">{discurso.titulo}</h1>

        <p className="metadata-discurso-detalle">
          <strong>{discurso.fecha}</strong>
          {discurso.categoria && <> · {discurso.categoria}</>}
        </p>

        <div className="video-discurso-detalle-wrapper">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="video-discurso-detalle-player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={discurso.titulo}
            />
          ) : (
            <div className="video-discurso-detalle-error">
              <p>No se pudo cargar el video. Por favor, verifica la URL.</p>
            </div>
          )}
        </div>

        {discurso.descripcion && (
          <div className="descripcion-discurso-detalle-container">
            <p className="descripcion-discurso-detalle">
              {discurso.descripcion}
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default DiscursoDetalle;
