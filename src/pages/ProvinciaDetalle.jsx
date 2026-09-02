import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/provinciaDetalle.css";
import { Carousel, Container, Button } from "react-bootstrap";
import { visitasProvincias } from "../data/visitasProvincias";

const CLOUD_NAME = "dwb5tmtqg";

export const getCloudinaryUrl = (publicId) => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_1000,h_600,c_fill,g_auto,f_auto,q_auto/${publicId}`;
};
const ProvinciaDetalle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const provincia = visitasProvincias[slug];
  const [imagenIndex, setImagenIndex] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [slug]);

  if (!provincia) {
    return (
      <div className="container-provincia-detalle">
        <div className="container">
          <h2>Provincia no encontrada</h2>
          <Button onClick={() => navigate("/")} variant="primary">
            Volver al Inicio
          </Button>
        </div>
      </div>
    );
  }

  const visitas = provincia.visitas || [provincia];

  return (
    <div className="container-provincia-detalle">
      <Container>
        <div className="row">
          <div className="col-12">
            <Button
              onClick={() => navigate(-1)}
              variant="outline-primary"
              className="boton-volver"
            >
              ← Volver al mapa
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="titulo-provincia">{provincia.nombre}</h1>
          </div>
        </div>

        {visitas.map((visita, visitaIndex) => (
          <div key={visitaIndex} style={{ marginBottom: "4rem" }}>
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
                          activeIndex={
                            imagenIndex[
                              `visita-${visitaIndex}-actividad-${actividadIndex}`
                            ] || 0
                          }
                          onSelect={(index) =>
                            setImagenIndex({
                              ...imagenIndex,
                              [`visita-${visitaIndex}-actividad-${actividadIndex}`]:
                                index,
                            })
                          }
                        >
                          {actividad.imagenes.map((imagen, index) => (
                            <Carousel.Item key={index}>
                              <img
                                src={getCloudinaryUrl(imagen)}
                                alt={`${provincia.nombre} - ${
                                  actividad.titulo ||
                                  `Actividad ${actividadIndex + 1}`
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
                          <h2 className="subtitulo-descripcion">
                            Sobre la visita
                          </h2>
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
                        activeIndex={imagenIndex[visitaIndex] || 0}
                        onSelect={(index) =>
                          setImagenIndex({
                            ...imagenIndex,
                            [visitaIndex]: index,
                          })
                        }
                      >
                        {visita.imagenes.map((imagen, index) => (
                          <Carousel.Item key={index}>
                            <img
                              src={getCloudinaryUrl(imagen)}
                              alt={`${provincia.nombre} - Visita ${
                                visitaIndex + 1
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

                {visita.descripcion && (
                  <div className="row">
                    <div className="col-12">
                      <div className="descripcion-container">
                        <h2 className="subtitulo-descripcion">
                          Sobre la visita
                        </h2>
                        <div className="descripcion-visita">
                          {visita.descripcion}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ProvinciaDetalle;
