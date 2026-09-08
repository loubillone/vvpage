import React from "react";
import { Link } from "react-router-dom";
import { getCloudinaryUrl } from "../utils/cloudinary";
import "../css/senadoActividadCard.css";

const SenadoActividadCard = ({ tema, anio, actividad }) => {
  return (
    <Link
      to={`/senado/${tema}/${anio}/${actividad.slug}`}
      className="senado-actividad-card-link"
    >
      <article className="senado-actividad-card">
        <div className="senado-actividad-card-imagen-wrapper">
          {actividad.imagenPortada ? (
            <img
              src={getCloudinaryUrl(actividad.imagenPortada)}
              alt={actividad.titulo}
              className="senado-actividad-card-imagen"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="senado-actividad-card-placeholder">
              <p>Imagen no disponible</p>
            </div>
          )}
        </div>

        <div className="senado-actividad-card-body">
          <h3 className="senado-actividad-card-titulo">{actividad.titulo}</h3>
          {actividad.fecha && (
            <p className="senado-actividad-card-fecha">{actividad.fecha}</p>
          )}
          <span className="senado-actividad-card-cta">Ver actividad →</span>
        </div>
      </article>
    </Link>
  );
};

export default SenadoActividadCard;
