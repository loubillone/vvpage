import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/galeriaVisor.css";
import "../css/galeriaDetalle.css";
import { Carousel, Container } from "react-bootstrap";
import vvGuemesUno from "../assets/img/galeria/guemes/vvGuemesUno.jpg";
import vvGuemesDos from "../assets/img/galeria/guemes/vvGuemesDos.jpg";
import vvGuemesTres from "../assets/img/galeria/guemes/vvGuemesTres.jpg";
import vvGuemesCuatro from "../assets/img/galeria/guemes/vvGuemesCuatro.jpg";
import vvGuemesCinco from "../assets/img/galeria/guemes/vvGuemesCinco.jpg";
import vvGuemesSiete from "../assets/img/galeria/guemes/vvGuemesSiete.jpg";
import vvAsuncionUno from "../assets/img/galeria/asuncion/vvAsuncionUno.jpeg";
import vvAsuncionDos from "../assets/img/galeria/asuncion/vvAsuncionDos.jpg";
import vvAsuncionTres from "../assets/img/galeria/asuncion/vvAsuncionTres.jpg";
import vvAsuncionCuatro from "../assets/img/galeria/asuncion/vvAsuncionCuatro.jpg";
import vvAsuncionCinco from "../assets/img/galeria/asuncion/vvAsuncionCinco.jpg";
import vvAsuncionSeis from "../assets/img/galeria/asuncion/vvAsuncionSeis.png";
import vvGalaUno from "../assets/img/galeria/gala/vvGalaUno.jpg";
import vvGalaDos from "../assets/img/galeria/gala/vvGalaDos.png";
import vvGalaTres from "../assets/img/galeria/gala/vvGalaTres.png";
import vvGalaCuatro from "../assets/img/galeria/gala/vvGalaCuatro.jpg";
import vvGalaCinco from "../assets/img/galeria/gala/vvGalaCinco.jpg";
import vvGalaSeis from "../assets/img/galeria/gala/vvGalaSeis.jpg";

const GaleriaDetalle = () => {
  const galerias = {
    guemes: {
      titulo: "Güemes",
      descripcion:
        "Victoria Villarruel, visitó la provincia de Salta para participar en los actos conmemorativos del 203º aniversario del fallecimiento del General Martín Miguel de Güemes. Su presencia en estos eventos destacó por su activa participación y por el simbolismo de su vestimenta",
      descripcionCorta:
        "​Victoria Villarruel, visitó la provincia de Salta para participar en los actos conmemorativos del 203º aniversario del fallecimiento del General Martín Miguel de Güemes.",
      imagenes: [
        vvGuemesUno,
        vvGuemesDos,
        vvGuemesTres,
        vvGuemesCuatro,
        vvGuemesCinco,
        vvGuemesSiete,
      ],
    },
    gala: {
      titulo: "Gala",
      descripcion:
        "​El 10 de diciembre de 2023, en el marco de la asunción presidencial de Javier Milei, se celebró una gala especial en el Teatro Colón de Buenos Aires. Victoria Villarruel asistió al evento luciendo un elegante vestido largo de color rojo vino, de cuello alto y acompañado por un cinturón dorado. Completó su atuendo con una escarapela en el pecho, aros en blanco y negro, una cartera combinada y zapatos negros",
      descripcionCorta:
        "​El 10 de diciembre de 2023, en el marco de la asunción presidencial de Javier Milei, se celebró una gala especial en el Teatro Colón de Buenos Aires.",
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
        "El 10 de diciembre de 2023, Javier Milei y Victoria Villarruel asumieron como presidente y vicepresidenta de la República Argentina, respectivamente. La jornada comenzó con la llegada de ambos al Congreso Nacional, donde fueron recibidos por la entonces vicepresidenta saliente, Cristina Fernández de Kirchner. En el Salón Azul, Milei y Villarruel firmaron los Libros de Honor del Senado y de la Cámara de Diputados.",
      descripcionCorta:
        "El 10 de diciembre de 2023, Javier Milei y Victoria Villarruel asumieron como presidente y vicepresidenta de la República Argentina, respectivamente.",
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

  // Estado para saber si estamos en una pantalla pequeña
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 468); // Si la pantalla tiene un tamaño menor a 468px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar tamaño inicial

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="galeria-container">
        <img
          src={galeriaSeleccionada.imagenes[imagenIndex]}
          alt="Galería"
          className="galeria-img"
        ></img>

        <Container className="galeria-content">
          <div className="galeria-texto">
            <h1 className="titulo">{galeriaSeleccionada.titulo}</h1>
            <p className="descripcion">
              {isSmallScreen
                ? galeriaSeleccionada.descripcionCorta
                : galeriaSeleccionada.descripcion}
            </p>
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

          <div className="galeria-botones">
            <button className="boton-siguiente" onClick={siguienteGaleria}>
              Siguiente Galería →
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GaleriaDetalle;
