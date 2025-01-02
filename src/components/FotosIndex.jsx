import React from "react";
import lazo from "../assets/img/index/lazo-arg.png";
import vvgala from "../assets/img/index/vv-gala-index.png";
import vvjm from "../assets/img/index/vv-jm-index.png";
import "../css/fotosIndex.css";

const FotosIndex = () => {
  return (
    <div>
      <div className="container-fluid container-fotos-index">
        <div className="row fila-fotos-index">
          <img
            className="imagenIndex"
            src={vvjm}
            alt="Victoria Villarruel y Javier Milei en la asunción presidencial"
          />

          <img
            className="imagenIndex"
            src={vvgala}
            alt="Victoria Villarruel en la salida de la gala del teatro Colón"
          />
        </div>
      </div>

      <div className="box-indexJM">
        <h2>JAVIER MILEI</h2>
      </div>

      <div className="box-indexVV">
        <h1>VICTORIA VILLARRUEL</h1>
      </div>
    </div>
  );
};

export default FotosIndex;
