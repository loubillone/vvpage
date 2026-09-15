import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/mapaArgentina.css";
import { visitasProvincias } from "../data/visitasProvincias";
import {
  TOTAL_JURISDICCIONES,
  jurisdiccionesRecorridas,
  porcentajeRecorrido,
  totalVisitas,
} from "../utils/estadisticasRecorrido";

// Las estadísticas agregadas se calculan una sola vez en
// src/utils/estadisticasRecorrido.js (única fuente de verdad). Este
// componente las consume para la barra de progreso y usa
// visitasProvincias solo para el detalle por provincia (tooltip y
// navegación).
const cantidadVisitas = (slug) => visitasProvincias[slug]?.visitas?.length ?? 0;

const prefiereMovimientoReducido = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const tieneContenido = (slug) => cantidadVisitas(slug) > 0;

const provinciasVisitadas = {
  "Buenos Aires": {
    nombre: "Buenos Aires",
    slug: "buenos-aires",
  },
  Catamarca: {
    nombre: "Catamarca",
    slug: "catamarca",
  },
  Chaco: {
    nombre: "Chaco",
    slug: "chaco",
  },
  Chubut: {
    nombre: "Chubut",
    slug: "chubut",
  },
  Córdoba: {
    nombre: "Córdoba",
    slug: "cordoba",
  },
  Corrientes: {
    nombre: "Corrientes",
    slug: "corrientes",
  },
  "Entre Rios": {
    nombre: "Entre Ríos",
    slug: "entre-rios",
  },
  Formosa: {
    nombre: "Formosa",
    slug: "formosa",
  },
  Jujuy: {
    nombre: "Jujuy",
    slug: "jujuy",
  },
  "La Pampa": {
    nombre: "La Pampa",
    slug: "la-pampa",
  },
  "La Rioja": {
    nombre: "La Rioja",
    slug: "la-rioja",
  },
  Mendoza: {
    nombre: "Mendoza",
    slug: "mendoza",
  },
  Misiones: {
    nombre: "Misiones",
    slug: "misiones",
  },
  Neuquén: {
    nombre: "Neuquén",
    slug: "neuquen",
  },

  "Rio Negro": {
    nombre: "Río Negro",
    slug: "rio-negro",
  },
  Salta: {
    nombre: "Salta",
    slug: "salta",
  },
  "San Juan": {
    nombre: "San Juan",
    slug: "san-juan",
  },
  "San Luis": {
    nombre: "San Luis",
    slug: "san-luis",
  },
  "Santa Cruz": {
    nombre: "Santa Cruz",
    slug: "santa-cruz",
  },
  "Santa Fe": {
    nombre: "Santa Fe",
    slug: "santa-fe",
  },
  "Santiago del Estero": {
    nombre: "Santiago del Estero",
    slug: "santiago-del-estero",
  },
  "Tierra del Fuego": {
    nombre: "Tierra del Fuego",
    slug: "tierra-del-fuego",
  },
  Tucumán: {
    nombre: "Tucumán",
    slug: "tucuman",
  },
};

// Una provincia es navegable si existe en visitasProvincias y tiene al
// menos una visita documentada (Chaco, La Pampa y San Juan quedan sin
// contenido y por lo tanto no navegan).
const esProvinciaVisitada = (nombreClave) => {
  const info = provinciasVisitadas[nombreClave];
  if (!info) return false;
  return tieneContenido(info.slug);
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
  "Islas Malvinas": "Islas Malvinas",
  Malvinas: "Islas Malvinas",
};

const MapaArgentina = () => {
  const navigate = useNavigate();
  const [hoverProvincia, setHoverProvincia] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [svgContent, setSvgContent] = useState("");
  const svgContainerRef = useRef(null);
  const progresoRef = useRef(null);
  const [progresoEnVista, setProgresoEnVista] = useState(false);

  // Dispara la animación de la barra de progreso una sola vez, cuando
  // entra en viewport. Completamente independiente de la carga del SVG.
  useEffect(() => {
    const el = progresoRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setProgresoEnVista(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgresoEnVista(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const anchoBarraProgreso =
    progresoEnVista || prefiereMovimientoReducido() ? porcentajeRecorrido : 0;

  const handleProvinciaClick = (provincia) => {
    const provinciaNormalizada = mapeoProvincias[provincia] || provincia;
    if (esProvinciaVisitada(provinciaNormalizada)) {
      navigate(`/provincias/${provinciasVisitadas[provinciaNormalizada].slug}`);
    }
  };

  const handleProvinciaHover = (provincia, event) => {
    const provinciaNormalizada = mapeoProvincias[provincia] || provincia;
    if (esProvinciaVisitada(provinciaNormalizada)) {
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

  const handleMalvinasHover = (event) => {
    setHoverProvincia("Tierra del Fuego");
    const rect = event.currentTarget.getBoundingClientRect();
    const container = svgContainerRef.current;
    if (container) {
      const containerRect = container.getBoundingClientRect();
      setTooltipPosition({
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top - containerRect.top - 30,
      });
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
          "path, polygon, polyline, g",
        );

        // console.log(`Se encontraron ${provincias.length} elementos en el SVG`);

        let provinciasProcesadas = 0;

        provincias.forEach((element) => {
          element.classList.add("provincia");

          // Detectar si es Islas Malvinas y aplicar color celeste directamente
          const elementId = element.id || element.getAttribute("id");
          const isMalvinas = elementId === "islas-malvinas";
          if (isMalvinas) {
            element.style.fill = "#87ceeb"; // Color celeste directo, sin efectos de JavaScript
            element.style.cursor = "pointer";
            // Agregar handler de hover para mostrar "Tierra del Fuego"
            element.addEventListener("mouseenter", handleMalvinasHover);
            element.addEventListener("mouseleave", handleProvinciaLeave);
          }

          const provinciaNombre = getProvinciaNombre(element);

          if (!provinciaNombre && element.parentElement) {
            const parentNombre = getProvinciaNombre(element.parentElement);
            if (parentNombre) {
              const provinciaNormalizada =
                mapeoProvincias[parentNombre] || parentNombre;

              if (esProvinciaVisitada(provinciaNormalizada)) {
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

            if (esProvinciaVisitada(provinciaNormalizada)) {
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

            if (esProvinciaVisitada(provinciaNormalizada)) {
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

        // console.log(
        //   `Se procesaron ${provinciasProcesadas} provincias visitadas`
        // );
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
    <div id="mapa-argentina" className="container-mapa-argentina">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="titulo-mapa">Victoria Federal</h2>
            <p className="subtitulo-mapa">
              Explorá las recorridas de Victoria Villarruel por la Argentina.
            </p>

            <div className="mapa-progreso" ref={progresoRef}>
              <div className="mapa-progreso-cifras">
                <div className="mapa-progreso-cifra-item">
                  <span className="mapa-progreso-cifra">
                    {jurisdiccionesRecorridas}
                    <span className="mapa-progreso-cifra-total">
                      /{TOTAL_JURISDICCIONES}
                    </span>
                  </span>
                  <span className="mapa-progreso-cifra-etiqueta">
                    Provincias recorridas
                  </span>
                </div>

                <div className="mapa-progreso-cifra-item">
                  <span className="mapa-progreso-cifra">
                    {porcentajeRecorrido}%
                  </span>
                  <span className="mapa-progreso-cifra-etiqueta">
                    Del país recorrido
                  </span>
                </div>
              </div>

              <div className="mapa-progreso-bar">
                <div
                  className="mapa-progreso-bar-fill"
                  style={{ width: `${anchoBarraProgreso}%` }}
                ></div>
              </div>

              <p className="mapa-visitas-documentadas">
                <span className="mapa-visitas-documentadas-numero">
                  {totalVisitas}
                </span>{" "}
                visitas documentadas
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mapa-container">
            {/* Tooltip flotante */}
            {hoverProvincia &&
              (() => {
                const slug = provinciasVisitadas[hoverProvincia]?.slug;
                const visitas = cantidadVisitas(slug);
                return (
                  <div
                    className="tooltip-provincia"
                    style={{
                      left: `${tooltipPosition.x}px`,
                      top: `${tooltipPosition.y}px`,
                    }}
                  >
                    <span className="tooltip-nombre">{hoverProvincia}</span>
                    <span className="tooltip-visitas">
                      {visitas}{" "}
                      {visitas === 1 ? "visita" : "visitas"}
                    </span>
                  </div>
                );
              })()}

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
