import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../css/provinciaDetalle.css";
import { Carousel, Container, Button } from "react-bootstrap";
import { visitasProvincias } from "../data/visitasProvincias";
import { getCloudinaryUrl } from "../utils/cloudinary";
import ShareButtons from "../components/ShareButtons";

const VisitaDetalle = () => {
  const { slug, visitaSlug } = useParams();
  const SITE_URL = import.meta.env.VITE_SITE_URL;

  const provincia = visitasProvincias[slug];
  const visitas = provincia?.visitas || [];
  const visita = visitas.find((v) => v.slug === visitaSlug);

  const [imagenIndex, setImagenIndex] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [slug, visitaSlug]);

  if (!provincia || !visita) {
    return (
      <div className="container-provincia-detalle">
        <div className="container">
          <h2>Visita no encontrada</h2>
          {provincia ? (
            <Button as={Link} to={`/provincias/${slug}`} variant="primary">
              Volver a {provincia.nombre}
            </Button>
          ) : (
            <Button as={Link} to="/" variant="primary">
              Volver al Inicio
            </Button>
          )}
        </div>
      </div>
    );
  }

  const tituloSEO = `${visita.titulo} | Todo por Argentina`;
  const descripcionSEO = `${visita.titulo} — recorrida de Victoria Villarruel en ${
    provincia.nombre
  }${visita.lugar ? ` (${visita.lugar})` : ""}, ${visita.fecha}.`;
  const canonical = `${SITE_URL}/provincias/${slug}/${visitaSlug}`;

  return (
    <div className="container-provincia-detalle">
      <Helmet>
        <title>{tituloSEO}</title>
        <meta name="description" content={descripcionSEO} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Container>
        <div className="row">
          <div className="col-12">
            <Button
              as={Link}
              to={`/provincias/${slug}`}
              variant="outline-primary"
              className="boton-volver"
            >
              ← Volver a {provincia.nombre}
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="titulo-provincia">{visita.titulo}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="info-visita">
              <p className="fecha-visita">
                <strong>Fecha de visita:</strong> {visita.fecha}
              </p>
              {visita.lugar && (
                <p className="lugar-visita">
                  <strong>Lugar:</strong> {visita.lugar}
                </p>
              )}
            </div>
          </div>
        </div>

        <ShareButtons
          title={visita.titulo}
          url={canonical}
          contentType="visita"
          itemId={visita.slug}
        />

        {/* Si la visita tiene actividades, renderizar cada una */}
        {visita.actividades && visita.actividades.length > 0 ? (
          visita.actividades.map((actividad, actividadIndex) => (
            <div
              key={actividadIndex}
              style={{ marginBottom: "3rem" }}
              className="actividad-container"
            >
              <div className="row">
                <div className="col-12">
                  <h2 className="titulo-actividad">
                    {actividad.titulo || `Actividad ${actividadIndex + 1}`}
                  </h2>
                </div>
              </div>

              {actividad.imagenes && actividad.imagenes.length > 0 ? (
                <div className="row">
                  <div className="col-12">
                    <Carousel
                      fade
                      indicators={actividad.imagenes.length > 1}
                      className="carousel-provincia"
                      activeIndex={imagenIndex[actividadIndex] || 0}
                      onSelect={(index) =>
                        setImagenIndex({
                          ...imagenIndex,
                          [actividadIndex]: index,
                        })
                      }
                    >
                      {actividad.imagenes.map((imagen, index) => (
                        <Carousel.Item key={index}>
                          <img
                            src={getCloudinaryUrl(imagen)}
                            alt={`${provincia.nombre} - ${
                              actividad.titulo || `Actividad ${actividadIndex + 1}`
                            } - Imagen ${index + 1}`}
                            className="imagen-provincia"
                            decoding="async"
                            fetchpriority={index === 0 ? "high" : "auto"}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-12">
                    <div className="placeholder-imagen">
                      <p>Imagen no disponible</p>
                    </div>
                  </div>
                </div>
              )}

              {actividad.descripcion && (
                <div className="row">
                  <div className="col-12">
                    <div className="descripcion-container">
                      <h2 className="subtitulo-descripcion">Sobre la visita</h2>
                      <div className="descripcion-visita">
                        {actividad.descripcion}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          /* Formato tradicional: descripción general y galería general */
          <>
            {visita.imagenes && visita.imagenes.length > 0 ? (
              <div className="row">
                <div className="col-12">
                  <Carousel
                    fade
                    indicators={visita.imagenes.length > 1}
                    className="carousel-provincia"
                    activeIndex={imagenIndex.main || 0}
                    onSelect={(index) =>
                      setImagenIndex({
                        ...imagenIndex,
                        main: index,
                      })
                    }
                  >
                    {visita.imagenes.map((imagen, index) => (
                      <Carousel.Item key={index}>
                        <img
                          src={getCloudinaryUrl(imagen)}
                          alt={`${provincia.nombre} - ${visita.titulo} - Imagen ${
                            index + 1
                          }`}
                          className="imagen-provincia"
                          decoding="async"
                          fetchpriority={index === 0 ? "high" : "auto"}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-12">
                  <div className="placeholder-imagen">
                    <p>Imagen no disponible</p>
                  </div>
                </div>
              </div>
            )}

            {visita.descripcion && (
              <div className="row">
                <div className="col-12">
                  <div className="descripcion-container">
                    <h2 className="subtitulo-descripcion">Sobre la visita</h2>
                    <div className="descripcion-visita">{visita.descripcion}</div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default VisitaDetalle;
