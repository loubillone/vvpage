import React from "react";
import { useParams } from "react-router-dom";
import SenadoTemas from "../components/SenadoTemas";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../config/site";

const Senado = () => {
  const { tema } = useParams();

  const seoData = {
    malvinas: {
      title: "Senado | Malvinas",
      description:
        "Acciones y homenajes de Victoria Villarruel en el Senado de la Nación en defensa de la soberanía argentina sobre las Islas Malvinas.",
      canonical: `${SITE_URL}/senado/malvinas`,
    },
    victimasDelTerrorismo: {
      title: "Senado | Víctimas del Terrorismo",
      description:
        "Trabajo de Victoria Villarruel en el Senado en memoria y reconocimiento de las víctimas del terrorismo en la historia argentina.",
      canonical: `${SITE_URL}/senado/victimasDelTerrorismo`,
    },
  };

  const currentSEO = seoData[tema];

  const h1Map = {
    malvinas: "Victoria Villarruel en el Senado – Causa Malvinas",
    victimasDelTerrorismo:
      "Victoria Villarruel en el Senado – Víctimas del Terrorismo",
  };

  return (
    <>
      <Helmet>
        <title>{currentSEO?.title || "Victoria Villarruel"}</title>
        <meta
          name="description"
          content={
            currentSEO?.description ||
            "Actividad de Victoria Villarruel en el Senado de la Nación Argentina."
          }
        />
        <link
          rel="canonical"
          href={currentSEO?.canonical || `${SITE_URL}/senado/${tema}`}
        />
      </Helmet>
      <h1 className="visually-hidden">
        {h1Map[tema] || "Victoria Villarruel en el Senado de la Nación"}
      </h1>

      <SenadoTemas tema={tema} />
      <Footer />
    </>
  );
};

export default Senado;
