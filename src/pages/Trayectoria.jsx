import React, { useEffect } from "react";
import "../css/trayectoria.css";

import timelineVV from "../assets/img/trayectoria/timelineVV.png";
import firmaVV from "../assets/img/trayectoria/firmaVV.png";

const Trayectoria = () => {
  useEffect(() => {
    document.body.classList.add("trayectoria-bg"); // Agrega la clase al body

    return () => {
      document.body.classList.remove("trayectoria-bg"); // Limpia al salir
    };
  }, []);

  return (
    <div className="container-fluid container-trayectoria">
      <div className="row">
        <img
          src={timelineVV}
          alt="timeline de la trayectoria de Victoria Villarruel"
          className="timelineVV"
        />
      </div>

      <div className="row">
        <div className="firmaVV">
          <img src={firmaVV} alt="todo por argentina" />
        </div>
      </div>
    </div>
  );
};

export default Trayectoria;
