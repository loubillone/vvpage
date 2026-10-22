import { Link } from "react-router-dom";
import { indiceProduccion } from "../utils/indiceProduccion";
import { getCloudinaryUrl } from "../utils/cloudinary";
import "../css/accesoProduccionHome.css";

// Banner de acceso a /industria-produccion, entre Últimas visitas y el Mapa.
// Hoy es el único acceso a la sección (todavía no está en Navegador, Footer
// ni sitemap).
// Las cifras salen de indiceProduccion (las mismas que muestran los
// contadores de la sección), no se escriben a mano.
// Foto: portada de la visita a Cíntolo Hermanos en Ituzaingó
// (visitasProvincias, buenos-aires/industria-ituzaingo-2026). El original
// mide 2048×1366, así que "banner" (1600) y "bio" (1000) se entregan en
// el ancho que declara el srcset.
const FOTO = "tpa-web/provincias/bsas/ituzaingo/bsas-ituzaingo-cintolo-1.jpg";

const { totalEstablecimientos, totalActividadesSectoriales } =
  indiceProduccion.estadisticas;

const AccesoProduccionHome = () => {
  return (
    <section
      className="acceso-produccion-home"
      aria-labelledby="acceso-produccion-titulo"
    >
      <div className="container">
        <div className="acceso-produccion-banner">
          <div className="acceso-produccion-foto">
            <img
              src={getCloudinaryUrl(FOTO, "banner")}
              srcSet={`${getCloudinaryUrl(FOTO, "bio")} 1000w, ${getCloudinaryUrl(FOTO, "banner")} 1600w`}
              sizes="(max-width: 767px) 100vw, (max-width: 1400px) 70vw, 900px"
              alt="Victoria Villarruel recorre la planta metalúrgica de Cíntolo Hermanos en Ituzaingó, Buenos Aires"
              width="2048"
              height="1366"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="acceso-produccion-contenido">
            <p className="acceso-produccion-volanta">Nueva sección</p>
            <h2
              id="acceso-produccion-titulo"
              className="acceso-produccion-titulo"
            >
              Industria y Producción
            </h2>
            <p className="acceso-produccion-frase">
              Victoria junto a la Argentina que produce
            </p>
            <p className="acceso-produccion-cifras">
              {/* En mobile cada cifra va en su línea y el separador se oculta. */}
              <span className="acceso-produccion-cifra">
                {totalEstablecimientos} establecimientos productivos
              </span>
              <span className="acceso-produccion-separador" aria-hidden="true">
                {" · "}
              </span>
              <span className="visually-hidden">, </span>
              <span className="acceso-produccion-cifra">
                {totalActividadesSectoriales} actividades del sector
              </span>
            </p>
            <Link to="/industria-produccion" className="acceso-produccion-cta">
              Conocé su agenda productiva <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccesoProduccionHome;
