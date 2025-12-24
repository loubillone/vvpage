import React from "react";
import "../css/footer.css";
import { NavLink } from "react-router-dom";
import facebook from "../assets/img/footer/facebook.webp";
import instagram from "../assets/img/footer/instagram.webp";
import x from "../assets/img/footer/x.webp";
import youtube from "../assets/img/footer/youtube.webp";
import logoVV from "../assets/img/footer/logoVV.webp";

const Footer = () => {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <div>
      <div className="container-fluid container-footer">
        <div className="row">
          <div className="col columna-iconos-footer">
            <div>
              <a
                href="https://www.facebook.com/victoria.e.villarruel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="icono facebook"
                  className="iconos-footer"
                />
              </a>
            </div>

            <div>
              <a
                href="https://x.com/VickyVillarruel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={x} alt="icono x" className="iconos-footer" />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/victoria.villarruel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="icono instragram"
                  className="iconos-footer"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/@Victoria-villarruel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtube}
                  alt="icono youtube"
                  className="iconos-footer"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col columna-logoVV-footer">
            <img src={logoVV} alt="logo vv" className="logoVV-footer" />
          </div>
        </div>

        <div className="row fila-container-texto-footer">
          <div className="col">
            <span className="titulo-enlaces-footer">Navegación</span>

            <div className="col enlaces-footer">
              <NavLink to="/" onClick={handleNavClick}>
                Inicio
              </NavLink>
            </div>
            <div className="col enlaces-footer">
              <NavLink to="/biografia" onClick={handleNavClick}>
                Biografía
              </NavLink>
            </div>
            <div className="col enlaces-footer">
              <NavLink to="/trayectoria" onClick={handleNavClick}>
                Trayectoria
              </NavLink>
            </div>
            <div className="col enlaces-footer">
              <NavLink to="/senado/malvinas" onClick={handleNavClick}>
                Senado
              </NavLink>
            </div>
            <div className="col enlaces-footer">
              <NavLink to="/galeria" onClick={handleNavClick}>
                Galeria
              </NavLink>
            </div>
            <div className="col enlaces-footer">
              <NavLink to="/contacto" onClick={handleNavClick}>
                Contacto
              </NavLink>
            </div>
          </div>
          <div className="col">
            <div>
              <span className="titulo-enlaces-footer">
                Información y Contacto
              </span>
            </div>

            <div className="col enlaces-footer">
              <NavLink to="/contacto" onClick={handleNavClick}>
                Escribinos
              </NavLink>
            </div>
            <div className="col enlaces-footer">
              <NavLink to="/contacto" onClick={handleNavClick}>
                Consultas y sugerencias
              </NavLink>
            </div>
            <div className="col enlaces-footer">
              <span>Instagram</span>
            </div>
            {/* <div className="col enlaces-footer">
              <span>Protección de Datos</span>
            </div>
            <div className="col enlaces-footer">
              <span>Transparencia y acceso a la información</span>
            </div>
            <div className="col enlaces-footer">
              <span>Reglamento Interno</span>
            </div> */}
          </div>
          <div className="col">
            <div>
              <span className="titulo-enlaces-footer">Redes Sociales</span>
            </div>
            <div>
              <div className="col enlaces-footer">
                <a
                  href="https://x.com/VickyVillarruel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Twitter</span>
                </a>
              </div>
              <div className="col enlaces-footer">
                <a
                  href="https://www.facebook.com/victoria.e.villarruel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Facebook</span>
                </a>
              </div>
              <div className="col enlaces-footer">
                <a
                  href="https://www.instagram.com/victoria.villarruel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Instagram</span>
                </a>
              </div>
              <div className="col enlaces-footer">
                <a
                  href="https://www.tiktok.com/@victoriavillarruel_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Tik Tok</span>
                </a>
              </div>
              <div className="col enlaces-footer">
                <a
                  href="https://www.youtube.com/@Victoria-villarruel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <span className="texto-final-footer">
            Esta página web es una iniciativa independiente y no representa de
            manera oficial a Victoria Villarruel. © 2025 Todos los derechos
            reservados.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
