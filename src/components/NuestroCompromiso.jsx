import React from "react";
import "../css/NuestroCompromiso.css";
import defensa from "../assets/img/index/defensa.png";
import justicia from "../assets/img/index/justicia.png";
import lupa from "../assets/img/index/lupa.png";
import ley from "../assets/img/index/ley.png";
import partenon from "../assets/img/index/partenon.png";
import pergamino from "../assets/img/index/pergamino.png";

const NuestroCompromiso = () => {
  return (
    <div>
      <div className="container">
        <div className="row fila-texto-compromiso">
          <div className="col">
            <h2 className="titulo-compromiso">Nuestro Compromiso</h2>
          </div>
        </div>

        <div className="row contenedor-iconos-compromiso">
          <div className="col col-icono-compromiso">
            <img src={pergamino} alt="pergamino" />
            <span className="texto-iconos-compromiso">Revisión Histórica</span>
          </div>
          <div className="col col-icono-compromiso">
            <img src={justicia} alt="balanza justicia" />
            <span className="texto-iconos-compromiso">
              Defensa de Víctimas del Terrorismo
            </span>
          </div>
          <div className="col col-icono-compromiso">
            <img src={lupa} alt="lupa" />
            <span className="texto-iconos-compromiso">
              Transparencia y Auditoría
            </span>
          </div>
        </div>

        <div className="row  contenedor-iconos-compromiso">
          <div className="col col-icono-compromiso">
            <img src={ley} alt="martillo ley" />
            <span className="texto-iconos-compromiso">
              Justicia y Derechos Humanos
            </span>
          </div>
          <div className="col col-icono-compromiso">
            <img src={partenon} alt="congreso" />
            <span className="texto-iconos-compromiso">Valores</span>
          </div>

          <div className="col col-icono-compromiso">
            <img src={defensa} alt="escudo" />
            <span className="texto-iconos-compromiso">Defensa Nacional</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestroCompromiso;
