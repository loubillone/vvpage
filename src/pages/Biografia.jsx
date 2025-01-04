import React, { useState } from "react";
import "../css/biografia.css";
import vickyGala from "../assets/img/biografia/victoria/vickyGala.png";
import vickyJavier from "../assets/img/biografia/victoria/vickyJavier.png";
import asuncion from "../assets/img/biografia/victoria/asuncion.png";
import eeuu from "../assets/img/biografia/victoria/eeuu.png";
import eduardo from "../assets/img/biografia/victoria/eduardo.png";
import vickyLibro from "../assets/img/biografia/victoria/vickyLibro.png";

const Biografia = () => {
  const [activeBox, setActiveBox] = useState(null);
  const toggleBox = (box) => {
    setActiveBox(activeBox === box ? null : box);
  };
  return (
    <div>
      <div className="container-fluid container-fotos-biografia">
        <div className="row fila-fotos-biografia">
          <img
            onClick={() => toggleBox("boxVG")}
            className="imagenBiografia"
            src={vickyGala}
            alt="Victoria Villarruel en la gala de la asuncion en el teatro colon"
          />
          <img
            onClick={() => toggleBox("boxVJ")}
            className="imagenBiografia"
            src={vickyJavier}
            alt="Victoria Villarruel junto a Javier Milei"
          />
          <img
            onClick={() => toggleBox("boxAsuncion")}
            className="imagenBiografia"
            src={asuncion}
            alt="Victoria Villarruel en las escalinatas del congreso el día de la asunción presidencial"
          />

          <img
            onClick={() => toggleBox("boxEEUU")}
            className="imagenBiografia"
            src={eeuu}
            alt="Victoria Villarruel junto al embajador de EEUU"
          />

          <img
            onClick={() => toggleBox("boxEV")}
            className="imagenBiografia"
            src={eduardo}
            alt="Eduardo Villarruel"
          />

          <img
            onClick={() => toggleBox("boxLibros")}
            className="imagenBiografia"
            src={vickyLibro}
            alt="Victoria Villarruel con su libros"
          />
        </div>

        <div
          className={`box-vickyGala ${activeBox === "boxVG" ? "active" : ""}`}
        >
          <div className="texto-box-index ">
            <h2 className="titulo-box">Victoria</h2>
            <h2 className="titulo-box-dos">Villarruel</h2>
            <h6 className="subtitulo-box">Vicepresidente de la Nación</h6>
            <p className="texto-parrafo-box">
              Victoria Eugenia Villarruel (Buenos Aires, 13 de abril de 1975) es
              una abogada, escritora, activista y política argentina, actual
              vicepresidenta de la Nación Argentina desde el 10 de diciembre de
              2023. Es fundadora de la asociación civil autodenominada Centro de
              Estudios Legales sobre el Terrorismo y sus Víctimas (CELTYV), la
              cual preside desde sus inicios.
            </p>
          </div>
        </div>

        <div
          className={`box-vickyJavier ${activeBox === "boxVJ" ? "active" : ""}`}
        >
          <div className="texto-box-index ">
            <h2 className="titulo-box">Activismo</h2>

            <h6 className="subtitulo-box">Inicios</h6>
            <p className="texto-parrafo-box">
              Villarruel comenzó su activismo político en el grupo de Karina
              Mujica y fue parte de la Asociación de Familiares y Amigos de los
              Presos Políticos de la Argentina (AFyAPPA). Lideró un programa de
              radio llamado Proyecto Verdad y fue miembro de Jóvenes por la
              Verdad. Centro de Estudios Legales sobre el Terrorismo y sus
              Víctimas (CELTYV) En 2003, fundó CELTYV con el objetivo de
              defender a las víctimas del terrorismo de izquierda en Argentina.
              Este centro ha sido objeto de polémicas, siendo entrevistada por
              medios internacionales como el Wall Street Journal y ABC. En 2011,
              disertó en el Oslo Freedom Forum cuestionando la "historia
              oficial" de Argentina.
            </p>
          </div>
        </div>

        <div
          className={`box-asuncion ${
            activeBox === "boxAsuncion" ? "active" : ""
          }`}
        >
          <div className="texto-box-index ">
            <h2 className="titulo-box">Familia y</h2>
            <h2>Formación Academica</h2>
            <p className="texto-parrafo-box">
              Victoria Villarruel nació en Buenos Aires, hija del teniente
              coronel retirado Eduardo Villarruel, un veterano de la guerra de
              Malvinas. Su padre participó en el Operativo Independencia y en
              las sublevaciones Carapintadas. Villarruel completó sus estudios
              secundarios en el Instituto Social Militar Dr. Dámaso Centeno. Se
              graduó como abogada en la Facultad de Derecho de la Universidad de
              Buenos Aires y obtuvo un título de técnica de seguridad urbana y
              portuaria de la Universidad Tecnológica Nacional. En 2008, realizó
              un curso de coordinación interinstitucional y lucha contra el
              terrorismo en el Centro de Estudios de Defensa Hemisférica William
              J. Perry.
            </p>
          </div>
        </div>

        <div className={`box-eeuu ${activeBox === "boxEEUU" ? "active" : ""}`}>
          <div className="texto-box-index ">
            <h2 className="titulo-box">Pensamiento y</h2>
            <h2 className="titulo-box-dos">Posturas</h2>
            <h6 className="subtitulo-box">Historia y Derechos Humanos</h6>
            <p className="texto-parrafo-box">
              Villarruel ha cuestionado la versión oficial de la historia
              argentina moderna, defendiendo a las víctimas de los grupos
              guerrilleros y criticando la protección otorgada a exmiembros de
              estos grupos por gobiernos posteriores.
            </p>
          </div>
        </div>

        <div className={`box-eduardo ${activeBox === "boxEV" ? "active" : ""}`}>
          <div className="texto-box-index ">
            <h2 className="titulo-box">Soldados de Malvinas</h2>
            <p className="texto-parrafo-box">
              Victoria Villarruel ha sido una firme defensora de los derechos de
              los veteranos de la Guerra de Malvinas. Durante su mandato, ha
              trabajado en promover el reconocimiento y apoyo a los soldados,
              destacando la importancia de honrar su sacrificio. Ha impulsado
              iniciativas para mejorar sus condiciones de vida, enfocándose en
              salud mental, atención médica y asistencia económica, facilitando
              su reintegración en la sociedad. Relación con su Padre Victoria
              Villarruel ha hablado sobre la influencia de su padre, Eduardo
              Villarruel, un militar del Ejército Argentino, en su vida y
              carrera. Él le inculcó valores de disciplina, honor y servicio al
              país, guiando su trayectoria política. Victoria considera que su
              compromiso con los veteranos de Malvinas y su lucha por los
              derechos humanos están enraizados en las enseñanzas y el ejemplo
              de su padre.
            </p>
          </div>
        </div>

        <div
          className={`box-vickyLibros ${
            activeBox === "boxLibros" ? "active" : ""
          }`}
        >
          <div className="texto-box-index ">
            <h2 className="titulo-box">Publicaciones</h2>
            <p className="texto-parrafo-box">
              Los llaman... jóvenes idealistas (2009) Los otros muertos - Las
              víctimas civiles del terrorismo guerrillero de los 70 (2014), en
              coautoría con Carlos A. Manfroni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biografia;
