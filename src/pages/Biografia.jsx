import React, { useEffect } from "react";
import VictoriaBio from "../components/VictoriaBio";
import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../config/site";
const Biografia = () => {
  return (
    <>
      <Helmet>
        <title>Biografía | Victoria Villarruel</title>
        <meta
          name="description"
          content="Biografía de Victoria Villarruel: formación, trayectoria política y compromiso institucional."
        />
        <link rel="canonical" href={`${SITE_URL}/biografia`} />
      </Helmet>

      <h1 className="visually-hidden">Biografía de Victoria Villarruel</h1>

      <VictoriaBio />
    </>
  );
};

export default Biografia;
