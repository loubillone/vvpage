import React from "react";
import "../css/home.css";
import FlyerHome from "../components/FlyerHome";
import FotosIndex from "../components/FotosIndex";
import NuestroCompromiso from "../components/NuestroCompromiso";
import MapaArgentina from "../components/MapaArgentina";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Victoria Villarruel | Todo Por Argentina</title>
        <meta
          name="description"
          content="Sitio dedicado a Victoria Villarruel, vicepresidente de la Nación Argentina. Biografía, trayectoria, actividad legislativa y contacto."
        />
      </Helmet>

      <FlyerHome />

      <div className="container texto-principal-home">
        <div className="row">
          <div className="col">
            <p className="parrafo-home-vv">
              <span className="vv-estilo">Victoria Villarruel</span> es abogada
              egresada de la Universidad de Buenos Aires y{" "}
              <span className="vv-estilo">
                actual Vicepresidente de la Nación Argentina
              </span>
              . Es fundadora y ex presidente de la Asociación Civil Centro de
              Estudios Legales sobre el Terrorismo y sus Víctimas (CELTYV).
              Además, es Técnica en Seguridad Urbana y Portuaria. <br /> <br />
              <span className="vv-estilo">
                Es autora del libro "Los llaman... jóvenes idealistas" y
                coautora de "Los otros muertos"
              </span>
              , donde se narran las historias de las víctimas del terrorismo en
              Argentina. Se desempeñó como coordinadora adjunta de la Comisión
              de Derechos Humanos del Colegio Público de Abogados de la Capital
              Federal. <br />
              <br /> A lo largo de su carrera,{" "}
              <span className="vv-estilo">
                ha sido columnista en diversos medios gráficos y televisivos
              </span>
              , abordando temas vinculados al terrorismo, los derechos humanos,
              la defensa y la seguridad.
            </p>
          </div>
        </div>
      </div>

      <FotosIndex />

      <MapaArgentina />

      <NuestroCompromiso />

      <Footer />
    </div>
  );
};

export default Home;
