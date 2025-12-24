import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/galeriaVisor.css";
import { Carousel, Container, Button } from "react-bootstrap";
import guemesIndex from "../assets/img/galeria/guemes/guemesIndex.webp";
import galaIndex from "../assets/img/galeria/gala/galaIndex.webp";
import asuncionIndex from "../assets/img/galeria/asuncion/asuncionIndex.webp";
import vv2DeAbrilIndex from "../assets/img/galeria/2DeAbril/2DeAbrilIndex.webp";
import vv25DeMayoIndex from "../assets/img/galeria/25DeMayo/vv25DeMayoIndex.webp";
import ruta40Index from "../assets/img/galeria/ruta40/ruta40Index.webp";
import vvVaticanoIndex from "../assets/img/galeria/vaticano/vvVaticanoIndex.webp";
import Footer from "./Footer";

const GaleriaVisor = () => {
  const navigate = useNavigate();

  const imagenesIndex = [
    {
      imagen: asuncionIndex,
      titulo: "ASUNCIÓN",
      ruta: "/galeria/asuncion",
    },
    {
      imagen: galaIndex,
      titulo: "GALA",
      ruta: "/galeria/gala",
    },
    {
      imagen: guemesIndex,
      titulo: "GÜEMES",
      ruta: "/galeria/guemes",
    },
    {
      imagen: vv2DeAbrilIndex,
      titulo: "MALVINAS",
      ruta: "/galeria/DosDeAbril",
    },
    {
      imagen: vv25DeMayoIndex,
      titulo: "TEDEUM",
      ruta: "/galeria/VeinticincoDeMayo",
    },
    {
      imagen: ruta40Index,
      titulo: "Ruta 40",
      ruta: "/galeria/ruta40",
    },
    {
      imagen: vvVaticanoIndex,
      titulo: "VATICANO",
      ruta: "/galeria/vaticano",
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

      <Footer />
    </div>
  );
};

export default GaleriaVisor;
