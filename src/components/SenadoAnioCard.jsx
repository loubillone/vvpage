import React from "react";
import { Link } from "react-router-dom";
import { getCloudinaryUrl } from "../utils/cloudinary";
import "../css/senadoAnioCard.css";

// Card editorial de un año dentro de un tema de Senado.
// Todo se deriva automáticamente de las actividades de ese año (ya vienen
// ordenadas de más reciente a más antigua por SenadoTemas):
// - imagen representativa = imagenPortada de la actividad más reciente
// - referencias = títulos de hasta 2 actividades (sin resumir ni inventar)
// La cantidad de actividades no se muestra aquí: queda solo dentro de la
// página del año (/senado/:tema/:anio), para no repetir el dato dos veces.
const SenadoAnioCard = ({ tema, anio, actividades }) => {
  const imagenPortada = actividades[0]?.imagenPortada;
  const referencias = actividades.slice(0, 2).map((a) => a.titulo);

  return (
    <Link to={`/senado/${tema}/${anio}`} className="senado-anio-card-link">
      <article className="senado-anio-card">
        <div className="senado-anio-card-imagen-wrapper">
          {imagenPortada ? (
            <img
              src={getCloudinaryUrl(imagenPortada)}
              alt={`${anio}`}
              className="senado-anio-card-imagen"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="senado-anio-card-placeholder" aria-hidden="true" />
          )}
          <span className="senado-anio-card-anio">{anio}</span>
        </div>

        <div className="senado-anio-card-body">
          <p className="senado-anio-card-referencias">
            {referencias.join(" · ")}
          </p>

          <span className="senado-anio-card-cta">Explorar {anio} →</span>
        </div>
      </article>
    </Link>
  );
};

export default SenadoAnioCard;
