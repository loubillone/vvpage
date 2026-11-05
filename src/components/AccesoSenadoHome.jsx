import { Link } from "react-router-dom";
import { getCloudinaryUrl } from "../utils/cloudinary";
import "../css/accesoSenadoHome.css";

// Tarjetas de acceso a los dos temas de Senado, debajo del Mapa. Versión
// compacta del banner de Industria y Producción (AccesoProduccionHome):
// misma paleta, tipografía y botón. El destino es la ruta /senado/:tema ya
// existente (las claves de tema están en senadoTemas.jsx y no se renombran).
// "Explorar" es un <Link> (se renderiza como <a href> rastreable); su
// ::after cubre la tarjeta entera para que todo sea clickeable con un único
// enlace, cuyo nombre accesible suma el título oculto ("Explorar La causa
// Malvinas") para distinguir los dos.
// Fotos: portadas de actividades ya publicadas en senadoTemas.jsx, elegidas
// porque Victoria aparece en el centro (queda fuera de la columna de texto):
// - Malvinas: acto de Ushuaia, abril de 2025 (malvinas/ushuaia-2025).
// - Víctimas: homenaje en el Senado, septiembre de 2025
//   (victimasDelTerrorismo/victimas-terrorismo-2025).
// width/height son los del original (solo fijan la proporción).
const TARJETAS = [
  {
    clave: "malvinas",
    volanta: "Malvinas",
    titulo: "La causa Malvinas",
    descripcion:
      "El compromiso con la soberanía argentina y la causa Malvinas.",
    destino: "/senado/malvinas",
    foto: "tpa-web/senado/malvinas/senado-malv-2",
    ancho: 1280,
    alto: 853,
    alt: "Victoria Villarruel junto a veteranos de Malvinas en el acto por los 43 años de la Gesta, en Ushuaia",
  },
  {
    clave: "victimas",
    volanta: "Memoria y justicia",
    titulo: "Víctimas del terrorismo",
    descripcion:
      "La memoria y el reconocimiento de las víctimas del terrorismo.",
    destino: "/senado/victimasDelTerrorismo",
    foto: "tpa-web/senado/victimas/senado-victimas-2",
    ancho: 3000,
    alto: 2000,
    alt: "Victoria Villarruel en el homenaje del Senado por el Día Internacional de las Víctimas del Terrorismo",
  },
];

const AccesoSenadoHome = () => {
  return (
    <section
      className="acceso-senado-home"
      aria-label="Malvinas y Víctimas del Terrorismo"
    >
      <div className="container">
        <div className="acceso-senado-grilla">
          {TARJETAS.map(
            ({ clave, volanta, titulo, descripcion, destino, foto, ancho, alto, alt }) => (
              <div
                key={clave}
                className={`acceso-senado-tarjeta acceso-senado-tarjeta-${clave}`}
              >
                <div className="acceso-senado-foto">
                  <img
                    src={getCloudinaryUrl(foto, "bio")}
                    alt={alt}
                    width={ancho}
                    height={alto}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="acceso-senado-contenido">
                  <p className="acceso-senado-volanta">{volanta}</p>
                  <h2 className="acceso-senado-titulo">{titulo}</h2>
                  <p className="acceso-senado-descripcion">{descripcion}</p>
                  <Link to={destino} className="acceso-senado-cta">
                    Explorar
                    <span className="visually-hidden"> {titulo}</span>{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AccesoSenadoHome;
