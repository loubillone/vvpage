import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/galeriaVisor.css";
import { Carousel, Container, Button } from "react-bootstrap";
import guemesIndex from "../assets/img/galeria/guemes/guemesIndex.png";
import galaIndex from "../assets/img/galeria/gala/galaIndex.png";
import asuncionIndex from "../assets/img/galeria/asuncion/asuncionIndex.png";

const GaleriaVisor = () => {
  const navigate = useNavigate();

  const imagenesIndex = [
    {
      imagen: guemesIndex,
      titulo: "GÜEMES",
      ruta: "/galeria/guemes",
    },
    {
      imagen: galaIndex,
      titulo: "GALA",
      ruta: "/galeria/gala",
    },
    {
      imagen: asuncionIndex,
      titulo: "ASUNCIÓN",
      ruta: "/galeria/asuncion",
    },
  ];

  return (
    <div>
      <Carousel fade indicators={false} className="carousel-galeria-visor">
        {imagenesIndex.map((imagen, index) => (
          <Carousel.Item key={index}>
            {/* Imagen de fondo */}
            <div
              className="galeria-slide"
              style={{
                backgroundImage: `url(${imagen.imagen})`,
              }}
            >
              {/* Contenido centrado */}
              <Container className="d-flex flex-column align-items-center justify-content-center h-100">
                <h2 className="galeria-title">{imagen.titulo}</h2>

                <Button
                  variant="transparent"
                  className="div-button galeria-button"
                  onClick={() => navigate(imagen.ruta)}
                >
                  Ver Galería
                </Button>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default GaleriaVisor;
