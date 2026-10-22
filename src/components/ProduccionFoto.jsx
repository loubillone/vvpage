import PropTypes from "prop-types";
import { getCloudinaryUrl } from "../utils/cloudinary";

// Foto de un establecimiento o actividad sectorial de Industria y
// Producción. `publicId` es el que devuelve indiceProduccion.js (o null):
// cuando no hay foto propia se muestra un recurso neutro con el logo,
// nunca una foto de otra actividad de la misma visita.
const ProduccionFoto = ({ publicId, alt, className = "" }) => {
  return (
    <div className={`produccion-foto ${className}`}>
      {publicId ? (
        <img
          src={getCloudinaryUrl(publicId, "card")}
          alt={alt}
          className="produccion-foto-img"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="produccion-foto-vacia">
          <img src="/logoVV.png" alt="" aria-hidden="true" />
          <span>Fotografía no disponible</span>
        </div>
      )}
    </div>
  );
};

ProduccionFoto.propTypes = {
  publicId: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProduccionFoto;
