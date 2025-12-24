import React from "react";
import "../css/malvinas.css";
import malvinasTitle from "../assets/img/senado/malvinas/malvinasTitle.webp";
import vvMalvinas from "../assets/img/senado/malvinas/vvMalvinas.webp";
import vvMalvinasU from "../assets/img/senado/malvinas/vvMalvinasUshuaia.webp";
import vvMalvinasE from "../assets/img/senado/malvinas/vvMalvinasEpopeya.webp";
import victimasTitle from "../assets/img/senado/victimas/victimasdelterrorismo.webp";
import vvVictimasUno from "../assets/img/senado/victimas/vvterrorismoUno.webp";
import vvVictimasDos from "../assets/img/senado/victimas/vvterrorismoDos.webp";
const SenadoTemas = ({ tema }) => {
  const data =
    tema === "victimasDelTerrorismo"
      ? {
          title: victimasTitle,
          sections: [
            {
              titulo: "HOMENAJE A LAS VICTIMAS DEL TERRORISMO",
              img: vvVictimasDos,
              texto: (
                <>
                  <p>
                    <span className="tema-fecha">- AGOSTO 2024 -</span>El Senado
                    de la Nación rindió{" "}
                    <span className="vv-estilo-detalle">
                      homenaje a las víctimas del terrorismo nacional e
                      internacional
                    </span>{" "}
                    en el Salón Azul del Palacio Legislativo, en el marco del
                    Día Internacional de Conmemoración y Homenaje a las Víctimas
                    del Terrorismo. <br />
                    <br />{" "}
                    <span className="vv-estilo-detalle">
                      El acto contó con testimonios de familiares de víctimas,
                      entre ellos Claudia Rucci, Gloria Paulik y Luis Czyzewski,
                      quienes recordaron a sus seres queridos
                    </span>{" "}
                    y reclamaron que la memoria y la verdad se mantengan
                    vigentes.
                    <br />
                    <br />
                    También se proyectó un video con los hechos ocurridos en
                    Argentina y otros países. La presidente del Senado, Victoria{" "}
                    <span className="vv-estilo-detalle">
                      Villarruel, destacó el compromiso con la memoria, la
                      justicia y la reparación de las víctimas
                    </span>{" "}
                    y recordó a las más de 17.000 personas agredidas y
                    olvidadas. Villarruel subrayó:
                  </p>
                  <blockquote className="cita">
                    “Mi lucha por la verdad, la justicia y la reparación no se
                    inspira más que en el profundo amor a la Argentina.
                    Reabriremos todas las causas de víctimas del terrorismo para
                    que la Justicia haga lo que debió hacer hace más de 20
                    años.”
                  </blockquote>
                  <p>
                    El homenaje contó con la presencia de autoridades
                    legislativas y nacionales, consolidando el acto como un
                    reconocimiento histórico a quienes fueron silenciados y
                    olvidados."
                  </p>
                </>
              ),
            },

            {
              titulo:
                "DÍA INTERNACIONAL DE CONMEMORACIÓN Y HOMENAJE A LAS VÍCTIMAS DEL TERRORISMO ",

              img: vvVictimasUno,
              texto: (
                <>
                  <p>
                    <span className="tema-fecha">- SEPTIEMBRE 2025 -</span> El
                    Senado de la Nación conmemoró el{" "}
                    <span className="vv-estilo-detalle">
                      Día Internacional de las Víctimas del Terrorismo
                    </span>{" "}
                    en el Salón Azul del Palacio Legislativo, encabezado por la
                    vicepresidente y presidente del Senado, Victoria Villarruel.{" "}
                    <br />
                    <br />
                    <span className="vv-estilo-detalle">
                      El acto incluyó testimonios de familiares de víctimas de
                      distintos ataques terroristas en Argentina y el mundo,
                    </span>{" "}
                    quienes compartieron su dolor y la importancia de mantener
                    viva la memoria. También{" "}
                    <span className="vv-estilo-detalle">
                      se proyectó un video con el mensaje del director de la
                      Oficina de la ONU
                    </span>{" "}
                    contra el Terrorismo (UNCCT), destacando el compromiso de
                    honrar a las víctimas y garantizar que sus voces sean
                    escuchadas. Villarruel afirmó:{" "}
                  </p>
                  <blockquote className="cita">
                    “El terrorismo es la forma más cobarde de plantear
                    diferencias políticas, religiosas o sociales. Ninguna idea
                    puede ser defendida a través de ataques que agreden a
                    personas inocentes.”
                  </blockquote>
                  <p>
                    Además,{" "}
                    <span className="vv-estilo-detalle">
                      destacó la necesidad de dar apoyo a las víctimas y
                      familiares y reafirmó el compromiso de justicia, memoria y
                      reparación.
                    </span>{" "}
                    El acto contó con la presencia de autoridades nacionales y
                    legislativas, consolidando el reconocimiento histórico hacia
                    quienes fueron afectados por el terrorismo.
                  </p>
                </>
              ),
            },
          ],
          frase: "Recordar a las víctimas es honrar la verdad y la justicia.",
        }
      : {
          title: malvinasTitle,
          sections: [
            {
              titulo:
                "ENTREGA DE DIPLOMAS DE HONOR A MILITARES VETERANOS DE MALVINAS",
              img: vvMalvinas,
              texto: (
                <>
                  <p>
                    <span className="tema-fecha">- ABRIL 2024 -</span> En el
                    Salón Azul del Congreso se realizó la ceremonia de{" "}
                    <span className="vv-estilo-detalle">
                      entrega de Diplomas de Honor del Senado de la Nación a
                      Veteranos de la Guerra de Malvinas,
                    </span>{" "}
                    en conmemoración del 42° aniversario de la Recuperación de
                    las Islas. <br />
                    <br />
                    El acto fue encabezado por la presidente del Senado,
                    Victoria Villarruel, quien{" "}
                    <span className="vv-estilo-detalle">
                      destacó la importancia de mantener viva la causa Malvinas
                      y el reconocimiento a los héroes que defendieron la
                      Patria.
                    </span>{" "}
                    Villarruel agradeció al Presidente Javier Milei por
                    acompañarla en esta labor y expresó:{" "}
                  </p>
                  <blockquote className="cita">
                    “Han sido 42 años de desmalvinización y olvido. Es momento
                    de recuperar el respeto por nuestras Fuerzas Armadas y por
                    los Héroes de Malvinas.”
                  </blockquote>
                  <p>
                    También participaron representantes de las comisiones de
                    Ex-combatientes y Familiares de Caídos, junto al capellán
                    Vicente Martínez Torrens y veteranos como Owen Crippa y
                    Rubén Zini.{" "}
                    <span className="vv-estilo-detalle">
                      El cierre musical estuvo a cargo de bandas de las tres
                      Fuerzas Armadas, que interpretaron la Marcha de las
                      Malvinas.
                    </span>
                  </p>
                </>
              ),
            },

            {
              titulo:
                "A 43 AÑOS DE LA GESTA DE MALVINAS, VICTORIA VILLARRUEL ENCABEZÓ EN USHUAIA EL ACTO OFICIAL EN HOMENAJE A LOS EX COMBATIENTES Y CAÍDOS EN LA GUERRA",

              img: vvMalvinasU,
              texto: (
                <>
                  <p>
                    <span className="tema-fecha">- ABRIL 2025 -</span> La
                    vicepresidente de la Nación y presidente del Senado,
                    Victoria Villarruel, encabezó en Ushuaia el acto
                    conmemorativo por el{" "}
                    <span className="vv-estilo-detalle">
                      43° aniversario de la Gesta de Malvinas,
                    </span>{" "}
                    junto al gobernador Gustavo Melella, el intendente Walter
                    Vuoto y el presidente del Centro de Excombatientes, Juan
                    Carlos Parodi.
                    <br />
                    <br />
                    Durante la ceremonia, realizada en el pabellón nacional
                    Puerto Argentino,{" "}
                    <span className="vv-estilo-detalle">
                      Villarruel convocó a "emprender un proceso de
                      malvinización"
                    </span>{" "}
                    y destacó que Malvinas une a todos los argentinos.
                  </p>
                  <blockquote className="cita">
                    “El reconocimiento hacia los hombres y mujeres de nuestras
                    Fuerzas Armadas que lucharon en Malvinas es el pilar desde
                    el que comenzaremos la reconstrucción de nuestro país”,
                    expresó.
                  </blockquote>
                  <p>
                    El acto contó con la participación de excombatientes,
                    familiares de caídos, legisladores, autoridades provinciales
                    y municipales, y{" "}
                    <span className="vv-estilo-detalle">
                      también se conmemoró el Día Mundial de la Concientización
                      sobre el Autismo.
                    </span>
                  </p>
                </>
              ),
            },

            {
              titulo:
                "VICTORIA VILLARRUEL ENCABEZÓ EL ACTO “MALVINAS, EPOPEYA NACIONAL” Y DISTINGUIÓ A VETERANOS DE MALVINAS",

              img: vvMalvinasE,
              texto: (
                <>
                  <p>
                    <span className="tema-fecha">- ABRIL 2025 -</span> En el
                    Salón Azul del Congreso, la vicepresidente Victoria
                    Villarruel presidió el{" "}
                    <span className="vv-estilo-detalle">
                      acto "Malvinas, Epopeya Nacional", en el marco del 43°
                      aniversario de la Gesta de Malvinas.
                    </span>{" "}
                    <br />
                    <br /> Durante la ceremonia, organizada por la Dirección de
                    Gesta de Malvinas y la Dirección de Cultura,{" "}
                    <span className="vv-estilo-detalle">
                      {" "}
                      se entregaron distinciones a veteranos en reconocimiento a
                      su valentía y compromiso con la Patria.
                    </span>{" "}
                    Villarruel agradeció a los excombatientes por "mantener viva
                    la memoria de los caídos" y afirmó:
                  </p>
                  <blockquote className="cita">
                    “La historia intentó silenciarlos, pero ustedes se
                    multiplicaron. Hoy la Nación los abraza y los reconoce como
                    lo que son: nuestros héroes.”
                  </blockquote>
                  <p>
                    Además,
                    <span className="vv-estilo-detalle">
                      {" "}
                      propuso impulsar una campaña de malvinización nacional
                    </span>{" "}
                    con una exposición itinerante que recorra las escuelas del
                    país, para que los niños conozcan y valoren el testimonio de
                    los veteranos. <br />
                    <br /> "Malvinizar es sembrar en las nuevas generaciones el
                    amor por nuestra tierra y recuperar el orgullo de ser
                    argentinos."{" "}
                    <span className="vv-estilo-detalle">
                      El acto concluyó con los homenajeados y Villarruel
                      entonando la Marcha de las Malvinas.
                    </span>
                  </p>
                </>
              ),
            },
          ],
          frase:
            "El soldado no muere en el frente de batalla, muere cuando su patria lo olvida.",
        };
  return (
    <div className="container">
      <div className="row fila-titulo-malvinas">
        <div className="titulo-malvinas">
          <img src={data.title} alt={tema} />
        </div>
      </div>

      {data.sections.map((sec, i) => (
        <div key={i} className="row fila-malvinas">
          <div className="container-titulo">
            <h3 className="titulo-parrafo-malvinas">{sec.titulo}</h3>
          </div>
          <div className="imagen-malvinas">
            <img src={sec.img} alt={sec.titulo} />
          </div>
          <div className="col columna-malvinas">
            <div className="contenedor-parrafo-malvinas">
              <div className="parrafo-malvinas">{sec.texto}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="row">
        <div className="container-parrafo-malvinas">
          <p className="parrafo-malvinas-final">{data.frase}</p>
        </div>
      </div>
    </div>
  );
};

export default SenadoTemas;
