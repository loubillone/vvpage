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
import vv2DeAbrilUno from "../assets/img/galeria/2DeAbril/vv2DeAbrilUno.jpg";
import vv2DeAbrilDos from "../assets/img/galeria/2DeAbril/vv2deAbrilDos.jpg";
import vv2DeAbrilTres from "../assets/img/galeria/2DeAbril/vv2DeAbrilTres.jpg";
import vv2DeAbrilCuatro from "../assets/img/galeria/2DeAbril/vv2DeAbrilCuatro.jpg";
import vv2DeAbrilCinco from "../assets/img/galeria/2DeAbril/vv2DeAbrilCinco.jpg";
import vv25DeMayoUno from "../assets/img/galeria/25DeMayo/vv25DeMayoUno.jpg";
import vv25DeMayoDos from "../assets/img/galeria/25DeMayo/vv25DeMayoDos.jpg";
import vv25DeMayoTres from "../assets/img/galeria/25DeMayo/vv25DeMayoTres.jpg";
import vv25DeMayoCuatro from "../assets/img/galeria/25DeMayo/vv25DeMayoCuatro.jpg";
import vv25DeMayoCinco from "../assets/img/galeria/25DeMayo/vv25DeMayoCinco.jpg";
import vvRuta40Uno from "../assets/img/galeria/ruta40/vvRuta40Uno.jpg";
import vvRuta40Dos from "../assets/img/galeria/ruta40/vvRuta40Dos.jpg";
import vvRuta40Tres from "../assets/img/galeria/ruta40/vvRuta40Tres.jpg";
import vvRuta40Cuatro from "../assets/img/galeria/ruta40/vvRuta40Cuatro.jpg";

const GaleriaDetalle = () => {
  const galerias = {
    asuncion: {
      titulo: "Asuncion",
      descripcion:
        "El 10 de diciembre de 2023, Javier Milei y Victoria Villarruel asumieron como presidente y vicepresidente de la República Argentina, respectivamente. La jornada comenzó con la llegada de ambos al Congreso Nacional, donde fueron recibidos por la entonces vicepresidenta saliente, Cristina Fernández de Kirchner. En el Salón Azul, Milei y Villarruel firmaron los Libros de Honor del Senado y de la Cámara de Diputados, marcando el inicio de su mandato.",
      descripcionCorta:
        "El 10 de diciembre de 2023, Javier Milei y Victoria Villarruel asumieron como presidente y vicepresidente de la República Argentina, respectivamente.",
      imagenes: [
        vvAsuncionUno,
        vvAsuncionDos,
        vvAsuncionTres,
        vvAsuncionCuatro,
        vvAsuncionCinco,
        vvAsuncionSeis,
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
    guemes: {
      titulo: "Güemes",
      descripcion:
        "Victoria Villarruel, visitó la provincia de Salta para participar en los actos conmemorativos del 203º aniversario del fallecimiento del General Martín Miguel de Güemes. Su presencia en estos eventos destacó por su activa participación y por el simbolismo de su vestimenta.",
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
    DosDeAbril: {
      titulo: "2 de Abril",
      descripcion:
        "El 2 de abril de 2025, la vicepresidente Victoria Villarruel viajó a la provincia de Tierra del Fuego para participar de los actos conmemorativos por el Día del Veterano y de los Caídos en la Guerra de Malvinas. En Ushuaia, encabezó un homenaje junto a excombatientes, autoridades locales y miembros de las Fuerzas Armadas. La jornada estuvo marcada por emotivos discursos, la colocación de ofrendas florales y un profundo reconocimiento a los héroes de Malvinas.",
      descripcionCorta:
        "El 2 de abril de 2025, Victoria Villarruel viajó a la provincia de Tierra del Fuego para participar de los actos conmemorativos por el Día del Veterano y de los Caídos en la Guerra de Malvinas.",
      imagenes: [
        vv2DeAbrilUno,
        vv2DeAbrilDos,
        vv2DeAbrilTres,
        vv2DeAbrilCuatro,
        vv2DeAbrilCinco,
      ],
    },
    VeinticincoDeMayo: {
      titulo: "25 de Mayo",
      descripcion:
        "El 25 de mayo de 2025, Victoria Villarruel participó de los actos oficiales por el aniversario de la Revolución de Mayo. La jornada comenzó con el tradicional Tedeum en la Catedral Metropolitana de Buenos Aires, donde asistió junto al presidente Javier Milei y otras autoridades.",
      descripcionCorta:
        "El 25 de mayo de 2025, Victoria Villarruel participó de los actos oficiales por el aniversario de la Revolución de Mayo. La jornada comenzó con el tradicional Tedeum en la Catedral Metropolitana de Buenos Aires.",
      imagenes: [
        vv25DeMayoUno,
        vv25DeMayoDos,
        vv25DeMayoTres,
        vv25DeMayoCuatro,
        vv25DeMayoCinco,
      ],
    },
    ruta40: {
      titulo: "Ruta 40",
      descripcion:
        "Durante su visita a la provincia de Catamarca, la vicepresidente Victoria Villarruel se detuvo en el kilómetro 4040 de la Ruta Nacional 40, en un gesto de reconocimiento a esta vía emblemática que atraviesa la Argentina de sur a norte. Allí rindió homenaje a la ruta más extensa del país, destacando su valor estratégico y simbólico como columna vertebral que une regiones. La actividad se enmarcó en su recorrido federal.",
      descripcionCorta:
        "Durante su visita en Catamarca, Victoria Villarruel se detuvo en el kilómetro 4040 de la Ruta Nacional 40, en un gesto de reconocimiento a esta vía emblemática que atraviesa la Argentina de sur a norte.",
      imagenes: [vvRuta40Uno, vvRuta40Dos, vvRuta40Tres, vvRuta40Cuatro],
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
  // Función para cambiar de galería (adelante o atrás)
  const cambiarGaleria = (direccion) => {
    const categorias = Object.keys(galerias);
    const indexActual = categorias.indexOf(categoria);
    let nuevoIndex;

    if (direccion === "adelante") {
      nuevoIndex = (indexActual + 1) % categorias.length;
    } else {
      nuevoIndex = indexActual === 0 ? categorias.length - 1 : indexActual - 1;
    }

    navigate(`/galeria/${categorias[nuevoIndex]}`);
  };

  // Estado para saber si estamos en una pantalla pequeña
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 468); // Si la pantalla tiene un tamaño menor a 468px
    };

    // Agregar clase al body para prevenir scroll extra
    document.body.classList.add("galeria-detalle-page");

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar tamaño inicial

    return () => {
      window.removeEventListener("resize", handleResize);
      // Remover clase del body cuando se desmonta el componente
      document.body.classList.remove("galeria-detalle-page");
    };
  }, []);

  return (
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
          <div className="boton-unico">
            <div
              className="zona-anterior"
              onClick={() => cambiarGaleria("atras")}
            >
              ←
            </div>
            <div className="separador"></div>
            <div
              className="zona-siguiente"
              onClick={() => cambiarGaleria("adelante")}
            >
              →
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GaleriaDetalle;
