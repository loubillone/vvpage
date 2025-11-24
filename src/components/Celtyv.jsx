import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/celtyv.css";
import logoCeltyv from "../assets/img/biografia/celtyv/logoCeltyv.png";
import manos from "../assets/img/biografia/celtyv/manos.png";
import tituloCeltyv from "../assets/img/biografia/celtyv/tituloCeltyv.png";
import vvCeltyv from "../assets/img/biografia/celtyv/vvCeltyv.png";
import diarioCero from "../assets/img/biografia/celtyv/diarioCero.png";
import diarioUno from "../assets/img/biografia/celtyv/diarioUno.png";
import diarioDos from "../assets/img/biografia/celtyv/diarioDos.png";
import diarioTres from "../assets/img/biografia/celtyv/diarioTres.png";
import diarioCuartro from "../assets/img/biografia/celtyv/diarioCuartro.png";
import diarioCinco from "../assets/img/biografia/celtyv/diarioCinco.png";
import diarioSeis from "../assets/img/biografia/celtyv/diarioSeis.png";
import diarioSiete from "../assets/img/biografia/celtyv/diarioSiete.png";
import diarioOcho from "../assets/img/biografia/celtyv/diarioOcho.png";
import diarioNueve from "../assets/img/biografia/celtyv/diarioNueve.png";
import Footer from "./Footer";

const Celtyv = () => {
  return (
    <div>
      <div className="container">
        <div className="row fila-titulo-celtyv">
          <div className="titulo-celtyv">
            <img src={tituloCeltyv} alt="titulo celtyv" />
          </div>

          <div className="container-parrafo-celtyv">
            <span className="texto-titulo-celtyv">
              Centro de Estudios Legales sobre el Terrorismo y sus Víctimas
            </span>
          </div>
        </div>

        <div className="row">
          <div className="foto-seccion-celtyv">
            <img src={manos} alt="mural con marcas de manos en pintura" />
          </div>
        </div>

        <div className="row container-celtyvInfo">
          <div className="col">
            <h2 className="titulo-seccion-celtyv">¿Qué es CELTyV?</h2>
            <p className="parrafo-seccion-celtyv">
              El Centro de Estudios Legales sobre el Terrorismo y sus Víctimas
              (CELTyV) es una Asociación Civil fundada en 2006. Esta
              organización no gubernamental se dedica a la asistencia de las
              víctimas del terrorismo en Argentina. CELTyV trabaja tanto a nivel
              nacional como internacional, con el propósito de visibilizar a las
              víctimas, luchar por el reconocimiento de sus derechos y
              contribuir a la verdad histórica.
            </p>

            <h4 className="subtitulo-seccion-celtyv">Objetivos y Trabajo</h4>
            <p className="parrafo-seccion-celtyv">
              Las víctimas inocentes de la violencia armada ejercida por las
              organizaciones guerrilleras durante la guerra revolucionaria en
              Argentina no han recibido justicia, verdad, reparación ni paz. En
              cambio, han sido sometidas a un deliberado olvido, un cómplice
              silencio y un injustificable abandono. CELTyV busca cambiar esta
              situación a través de su labor diaria, enfrentando la parcialidad
              y desamparo en que los gobiernos han dejado a estas víctimas. El
              Estado argentino, al no respetar los tratados vigentes de derechos
              humanos y proteger la impunidad de los perpetradores, incurre en
              responsabilidad internacional. Desde su creación, CELTyV ha
              trabajado en la identificación y documentación de las víctimas, la
              investigación y elaboración de artículos doctrinales sobre la
              problemática del terrorismo y la difusión de la verdadera historia
              de la agresión armada de las organizaciones terroristas contra la
              población civil no combatiente.
            </p>

            <h4 className="subtitulo-seccion-celtyv">Autoridades de CELTyV</h4>

            <div className="parrafo-seccion-celtyv">
              <ul>
                <li>Presidente: Victoria Villarruel – Abogada</li>
                <li>
                  Vicepresidente: Isaac Barrios – Padre de un niño asesinado por
                  Montoneros
                </li>
                <li>
                  Secretario: Sergio Renó – Hijo de un policía asesinado por
                  Montoneros
                </li>
              </ul>

              <span>Vocales:</span>
              <ul>
                <li>
                  Arturo Larrabure – Hijo de un militar secuestrado y asesinado
                  por el ERP
                </li>
                <li>Javier Vigo Leguizamón – Abogado especialista en DDHH</li>
                <li>
                  Alicia Longinotti – Hija y hermana de dos víctimas asesinadas
                  por OCPO
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row fila-carousel-celtyv">
          <Carousel
            data-bs-theme="dark"
            controls={false}
            indicators={false}
            interval={3000}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={diarioCero}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100"
                src={diarioUno}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100"
                src={diarioDos}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100"
                src={diarioTres}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100"
                src={diarioCuartro}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100"
                src={diarioCinco}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100"
                src={diarioSeis}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100"
                src={diarioSiete}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100"
                src={diarioOcho}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100"
                src={diarioNueve}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="row fila-victimas-celtyv">
          <div className="col">
            <h2 className="titulo-seccion-celtyv">Las Víctimas</h2>
            <p className="parrafo-seccion-celtyv">
              CELTyV se centra en la situación de las víctimas de la violencia
              armada ejercida por organizaciones guerrilleras como Montoneros y
              ERP. Estas víctimas incluyen civiles y no combatientes que
              sufrieron ataques, secuestros y asesinatos. La organización se
              dedica a documentar sus historias, proporcionando asistencia legal
              y emocional, y promoviendo el reconocimiento de sus derechos. La
              labor de CELTyV busca asegurar que estas víctimas obtengan
              justicia y se reconozca el sufrimiento que han soportado.
            </p>
          </div>
        </div>

        <div className="row ">
          <div className="foto-seccion-celtyv">
            <img src={vvCeltyv} alt="victoria firmando un libro en el celtyv" />
          </div>
        </div>

        <div className="row fila-victoria-celtyv">
          <div className="col">
            <h2 className="titulo-seccion-celtyv">
              Victoria Villarruel y su Lucha
            </h2>
            <p className="parrafo-seccion-celtyv">
              Victoria Villarruel, presidenta de CELTyV, es una abogada
              comprometida con la defensa de los derechos de las víctimas del
              terrorismo. Su trabajo incluye la publicación de libros y
              artículos que buscan dar voz a estas víctimas y visibilizar su
              sufrimiento. Villarruel ha sido una figura clave en la lucha por
              la verdad histórica y el reconocimiento de los derechos de las
              víctimas del terrorismo en Argentina.
            </p>

            <h4 className="subtitulo-seccion-publicaciones">
              Publicaciones Relevantes
            </h4>

            <h6 className="titulo-libro-celtyv">“Los otros muertos”</h6>

            <div className="parrafo-seccion-celtyv">
              <ul>
                <li>Fecha de Publicación: 14 de julio de 2021</li>
                <li>
                  Descripción: Narra la trágica muerte de niños como Juan y
                  Andrea en ataques perpetrados por Montoneros.
                </li>
              </ul>
            </div>

            <h6 className="titulo-libro-celtyv">
              “Los llaman… jóvenes idealistas” por Victoria Villarruel
            </h6>

            <div className="parrafo-seccion-celtyv">
              <ul>
                <li>Fecha de Publicación: 3 de febrero de 2018</li>
                <li>
                  Descripción: Este libro aborda la problemática de los setenta
                  desde la perspectiva de las víctimas, mostrando el impacto de
                  las organizaciones armadas en la sociedad.
                </li>
              </ul>
            </div>

            <h6 className="titulo-libro-celtyv">
              “El terrorismo como crimen de lesa humanidad”
            </h6>

            <div className="parrafo-seccion-celtyv">
              <ul>
                <li>Autores: Javier Vigo Leguizamón, Cárdenas y Manfroni</li>
                <li>
                  Descripción: Compilación de artículos sobre la doctrina y
                  jurisprudencia internacional respecto a los delitos de lesa
                  humanidad.
                </li>
              </ul>
            </div>

            <h6 className="titulo-libro-celtyv">
              “Amar al enemigo” por Javier Vigo Leguizamón
            </h6>

            <div className="parrafo-seccion-celtyv">
              <ul>
                <li>
                  Descripción: Explora los esfuerzos para establecer un diálogo
                  de reconciliación entre figuras opuestas del conflicto armado
                  en Argentina.
                </li>
              </ul>
            </div>

            <h6 className="titulo-libro-celtyv">
              “Un canto a la patria” por Arturo Larrabure
            </h6>

            <div className="parrafo-seccion-celtyv">
              <ul>
                <li>
                  Descripción: Relata el cautiverio del Coronel Argentino Del
                  Valle Larrabure, secuestrado y asesinado por el ERP.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="foto-seccion-celtyv">
            <img src={logoCeltyv} alt="logo celtyv" />
          </div>
        </div>

        <div className="row fila-victoria-celtyv">
          <div className="col columna-unirse-celtyv">
            <h4 className="subtitulo-seccion-celtyv">
              ¿Por qué unirse a CELTyV?
            </h4>
            <p className="parrafo-seccion-celtyv">
              Unirse a CELTyV significa apoyar el reconocimiento de los derechos
              humanos para las víctimas del terrorismo. La asociación realiza
              diversas actividades como conferencias, investigaciones
              históricas, eventos y la publicación de libros y videos. Al
              convertirse en socio, se contribuye a la lucha por la justicia y
              la memoria histórica.
            </p>

            <h5 className="categorias-celtyv">Categorías de Socios</h5>
            <div className="parrafo-seccion-celtyv">
              <ul>
                <li>Socio Adherente: Cuota mensual de $1000. .</li>
                <li>Socio Activo: Cuota mensual de $1500.</li>
                <li> Socio Protector: Cuota mensual de $2000</li>
              </ul>
            </div>

            <p className="parrafo-seccion-celtyv">
              Para más información sobre cómo asociarse, envíe un correo a
              informaciones@victimasdeargentina.com o{" "}
              <a
                href="https://celtyv.org/asociate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                visite aquí
              </a>
              . Su ayuda es vital para continuar trabajando en la reconstrucción
              de la historia argentina y el reconocimiento de las víctimas del
              terrorismo.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Celtyv;
