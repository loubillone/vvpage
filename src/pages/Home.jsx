import React from "react";
import FlyerHome from "../components/FlyerHome";
import VictoriaPresentacion from "../components/VictoriaPresentacion";
import UltimasVisitas from "../components/UltimasVisitas";
import VictoriaEnNumeros from "../components/VictoriaEnNumeros";
import MapaArgentina from "../components/MapaArgentina";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import "../css/homeRitmo.css";
const SITE_URL = import.meta.env.VITE_SITE_URL;

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Victoria Villarruel | Todo Por Argentina</title>
        <meta
          name="description"
          content="Sitio dedicado a Victoria Villarruel, vicepresidente de la Nación Argentina. Biografía, trayectoria, actividad legislativa y contacto."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
      </Helmet>
      <h1 className="visually-hidden">
        Victoria Villarruel – Vicepresidente de la Nación Argentina
      </h1>

      <FlyerHome />

      <VictoriaPresentacion />

      <VictoriaEnNumeros />

      <UltimasVisitas />

      <MapaArgentina />

      <Footer />
    </div>
  );
};

export default Home;
