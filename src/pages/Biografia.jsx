import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Celtyv from "../components/Celtyv";
import VictoriaBio from "../components/VictoriaBio";
const Biografia = () => {
  const location = useLocation();

  const getComponent = () => {
    switch (location.pathname) {
      case "/celtyv":
        return <Celtyv />;
      // case "/malvinas":
      //   return <Malvinas />;

      default:
        return <VictoriaBio />;
    }
  };

  useEffect(() => {
    getComponent();
  }, []);
  return (
    <div>
      <VictoriaBio />
    </div>
  );
};

export default Biografia;
