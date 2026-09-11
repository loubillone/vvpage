import React from "react";
import { Link } from "react-router-dom";
import vvEscritorio from "../assets/img/biografia/victoria/vvEscritorio.webp";
import "../css/victoriaPresentacion.css";

// Presentación breve de Victoria Villarruel en el Home: foto + texto + un
// único CTA hacia la biografía completa (/biografia). No es un resumen
// biográfico completo (eso vive en VictoriaBio.jsx / /biografia): es
// solo una introducción editorial, sin cards, overlays ni hovers.
//
// Se reutiliza la misma foto ("Victoria Villarruel en su despacho") que
// ya usa VictoriaBio.jsx como su imagen principal, para mantener
// coherencia visual con cómo el sitio la presenta institucionalmente.
const VictoriaPresentacion = () => {
  return (
    <section
      className="victoria-presentacion"
      aria-labelledby="victoria-presentacion-titulo"
    >
      <div className="container victoria-presentacion-contenedor">
        <div className="victoria-presentacion-foto">
          <img
            src={vvEscritorio}
            alt="Victoria Villarruel en su despacho"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="victoria-presentacion-texto">
          {/* Encabezado solo para estructura/accesibilidad: el diseño
              visual queda a cargo del párrafo y el CTA, sin agregar un
              título visible que repita el nombre. */}
          <h2
            id="victoria-presentacion-titulo"
            className="visually-hidden"
          >
            Victoria Villarruel
          </h2>

          <p className="victoria-presentacion-kicker">Sobre Victoria</p>

          <p className="victoria-presentacion-parrafo">
            Victoria Villarruel es abogada egresada de la Universidad de
            Buenos Aires y Vicepresidente de la Nación Argentina. Fundadora
            de CELTYV, desarrolló gran parte de su trayectoria en temas
            vinculados a los derechos humanos, la defensa y la seguridad.
          </p>

          <p className="victoria-presentacion-parrafo">
            Es autora y coautora de libros dedicados a las víctimas del
            terrorismo en Argentina.
          </p>

          <Link to="/biografia" className="victoria-presentacion-cta">
            Conocé su biografía →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VictoriaPresentacion;
