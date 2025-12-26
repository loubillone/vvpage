import React, { useState, useEffect } from "react";
import vvgala from "../assets/img/index/vv-gala-index.webp";
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
          <div
            className="contenedor-imagen"
            onMouseEnter={() => activateBox("boxVV")}
            onClick={() => isMobile && toggleBox("boxVV")}
          >
            <img
              className="imagenBox"
              src={vvgala}
              alt="Victoria Villarruel en su llegada a la gala en el teatro Colón"
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

        <div
          className={`box-indexVV ${activeBoxes.has("boxVV") ? "active" : ""}`}
        >
          <div className="texto-box">
            <h2 className="titulo-box">Victoria</h2>
            <h2 className="titulo-box-dos">Villarruel</h2>
            <h6 className="subtitulo-box">Vicepresidente de la Nación</h6>
            <h5 className="titulo-parrafo-box">Por la unidad nacional</h5>
            <p className="texto-parrafo-box">
              <span className="vv-estilo">
                La verdad, la justicia y la reparación de las víctimas del
                terrorismo
              </span>{" "}
              son los pilares que guían la labor de Victoria Villarruel. Su
              <span className="vv-estilo">
                {" "}
                patriotismo, fe católica y defensa de la causa Malvinas
              </span>{" "}
              fortalecen su compromiso de proteger los derechos de cada
              argentino y{" "}
              <span className="vv-estilo">
                preservar la memoria histórica de la Nación
              </span>
              . Lucha por una Argentina unida, donde el amor a la Patria impulse
              el progreso.{" "}
              <span className="vv-estilo">
                Construye una Argentina que incluya, abrace y proyecte a todos,
              </span>{" "}
              para legar a las nuevas generaciones{" "}
              <span className="vv-estilo">la patria pujante que soñamos.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotosIndex;
