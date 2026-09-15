import React from "react";
import { Link } from "react-router-dom";
import { getCloudinaryUrl } from "../utils/cloudinary";
import "../css/visitaCard.css";

const VisitaCard = ({ visita, provinciaSlug }) => {
  return (
    <Link
      to={`/provincias/${provinciaSlug}/${visita.slug}`}
      className="visita-card-link"
    >
      <article className="visita-card">
        <div className="visita-card-imagen-wrapper">
          {visita.imagenPortada ? (
            <img
              src={getCloudinaryUrl(visita.imagenPortada)}
              alt={visita.titulo}
              className="visita-card-imagen"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="visita-card-placeholder">
              <p>Imagen no disponible</p>
            </div>
          )}
        </div>

        <div className="visita-card-body">
          <h3 className="visita-card-titulo">{visita.titulo}</h3>
          {visita.fecha && <p className="visita-card-fecha">{visita.fecha}</p>}
          {visita.lugar && <p className="visita-card-lugar">{visita.lugar}</p>}
          <span className="visita-card-cta">Ver visita →</span>
        </div>
      </article>
    </Link>
  );
};

export default VisitaCard;
