import React from "react";
import "../css/galeriaVisor.css";
import { Carousel, Container, Button } from "react-bootstrap";
import guemesIndex from "../assets/img/galeria/guemes/guemesIndex.png";
import galaIndex from "../assets/img/galeria/gala/galaIndex.png";
import asuncionIndex from "../assets/img/galeria/asuncion/asuncionIndex.png";
import vvGuemesUno from "../assets/img/galeria/guemes/vvGuemesUno.jpg";
import vvGuemesDos from "../assets/img/galeria/guemes/vvGuemesDos.jpg";
import vvGuemesTres from "../assets/img/galeria/guemes/vvGuemesTres.jpg";
import vvGuemesCuatro from "../assets/img/galeria/guemes/vvGuemesCuatro.jpg";
import vvGuemesCinco from "../assets/img/galeria/guemes/vvGuemesCinco.jpg";
import vvGuemesSeis from "../assets/img/galeria/guemes/vvGuemesSeis.jpg";

const GaleriaVisor = () => {
  const imagenesIndex = [
    {
      imagen: guemesIndex,
      titulo: "GÜEMES",
    },
    {
      imagen: galaIndex,
      titulo: "GALA PRESIDENCIAL",
    },
    {
      imagen: asuncionIndex,
      titulo: "ASUNCIÓN",
    },
  ];
  return (
    <div>
      <Carousel fade indicators={false} className="carousel-galeria">
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
              <Container className="d-flex flex-column align-items-center justify-content-center text-center h-100">
                <h1 className="galeria-title">{imagen.titulo}</h1>
                <Button variant="light" className="galeria-button">
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
