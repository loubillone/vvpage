import React from "react";
import "../css/home.css";
import FlyerHome from "../components/FlyerHome";
// import UltimasNoticias from "../components/UltimasNoticias";
import FotosIndex from "../components/FotosIndex";
import NuestroCompromiso from "../components/NuestroCompromiso";

const Home = () => {
  return (
    <div>
      <FlyerHome />

      {/* <UltimasNoticias /> */}

      <div className="container texto-principal-home">
        <div className="row">
          <div className="col">
            <p className="parrafo-home-vv">
              <span className="vv-estilo">Victoria Villarruel</span> es abogada
              egresada de la Universidad de Buenos Aires y{" "}
              <span className="vv-estilo">
                actual Vicepresidente de la Nación Argentina
              </span>
              . Es fundadora y presidente de la Asociación Civil Centro de
              Estudios Legales sobre el Terrorismo y sus Víctimas (CELTYV).
              Además, es Técnica en Seguridad Urbana y Portuaria. <br /> <br />
              Es autora del libro "Los llaman... jóvenes idealistas" y coautora
              de "Los otros muertos", donde se narran las historias de las
              víctimas del terrorismo en Argentina. Se desempeñó como
              coordinadora adjunta de la Comisión de Derechos Humanos del
              Colegio Público de Abogados de la Capital Federal. <br />
              <br /> A lo largo de su carrera, ha sido columnista en diversos
              medios gráficos y televisivos, abordando temas vinculados al
              terrorismo, los derechos humanos, la defensa y la seguridad.
            </p>
          </div>
        </div>
      </div>

      <FotosIndex />

      <NuestroCompromiso />
    </div>
  );
};

export default Home;
