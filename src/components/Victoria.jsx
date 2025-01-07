import React, { useState } from "react";
import "../css/victoria.css";
import vickyGala from "../assets/img/biografia/victoria/vickyGala.png";
import vickyJavier from "../assets/img/biografia/victoria/vickyJavier.png";
import asuncion from "../assets/img/biografia/victoria/asuncion.png";
import eeuu from "../assets/img/biografia/victoria/eeuu.png";
import eduardo from "../assets/img/biografia/victoria/eduardo.png";
import vickyLibro from "../assets/img/biografia/victoria/vickyLibro.png";

const Victoria = () => {
  const [activeBoxes, setActiveBoxes] = useState([]);

  const activateBox = (box) => {
    if (!activeBoxes.includes(box)) {
      setActiveBoxes([...activeBoxes, box]);
    }
  };
  return (
    <div>
      <div className="container-fluid container-fotos-victoria">
        <div className="row fila-fotos-victoria">
          <img
            onMouseEnter={() => activateBox("boxVG")}
            className="imagenBiografia-victoria"
            src={vickyGala}
            alt="Victoria Villarruel en la gala de la asuncion en el teatro colon"
          />
          <img
            onMouseEnter={() => activateBox("boxVJ")}
            className="imagenBiografia-victoria"
            src={vickyJavier}
            alt="Victoria Villarruel junto a Javier Milei"
          />
          <img
            onMouseEnter={() => activateBox("boxAsuncion")}
            className="imagenBiografia-victoria"
            src={asuncion}
            alt="Victoria Villarruel en las escalinatas del congreso el día de la asunción presidencial"
          />

          <img
            onMouseEnter={() => activateBox("boxEEUU")}
            className="imagenBiografia-victoria"
            src={eeuu}
            alt="Victoria Villarruel junto al embajador de EEUU"
          />

          <img
            onMouseEnter={() => activateBox("boxEV")}
            className="imagenBiografia-victoria"
            src={eduardo}
            alt="Eduardo Villarruel"
          />

          <img
            onMouseEnter={() => activateBox("boxLibros")}
            className="imagenBiografia-victoria"
            src={vickyLibro}
            alt="Victoria Villarruel con su libros"
          />
        </div>

        <div
          className={`box-vickyGala ${
            activeBoxes.includes("boxVG") ? "active" : ""
          }`}
        >
          <div className="texto-box-victoria">
            <h2 className="titulo-box-victoria">Victoria</h2>
            <h2 className="titulo-box-victoriaDos">Villarruel</h2>
            <h6 className="subtitulo-box-victoria">
              Vicepresidente de la Nación
            </h6>
            <p className="texto-parrafo-box-victoria">
              Victoria Eugenia Villarruel (Buenos Aires, 13 de abril de 1975) es
              una abogada, escritora, activista y política argentina, actual
              vicepresidenta de la Nación Argentina desde el 10 de diciembre de
              2023. Es fundadora de la asociación civil autodenominada Centro de
              Estudios Legales sobre el Terrorismo y sus Víctimas (CELTYV), la
              cual preside desde sus inicios.
            </p>

            <a
              href="https://es.wikipedia.org/wiki/Victoria_Villarruel"
              className="link-vickyGala"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Más
            </a>
          </div>
        </div>

        <div
          className={`box-vickyJavier ${
            activeBoxes.includes("boxVJ") ? "active" : ""
          }`}
        >
          <div className="texto-box-victoria">
            <h2 className="titulo-box-victoriaDos">Activismo</h2>

            <h6 className="subtitulo-box-victoria">Inicios</h6>
            <p className="texto-parrafo-box-victoria">
              Villarruel fue parte de la Asociación de Familiares y Amigos de
              los Presos Políticos de la Argentina (AFyAPPA). Lideró un programa
              de radio llamado Proyecto Verdad y fue miembro de Jóvenes por la
              Verdad. Centro de Estudios Legales sobre el Terrorismo y sus
              Víctimas (CELTYV) En 2003, fundó CELTYV con el objetivo de
              defender a las víctimas del terrorismo de izquierda en Argentina.
              Este centro ha sido objeto de polémicas, siendo entrevistada por
              medios internacionales como el Wall Street Journal y ABC. En 2011,
              disertó en el Oslo Freedom Forum cuestionando la "historia
              oficial" de Argentina.
            </p>

            <a
              href="https://celtyv.org/?fbclid=PAZXh0bgNhZW0CMTEAAaYzgPi_HbXMVvVvcbaBc0AkFI2YGfddNz-DqgElh2Gb_-jc6xPKYgecdE4_aem_o8OkJHWhQ4KZFoiksx2qXw"
              className="link-vickyJavier"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Más
            </a>
          </div>
        </div>

        <div
          className={`box-asuncion ${
            activeBoxes.includes("boxAsuncion") ? "active" : ""
          }`}
        >
          <div className="texto-box-victoria">
            <h2 className="titulo-box-victoria">Familia y</h2>
            <h2 className="titulo-box-victoriaDos">Formación Academica</h2>
            <p className="texto-parrafo-box-victoria">
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

            <a
              href="https://es.wikipedia.org/wiki/Victoria_Villarruel"
              className="link-vickyAsuncion"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Más
            </a>
          </div>
        </div>

        <div
          className={`box-eeuu ${
            activeBoxes.includes("boxEEUU") ? "active" : ""
          }`}
        >
          <div className="texto-box-victoria">
            <h2 className="titulo-box-victoria">Pensamiento y</h2>
            <h2 className="titulo-box-victoriaDos">Posturas</h2>
            <h6 className="subtitulo-box-victoria">
              Historia y Derechos Humanos
            </h6>
            <p className="texto-parrafo-box-victoria">
              Villarruel ha cuestionado la versión oficial de la historia
              argentina moderna, defendiendo a las víctimas de los grupos
              guerrilleros y criticando la protección otorgada a exmiembros de
              estos grupos por gobiernos posteriores.
            </p>

            <a
              href="https://es.wikipedia.org/wiki/Victoria_Villarruel"
              className="link-vickyEeuu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Más
            </a>
          </div>
        </div>

        <div
          className={`box-eduardo ${
            activeBoxes.includes("boxEV") ? "active" : ""
          }`}
        >
          <div className="texto-box-victoria">
            <h2 className="titulo-box-victoriaDos">Soldados de Malvinas</h2>
            <p className="texto-parrafo-box-victoria">
              Victoria Villarruel ha sido una firme defensora de los derechos de
              los veteranos de la Guerra de Malvinas. Durante su mandato, ha
              trabajado en promover el reconocimiento y apoyo a los soldados,
              destacando la importancia de honrar su sacrificio. Victoria ha
              hablado sobre la influencia de su padre, Eduardo Villarruel, un
              militar del Ejército Argentino, en su vida y carrera. Él le
              inculcó valores de disciplina, honor y servicio al país, guiando
              su trayectoria política. Victoria considera que su compromiso con
              los veteranos de Malvinas y su lucha por los derechos humanos
              están enraizados en las enseñanzas y el ejemplo de su padre.
            </p>

            <a
              href="https://www.infobae.com/sociedad/2024/04/02/el-comando-que-queria-seguir-combatiendo-como-fue-la-actuacion-de-eduardo-villarruel-el-padre-de-la-vicepresidente-en-la-guerra-de-malvinas/"
              className="link-vickyEduardo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Más
            </a>
          </div>
        </div>

        <div
          className={`box-vickyLibros ${
            activeBoxes.includes("boxLibros") ? "active" : ""
          }`}
        >
          <div className="texto-box-victoria">
            <h2 className="titulo-box-victoriaDos">Publicaciones</h2>
            <p className="texto-parrafo-box-victoria">
              Los llaman... jóvenes idealistas (2009) Los otros muertos - Las
              víctimas civiles del terrorismo guerrillero de los 70 (2014), en
              coautoría con Carlos A. Manfroni.
            </p>

            <a
              href="https://celtyv.org/category/libros/"
              className="link-vickyLibros"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Victoria;
