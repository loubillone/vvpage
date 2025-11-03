import React, { useEffect } from "react";
import "../css/trayectoria.css";
import timelineVV from "../assets/img/trayectoria/timelineVV.png";
import firmaVV from "../assets/img/trayectoria/firmaVV.png";
import Footer from "../components/Footer";

const Trayectoria = () => {
  useEffect(() => {
    document.body.classList.add("trayectoria-bg");

    return () => {
      document.body.classList.remove("trayectoria-bg");
    };
  }, []);

  return (
    <div>
      {" "}
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
      <Footer />
    </div>
  );
};

export default Trayectoria;
