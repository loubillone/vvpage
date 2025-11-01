import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/mapaArgentina.css";

// Datos de provincias visitadas - puedes agregar más aquí
const provinciasVisitadas = {
  "Buenos Aires": {
    nombre: "Buenos Aires",
    visitada: true,
    slug: "buenos-aires",
  },
  Córdoba: {
    nombre: "Córdoba",
    visitada: true,
    slug: "cordoba",
  },
  Tucumán: {
    nombre: "Tucumán",
    visitada: true,
    slug: "tucuman",
  },
  Salta: {
    nombre: "Salta",
    visitada: true,
    slug: "salta",
  },
  Chubut: {
    nombre: "Chubut",
    visitada: true,
    slug: "chubut",
  },
  "Tierra del Fuego": {
    nombre: "Tierra del Fuego",
    visitada: true,
    slug: "tierra-del-fuego",
  },
  Catamarca: {
    nombre: "Catamarca",
    visitada: true,
    slug: "catamarca",
  },
  Mendoza: {
    nombre: "Mendoza",
    visitada: true,
    slug: "mendoza",
  },
  Jujuy: {
    nombre: "Jujuy",
    visitada: true,
    slug: "jujuy",
  },
};

// Mapeo de posibles IDs/nombres del SVG a nuestros nombres de provincias
const mapeoProvincias = {
  "Buenos Aires": "Buenos Aires",
  "Ciudad de Buenos Aires": "Buenos Aires",
  "Ciudad Autónoma de Buenos Aires": "Buenos Aires",
  Córdoba: "Córdoba",
  Tucumán: "Tucumán",
  Salta: "Salta",
  Chubut: "Chubut",
  "Tierra del Fuego": "Tierra del Fuego",
  "Tierra del Fuego, Antártida e Islas del Atlántico Sur": "Tierra del Fuego",
  Catamarca: "Catamarca",
  Mendoza: "Mendoza",
  Jujuy: "Jujuy",
  "Islas Malvinas": "Islas Malvinas",
  Malvinas: "Islas Malvinas",
  "Falkland Islands": "Islas Malvinas",
  // Códigos ISO comunes
  ARB: "Buenos Aires",
  ARC: "Ciudad de Buenos Aires",
  ARX: "Córdoba",
  ART: "Tucumán",
  ARS: "Salta",
  ARU: "Chubut",
  ARV: "Tierra del Fuego",
  ARK: "Catamarca",
  ARM: "Mendoza",
  ARH: "Jujuy",
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
    // Intentar obtener el nombre desde diferentes atributos
    const id = element.id || element.getAttribute("id");
    const title = element.getAttribute("title");
    const name = element.getAttribute("name");
    const dataName = element.getAttribute("data-name");
    const className = element.className?.baseVal || element.className;

    // Buscar en los atributos
    const posiblesNombres = [id, title, name, dataName];

    for (const nombre of posiblesNombres) {
      if (nombre) {
        // Normalizar el nombre (eliminar espacios extra, etc.)
        const nombreNormalizado = nombre.trim();
        if (mapeoProvincias[nombreNormalizado]) {
          return mapeoProvincias[nombreNormalizado];
        }
        // Si está directamente en provinciasVisitadas
        if (provinciasVisitadas[nombreNormalizado]) {
          return nombreNormalizado;
        }
      }
    }

    // Si no encuentra, devolver el ID si existe
    return id || null;
  };

  // Aplicar interactividad al SVG cargado
  useEffect(() => {
    if (svgLoaded && svgContent && svgContainerRef.current) {
      // Esperar un poco más para asegurar que el SVG esté completamente renderizado
      setTimeout(() => {
        const svgElement = svgContainerRef.current?.querySelector("svg");
        if (!svgElement) {
          console.log("No se encontró el elemento SVG en el contenedor");
          return;
        }

        // Estilizar el SVG para que sea responsive
        svgElement.style.width = "100%";
        svgElement.style.height = "auto";
        svgElement.classList.add("mapa-svg");

        // Seleccionar todos los paths que puedan ser provincias
        const provincias = svgElement.querySelectorAll(
          "path, polygon, polyline, g"
        );

        console.log(`Se encontraron ${provincias.length} elementos en el SVG`);

        let provinciasProcesadas = 0;

        provincias.forEach((element) => {
          // Agregar clase base a todos los elementos
          element.classList.add("provincia");

          // Intentar obtener el nombre de la provincia desde diferentes fuentes
          const provinciaNombre = getProvinciaNombre(element);

          // Si no encontramos el nombre, intentar buscarlo por el grupo padre
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

  // Cargar el SVG desde public/ - intentar diferentes nombres posibles
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
              console.log(`SVG cargado exitosamente: ${nombre}`);
              setSvgContent(text);
              setTimeout(() => {
                setSvgLoaded(true);
                console.log("Estado svgLoaded cambiado a true");
              }, 100);
              return;
            }
          }
        } catch (err) {
          console.log(`No se encontró ${nombre}, intentando siguiente...`);
        }
      }
      console.log(
        "No se encontró ningún SVG. Verifica que el archivo esté en public/"
      );
      setSvgLoaded(false);
    };

    cargarSVG();
  }, []);

  return (
    <div className="container-mapa-argentina">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="titulo-mapa">
              Visitas de Victoria Villarruel por Argentina
            </h2>
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

            {/* SVG cargado */}
            {svgLoaded && svgContent && (
              <div
                ref={svgContainerRef}
                dangerouslySetInnerHTML={{ __html: svgContent }}
                className="svg-wrapper"
              />
            )}

            {/* Si el SVG no se ha cargado, mostrar mensaje */}
            {!svgLoaded && (
              <div className="instrucciones-mapa">
                <p>
                  <strong>Cargando mapa...</strong>
                </p>
                <p>
                  Si el mapa no aparece, verifica que el archivo SVG esté en la
                  carpeta <code>public/</code> con uno de estos nombres:
                </p>
                <ul>
                  <li>
                    <code>argentina-map.svg</code>
                  </li>
                  <li>
                    <code>argentina.svg</code>
                  </li>
                  <li>
                    <code>mapa-argentina.svg</code>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapaArgentina;
