import React from "react";
import "../css/malvinas.css";
import malvinasTitle from "../assets/img/senado/malvinas/malvinasTitle.png";
import vvMalvinas from "../assets/img/senado/malvinas/vvMalvinas.jpg";
import vvMalvinasU from "../assets/img/senado/malvinas/vvMalvinasUshuaia.jpg";
import vvMalvinasE from "../assets/img/senado/malvinas/vvMalvinasEpopeya.jpg";
import victimasTitle from "../assets/img/senado/victimas/victimasdelterrorismo.png";
import vvVictimasUno from "../assets/img/senado/victimas/vvterrorismoUno.jpg";
import vvVictimasDos from "../assets/img/senado/victimas/vvterrorismoDos.jpg";
const SenadoTemas = ({ tema }) => {
  const data =
    tema === "victimasDelTerrorismo"
      ? {
          title: victimasTitle,
          sections: [
            {
              titulo: "Homenaje a las Víctimas del Terrorismo",
              img: vvVictimasDos,
              texto:
                "- AGOSTO 2024 - El Senado de la Nación rindió homenaje a las víctimas del terrorismo nacional e internacional en el Salón Azul del Palacio Legislativo, en el marco del Día Internacional de Conmemoración y Homenaje a las Víctimas del Terrorismo. El acto contó con testimonios de familiares de víctimas, entre ellos Claudia Rucci, Gloria Paulik y Luis Czyzewski, quienes recordaron a sus seres queridos y reclamaron que la memoria y la verdad se mantengan vigentes. También se proyectó un video con los hechos ocurridos en Argentina y otros países. La presidente del Senado, Victoria Villarruel, destacó el compromiso con la memoria, la justicia y la reparación de las víctimas y recordó a las más de 17.000 personas agredidas y olvidadas. Villarruel subrayó: “Mi lucha por la verdad, la justicia y la reparación no se inspira más que en el profundo amor a la Argentina. Reabriremos todas las causas de víctimas del terrorismo para que la Justicia haga lo que debió hacer hace más de 20 años.” El homenaje contó con la presencia de autoridades legislativas y nacionales, consolidando el acto como un reconocimiento histórico a quienes fueron silenciados y olvidados.",
            },

            {
              titulo:
                "Día Internacional de Conmemoración y Homenaje a las Víctimas del Terrorismo ",

              img: vvVictimasUno,
              texto:
                "- SEPTIEMBRE 2025 - El Senado de la Nación conmemoró el Día Internacional de las Víctimas del Terrorismo en el Salón Azul del Palacio Legislativo, encabezado por la vicepresidente y presidente del Senado, Victoria Villarruel. El acto incluyó testimonios de familiares de víctimas de distintos ataques terroristas en Argentina y el mundo, quienes compartieron su dolor y la importancia de mantener viva la memoria. También se proyectó un video con el mensaje del director de la Oficina de la ONU contra el Terrorismo (UNCCT), destacando el compromiso de honrar a las víctimas y garantizar que sus voces sean escuchadas. Villarruel afirmó:“El terrorismo es la forma más cobarde de plantear diferencias políticas, religiosas o sociales. Ninguna idea puede ser defendida a través de ataques que agreden a personas inocentes.” Además, destacó la necesidad de dar apoyo a las víctimas y familiares y reafirmó el compromiso de justicia, memoria y reparación. El acto contó con la presencia de autoridades nacionales y legislativas, consolidando el reconocimiento histórico hacia quienes fueron afectados por el terrorismo.",
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
              texto:
                "- ABRIL 2024 - En el Salón Azul del Congreso se realizó la ceremonia de entrega de Diplomas de Honor del Senado de la Nación a Veteranos de la Guerra de Malvinas, en conmemoración del 42° aniversario de la Recuperación de las Islas. El acto fue encabezado por la presidente del Senado, Victoria Villarruel, quien destacó la importancia de mantener viva la causa Malvinas y el reconocimiento a los héroes que defendieron la Patria.Villarruel agradeció al Presidente Javier Milei por acompañarla en esta labor y expresó: “Han sido 42 años de desmalvinización y olvido. Es momento de recuperar el respeto por nuestras Fuerzas Armadas y por los Héroes de Malvinas.” También participaron representantes de las comisiones de Ex-combatientes y Familiares de Caídos, junto al capellán Vicente Martínez Torrens y veteranos como Owen Crippa y Rubén Zini. El cierre musical estuvo a cargo de bandas de las tres Fuerzas Armadas, que interpretaron la Marcha de las Malvinas.",
            },

            {
              titulo:
                "A 43 AÑOS DE LA GESTA DE MALVINAS, VICTORIA VILLARRUEL ENCABEZÓ EN USHUAIA EL ACTO OFICIAL EN HOMENAJE A LOS EX COMBATIENTES Y CAÍDOS EN LA GUERRA",

              img: vvMalvinasU,
              texto:
                "- ABRIL 2025 - La vicepresidente de la Nación y presidente del Senado, Victoria Villarruel, encabezó en Ushuaia el acto conmemorativo por el 43° aniversario de la Gesta de Malvinas, junto al gobernador Gustavo Melella, el intendente Walter Vuoto y el presidente del Centro de Excombatientes, Juan Carlos Parodi.Durante la ceremonia, realizada en el pabellón nacional Puerto Argentino, Villarruel convocó a “emprender un proceso de malvinización” y destacó que Malvinas une a todos los argentinos.“El reconocimiento hacia los hombres y mujeres de nuestras Fuerzas Armadas que lucharon en Malvinas es el pilar desde el que comenzaremos la reconstrucción de nuestro país”, expresó.El acto contó con la participación de excombatientes, familiares de caídos, legisladores, autoridades provinciales y municipales, y también se conmemoró el Día Mundial de la Concientización sobre el Autismo.",
            },

            {
              titulo:
                "VICTORIA VILLARRUEL ENCABEZÓ EL ACTO “MALVINAS, EPOPEYA NACIONAL” Y DISTINGUIÓ A VETERANOS DE MALVINAS",

              img: vvMalvinasE,
              texto:
                "- Abril 2025 - En el Salón Azul del Congreso, la vicepresidente Victoria Villarruel presidió el acto “Malvinas, Epopeya Nacional”, en el marco del 43° aniversario de la Gesta de Malvinas. Durante la ceremonia, organizada por la Dirección de Gesta de Malvinas y la Dirección de Cultura, se entregaron distinciones a veteranos en reconocimiento a su valentía y compromiso con la Patria. Villarruel agradeció a los excombatientes por “mantener viva la memoria de los caídos” y afirmó:“La historia intentó silenciarlos, pero ustedes se multiplicaron. Hoy la Nación los abraza y los reconoce como lo que son: nuestros héroes.” Además, propuso impulsar una campaña de malvinización nacional con una exposición itinerante que recorra las escuelas del país, para que los niños conozcan y valoren el testimonio de los veteranos. “Malvinizar es sembrar en las nuevas generaciones el amor por nuestra tierra y recuperar el orgullo de ser argentinos.” El acto concluyó con los homenajeados y Villarruel entonando la Marcha de las Malvinas.",
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
              <p className="parrafo-malvinas">{sec.texto}</p>
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
  //OTRO CODIGO
  //     <div>
  //       <div className="container">
  //         <div className="row fila-titulo-malvinas">
  //           <div className="titulo-malvinas">
  //             <img src={malvinasTitle} alt="titulo héroes de malvinas" />
  //           </div>
  //         </div>

  //         <div className="row fila-malvinas">
  //           <div className="container-titulo">
  //             <h3 className="titulo-parrafo-malvinas">
  //               ENTREGA DE DIPLOMAS DE HONOR A MILITARES VETERANOS DE MALVINAS
  //             </h3>
  //           </div>
  //           <div className="imagen-malvinas">
  //             <img
  //               src={vvMalvinas}
  //               alt="Victoria Villarruel con veteranos de Malvinas"
  //             />
  //           </div>
  //           <div className="col columna-malvinas">
  //             <div className="contenedor-parrafo-malvinas">
  //               <p className="parrafo-malvinas">
  //                 - ABRIL 2024 - El acto fue encabezado por la presidente del
  //                 Senado, Victoria Villarruel, y también fueron distinguidas la
  //                 Comisión Nacional de Ex-combatientes de Malvinas y la Comisión
  //                 de Familiares de Caídos en la Guerra de Malvinas e Islas del
  //                 Atlántico Sur. Durante la jornada se realizó en el Salón Azul
  //                 del Congreso la ceremonia de entrega de Diplomas de Honor del
  //                 Senado de la Nación a Veteranos de la Guerra de Malvinas, en el
  //                 marco del 42º aniversario de la Recuperación de las Islas. Luego
  //                 de agradecer a todos los presentes, Villarruel clausuró la
  //                 ceremonia y expresó: “Han sido 42 años durísimos, de
  //                 desmalvinización, de olvido, de indiferencia, donde estos
  //                 hombres no recibieron el abrazo de la sociedad argentina que
  //                 tanto merecían y habían ganado”. También afirmó: “Quiero
  //                 agradecer especialmente al Presidente de la Nación, Javier
  //                 Milei, por elegirme como su compañera de fórmula y que hoy, la
  //                 hija de un veterano de Malvinas, pueda estar aquí”. Asimismo,
  //                 remarcó: “Malvinas es la causa que une a todos los argentinos y
  //                 este país hizo lo justo que fue defender a su tierra. Es el
  //                 momento de recuperar el respeto por las Fuerzas Armadas y por
  //                 los Héroes de Malvinas”. La vicepresidente insistió en el
  //                 reclamo de soberanía sobre las Islas y sostuvo: “Estos 649
  //                 hombres que dieron la vida por la Patria deben estar presentes
  //                 en nuestros esfuerzos por poner a la Argentina de pie”. La
  //                 invocación religiosa estuvo a cargo de Vicente Martínez Torrens,
  //                 último capellán de la guerra de Malvinas. También dirigieron
  //                 palabras a los presentes Owen Guillermo Crippa, teniente de
  //                 navío (R) V.G.M., Rubén Gustavo Zini, brigadier mayor (R)
  //                 V.G.M., y Dalal Abd, madre de un caído en la guerra. El cierre
  //                 musical estuvo a cargo de un ensamble de bandas pertenecientes a
  //                 las tres Fuerzas Armadas, que interpretó la Marcha de las
  //                 Malvinas y otras piezas en la explanada del Congreso de la
  //                 Nación.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row fila-malvinas">
  //           <div className="container-titulo">
  //             <h3 className="titulo-parrafo-malvinas">
  //               A 43 AÑOS DE LA GESTA DE MALVINAS, VICTORIA VILLARRUEL ENCABEZÓ EN
  //               USHUAIA EL ACTO OFICIAL EN HOMENAJE A LOS EX COMBATIENTES Y CAÍDOS
  //               EN LA GUERRA
  //             </h3>
  //           </div>
  //           <div className="imagen-malvinas">
  //             <img src={vvMalvinasU} alt="Victoria Villarruel en Ushuaia" />
  //           </div>

  //           <div className="col columna-malvinas order-md-1">
  //             <div className="contenedor-parrafo-malvinas ">
  //               <p className="parrafo-malvinas">
  //                 - ABRIL 2025 -La vicepresidente de la Nación y presidente del
  //                 Senado, Victoria Villarruel, encabezó en Ushuaia, junto al
  //                 gobernador de la provincia, Gustavo Melella, el intendente de la
  //                 ciudad, Walter Woto, y el presidente del Centro de
  //                 Excombatientes de Malvinas de Ushuaia, Juan Carlos Parodi, el
  //                 acto conmemorativo por la Gesta de Malvinas, al cumplirse su 43°
  //                 aniversario. "Convoco a todos los argentinos a emprender un
  //                 proceso de malvinización, a reconocer y a honrar a nuestros
  //                 héroes, porque Malvinas nos une como nación", expresó
  //                 Villarruel, luego de participar del izamiento de la bandera
  //                 argentina en el pabellón nacional Puerto Argentino. Al recordar
  //                 y homenajear a los caídos y excombatientes, la Vicepresidente de
  //                 la Nación agregó que " es ese reconocimiento hacia los hombres y
  //                 mujeres de nuestras FFAA que lucharon en Malvinas, el pilar
  //                 desde el que comenzaremos la reconstrucción de nuestro amado
  //                 país. Es por ellos, por nuestros muertos en la guerra, por
  //                 nuestros pilotos y por los pibes de Malvinas que jamás
  //                 olvidaré". Victoria Villarruel estuvo acompañada por
  //                 excombatientes de la guerra de 1982, familiares de caídos en
  //                 Malvinas, senadores y diputados de Tierra del Fuego, autoridades
  //                 provinciales, municipales, de Fuerzas Armadas y de Seguridad
  //                 provincial y público en general, donde también se conmemoró el
  //                 Día Mundial de la Concientización del Autismo.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row fila-malvinas">
  //           <div className="container-titulo">
  //             <h3 className="titulo-parrafo-malvinas">
  //               VICTORIA VILLARRUEL ENCABEZÓ EL ACTO “MALVINAS, EPOPEYA NACIONAL”
  //               Y DISTINGUIÓ A VETERANOS DE MALVINAS
  //             </h3>
  //           </div>
  //           <div className="imagen-malvinas">
  //             <img
  //               src={vvMalvinasE}
  //               alt="Victoria Villarruel cantando la marcha de Malvinas"
  //             />
  //           </div>
  //           <div className="contenedor-parrafo-malvinas">
  //             <p className="parrafo-malvinas">
  //               - ABRIL 2025 - La vicepresidente Victoria Villarruel, presidió en
  //               el salón Azul el acto "Malvinas, Epopeya Nacional" donde se
  //               realizó la entrega de distinciones a veteranos de Malvinas en
  //               agradecimiento por su valentía y sacrificio. El evento fue
  //               organizado por la Dirección de Gesta de Malvinas, a cargo de
  //               Nicolás Kasanzew, y la Dirección de Cultura, cuyo titular es
  //               Daniel Abate. La ceremonia formó parte de la conmemoración del 43°
  //               Aniversario de la Gesta de Malvinas. En el evento se entregaron
  //               dieciocho diplomas, entre los que se encontraban los
  //               pertenecientes a la artillería antiaérea de la Fuerza Aérea y a la
  //               Compañía de Comandos 602, de la que formaba parte el padre de la
  //               Vicepresidente Villarruel. "Quiero agradecerles por haber
  //               combatido, resistido, por haber vuelto, por llevar con hidalguía
  //               durante décadas, la memoria de nuestros caídos. Gracias por
  //               mantenerse firmes, incluso cuando una parte de la sociedad les dio
  //               la espalda. La historia oficial intentó silenciarlos, pero ustedes
  //               no se callaron. Quisieron borrarlos, pero ustedes se multiplicaron
  //               y, hoy por fin, la Nación los abraza y los reconoce como lo que
  //               son, nuestros héroes", sostuvo Villarruel, luego de la entrega de
  //               distinciones. A continuación, la Vicepresidente de la Nación,
  //               propuso que "desde el Senado de la Nación, promovamos una campaña
  //               de malvinización nacional con ustedes como protagonistas, una
  //               exposición itinerante de Malvinas que recorra las escuelas
  //               primarias del país, de norte a sur, de este a oeste. Una muestra
  //               viva, testimonial, humana, donde nuestros niños escuchen, vean y
  //               sientan qué significa haber luchado por la Patria, porque el
  //               testimonio de un veterano vale más que cien manuales. Quiero que
  //               nuestros chicos conozcan los nombres y las historias" También
  //               subrayó que "malvinizar es sembrar en las nuevas generaciones el
  //               amor por nuestra tierra, es recuperar el orgullo de ser
  //               argentinos, es enseñar que la soberanía no se declama, se defiende
  //               y que la Patria no es una palabra vacía, es una bandera que se
  //               lleva en el alma. Este proyecto no es político, es nacional y por
  //               eso debe unirnos, como nos une Malvinas." Para finalizar,
  //               Villarruel remarcó que "Malvinas es la única prenda de unidad que
  //               nos queda como Nación, por eso quiero abrir una etapa, la etapa de
  //               la malvinización nacional, con ustedes al frente, con nuestros
  //               niños como destinatarios y con la Patria como bandera." Al
  //               finalizar el acto, los homenajeados, junto a Villarruel, entonaron
  //               las estrofas de la Marcha de Malvinas.
  //             </p>
  //           </div>
  //         </div>

  //         <div className="row">
  //           <div className="container-parrafo-malvinas">
  //             <p className="parrafo-malvinas-final">
  //               El soldado no muere en el frente de batalla muere cuando su patria
  //               lo olvida
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default SenadoTemas;
