import React, { useEffect } from "react";
import Victoria from "../components/Victoria";
import { useLocation } from "react-router-dom";
import Celtyv from "../components/Celtyv";
import Malvinas from "../components/Malvinas";
const Biografia = () => {
  const location = useLocation();

  const getComponent = () => {
    switch (location.pathname) {
      case "/celtyv":
        return <Celtyv />;
      case "/malvinas":
        return <Malvinas />;

      default:
        return <Victoria />;
    }
  };

  useEffect(() => {
    getComponent();
  }, []);
  return (
    <div>
      <Victoria />
    </div>
  );
};

export default Biografia;
