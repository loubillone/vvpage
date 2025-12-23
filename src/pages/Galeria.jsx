import React from "react";
import GaleriaVisor from "../components/GaleriaVisor";
import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../config/site";
const Galeria = () => {
  return (
    <div>
      <Helmet>
        <title>Galeria | Victoria Villarruel</title>
        <meta
          name="description"
          content="Galería de imágenes y eventos de Victoria Villarruel, vicepresidente de la Nación Argentina."
        />
        <link rel="canonical" href={`${SITE_URL}/galeria`} />
      </Helmet>
      <h1 className="visually-hidden">
        Galería de imágenes de Victoria Villarruel
      </h1>
      <GaleriaVisor />
    </div>
  );
};

export default Galeria;
