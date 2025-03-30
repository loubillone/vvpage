import { React, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/galeriaVisor.css";
import "../css/galeriaDetalle.css";
import { Carousel, Container } from "react-bootstrap";
import vvGuemesUno from "../assets/img/galeria/guemes/vvGuemesUno.jpg";
import vvGuemesDos from "../assets/img/galeria/guemes/vvGuemesDos.jpg";
import vvGuemesTres from "../assets/img/galeria/guemes/vvGuemesTres.jpg";
import vvGuemesCuatro from "../assets/img/galeria/guemes/vvGuemesCuatro.jpg";
import vvGuemesCinco from "../assets/img/galeria/guemes/vvGuemesCinco.jpg";
import vvGuemesSeis from "../assets/img/galeria/guemes/vvGuemesSeis.jpg";
import vvAsuncionUno from "../assets/img/galeria/asuncion/vvAsuncionUno.jpeg";
import vvAsuncionDos from "../assets/img/galeria/asuncion/vvAsuncionDos.jpg";
import vvAsuncionTres from "../assets/img/galeria/asuncion/vvAsuncionTres.jpg";
import vvAsuncionCuatro from "../assets/img/galeria/asuncion/vvAsuncionCuatro.jpg";
import vvAsuncionCinco from "../assets/img/galeria/asuncion/vvAsuncionCinco.jpg";
import vvAsuncionSeis from "../assets/img/galeria/asuncion/vvAsuncionSeis.png";
import vvAsuncionSiete from "../assets/img/galeria/asuncion/vvAsuncionSiete.jpg";
import vvGalaUno from "../assets/img/galeria/gala/vvGalaUno.jpg";
import vvGalaDos from "../assets/img/galeria/gala/vvGalaDos.png";
import vvGalaTres from "../assets/img/galeria/gala/vvGalaTres.png";
import vvGalaCuatro from "../assets/img/galeria/gala/vvGalaCuatro.jpg";
import vvGalaCinco from "../assets/img/galeria/gala/vvGalaCinco.jpg";
import vvGalaSeis from "../assets/img/galeria/gala/vvGalaSeis.jpg";
import vvGalaSiete from "../assets/img/galeria/gala/vvGalaSiete.jpg";
import vvGalaOcho from "../assets/img/galeria/gala/vvGalaOcho.png";

const GaleriaDetalle = () => {
  const galerias = {
    guemes: {
      titulo: "Güemes",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio tempora accusantium, harum placeat et, ut aperiam nihil illum modi facilis magni molestias labore nostrum ",
      imagenes: [
        vvGuemesUno,
        vvGuemesDos,
        vvGuemesTres,
        vvGuemesCuatro,
        vvGuemesCinco,
        vvGuemesSeis,
      ],
    },
    gala: {
      titulo: "Gala",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio tempora accusantium, harum placeat et, ut aperiam nihil illum modi facilis magni molestias labore nostrum ",
      imagenes: [
        vvGalaUno,
        vvGalaDos,
        vvGalaTres,
        vvGalaCuatro,
        vvGalaCinco,
        vvGalaSeis,
      ],
    },
    asuncion: {
      titulo: "Asuncion",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio tempora accusantium, harum placeat et, ut aperiam nihil illum modi facilis magni molestias labore nostrum ",
      imagenes: [
        vvAsuncionUno,
        vvAsuncionDos,
        vvAsuncionTres,
        vvAsuncionCuatro,
        vvAsuncionCinco,
        vvAsuncionSeis,
      ],
    },
  };

  const { categoria } = useParams();
  const navigate = useNavigate();
  const galeriaSeleccionada = galerias[categoria];

  // Si no encuentra la galería, muestra error
  if (!galeriaSeleccionada) {
    return <h2>Galería no encontrada</h2>;
  }

  const [imagenIndex, setImagenIndex] = useState(0);

  const cambiarImagen = (selectedIndex) => {
    setImagenIndex(selectedIndex);
  };
  // Función para cambiar a la siguiente galería
  const siguienteGaleria = () => {
    const categorias = Object.keys(galerias);
    const indexActual = categorias.indexOf(categoria);
    const siguienteIndex = (indexActual + 1) % categorias.length;
    navigate(`/galeria/${categorias[siguienteIndex]}`);
  };

  return (
    <div>
      <div
        className="galeria-container"
        style={{
          backgroundImage: `url(${galeriaSeleccionada.imagenes[imagenIndex]})`,
        }}
      >
        <Container className="galeria-content">
          <div className="galeria-texto">
            <h1 className="titulo">{galeriaSeleccionada.titulo}</h1>
            <p className="descripcion">{galeriaSeleccionada.descripcion}</p>
          </div>

          <Carousel
            activeIndex={imagenIndex}
            onSelect={cambiarImagen}
            indicators={false}
            className="carousel-galeria"
          >
            {galeriaSeleccionada.imagenes.map((imagen, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={imagen}
                  alt={`Imagen ${idx + 1}`}
                  className="miniatura"
                  onClick={() => setImagenIndex(idx)}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <button className="boton-siguiente" onClick={siguienteGaleria}>
            Siguiente Galería →
          </button>
        </Container>
      </div>
    </div>
  );
};

export default GaleriaDetalle;
