import React from "react";
import malvinasTitle from "../assets/img/senado/malvinas/malvinasTitle.webp";
import victimasTitle from "../assets/img/senado/victimas/victimasdelterrorismo.webp";

// Datos de la sección Senado: temas (Malvinas, Víctimas del Terrorismo) y
// sus actividades. Cada actividad tiene metadata (fecha, slug, imagen) para
// poder navegar por /senado/:tema, /senado/:tema/:anio y
// /senado/:tema/:anio/:actividadSlug sin datos hardcodeados en los componentes.

const senadoTemas = {
  malvinas: {
    titulo: "Malvinas",
    slug: "malvinas",
    imagenTitulo: malvinasTitle,
    frase:
      "El soldado no muere en el frente de batalla, muere cuando su patria lo olvida.",
    actividades: [
      {
        titulo:
          "Entrega de diplomas de honor a militares veteranos de Malvinas",
        slug: "diplomas-veteranos-2024",
        fechaISO: "2024-04",
        precisionFecha: "mes",
        fecha: "Abril de 2024",
        imagenPortada: "tpa-web/senado/malvinas/senado-malv-1",
        texto: (
          <>
            <p>
              <span className="tema-fecha">- ABRIL 2024 -</span> En el Salón
              Azul del Congreso se realizó la ceremonia de{" "}
              <span className="vv-estilo-detalle">
                entrega de Diplomas de Honor del Senado de la Nación a Veteranos
                de la Guerra de Malvinas,
              </span>{" "}
              en conmemoración del 42° aniversario de la Recuperación de las
              Islas.
            </p>

            <p>
              El acto fue encabezado por la presidente del Senado, Victoria
              Villarruel, quien{" "}
              <span className="vv-estilo-detalle">
                destacó la importancia de mantener viva la causa Malvinas y el
                reconocimiento a los héroes que defendieron la Patria.
              </span>{" "}
              Villarruel agradeció al Presidente Javier Milei por acompañarla en
              esta labor y expresó:{" "}
            </p>
            <blockquote className="cita">
              "Han sido 42 años de desmalvinización y olvido. Es momento de
              recuperar el respeto por nuestras Fuerzas Armadas y por los Héroes
              de Malvinas."
            </blockquote>
            <p>
              También participaron representantes de las comisiones de
              Ex-combatientes y Familiares de Caídos, junto al capellán Vicente
              Martínez Torrens y veteranos como Owen Crippa y Rubén Zini.{" "}
              <span className="vv-estilo-detalle">
                El cierre musical estuvo a cargo de bandas de las tres Fuerzas
                Armadas, que interpretaron la Marcha de las Malvinas.
              </span>
            </p>
          </>
        ),
      },
      {
        titulo:
          "A 43 años de la Gesta de Malvinas, Victoria Villarruel encabezó en Ushuaia el acto oficial en homenaje a los excombatientes y caídos en la guerra",
        slug: "ushuaia-2025",
        fechaISO: "2025-04",
        precisionFecha: "mes",
        fecha: "Abril de 2025",
        imagenPortada: "tpa-web/senado/malvinas/senado-malv-2",
        texto: (
          <>
            <p>
              <span className="tema-fecha">- ABRIL 2025 -</span> La
              vicepresidente de la Nación y presidente del Senado, Victoria
              Villarruel, encabezó en Ushuaia el acto conmemorativo por el{" "}
              <span className="vv-estilo-detalle">
                43° aniversario de la Gesta de Malvinas,
              </span>{" "}
              junto al gobernador Gustavo Melella, el intendente Walter Vuoto y
              el presidente del Centro de Excombatientes, Juan Carlos Parodi.
            </p>

            <p>
              Durante la ceremonia, realizada en el pabellón nacional Puerto
              Argentino,{" "}
              <span className="vv-estilo-detalle">
                Villarruel convocó a "emprender un proceso de malvinización"
              </span>{" "}
              y destacó que Malvinas une a todos los argentinos.
            </p>
            <blockquote className="cita">
              "El reconocimiento hacia los hombres y mujeres de nuestras Fuerzas
              Armadas que lucharon en Malvinas es el pilar desde el que
              comenzaremos la reconstrucción de nuestro país", expresó.
            </blockquote>
            <p>
              El acto contó con la participación de excombatientes, familiares
              de caídos, legisladores, autoridades provinciales y municipales, y{" "}
              <span className="vv-estilo-detalle">
                también se conmemoró el Día Mundial de la Concientización sobre
                el Autismo.
              </span>
            </p>
          </>
        ),
      },
      {
        titulo:
          'Victoria Villarruel encabezó el acto "Malvinas, Epopeya Nacional" y distinguió a veteranos de Malvinas',
        slug: "epopeya-nacional-2025",
        fechaISO: "2025-04",
        precisionFecha: "mes",
        fecha: "Abril de 2025",
        imagenPortada: "tpa-web/senado/malvinas/senado-malv-3",
        texto: (
          <>
            <p>
              <span className="tema-fecha">- ABRIL 2025 -</span> En el Salón
              Azul del Congreso, la vicepresidente Victoria Villarruel presidió
              el{" "}
              <span className="vv-estilo-detalle">
                acto "Malvinas, Epopeya Nacional", en el marco del 43°
                aniversario de la Gesta de Malvinas.
              </span>
            </p>

            <p>
              Durante la ceremonia, organizada por la Dirección de Gesta de
              Malvinas y la Dirección de Cultura,{" "}
              <span className="vv-estilo-detalle">
                {" "}
                se entregaron distinciones a veteranos en reconocimiento a su
                valentía y compromiso con la Patria.
              </span>{" "}
              Villarruel agradeció a los excombatientes por "mantener viva la
              memoria de los caídos" y afirmó:
            </p>
            <blockquote className="cita">
              "La historia intentó silenciarlos, pero ustedes se multiplicaron.
              Hoy la Nación los abraza y los reconoce como lo que son: nuestros
              héroes."
            </blockquote>
            <p>
              Además,
              <span className="vv-estilo-detalle">
                {" "}
                propuso impulsar una campaña de malvinización nacional
              </span>{" "}
              con una exposición itinerante que recorra las escuelas del país,
              para que los niños conozcan y valoren el testimonio de los
              veteranos.
            </p>

            <p>
              "Malvinizar es sembrar en las nuevas generaciones el amor por
              nuestra tierra y recuperar el orgullo de ser argentinos."{" "}
              <span className="vv-estilo-detalle">
                El acto concluyó con los homenajeados y Villarruel entonando la
                Marcha de las Malvinas.
              </span>
            </p>
          </>
        ),
      },
      {
        titulo:
          "Acto homenaje a los veteranos y caídos en Malvinas en Chivilcoy",
        slug: "chivilcoy-2026",
        fechaISO: "2026-04",
        precisionFecha: "mes",
        fecha: "Abril de 2026",
        imagenPortada: "tpa-web/senado/malvinas/senado-malv-4",
        texto: (
          <>
            <p>
              <span className="tema-fecha">- ABRIL 2026 -</span> La
              vicepresidente de la Nación, Victoria Villarruel, participó en la
              ciudad de Chivilcoy de un acto homenaje a los Veteranos y Caídos
              en la Guerra de Malvinas, realizado en la Plaza 25 de Mayo junto
              al intendente Guillermo Britos.{" "}
              <span className="vv-estilo-detalle">
                Durante su discurso, reafirmó que la causa Malvinas debe
                mantenerse alejada de las disputas partidarias y destacó su
                carácter de unidad nacional.
              </span>
            </p>

            <p>
              Villarruel explicó que, a diferencia de años anteriores, decidió
              no participar de la tradicional vigilia en Tierra del Fuego porque
              no quería prestarse a una utilización política de la causa. En ese
              marco, expresó:
            </p>

            <blockquote className="cita">
              "Malvinas no es una excusa para que se diriman internas de un
              partido político. Es homenaje y gratitud para los argentinos que
              defendieron nuestra tierra frente al invasor inglés."
            </blockquote>

            <p>
              La titular del Senado sostuvo además que{" "}
              <span className="vv-estilo-detalle">
                "Malvinas trasciende los intereses personales" y que representa
                "la única causa nacional que une a los argentinos sin
                diferencias de ideología, religión u origen social".
              </span>
            </p>

            <p>
              En otro tramo de su intervención, recordó el proceso de
              "desmalvinización" posterior a la guerra y cuestionó la
              invisibilización de los veteranos:
            </p>

            <blockquote className="cita">
              "Fueron hombres, fueron argentinos que defendieron lo nuestro y
              fueron inmensos en su juventud."
            </blockquote>

            <p>
              Villarruel también advirtió sobre el deterioro de las Fuerzas
              Armadas tras el conflicto y remarcó la necesidad de recuperar el
              reconocimiento y respeto hacia quienes combatieron por la Patria.{" "}
              <span className="vv-estilo-detalle">
                El acto reunió a veteranos, vecinos y autoridades locales en una
                jornada de homenaje y memoria por los héroes de Malvinas.
              </span>
            </p>
          </>
        ),
      },
      {
        titulo:
          "Victoria Villarruel encabezó la presentación de Malvinas, Epopeya Nacional",
        slug: "epopeya-nacional-2026",
        fechaISO: "2026-09-04",
        precisionFecha: "dia",
        fecha: "Septiembre de 2026",
        imagenPortada: "tpa-web/senado/malvinas/senado-malv-5.jpg",
        texto: (
          <>
            <p>
              <span className="tema-fecha">- SEPTIEMBRE 2026 -</span> Victoria
              Villarruel encabezó en el Salón General San Martín del Senado la
              presentación de{" "}
              <span className="vv-estilo-detalle">
                “Malvinas, Epopeya Nacional. Hablan los héroes, hablamos de los
                héroes”
              </span>
              , una publicación que reúne testimonios de veteranos de guerra y
              reflexiones sobre la soberanía y el sacrificio de los soldados
              durante el conflicto de 1982.
            </p>

            <p>
              Durante la ceremonia se entregaron ejemplares a{" "}
              <span className="vv-estilo-detalle">
                80 veteranos de Malvinas y a familiares de los caídos
              </span>
              . El encuentro concluyó con un homenaje a los combatientes
              fallecidos y reafirmó el reconocimiento institucional a los
              veteranos, la memoria de la Gesta de Malvinas y la defensa de la
              soberanía argentina.
            </p>
          </>
        ),
      },
    ],
  },

  victimasDelTerrorismo: {
    titulo: "Víctimas del Terrorismo",
    slug: "victimasDelTerrorismo",
    imagenTitulo: victimasTitle,
    frase: "Recordar a las víctimas es honrar la verdad y la justicia.",
    actividades: [
      {
        titulo:
          "Homenaje a las víctimas del terrorismo nacional e internacional",
        slug: "homenaje-victimas-2024",
        fechaISO: "2024-08",
        precisionFecha: "mes",
        fecha: "Agosto de 2024",
        imagenPortada: "tpa-web/senado/victimas/senado-victimas-1",
        texto: (
          <>
            <p>
              <span className="tema-fecha">- AGOSTO 2024 -</span>El Senado de la
              Nación rindió{" "}
              <span className="vv-estilo-detalle">
                homenaje a las víctimas del terrorismo nacional e internacional
              </span>{" "}
              en el Salón Azul del Palacio Legislativo, en el marco del Día
              Internacional de Conmemoración y Homenaje a las Víctimas del
              Terrorismo.
            </p>

            <p>
              <span className="vv-estilo-detalle">
                El acto contó con testimonios de familiares de víctimas, entre
                ellos Claudia Rucci, Gloria Paulik y Luis Czyzewski, quienes
                recordaron a sus seres queridos
              </span>{" "}
              y reclamaron que la memoria y la verdad se mantengan vigentes.
            </p>

            <p>
              También se proyectó un video con los hechos ocurridos en Argentina
              y otros países. La presidente del Senado, Victoria{" "}
              <span className="vv-estilo-detalle">
                Villarruel, destacó el compromiso con la memoria, la justicia y
                la reparación de las víctimas
              </span>{" "}
              y recordó a las más de 17.000 personas agredidas y olvidadas.
              Villarruel subrayó:
            </p>
            <blockquote className="cita">
              "Mi lucha por la verdad, la justicia y la reparación no se inspira
              más que en el profundo amor a la Argentina. Reabriremos todas las
              causas de víctimas del terrorismo para que la Justicia haga lo que
              debió hacer hace más de 20 años."
            </blockquote>
            <p>
              El homenaje contó con la presencia de autoridades legislativas y
              nacionales, consolidando el acto como un reconocimiento histórico
              a quienes fueron silenciados y olvidados.
            </p>
          </>
        ),
      },
      {
        titulo:
          "Día Internacional de las Víctimas del Terrorismo: homenaje en el Senado de la Nación",
        slug: "victimas-terrorismo-2025",
        fechaISO: "2025-09",
        precisionFecha: "mes",
        fecha: "Septiembre de 2025",
        imagenPortada: "tpa-web/senado/victimas/senado-victimas-2",
        texto: (
          <>
            <p>
              <span className="tema-fecha">- SEPTIEMBRE 2025 -</span> El Senado
              de la Nación conmemoró el{" "}
              <span className="vv-estilo-detalle">
                Día Internacional de las Víctimas del Terrorismo
              </span>{" "}
              en el Salón Azul del Palacio Legislativo, encabezado por la
              vicepresidente y presidente del Senado, Victoria Villarruel.
            </p>

            <p>
              <span className="vv-estilo-detalle">
                El acto incluyó testimonios de familiares de víctimas de
                distintos ataques terroristas en Argentina y el mundo,
              </span>{" "}
              quienes compartieron su dolor y la importancia de mantener viva la
              memoria. También{" "}
              <span className="vv-estilo-detalle">
                se proyectó un video con el mensaje del director de la Oficina
                de la ONU
              </span>{" "}
              contra el Terrorismo (UNCCT), destacando el compromiso de honrar a
              las víctimas y garantizar que sus voces sean escuchadas.
              Villarruel afirmó:{" "}
            </p>
            <blockquote className="cita">
              "El terrorismo es la forma más cobarde de plantear diferencias
              políticas, religiosas o sociales. Ninguna idea puede ser defendida
              a través de ataques que agreden a personas inocentes."
            </blockquote>
            <p>
              Además,{" "}
              <span className="vv-estilo-detalle">
                destacó la necesidad de dar apoyo a las víctimas y familiares y
                reafirmó el compromiso de justicia, memoria y reparación.
              </span>{" "}
              El acto contó con la presencia de autoridades nacionales y
              legislativas, consolidando el reconocimiento histórico hacia
              quienes fueron afectados por el terrorismo.
            </p>
          </>
        ),
      },
    ],
  },
};

export default senadoTemas;
