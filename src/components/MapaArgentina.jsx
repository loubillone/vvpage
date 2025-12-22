import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/mapaArgentina.css";

const provinciasVisitadas = {
  "Buenos Aires": {
    nombre: "Buenos Aires",
    visitada: true,
    slug: "buenos-aires",
  },
  Catamarca: {
    nombre: "Catamarca",
    visitada: true,
    slug: "catamarca",
  },
  Chaco: {
    nombre: "Chaco",
    visitada: false,
    slug: "chaco",
  },
  Chubut: {
    nombre: "Chubut",
    visitada: true,
    slug: "chubut",
  },
  Córdoba: {
    nombre: "Córdoba",
    visitada: true,
    slug: "cordoba",
  },
  Corrientes: {
    nombre: "Corrientes",
    visitada: true,
    slug: "corrientes",
  },
  "Entre Rios": {
    nombre: "Entre Ríos",
    visitada: true,
    slug: "entre-rios",
  },
  Formosa: {
    nombre: "Formosa",
    visitada: true,
    slug: "formosa",
  },
  Jujuy: {
    nombre: "Jujuy",
    visitada: true,
    slug: "jujuy",
  },
  "La Pampa": {
    nombre: "La Pampa",
    visitada: false,
    slug: "la-pampa",
  },
  "La Rioja": {
    nombre: "La Rioja",
    visitada: false,
    slug: "la-rioja",
  },
  Mendoza: {
    nombre: "Mendoza",
    visitada: true,
    slug: "mendoza",
  },
  Misiones: {
    nombre: "Misiones",
    visitada: true,
    slug: "misiones",
  },
  Neuquén: {
    nombre: "Neuquén",
    visitada: true,
    slug: "neuquen",
  },

  "Rio Negro": {
    nombre: "Río Negro",
    visitada: true,
    slug: "rio-negro",
  },
  Salta: {
    nombre: "Salta",
    visitada: true,
    slug: "salta",
  },
  "San Juan": {
    nombre: "San Juan",
    visitada: false,
    slug: "san-juan",
  },
  "San Luis": {
    nombre: "San Luis",
    visitada: true,
    slug: "san-luis",
  },
  "Santa Cruz": {
    nombre: "Santa Cruz",
    visitada: false,
    slug: "santa-cruz",
  },
  "Santa Fe": {
    nombre: "Santa Fe",
    visitada: true,
    slug: "santa-fe",
  },
  "Santiago del Estero": {
    nombre: "Santiago del Estero",
    visitada: true,
    slug: "santiago-del-estero",
  },
  "Tierra del Fuego": {
    nombre: "Tierra del Fuego",
    visitada: true,
    slug: "tierra-del-fuego",
  },
  Tucumán: {
    nombre: "Tucumán",
    visitada: true,
    slug: "tucuman",
  },
};

const mapeoProvincias = {
  // Buenos Aires
  ARB: "Buenos Aires",
  ARC: "Buenos Aires",
  "Buenos Aires": "Buenos Aires",
  "Ciudad de Buenos Aires": "Buenos Aires",
  "Ciudad Autónoma de Buenos Aires": "Buenos Aires",
  "Buenos Aires (Provincia)": "Buenos Aires",
  "Provincia de Buenos Aires": "Buenos Aires",

  // Catamarca
  ARK: "Catamarca",
  Catamarca: "Catamarca",

  // Chaco
  ARH: "Chaco",
  Chaco: "Chaco",

  // Chubut
  ARU: "Chubut",
  Chubut: "Chubut",

  // Córdoba
  ARX: "Córdoba",
  Córdoba: "Córdoba",
  Cordoba: "Córdoba",

  // Corrientes
  ARW: "Corrientes",
  Corrientes: "Corrientes",

  // Entre Ríos
  ARE: "Entre Rios",
  "Entre Rios": "Entre Rios",
  "Entre Ríos": "Entre Rios",
  "Entre Rios (Provincia)": "Entre Rios",
  "Provincia de Entre Ríos": "Entre Rios",

  // Formosa
  ARP: "Formosa",
  Formosa: "Formosa",

  // Jujuy
  ARY: "Jujuy",
  Jujuy: "Jujuy",

  // La Pampa
  ARL: "La Pampa",
  "La Pampa": "La Pampa",
  Pampa: "La Pampa",

  // La Rioja
  ARF: "La Rioja",
  "La Rioja": "La Rioja",
  Rioja: "La Rioja",

  // Mendoza
  ARM: "Mendoza",
  Mendoza: "Mendoza",

  // Misiones
  ARN: "Misiones",
  Misiones: "Misiones",

  // Neuquén
  ARQ: "Neuquén",
  Neuquen: "Neuquén",
  Neuquén: "Neuquén",

  // Río Negro
  ARR: "Rio Negro",
  "Rio Negro": "Rio Negro",
  "Río Negro": "Rio Negro",
  "Río Negro (Provincia)": "Rio Negro",

  // Salta
  ARA: "Salta",
  Salta: "Salta",

  // San Juan
  ARJ: "San Juan",
  "San Juan": "San Juan",

  // San Luis
  ARD: "San Luis",
  "San Luis": "San Luis",

  // Santa Cruz
  ARZ: "Santa Cruz",
  "Santa Cruz": "Santa Cruz",

  // Santa Fe
  ARS: "Santa Fe",
  "Santa Fe": "Santa Fe",
  "Santa Fé": "Santa Fe",

  // Santiago del Estero
  ARG: "Santiago del Estero",
  "Santiago del Estero": "Santiago del Estero",
  "Santiago del Estero (Provincia)": "Santiago del Estero",

  // Tierra del Fuego
  ARV: "Tierra del Fuego",
  "Tierra del Fuego": "Tierra del Fuego",
  "Tierra del Fuego, Antártida e Islas del Atlántico Sur": "Tierra del Fuego",

  // Tucumán
  ART: "Tucumán",
  Tucumán: "Tucumán",
  Tucuman: "Tucumán",

  // Opcional: Islas Malvinas
  // "Islas Malvinas": "Islas Malvinas",
  // Malvinas: "Islas Malvinas",
};

const MapaArgentina = () => {
  const navigate = useNavigate();
  const [hoverProvincia, setHoverProvincia] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [svgContent, setSvgContent] = useState("");
  const svgContainerRef = useRef(null);

  const handleProvinciaClick = (provincia) => {
    const provinciaNormalizada = mapeoProvincias[provincia] || provincia;
    if (provinciasVisitadas[provinciaNormalizada]?.visitada) {
      navigate(`/provincia/${provinciasVisitadas[provinciaNormalizada].slug}`);
    }
  };

  const handleProvinciaHover = (provincia, event) => {
    const provinciaNormalizada = mapeoProvincias[provincia] || provincia;
    if (provinciasVisitadas[provinciaNormalizada]?.visitada) {
      setHoverProvincia(provinciaNormalizada);
      const rect = event.currentTarget.getBoundingClientRect();
      const container = svgContainerRef.current;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        setTooltipPosition({
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top - containerRect.top - 30,
        });
      }
    }
  };

  const handleProvinciaLeave = () => {
    setHoverProvincia(null);
  };

  const getProvinciaNombre = (element) => {
    const id = element.id || element.getAttribute("id");
    const title = element.getAttribute("title");
    const name = element.getAttribute("name");
    const dataName = element.getAttribute("data-name");
    const className = element.className?.baseVal || element.className;

    if (id && mapeoProvincias[id]) {
      return mapeoProvincias[id];
    }

    const posiblesNombres = [title, name, dataName];

    for (const nombre of posiblesNombres) {
      if (nombre) {
        const nombreNormalizado = nombre.trim();
        if (mapeoProvincias[nombreNormalizado]) {
          return mapeoProvincias[nombreNormalizado];
        }

        if (provinciasVisitadas[nombreNormalizado]) {
          return nombreNormalizado;
        }
      }
    }
    return id || null;
  };

  useEffect(() => {
    if (svgLoaded && svgContent && svgContainerRef.current) {
      setTimeout(() => {
        const svgElement = svgContainerRef.current?.querySelector("svg");
        if (!svgElement) {
          // console.log("No se encontró el elemento SVG en el contenedor");
          return;
        }

        svgElement.style.width = "100%";
        svgElement.style.height = "auto";
        svgElement.classList.add("mapa-svg");

        const provincias = svgElement.querySelectorAll(
          "path, polygon, polyline, g"
        );

        console.log(`Se encontraron ${provincias.length} elementos en el SVG`);

        let provinciasProcesadas = 0;

        provincias.forEach((element) => {
          element.classList.add("provincia");

          const provinciaNombre = getProvinciaNombre(element);

          if (!provinciaNombre && element.parentElement) {
            const parentNombre = getProvinciaNombre(element.parentElement);
            if (parentNombre) {
              const provinciaNormalizada =
                mapeoProvincias[parentNombre] || parentNombre;

              if (provinciasVisitadas[provinciaNormalizada]?.visitada) {
                element.classList.add("visitada");
                element.style.cursor = "pointer";
                provinciasProcesadas++;

                const handleClick = (e) => {
                  e.stopPropagation();
                  handleProvinciaClick(provinciaNormalizada);
                };
                const handleMouseEnter = (e) => {
                  e.stopPropagation();
                  handleProvinciaHover(provinciaNormalizada, e);
                };

                element.addEventListener("click", handleClick);
                element.addEventListener("mouseenter", handleMouseEnter);
                element.addEventListener("mouseleave", handleProvinciaLeave);

                element._handleClick = handleClick;
                element._handleMouseEnter = handleMouseEnter;
              }
            }
          } else if (provinciaNombre) {
            const provinciaNormalizada =
              mapeoProvincias[provinciaNombre] || provinciaNombre;

            if (provinciasVisitadas[provinciaNormalizada]?.visitada) {
              element.classList.add("visitada");
              element.style.cursor = "pointer";
              provinciasProcesadas++;

              const handleClick = (e) => {
                e.stopPropagation();
                handleProvinciaClick(provinciaNormalizada);
              };
              const handleMouseEnter = (e) => {
                e.stopPropagation();
                handleProvinciaHover(provinciaNormalizada, e);
              };

              element.addEventListener("click", handleClick);
              element.addEventListener("mouseenter", handleMouseEnter);
              element.addEventListener("mouseleave", handleProvinciaLeave);

              element._handleClick = handleClick;
              element._handleMouseEnter = handleMouseEnter;
            }
          }

          // Si no encontramos provincia pero el path está en un grupo con título, intentar usar ese
          if (
            !provinciaNombre &&
            element.parentElement &&
            element.parentElement.getAttribute("title")
          ) {
            const title = element.parentElement.getAttribute("title");
            const provinciaNormalizada = mapeoProvincias[title] || title;

            if (provinciasVisitadas[provinciaNormalizada]?.visitada) {
              element.classList.add("visitada");
              element.style.cursor = "pointer";
              provinciasProcesadas++;

              const handleClick = (e) => {
                e.stopPropagation();
                handleProvinciaClick(provinciaNormalizada);
              };
              const handleMouseEnter = (e) => {
                e.stopPropagation();
                handleProvinciaHover(provinciaNormalizada, e);
              };

              element.addEventListener("click", handleClick);
              element.addEventListener("mouseenter", handleMouseEnter);
              element.addEventListener("mouseleave", handleProvinciaLeave);

              element._handleClick = handleClick;
              element._handleMouseEnter = handleMouseEnter;
            }
          }
        });

        console.log(
          `Se procesaron ${provinciasProcesadas} provincias visitadas`
        );
      }, 300);
    }
  }, [svgLoaded, svgContent, navigate]);

  useEffect(() => {
    const posiblesNombres = [
      "argentina-map.svg",
      "argentina.svg",
      "mapa-argentina.svg",
      "argentina-map.svg",
    ];

    const cargarSVG = async () => {
      for (const nombre of posiblesNombres) {
        try {
          const res = await fetch(`/${nombre}`);
          if (res.ok) {
            const text = await res.text();
            if (text && text.trim().length > 0) {
              // console.log(`SVG cargado exitosamente: ${nombre}`);
              setSvgContent(text);
              setTimeout(() => {
                setSvgLoaded(true);
                // console.log("Estado svgLoaded cambiado a true");
              }, 100);
              return;
            }
          }
        } catch (err) {
          // console.log(`No se encontró ${nombre}, intentando siguiente...`);
        }
      }
      // console.log(
      //   "No se encontró ningún SVG. Verifica que el archivo esté en public/"
      // );
      setSvgLoaded(false);
    };

    cargarSVG();
  }, []);

  return (
    <div className="container-mapa-argentina">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="titulo-mapa">Victoria Federal</h2>
            <p className="subtitulo-mapa">
              Haz clic en las provincias marcadas en celeste para ver los
              detalles de cada visita
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mapa-container">
            {/* Tooltip flotante */}
            {hoverProvincia && (
              <div
                className="tooltip-provincia"
                style={{
                  left: `${tooltipPosition.x}px`,
                  top: `${tooltipPosition.y}px`,
                }}
              >
                {hoverProvincia}
              </div>
            )}

            {svgLoaded && svgContent && (
              <div
                ref={svgContainerRef}
                dangerouslySetInnerHTML={{ __html: svgContent }}
                className="svg-wrapper"
              />
            )}

            {!svgLoaded && (
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ height: "200px" }}
              >
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
                <p>Cargando mapa...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapaArgentina;
