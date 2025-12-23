import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import VictoriaBio from "../components/VictoriaBio";
import { Helmet } from "react-helmet-async";

const Biografia = () => {
  return (
    <>
      <Helmet>
        <title>Biografía | Victoria Villarruel</title>
        <meta
          name="description"
          content="Biografía de Victoria Villarruel: formación, trayectoria política y compromiso institucional."
        />
      </Helmet>

      <VictoriaBio />
    </>
  );
};

export default Biografia;
