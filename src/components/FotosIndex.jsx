import React, { useState, useEffect } from "react";
import vvgala from "../assets/img/index/vv-gala-index.png";
import vvjm from "../assets/img/index/vv-jm-index.png";
import "../css/boxTextos.css";

const FotosIndex = () => {
  const [activeBoxes, setActiveBoxes] = useState(new Set());
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleBox = (box) => {
    const newActiveBoxes = new Set(activeBoxes);
    if (newActiveBoxes.has(box)) {
      newActiveBoxes.delete(box);
    } else {
      newActiveBoxes.add(box);
    }
    setActiveBoxes(newActiveBoxes);
  };

  const activateBox = (box) => {
    if (!isMobile) {
      setActiveBoxes((prev) => new Set(prev).add(box));
    }
  };

  return (
    <div>
      <div className="container-fluid container-fotos-index">
        <div className="row fila-fotos-box">
          {/* Imagen de Javier Milei */}
          <div
            className="contenedor-imagen"
            onMouseEnter={() => activateBox("boxJM")}
            onClick={() => isMobile && toggleBox("boxJM")}
          >
            <img
              className="imagenBox"
              src={vvjm}
              alt="Victoria Villarruel y Javier Milei en la asunción presidencial"
            />
            <div className="texto-sobre-imagen">
              <h2 className="titulo-sobre-imagen">Javier Milei</h2>
              <p className="subtitulo-sobre-imagen">Presidente de la Nación</p>
            </div>
          </div>

          {/* Imagen de Victoria Villarruel */}
          <div
            className="contenedor-imagen"
            onMouseEnter={() => activateBox("boxVV")}
            onClick={() => isMobile && toggleBox("boxVV")}
          >
            <img
              className="imagenBox"
              src={vvgala}
              alt="Victoria Villarruel en la gala del Teatro Colón"
            />
            <div className="texto-sobre-imagen">
              <h2 className="titulo-sobre-imagen">Victoria Villarruel</h2>
              <p className="subtitulo-sobre-imagen">
                Vicepresidente de la Nación
              </p>
            </div>
          </div>
        </div>

        {/* Fondo oscuro (overlay) en móviles */}
        {isMobile && activeBoxes.size > 0 && (
          <div
            className="overlay active"
            onClick={() => setActiveBoxes(new Set())}
          ></div>
        )}

        {/* Box para Javier Milei */}
        <div
          className={`box-indexJM ${activeBoxes.has("boxJM") ? "active" : ""}`}
        >
          <div className="texto-box">
            <h2 className="titulo-box">Javier</h2>
            <h2 className="titulo-box-dos">Milei</h2>
            <h6 className="subtitulo-box">Presidente de la Nación</h6>
            <h5 className="titulo-parrafo-box">
              Unidos por la Libertad y la Justicia
            </h5>
            <p className="texto-parrafo-box">
              Junto al Presidente Javier Milei, Victoria Villarruel impulsa una
              nueva etapa en la historia argentina. Su trabajo refleja la
              convicción de que el cambio solo es posible a través del esfuerzo,
              la unidad y el amor por la Patria. Con una mirada puesta en el
              futuro, promueve políticas que fortalezcan las instituciones,
              devuelvan la esperanza al pueblo y consoliden una Nación libre,
              soberana y próspera, capaz de recuperar su grandeza y proyectarse
              al mundo con orgullo.
            </p>
          </div>
        </div>

        {/* Box para Victoria Villarruel */}
        <div
          className={`box-indexVV ${activeBoxes.has("boxVV") ? "active" : ""}`}
        >
          <div className="texto-box">
            <h1 className="titulo-box">Victoria</h1>
            <h2 className="titulo-box-dos">Villarruel</h2>
            <h6 className="subtitulo-box">Vicepresidente de la Nación</h6>
            <h5 className="titulo-parrafo-box">Por la unidad nacional</h5>
            <p className="texto-parrafo-box">
              La verdad, la justicia y la reparación de las víctimas del
              terrorismo son los pilares que guían la labor de Victoria
              Villarruel. Su patriotismo, fe católica y defensa de la causa
              Malvinas fortalecen su compromiso de proteger los derechos de cada
              argentino y preservar la memoria histórica de la Nación. Lucha por
              una Argentina unida, donde el amor a la Patria impulse el
              progreso. Construye una Argentina que incluya, abrace y proyecte a
              todos, para legar a las nuevas generaciones la patria pujante que
              soñamos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotosIndex;
