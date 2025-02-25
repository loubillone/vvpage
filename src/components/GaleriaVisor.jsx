import React from "react";
import "../css/galeriaVisor.css";
import { Carousel, Container, Button } from "react-bootstrap";
import guemesIndex from "../assets/img/galeria/guemes/guemesIndex.png";
import galaIndex from "../assets/img/galeria/gala/galaIndex.png";
import tituloGala from "../assets/img/galeria/gala/tituloGala.png";
import tituloGuemes from "../assets/img/galeria/guemes/tituloGuemes.png";
import tituloAsuncion from "../assets/img/galeria/asuncion/tituloAsuncion.png";
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
      titulo: tituloGuemes,
    },
    {
      imagen: galaIndex,
      titulo: tituloGala,
    },
    {
      imagen: asuncionIndex,
      titulo: tituloAsuncion,
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
                <img
                  src={imagen.titulo}
                  alt="gala presidencial"
                  className="galeria-title"
                />
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
