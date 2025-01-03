import React from "react";
import "../css/footer.css";
import { NavLink } from "react-router-dom";
import facebook from "../assets/img/footer/facebook.png";
import instagram from "../assets/img/footer/instagram.png";
import x from "../assets/img/footer/x.png";
import youtube from "../assets/img/footer/youtube.png";
import logoVV from "../assets/img/footer/logoVV.png";

const Footer = () => {
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
              <NavLink to="/">Inicio</NavLink>
            </div>
            <div className="col enlaces-footer">
              <NavLink to="/biografia">Biografía</NavLink>
            </div>
            <div className="col enlaces-footer">
              <NavLink to="/trayectoria">Trayectoria</NavLink>
            </div>
            <div className="col enlaces-footer">
              <NavLink to="/noticias">Noticias</NavLink>
            </div>
            <div className="col enlaces-footer">
              <NavLink to="/galeria">Galeria</NavLink>
            </div>
            <div className="col enlaces-footer">
              <NavLink to="/contacto">Contacto</NavLink>
            </div>
          </div>
          <div className="col">
            <div>
              <span className="titulo-enlaces-footer">
                Información y Contacto
              </span>
            </div>

            <div className="col enlaces-footer">
              <span>Contacto con el equipo</span>
            </div>
            <div className="col enlaces-footer">
              <span>Contáctenos</span>
            </div>
            <div className="col enlaces-footer">
              <span>Notas legales</span>
            </div>
            <div className="col enlaces-footer">
              <span>Protección de Datos</span>
            </div>
            <div className="col enlaces-footer">
              <span>Transparencia y acceso a la información</span>
            </div>
            <div className="col enlaces-footer">
              <span>Reglamento Interno</span>
            </div>
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
            manera oficial a Victoria Villarruel o su partido.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
