import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/discursoCard.css";
import { getYouTubeThumbnail } from "../utils/youtube";

// Card de discurso para el índice /discursos. Misma línea visual que
// VisitaCard.jsx / SenadoAnioCard.jsx (fondo blanco, sombra suave, hover
// discreto, card completa clickeable vía <Link>), adaptada a contenido de
// video: thumbnail 16:9 en vez de foto 4:3, y categoría superpuesta sobre
// la imagen en vez de badge dentro del cuerpo.
const DiscursoCard = ({ discurso }) => {
  const thumbnail = getYouTubeThumbnail(discurso.videoUrl);

  return (
    <Link to={`/discursos/${discurso.slug}`} className="discurso-card-link">
      <article className="discurso-card">
        <div className="discurso-card-imagen-wrapper">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={discurso.titulo}
              className="discurso-card-imagen"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="discurso-card-placeholder" aria-hidden="true" />
          )}
          {discurso.categoria && (
            <span className="discurso-card-categoria">
              {discurso.categoria}
            </span>
          )}
        </div>

        <div className="discurso-card-body">
          <h3 className="discurso-card-titulo">{discurso.titulo}</h3>
          {discurso.fecha && (
            <p className="discurso-card-fecha">{discurso.fecha}</p>
          )}
          <span className="discurso-card-cta">Ver discurso →</span>
        </div>
      </article>
    </Link>
  );
};

// Cubre únicamente los campos de "discurso" que esta card realmente
// consume (videoUrl, slug, titulo, categoria, fecha). No valida el objeto
// completo de src/data/discursos.js (que además tiene otros campos como
// descripcion, fechaISO, precisionFecha, id, no usados aquí).
DiscursoCard.propTypes = {
  discurso: PropTypes.shape({
    videoUrl: PropTypes.string,
    slug: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    categoria: PropTypes.string,
    fecha: PropTypes.string,
  }).isRequired,
};

export default DiscursoCard;
