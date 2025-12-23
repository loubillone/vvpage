import React from "react";
import GaleriaVisor from "../components/GaleriaVisor";
import { Helmet } from "react-helmet-async";
const Galeria = () => {
  return (
    <div>
      <Helmet>
        <title>Galeria | Victoria Villarruel</title>
        <meta
          name="description"
          content="Galería de imágenes y eventos de Victoria Villarruel, vicepresidente de la Nación Argentina."
        />
      </Helmet>
      <GaleriaVisor />
    </div>
  );
};

export default Galeria;
