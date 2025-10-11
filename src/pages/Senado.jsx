import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Malvinas from "../components/Malvinas";
import VictimasTerrorismo from "../components/VictimasTerrorismo";

const Senado = () => {
  const location = useLocation();
  const getComponent = () => {
    switch (location.pathname) {
      case "/malvinas":
        return <Malvinas />;
      case "/victimasDelTerrorismo":
        return <VictimasTerrorismo />;

      default:
        return <Malvinas />;
    }
  };

  useEffect(() => {
    getComponent();
  }, []);
  return (
    <div>
      <Malvinas />
    </div>
  );
};

export default Senado;
