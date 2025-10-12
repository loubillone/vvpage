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
              Victoria Villarruel trabaja junto al Presidente Javier Milei en la
              transformación de nuestra nación. Su compromiso con la unidad
              nacional y los valores patrióticos guía cada paso de su labor,
              buscando un país donde los derechos de todos sean respetados y el
              futuro sea seguro, justo y próspero para las próximas
              generaciones.
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
            <h5 className="titulo-parrafo-box">
              Por la Verdad, la Justicia y la Libertad
            </h5>
            <p className="texto-parrafo-box">
              La verdad, la justicia y la reparación de las víctimas del
              terrorismo son los pilares que guían la labor de Victoria
              Villarruel. Su patriotismo, fe católica y defensa de la causa
              Malvinas fortalecen su compromiso de proteger los derechos de cada
              argentino y preservar la memoria histórica del país. Lucha por una
              Argentina unida, donde la libertad impulse el progreso y todos
              tengan la oportunidad de vivir en paz, reconciliación y armonía.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotosIndex;
