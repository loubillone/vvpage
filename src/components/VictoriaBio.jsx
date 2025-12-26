import React, { useState, useEffect } from "react";
import "../css/victoria.css";
import "../css/boxTextos.css";
import eduardo from "../assets/img/biografia/victoria/eduardo.webp";
import vickyLibro from "../assets/img/biografia/victoria/vickyLibro.webp";
import vickyEscritorio from "../assets/img/biografia/victoria/vvEscritorio.webp";
import vickyCharla from "../assets/img/biografia/victoria/vvAct.webp";
import vickyLiceo from "../assets/img/biografia/victoria/vvMilitar.webp";
import vickySenado from "../assets/img/biografia/victoria/vvSenado.webp";
import Footer from "./Footer";

const VictoriaBio = () => {
  const [activeBoxes, setActiveBoxes] = useState(new Set());
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleBox = (box) => {
    const newActiveBoxes = new Set(activeBoxes);
    if (newActiveBoxes.has(box)) {
      newActiveBoxes.delete(box);
    } else {
      newActiveBoxes.add(box);
    }
    setActiveBoxes(newActiveBoxes);
  };

  const activateBox = (box) => {
    if (!isMobile) {
      setActiveBoxes((prev) => new Set(prev).add(box));
    }
  };

  return (
    <div>
      <div className="container-fluid container-fotos-victoria">
        <div className="row fila-fotos-box">
          {/* Victoria Villarruel */}
          <div
            className="contenedor-imagen"
            onMouseEnter={() => activateBox("boxVG")}
            onClick={() => isMobile && toggleBox("boxVG")}
          >
            <img
              className="imagenBox"
              src={vickyEscritorio}
              alt="Victoria Villarruel en su despacho"
            />
            <div className="texto-sobre-imagen">
              <h2 className="titulo-sobre-imagen">Victoria Villarruel</h2>
              <p className="subtitulo-sobre-imagen">
                Vicepresidente de la Nación
              </p>
            </div>
          </div>

          {/* Activismo*/}
          <div
            className="contenedor-imagen"
            onMouseEnter={() => activateBox("boxVJ")}
            onClick={() => isMobile && toggleBox("boxVJ")}
          >
            <img
              className="imagenBox"
              src={vickyCharla}
              alt="Victoria Villarruel en una charla del Celtyv"
            />
            <div className="texto-sobre-imagen">
              <h2 className="titulo-sobre-imagen">Activismo</h2>
              <p className="subtitulo-sobre-imagen">Inicios</p>
            </div>
          </div>

          {/* Formación */}
          <div
            className="contenedor-imagen"
            onMouseEnter={() => activateBox("boxAsuncion")}
            onClick={() => isMobile && toggleBox("boxAsuncion")}
          >
            <img
              className="imagenBox"
              src={vickySenado}
              alt="Victoria Villarruel en el Senado"
            />
            <div className="texto-sobre-imagen">
              <h2 className="titulo-sobre-imagen">Familia</h2>
              <p className="subtitulo-sobre-imagen">y Formación Academica</p>
            </div>
          </div>

          {/* Pensamiento */}
          <div
            className="contenedor-imagen"
            onMouseEnter={() => activateBox("boxEEUU")}
            onClick={() => isMobile && toggleBox("boxEEUU")}
          >
            <img
              className="imagenBox"
              src={vickyLiceo}
              alt="Victoria Villarruel en el Liceo Militar"
            />
            <div className="texto-sobre-imagen">
              <h2 className="titulo-sobre-imagen">Pensamiento y posturas</h2>
              <p className="subtitulo-sobre-imagen">
                Historia y Derechos Humanos
              </p>
            </div>
          </div>

          {/* Eduardo */}
          <div
            className="contenedor-imagen"
            onMouseEnter={() => activateBox("boxEV")}
            onClick={() => isMobile && toggleBox("boxEV")}
          >
            <img className="imagenBox" src={eduardo} alt="Eduardo Villarruel" />
            <div className="texto-sobre-imagen">
              <h2 className="titulo-sobre-imagen">Soldados de Malvinas</h2>
              <p className="subtitulo-sobre-imagen">Su padre</p>
            </div>
          </div>

          {/* Celtyv */}
          <div
            className="contenedor-imagen"
            onMouseEnter={() => activateBox("boxLibros")}
            onClick={() => isMobile && toggleBox("boxLibros")}
          >
            <img
              className="imagenBox"
              src={vickyLibro}
              alt="Victoria Villarruel con sus libros"
            />
            <div className="texto-sobre-imagen">
              <h2 className="titulo-sobre-imagen">Publicaciones</h2>
              <p className="subtitulo-sobre-imagen">
                "Los llaman... jovenes idealistas"
              </p>
            </div>
          </div>
        </div>

        {/* Fondo oscuro (overlay) en móviles */}
        {isMobile && activeBoxes.size > 0 && (
          <div
            className="overlay active"
            onClick={() => setActiveBoxes(new Set())}
          ></div>
        )}

        {/* Box GALA*/}
        <div
          className={`box-vickyGala ${
            activeBoxes.has("boxVG") ? "active" : ""
          }`}
        >
          <div className="texto-box">
            <h2 className="titulo-box">Victoria</h2>
            <h2 className="titulo-box-dos">Villarruel</h2>
            <h6 className="subtitulo-box">Vicepresidente de la Nación</h6>
            <p className="texto-parrafo-box">
              Victoria Eugenia Villarruel (Buenos Aires, 13 de abril de 1975) es
              una{" "}
              <span className="vv-estilo">
                abogada, escritora, activista y política argentina,
              </span>{" "}
              actual Vicepresidente de la Nación Argentina desde el 10 de
              diciembre de 2023. Es{" "}
              <span className="vv-estilo">
                fundadora de la asociación civil autodenominada Centro de
                Estudios Legales sobre el Terrorismo y sus Víctimas (CELTYV)
              </span>
              , la cual presidió desde sus inicios.
            </p>
          </div>
        </div>

        {/* Box activismo */}
        <div
          className={`box-vickyJavier ${
            activeBoxes.has("boxVJ") ? "active" : ""
          }`}
        >
          <div className="texto-box">
            <h2 className="titulo-box-dos">Activismo</h2>

            <h6 className="subtitulo-box">Inicios</h6>
            <p className="texto-parrafo-box">
              Villarruel fue parte de la{" "}
              <span className="vv-estilo">
                Asociación de Familiares y Amigos de los Presos Políticos de la
                Argentina (AFyAPPA).
              </span>{" "}
              Lideró un programa de radio llamado Proyecto Verdad y fue miembro
              de Jóvenes por la Verdad.{" "}
              <span className="vv-estilo">En 2003, fundó CELTYV,</span>Centro de
              Estudios Legales sobre el Terrorismo y sus Víctimas (CELTYV),{" "}
              <span className="vv-estilo">
                con el objetivo de defender a las víctimas del terrorismo de
                izquierda en Argentina.
              </span>{" "}
              Este centro ha sido objeto de polémicas, siendo entrevistada por
              medios internacionales como el Wall Street Journal y ABC. En 2011,{" "}
              <span className="vv-estilo">
                disertó en el Oslo Freedom Forum cuestionando la "historia
                oficial" Argentina.
              </span>
            </p>
          </div>
        </div>

        {/* Box asuncion */}
        <div
          className={`box-asuncion ${
            activeBoxes.has("boxAsuncion") ? "active" : ""
          }`}
        >
          <div className="texto-box">
            <h2 className="titulo-box">Familia y</h2>
            <h2 className="titulo-box-dos">Formación Academica</h2>
            <p className="texto-parrafo-box">
              Villarruel nació en Buenos Aires,{" "}
              <span className="vv-estilo">
                hija del teniente coronel retirado Eduardo Villarruel,
              </span>{" "}
              un veterano de la guerra de Malvinas. Su padre participó en el
              Operativo Independencia. Villarruel completó sus estudios
              secundarios en el{" "}
              <span className="vv-estilo">
                {" "}
                Instituto Social Militar Dr. Dámaso Centeno.
              </span>{" "}
              Se graduó como abogada en la UBA y obtuvo un título de{" "}
              <span className="vv-estilo">
                técnica de seguridad urbana y portuaria
              </span>{" "}
              de la Universidad Tecnológica Nacional. En 2008,{" "}
              <span className="vv-estilo">
                realizó un curso de coordinación interinstitucional y lucha
                contra el terrorismo
              </span>{" "}
              en el Centro de Estudios de Defensa Hemisférica William J. Perry.
            </p>
          </div>
        </div>

        {/* Box colegio militar */}
        <div
          className={`box-eeuu ${activeBoxes.has("boxEEUU") ? "active" : ""}`}
        >
          <div className="texto-box">
            <h2 className="titulo-box">Pensamiento y</h2>
            <h2 className="titulo-box-dos">Posturas</h2>
            <h6 className="subtitulo-box">Historia y Derechos Humanos</h6>
            <p className="texto-parrafo-box">
              <span className="vv-estilo">
                Villarruel ha cuestionado la versión oficial de la historia
                argentina moderna,
              </span>{" "}
              defendiendo a las víctimas de los grupos guerrilleros y criticando
              la protección otorgada a exmiembros de estos grupos por gobiernos
              posteriores.
            </p>
          </div>
        </div>

        {/* Box Eduardo */}
        <div
          className={`box-eduardo ${activeBoxes.has("boxEV") ? "active" : ""}`}
        >
          <div className="texto-box">
            <h2 className="titulo-box-dos">Soldados de Malvinas</h2>
            <p className="texto-parrafo-box">
              Victoria Villarruel ha sido una firme defensora de los derechos de
              los veteranos de la Guerra de Malvinas.{" "}
              <span className="vv-estilo">
                Durante su mandato, ha trabajado en promover el reconocimiento y
                apoyo a los soldados, destacando la importancia de honrar su
                sacrificio.
              </span>{" "}
              Victoria ha hablado sobre la influencia de su padre, Eduardo
              Villarruel, un militar del Ejército Argentino, en su vida y
              carrera. Él le inculcó valores de disciplina, honor y servicio al
              país, guiando su trayectoria política.{" "}
              <span className="vv-estilo">
                Victoria considera que su compromiso con los veteranos de
                Malvinas y su lucha por los derechos humanos están enraizados en
                las enseñanzas y el ejemplo de su padre.
              </span>
            </p>
          </div>
        </div>

        {/* Box libros */}
        <div
          className={`box-vickyLibros ${
            activeBoxes.has("boxLibros") ? "active" : ""
          }`}
        >
          <div className="texto-box">
            <h2 className="titulo-box-dos">Publicaciones</h2>
            <p className="texto-parrafo-box">
              <span className="vv-estilo">
                Los llaman... jóvenes idealistas
              </span>{" "}
              (2009){" "}
              <span className="vv-estilo">
                Los otros muertos - Las víctimas civiles del terrorismo
                guerrillero de los 70
              </span>{" "}
              (2014), en coautoría con Carlos A. Manfroni.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VictoriaBio;
