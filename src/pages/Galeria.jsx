import React from "react";
import GaleriaVisor from "../components/GaleriaVisor";
import { Helmet } from "react-helmet-async";
const SITE_URL = import.meta.env.VITE_SITE_URL;
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
