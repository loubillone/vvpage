import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/provinciaDetalle.css";
import { Carousel, Container, Button } from "react-bootstrap";

// Importar imágenes de ejemplo - deberás agregar las imágenes reales en la carpeta correspondiente
// Por ahora usaré placeholders
// import imagenBuenosAires from "../assets/img/provincias/buenos-aires/imagen1.jpg";
// import imagenCordoba from "../assets/img/provincias/cordoba/imagen1.jpg";

const ProvinciaDetalle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Datos de las visitas por provincia - puedes expandir esto con información real
  const visitasProvincias = {
    "buenos-aires": {
      nombre: "Buenos Aires",
      fecha: "Diciembre 2023",
      descripcion:
        "Victoria Villarruel realizó diversas actividades en la provincia de Buenos Aires como vicepresidente de la Nación, incluyendo reuniones con autoridades locales y actos oficiales.",
      descripcionCorta:
        "Victoria Villarruel realizó diversas actividades en Buenos Aires como vicepresidente de la Nación.",
      // imagenes: [imagenBuenosAires],
      imagenes: [],
      lugar: "Ciudad Autónoma de Buenos Aires y Gran Buenos Aires",
    },
    cordoba: {
      nombre: "Córdoba",
      fecha: "2024",
      descripcion:
        "Durante su visita a Córdoba, la vicepresidente Victoria Villarruel se reunió con autoridades locales y participó en diversos actos oficiales y eventos culturales.",
      descripcionCorta:
        "Victoria Villarruel visitó Córdoba para reunirse con autoridades locales y participar en actos oficiales.",
      imagenes: [],
      lugar: "Córdoba Capital",
    },
    tucuman: {
      nombre: "Tucumán",
      fecha: "Julio 2024",
      descripcion:
        "Victoria Villarruel participó en los actos por el Día de la Independencia en Tucumán. Asistió a los eventos oficiales conmemorativos del 9 de julio.",
      descripcionCorta:
        "Victoria Villarruel participó en los actos por el Día de la Independencia en Tucumán.",
      imagenes: [],
      lugar: "San Miguel de Tucumán",
    },
    salta: {
      nombre: "Salta",
      fecha: "Agosto 2024",
      descripcion:
        "La vicepresidente asistió a la Expo Rural Salta en agosto de 2024, donde se reunió con productores locales y participó en actividades relacionadas con el desarrollo rural.",
      descripcionCorta:
        "Victoria Villarruel asistió a la Expo Rural Salta en agosto de 2024.",
      imagenes: [],
      lugar: "Ciudad de Salta",
    },
    chubut: {
      nombre: "Chubut",
      fecha: "Octubre 2024",
      descripcion:
        "Victoria Villarruel visitó Río Mayo, Chubut, para participar del aniversario de la localidad. Durante su estadía, se reunió con autoridades locales y vecinos.",
      descripcionCorta:
        "Victoria Villarruel visitó Río Mayo, Chubut, para participar del aniversario de la localidad.",
      imagenes: [],
      lugar: "Río Mayo",
    },
    "tierra-del-fuego": {
      nombre: "Tierra del Fuego",
      fecha: "Abril 2024",
      descripcion:
        "La vicepresidente participó del acto oficial por Malvinas en Ushuaia, donde rindió homenaje a los caídos en la guerra de las Islas Malvinas.",
      descripcionCorta:
        "Victoria Villarruel participó del acto oficial por Malvinas en Ushuaia.",
      imagenes: [],
      lugar: "Ushuaia",
    },
    catamarca: {
      nombre: "Catamarca",
      fecha: "Octubre 2024",
      descripcion:
        "Victoria Villarruel asistió al Festival Cuna del Poncho en Catamarca. Durante su visita, también se detuvo en el kilómetro 4040 de la Ruta Nacional 40.",
      descripcionCorta:
        "Victoria Villarruel asistió al Festival Cuna del Poncho en Catamarca.",
      imagenes: [],
      lugar: "San Fernando del Valle de Catamarca",
    },
    mendoza: {
      nombre: "Mendoza",
      fecha: "2024",
      descripcion:
        "Durante su visita a Mendoza, Victoria Villarruel participó en actividades oficiales y se reunió con autoridades provinciales.",
      descripcionCorta:
        "Victoria Villarruel visitó Mendoza para actividades oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "Ciudad de Mendoza",
    },
    jujuy: {
      nombre: "Jujuy",
      fecha: "2024",
      descripcion:
        "La vicepresidente visitó la provincia de Jujuy para participar en diversos actos oficiales y reunirse con autoridades locales.",
      descripcionCorta:
        "Victoria Villarruel visitó Jujuy para actos oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "San Salvador de Jujuy",
    },
    "entre-rios": {
      nombre: "Entre Ríos",
      fecha: "2024",
      descripcion:
        "Victoria Villarruel visitó la provincia de Entre Ríos para participar en diversos actos oficiales y reunirse con autoridades locales.",
      descripcionCorta:
        "Victoria Villarruel visitó Entre Ríos para actos oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "Paraná",
    },
    formosa: {
      nombre: "Formosa",
      fecha: "2024",
      descripcion:
        "La vicepresidente visitó la provincia de Formosa para participar en diversos actos oficiales y reunirse con autoridades locales.",
      descripcionCorta:
        "Victoria Villarruel visitó Formosa para actos oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "Ciudad de Formosa",
    },
    misiones: {
      nombre: "Misiones",
      fecha: "2024",
      descripcion:
        "Victoria Villarruel visitó la provincia de Misiones para participar en diversos actos oficiales y reunirse con autoridades locales.",
      descripcionCorta:
        "Victoria Villarruel visitó Misiones para actos oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "Posadas",
    },
    corrientes: {
      nombre: "Corrientes",
      fecha: "2024",
      descripcion:
        "La vicepresidente visitó la provincia de Corrientes para participar en diversos actos oficiales y reunirse con autoridades locales.",
      descripcionCorta:
        "Victoria Villarruel visitó Corrientes para actos oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "Ciudad de Corrientes",
    },
    "la-rioja": {
      nombre: "La Rioja",
      fecha: "2024",
      descripcion:
        "Victoria Villarruel visitó la provincia de La Rioja para participar en diversos actos oficiales y reunirse con autoridades locales.",
      descripcionCorta:
        "Victoria Villarruel visitó La Rioja para actos oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "Ciudad de La Rioja",
    },
    neuquen: {
      nombre: "Neuquén",
      fecha: "2024",
      descripcion:
        "La vicepresidente visitó la provincia de Neuquén para participar en diversos actos oficiales y reunirse con autoridades locales.",
      descripcionCorta:
        "Victoria Villarruel visitó Neuquén para actos oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "Ciudad de Neuquén",
    },
    "rio-negro": {
      nombre: "Río Negro",
      fecha: "2024",
      descripcion:
        "Victoria Villarruel visitó la provincia de Río Negro para participar en diversos actos oficiales y reunirse con autoridades locales.",
      descripcionCorta:
        "Victoria Villarruel visitó Río Negro para actos oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "Viedma",
    },
    "san-luis": {
      nombre: "San Luis",
      fecha: "2024",
      descripcion:
        "La vicepresidente visitó la provincia de San Luis para participar en diversos actos oficiales y reunirse con autoridades locales.",
      descripcionCorta:
        "Victoria Villarruel visitó San Luis para actos oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "San Luis Capital",
    },
    "santa-fe": {
      nombre: "Santa Fe",
      fecha: "2024",
      descripcion:
        "Victoria Villarruel visitó la provincia de Santa Fe para participar en diversos actos oficiales y reunirse con autoridades locales.",
      descripcionCorta:
        "Victoria Villarruel visitó Santa Fe para actos oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "Santa Fe Capital",
    },
    "santiago-del-estero": {
      nombre: "Santiago del Estero",
      fecha: "2024",
      descripcion:
        "La vicepresidente visitó la provincia de Santiago del Estero para participar en diversos actos oficiales y reunirse con autoridades locales.",
      descripcionCorta:
        "Victoria Villarruel visitó Santiago del Estero para actos oficiales y reuniones con autoridades.",
      imagenes: [],
      lugar: "Santiago del Estero Capital",
    },
  };

  const visita = visitasProvincias[slug];
  const [imagenIndex, setImagenIndex] = useState(0);

  if (!visita) {
    return (
      <div className="container-provincia-detalle">
        <div className="container">
          <h2>Provincia no encontrada</h2>
          <Button onClick={() => navigate("/")} variant="primary">
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-provincia-detalle">
      <Container>
        <div className="row">
          <div className="col-12">
            <Button
              onClick={() => navigate("/")}
              variant="outline-primary"
              className="boton-volver"
            >
              ← Volver al mapa
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="titulo-provincia">{visita.nombre}</h1>
            <div className="info-visita">
              <p className="fecha-visita">
                <strong>Fecha de visita:</strong> {visita.fecha}
              </p>
              <p className="lugar-visita">
                <strong>Lugar:</strong> {visita.lugar}
              </p>
            </div>
          </div>
        </div>

        {visita.imagenes && visita.imagenes.length > 0 ? (
          <div className="row">
            <div className="col-12">
              <Carousel
                fade
                indicators={visita.imagenes.length > 1}
                className="carousel-provincia"
                activeIndex={imagenIndex}
                onSelect={setImagenIndex}
              >
                {visita.imagenes.map((imagen, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={imagen}
                      alt={`${visita.nombre} - Imagen ${index + 1}`}
                      className="imagen-provincia"
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
                <p>
                  Imagen de la visita a {visita.nombre} - Agrega las imágenes en
                  la carpeta correspondiente
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-12">
            <div className="descripcion-container">
              <h2 className="subtitulo-descripcion">Sobre la visita</h2>
              <p className="descripcion-visita">{visita.descripcion}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProvinciaDetalle;
