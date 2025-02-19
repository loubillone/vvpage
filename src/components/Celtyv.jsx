import React from "react";
import "../css/celtyv.css";
import logoCeltyv from "../assets/img/biografia/celtyv/logoCeltyv.png";
import manos from "../assets/img/biografia/celtyv/manos.png";
import tituloCeltyv from "../assets/img/biografia/celtyv/tituloCeltyv.png";
import victimas from "../assets/img/biografia/celtyv/victimas.png";
import vvCeltyv from "../assets/img/biografia/celtyv/vvCeltyv.png";

const Celtyv = () => {
  return (
    <div>
      <div className="container">
        <div className="row fila-titulo-celtyv">
          <div className="titulo-celtyv">
            <img src={tituloCeltyv} alt="titulo celtyv" />
          </div>

          <div className="container-parrafo-celtyv">
            <span className="texto-titulo-celtyv">
              Centro de Estudios Legales sobre el Terrorismo y sus Víctimas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celtyv;
