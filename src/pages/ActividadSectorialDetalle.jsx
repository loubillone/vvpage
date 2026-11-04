import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../css/provinciaDetalle.css";
import { Carousel, Container, Button } from "react-bootstrap";
import { actividadesSectoriales } from "../data/actividadesSectoriales";
import { actividadesSectorialesPropias } from "../data/actividadesSectorialesPropias";
import { getCloudinaryUrl } from "../utils/cloudinary";
import ShareButtons from "../components/ShareButtons";

// Detalle de una actividad del sector productivo hecha fuera de una visita
// provincial (actividadesSectorialesPropias.jsx). Las demás actividades
// enlazan a su visita (VisitaDetalle). Reutiliza el diseño y el CSS de
// VisitaDetalle; nombre y demás metadatos salen de actividadesSectoriales.js.
//
// El detalle se marca noindex y no figura en el sitemap hasta que se
// apruebe su indexación (la página principal, IndustriaProduccion, ya es
// indexable). Al habilitarlo, quitar el noindex de la página encontrada;
// el de "Actividad no encontrada" se mantiene.
//
// "Volver" abre IndustriaProduccion en la pestaña de actividades (vía
// location.state, sin tocar la URL), se llegue desde la agenda o desde la
// URL directa.
const VOLVER = { to: "/industria-produccion", state: { apartado: "actividades" } };

const ActividadSectorialDetalle = () => {
  const { actividadSlug } = useParams();
  const SITE_URL = import.meta.env.VITE_SITE_URL;

  const registro = actividadesSectoriales[actividadSlug];
  const actividad = registro && actividadesSectorialesPropias[actividadSlug];

  const [imagenIndex, setImagenIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setImagenIndex(0);
  }, [actividadSlug]);

  if (!actividad) {
    return (
      <div className="container-provincia-detalle">
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="container">
          <h2>Actividad no encontrada</h2>
          <Button as={Link} {...VOLVER} variant="primary">
            Volver a Industria y Producción
          </Button>
        </div>
      </div>
    );
  }

  const lugar = [actividad.lugar, actividad.ubicacion].filter(Boolean).join(" — ");
  const canonical = `${SITE_URL}/industria-produccion/${actividadSlug}`;

  return (
    <div className="container-provincia-detalle">
      <Helmet>
        <title>{`${registro.nombre} | Todo por Argentina`}</title>
        <meta name="description" content={actividad.descripcionSEO} />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Container>
        <div className="row">
          <div className="col-12">
            <Button
              as={Link}
              {...VOLVER}
              variant="outline-primary"
              className="boton-volver"
            >
              ← Volver a Industria y Producción
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="titulo-provincia">{registro.nombre}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="info-visita">
              <p className="fecha-visita">
                <strong>Fecha:</strong> {actividad.fecha}
              </p>
              <p className="lugar-visita">
                <strong>Lugar:</strong> {lugar}
              </p>
            </div>
          </div>
        </div>

        <ShareButtons
          title={registro.nombre}
          url={canonical}
          contentType="actividad_sectorial"
          itemId={actividadSlug}
        />

        <div className="row">
          <div className="col-12">
            <Carousel
              fade
              indicators={actividad.imagenes.length > 1}
              className="carousel-provincia"
              activeIndex={imagenIndex}
              onSelect={(index) => setImagenIndex(index)}
            >
              {actividad.imagenes.map((imagen, index) => {
                const src = getCloudinaryUrl(imagen, "detail");
                return (
                  <Carousel.Item key={imagen}>
                    <div className="imagen-provincia-wrapper">
                      <img
                        src={src}
                        className="imagen-provincia-fondo"
                        alt=""
                        aria-hidden="true"
                      />
                      <img
                        src={src}
                        alt={`${registro.nombre} - Imagen ${index + 1}`}
                        className="imagen-provincia"
                        decoding="async"
                        // React 18 no reconoce fetchPriority: en minúscula llega al DOM.
                        // eslint-disable-next-line react/no-unknown-property
                        fetchpriority={index === 0 ? "high" : "auto"}
                      />
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="descripcion-container">
              <h2 className="subtitulo-descripcion">Sobre la actividad</h2>
              <div className="descripcion-visita">{actividad.descripcion}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ActividadSectorialDetalle;
