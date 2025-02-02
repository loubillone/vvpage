import React, { useState } from "react";
import vvgala from "../assets/img/index/vv-gala-index.png";
import vvjm from "../assets/img/index/vv-jm-index.png";
import "../css/fotosIndex.css";

const FotosIndex = () => {
  const [activeBox, setActiveBox] = useState(null);

  const toggleBox = (box) => {
    setActiveBox(activeBox === box ? null : box);
  };

  return (
    <div>
      <div className="container-fluid container-fotos-index">
        <div className="row fila-fotos-index">
          <div className="contenedor-imagen">
            <img
              onClick={() => toggleBox("boxJM")}
              className="imagenIndex"
              src={vvjm}
              alt="Victoria Villarruel y Javier Milei en la asunción presidencial"
            />
            <div
              className="texto-sobre-imagen"
              onClick={() => toggleBox("boxJM")}
            >
              <h2 className="titulo-sobre-imagen">Javier Milei</h2>
              <p className="subtitulo-sobre-imagen">Presidente de la Nación</p>
            </div>
          </div>

          <div className="contenedor-imagen">
            <img
              onClick={() => toggleBox("boxVV")}
              className="imagenIndex"
              src={vvgala}
              alt="Victoria Villarruel en la gala del Teatro Colón"
            />
            <div
              className="texto-sobre-imagen"
              onClick={() => toggleBox("boxVV")}
            >
              <h2 className="titulo-sobre-imagen">Victoria Villarruel</h2>
              <p className="subtitulo-sobre-imagen">
                Vicepresidente de la Nación
              </p>
            </div>
          </div>
        </div>

        {/* Fondo oscuro (overlay) */}
        <div
          className={`overlay ${activeBox ? "active" : ""}`}
          onClick={() => toggleBox(null)}
        ></div>

        {/* Box para Javier Milei */}
        <div className={`box-indexJM ${activeBox === "boxJM" ? "active" : ""}`}>
          <div className="texto-box-index">
            <h2 className="titulo-box">Javier</h2>
            <h2 className="titulo-box-dos">Milei</h2>
            <h6 className="subtitulo-box">Presidente de la Nación</h6>
            <h5 className="titulo-parrafo-box">
              Unidos por la Libertad y la Justicia
            </h5>
            <p className="texto-parrafo-box">
              Como defensora de los valores de justicia y libertad, me
              enorgullece trabajar junto al Presidente Javier Milei en la
              transformación de nuestra nación. Juntos, estamos comprometidos en
              asegurar un futuro próspero y seguro para todos los argentinos,
              donde la transparencia y el respeto por los derechos humanos sean
              pilares fundamentales. Apoyemos esta misión para construir un país
              más justo y libre para las generaciones venideras.
            </p>
          </div>
        </div>

        {/* Box para Victoria Villarruel */}
        <div className={`box-indexVV ${activeBox === "boxVV" ? "active" : ""}`}>
          <div className="texto-box-index">
            <h1 className="titulo-box">Victoria</h1>
            <h2 className="titulo-box-dos">Villarruel</h2>
            <h6 className="subtitulo-box">Vicepresidente de la Nación</h6>
            <h5 className="titulo-parrafo-box">
              Por la Verdad, la Justicia y la Libertad
            </h5>
            <p className="texto-parrafo-box">
              La verdad y la justicia son pilares indispensables para construir
              una Argentina fuerte y unida. Mi compromiso es con todos los
              ciudadanos, para asegurar que sus derechos sean protegidos y que
              la memoria de nuestro país se preserve completa y sin
              distorsiones. Lucharé por una nación donde la libertad individual
              sea el motor del progreso y donde cada argentino tenga la
              oportunidad de prosperar. Juntos, podemos transformar nuestra
              patria en un lugar de paz, reconciliación y oportunidades para
              todos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotosIndex;
