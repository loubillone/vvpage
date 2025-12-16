import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import rioNegroVV from "../assets/img/mapaArg/rio-negro/rioNegro.jpg";
import rioNegroVVDos from "../assets/img/mapaArg/rio-negro/rioNegro2.jpg";
import azulVV from "../assets/img/mapaArg/buenos-aires/azulVV.jpg";
import azulVVDos from "../assets/img/mapaArg/buenos-aires/azulVV2.jpg";
import cordobaVV from "../assets/img/mapaArg/cordoba/corVV.jpg";
import cordobaVVDos from "../assets/img/mapaArg/cordoba/corVV2.jpg";
import santafeVV from "../assets/img/mapaArg/santa-fe/santafeVV.jpg";
import santafeVVDos from "../assets/img/mapaArg/santa-fe/santafeVV2.jpg";
import saltaVV from "../assets/img/mapaArg/salta/saltaVV.jpg";
import saltaVVDos from "../assets/img/mapaArg/salta/saltaVV2.jpg";
import corrientesVV from "../assets/img/mapaArg/corrientes/corrientesVV.jpg";
import corrientesVVDos from "../assets/img/mapaArg/corrientes/corrientesVV2.jpg";
import mendozaVV from "../assets/img/mapaArg/mendoza/mendozaVV.jpg";
import mendozaVVDos from "../assets/img/mapaArg/mendoza/mendozaVV2.jpg";
import sanLuisVV from "../assets/img/mapaArg/san-luis/sanluisVV.jpeg";
import sanLuisVVDos from "../assets/img/mapaArg/san-luis/sanluisVV2.jpeg";
import catamarcaVV from "../assets/img/mapaArg/catamarca/cataVV.avif";
import catamarcaVVDos from "../assets/img/mapaArg/catamarca/cataVV2.jpeg";
import jujuyVV from "../assets/img/mapaArg/jujuy/jujuyVV.jpg";
import jujuyVVDos from "../assets/img/mapaArg/jujuy/jujuyVV2.jpg";
import misionesVV from "../assets/img/mapaArg/misiones/misionesVV.jpg";
import misionesVVDos from "../assets/img/mapaArg/misiones/misionesVV2.jpg";
import neuquenVV from "../assets/img/mapaArg/neuquen/neuquenVV.jpg";
import neuquenVVDos from "../assets/img/mapaArg/neuquen/neuquenVV2.jpg";
import entreriosVV from "../assets/img/mapaArg/entre-rios/entreriosVV.jpg";
import entreriosVVDos from "../assets/img/mapaArg/entre-rios/entreriosVV2.jpg";
import santiagoVV from "../assets/img/mapaArg/santiago/santiagoVV.jpg";
import santiagoVVDos from "../assets/img/mapaArg/santiago/santiagoVV2.jpeg";
import chubutVV from "../assets/img/mapaArg/chubut/chubutVV.jpg";
import chubutVVDos from "../assets/img/mapaArg/chubut/chubutVV2.jpg";
import tierraVV from "../assets/img/mapaArg/tierra-del-fuego/tierraVV.jpg";
import tierraVVDos from "../assets/img/mapaArg/tierra-del-fuego/tierraVV2.jpg";
import tucuVV from "../assets/img/mapaArg/tucuman/tucumanVV.jpg";
import tucuVVDos from "../assets/img/mapaArg/tucuman/tucumanVV2.jpg";
import formosaVV from "../assets/img/mapaArg/formosa/formosaVV.jpg";
import formosaVVDos from "../assets/img/mapaArg/formosa/formosaVV2.jpg";
import saladasVV from "../assets/img/mapaArg/corrientes/saladasVV.jpg";
import saladasVVDos from "../assets/img/mapaArg/corrientes/saladasVV2.jpg";
import elrodeoVV from "../assets/img/mapaArg/catamarca/elrodeoVV.jpg";
import elrodeoVVDos from "../assets/img/mapaArg/catamarca/elrodeoVV2.jpg";
import banderaVV from "../assets/img/mapaArg/santa-fe/banderaVV.jpg";
import banderaVVDos from "../assets/img/mapaArg/santa-fe/banderaVV2.jpg";
import ruralsaltaVV from "../assets/img/mapaArg/salta/ruralsaltaVV.jpg";
import ruralsaltaVVDos from "../assets/img/mapaArg/salta/ruralsaltaVV2.jpg";
import guemesVV from "../assets/img/mapaArg/salta/guemesVV.jpg";
import guemesVVDos from "../assets/img/mapaArg/salta/guemesVV2.jpg";
import banderaroVV from "../assets/img/mapaArg/santa-fe/banderaroVV.jpg";
import banderaroVVDos from "../assets/img/mapaArg/santa-fe/banderaroVV2.jpg";
import cordoVV from "../assets/img/mapaArg/cordoba/cordoVV.jpg";
import cordoVVDos from "../assets/img/mapaArg/cordoba/cordoVV2.jpg";
import mardelVV from "../assets/img/mapaArg/buenos-aires/mardelVV.jpg";
import mardelVVDos from "../assets/img/mapaArg/buenos-aires/mardelVV2.jpg";
import fiestaPonchoVV from "../assets/img/mapaArg/catamarca/fiestaPonchoVV.jpg";
import fiestaPonchoVVDos from "../assets/img/mapaArg/catamarca/fiestaPonchoVV2.jpg";
import "../css/provinciaDetalle.css";
import { Carousel, Container, Button } from "react-bootstrap";

const ProvinciaDetalle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const visitasProvincias = {
    "buenos-aires": {
      nombre: "Buenos Aires",
      visitas: [
        {
          fecha: "Enero de 2024",
          descripcion: (
            <p>
              La vicepresidente Victoria Villarruel participó en Azul en el{" "}
              <span className="vv-estilo-detalle">
                acto conmemorativo por los 50 años del ataque terrorista a la
                Guarnición Militar de Azul.
              </span>{" "}
              Estuvo acompañada por el Ministro de Defensa Luis Petri y los
              familiares de las víctimas, a quienes rindió homenaje,
              reconociendo el dolor de las familias y la importancia de
              reconstruir la historia de todos los argentinos. <br />
              <br /> Durante la ceremonia,{" "}
              <span className="vv-estilo-detalle">
                Villarruel destacó los valores de justicia, verdad, reparación y
                derechos humanos para todos,
              </span>{" "}
              reafirmando su compromiso con la memoria histórica y el respeto
              hacia quienes defendieron la Patria.
            </p>
          ),
          imagenes: [azulVV, azulVVDos],
          lugar: "Azul",
        },

        {
          fecha: "Mayo de 2024",
          descripcion: (
            <p>
              En mayo de 2024, la vicepresidente Victoria Villarruel visitó Mar
              del Plata, invitada por el Senador Nacional Maximiliano Abad, para
              recorrer el Parque Industrial y apoyar la producción y el deporte
              nacional. Durante su estadía,{" "}
              <span className="vv-estilo-detalle">
                {" "}
                Villarruel visitó la Planta de Havanna y la Planta de
                Lucciano’s,
              </span>{" "}
              destacando la importancia de quienes invierten en el país, generan
              empleo y fomentan el desarrollo productivo local.{" "}
              <span className="vv-estilo-detalle">
                <br /> <br />
                Posteriormente, se acercó al Premier Pádel P1 Mar del Plata
                2024,
              </span>{" "}
              donde observó los partidos de las mejores parejas masculinas y
              femeninas del mundo, acompañada por el Intendente Guillermo
              Montenegro, expresando su apoyo al deporte nacional y a los
              argentinos que destacan en el ámbito internacional.{" "}
              <span className="vv-estilo-detalle">
                {" "}
                <br />
                <br />
                La visita reflejó el compromiso de Villarruel con la producción,
                el trabajo y el deporte
              </span>
              , reforzando su vínculo con la comunidad y el desarrollo de la
              ciudad.
            </p>
          ),
          imagenes: [mardelVV, mardelVVDos],
          lugar: "Mar Del Plata",
        },
      ],
    },

    cordoba: {
      nombre: "Córdoba",
      visitas: [
        {
          fecha: "Enero de 2024",
          descripcion: (
            <p>
              En enero de 2024,{" "}
              <span className="vv-estilo-detalle">
                la vicepresidente Victoria Villarruel visitó la provincia de
                Córdoba
              </span>{" "}
              para participar en la inauguración del
              <span className="vv-estilo-detalle">
                {" "}
                Festival Nacional de Doma y Folklore de Jesús María.
              </span>{" "}
              <br /> <br /> Durante su estadía, se alojó en Villa Allende, en la
              residencia de una familia amiga, fortaleciendo los lazos con la
              comunidad local.{" "}
              <span className="vv-estilo-detalle">
                En el festival, fue recibida por la vicegobernadora Myrian
                Prunotto, el intendente de Jesús María Federico Zárate y el
                presidente de la comisión organizadora Juan López.
              </span>{" "}
              Villarruel expresó su agradecimiento por la cálida recepción,
              afirmando:
              <blockquote className="cita">
                "Siempre me reciben con amor, acá soy cordobesa."
              </blockquote>{" "}
              Además, compartió en sus redes sociales su participación en el
              festival, destacando la importancia de preservar y promover la
              cultura nacional y los eventos tradicionales que unen a las
              comunidades de todo el país.
              <span className="vv-estilo-detalle">
                <br /> <br />
                Esta visita reflejó su interés por participar activamente en
                eventos culturales y tradicionales,{" "}
              </span>
              reafirmando su compromiso con el federalismo y el vínculo con las
              distintas regiones argentinas.
            </p>
          ),
          imagenes: [cordobaVV, cordobaVVDos],
          lugar: "Jesús María",
        },

        {
          fecha: "Mayo de 2024",
          descripcion: (
            <p>
              El 25 de mayo de 2024, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel visitó la ciudad de Córdoba para participar
                de los actos oficiales conmemorativos del Día de la Patria
              </span>
              , acompañando al presidente y autoridades nacionales. Villarruel
              agradeció la organización del evento y la colaboración de las
              fuerzas de seguridad, expresando en sus redes:
              <blockquote className="cita">
                “¡Gracias Córdoba por recibirnos ayer! Un 25 de mayo distinto en
                mi querida Córdoba. Agradezco a la Fuerza Aérea por el traslado
                junto con los ministros del gabinete, a la Policía Federal por
                cuidarnos siempre y a todos los que hicieron cómoda nuestra
                breve estadía allí para el acto del Presidente.”
              </blockquote>{" "}
              <span className="vv-estilo-detalle">
                La visita reforzó el compromiso de la vicepresidente con la
                memoria histórica, la identidad nacional y la cercanía con las
                provincias argentinas.
              </span>
            </p>
          ),
          imagenes: [cordoVV, cordoVVDos],
          lugar: "Cordoba Capital",
        },
      ],
    },

    tucuman: {
      nombre: "Tucumán",
      visitas: [
        {
          fecha: "Julio de 2025",
          descripcion: (
            <p>
              En Tucumán,{" "}
              <span className="vv-estilo-detalle">
                la vicepresidente Victoria Villarruel celebró el Día de la
                Independencia acompañada por vecinos y autoridades locales.
              </span>{" "}
              Durante su visita, fue recibida con cariño, generosidad y alegría,
              reafirmando su vínculo personal y afectivo con la provincia que
              considera su tierra querida. <br />
              <br />
              <span className="vv-estilo-detalle">
                Villarruel destacó la importancia de esta fecha histórica para
                la Patria Argentina,
              </span>{" "}
              celebrando la independencia y transmitiendo su orgullo por la
              historia y los valores nacionales. En sus palabras:{" "}
              <blockquote className="cita">
                "¡¡¡Feliz de estar nuevamente en mi Tucumán querido!!! ¡Viva la
                Patria! ¡Viva la Patria! ¡Viva la Patria!"
              </blockquote>{" "}
              La visita reflejó el compromiso de la vicepresidente con la
              <span className="vv-estilo-detalle">
                {" "}
                memoria histórica y el federalismo
              </span>{" "}
              así como con las provincias que forjaron los cimientos de la
              Argentina.
            </p>
          ),
          imagenes: [tucuVV, tucuVVDos],
          lugar: "San Miguel de Tucumán",
        },
      ],
    },

    salta: {
      nombre: "Salta",
      visitas: [
        {
          fecha: "Febrero de 2024",
          descripcion: (
            <p>
              El 20 de febrero de 2024, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel participó de los actos conmemorativos por el
                211° aniversario de la Batalla de Salta.
              </span>{" "}
              <br /> <br />
              Llegó a la provincia el 19 de febrero, donde se reunió con
              miembros de su partido y funcionarios locales, y confirmó su
              participación en la{" "}
              <span className="vv-estilo-detalle">
                cena de gala organizada por el Club 20 de Febrero,
              </span>{" "}
              como antesala de los festejos. <br /> <br />
              El 20 de febrero,{" "}
              <span className="vv-estilo-detalle">
                asistió al desfile cívico-militar en Plaza Belgrano,
                conmemorando la histórica victoria del Ejército del Norte en
                1813.
              </span>{" "}
              Durante los actos, Villarruel destacó la importancia de mantener
              viva la memoria histórica y los valores patrios que guiaron a
              nuestros próceres.
            </p>
          ),
          imagenes: [saltaVV, saltaVVDos],
          lugar: "Ciudad de Salta",
        },
        {
          fecha: "Junio de 2024",
          descripcion: (
            <p>
              El 17 de junio de 2024, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel participó en Salta de los actos
                conmemorativos en honor al General Martín Miguel de Güemes
              </span>
              , destacando la importancia de las tradiciones, la historia y los
              héroes que forjaron la Nación. Durante la jornada, <br /> <br />
              <span className="vv-estilo-detalle">
                Villarruel desfiló junto a Los Infernales, vistiendo con
                humildad las ropas de gaucho salteño,
              </span>{" "}
              y se emocionó con cada fortín preparado para el desfile, en un
              homenaje al esfuerzo y la dedicación de las comunidades locales.
              La vicepresidente expresó:{" "}
              <blockquote className="cita">
                "Recuperar el orgullo de ser argentinos es abrazar nuestro
                pasado común, amarlo y darlo a conocer a las nuevas
                generaciones… Cada gaucho es mi hermano. ¡Todo por Argentina!"
              </blockquote>{" "}
              <span className="vv-estilo-detalle">
                La visita reafirmó su compromiso con la memoria histórica, la
                identidad nacional y las tradiciones del norte argentino,{" "}
              </span>
              destacando el valor de transmitir a las nuevas generaciones la
              historia y los héroes de la Patria.
            </p>
          ),
          imagenes: [guemesVV, guemesVVDos],
          lugar: "Ciudad de Salta",
        },

        {
          fecha: "Agosto de 2024",
          descripcion: (
            <p>
              En agosto de 2024,{" "}
              <span className="vv-estilo-detalle">
                la vicepresidente Victoria Villarruel realizó una gira por Jujuy
                y Salta,
              </span>{" "}
              destacando el valor del trabajo rural y la producción agropecuaria
              como pilares de la identidad argentina. <br />
              <br />{" "}
              <span className="vv-estilo-detalle">
                En San Pedro, Jujuy, Villarruel recorrió la finca Campo Alegre,
              </span>{" "}
              acompañada por las hermanas Rodríguez Pardo y sus esposos, tercera
              generación de productores de caña de azúcar, y pudo conocer de
              cerca el esfuerzo y la dedicación que sostienen la producción
              local. <br />
              <br />{" "}
              <span className="vv-estilo-detalle">
                Posteriormente, se trasladó a Salta, donde participó de la 80°
                Exposición Rural,
              </span>{" "}
              acompañando a la Sociedad Rural de Salta, productores y distintas
              entidades del sector. Allí se exhibió lo mejor de la producción
              provincial, destacando la capacidad de la región para generar
              alimentos y recursos que sostienen a toda la Nación. Villarruel
              expresó:{" "}
              <blockquote className="cita">
                "El campo es esfuerzo, sacrificio pero también es dignidad,
                esperanza y amor a la tierra… El campo es la tierra de los
                ancestros que alimenta el cuerpo pero también el alma de nuestra
                amada Patria. ¡Viva el campo argentino, el bendito suelo que nos
                alimenta, nos da cobijo y nos permite vivir y respirar
                argentinidad!
              </blockquote>{" "}
              <span className="vv-estilo-detalle">
                {" "}
                La visita resaltó la importancia del sector agropecuario para la
                economía, la cultura y la identidad nacional,
              </span>{" "}
              reafirmando el vínculo de la vicepresidente con las provincias del
              norte argentino.
            </p>
          ),
          imagenes: [ruralsaltaVV, ruralsaltaVVDos],
          lugar: "Jujuy - Salta",
        },
      ],
    },

    chubut: {
      nombre: "Chubut",
      visitas: [
        {
          fecha: "Agosto de 2025",
          descripcion: (
            <p>
              El 22 de agosto de 2025, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel visitó la provincia de Chubut para
                participar de los festejos por el 90° aniversario de Río Mayo,
              </span>{" "}
              en un regreso cargado de emoción y recuerdos de infancia. <br />
              <br />
              Arribó al Aeropuerto General Enrique Mosconi de Comodoro
              Rivadavia, donde fue recibida por el gobernador Ignacio "Nacho"
              Torres, y camino a Río Mayo realizó una breve parada en Sarmiento,
              saludando a empleados y vecinos. <br />
              <br />
              <span className="vv-estilo-detalle">
                En Río Mayo, fue declarada Huésped de Honor y participó del acto
                oficial junto al gobernador Torres,
              </span>{" "}
              el vicegobernador Gustavo Menna, el intendente Gustavo Loyaute,
              senadoras y diputadas nacionales, autoridades provinciales y
              municipales, fuerzas armadas y de seguridad. <br />
              <br /> Durante la ceremonia, Villarruel recordó con emoción su
              niñez en la localidad:{" "}
              <blockquote className="cita">
                "Fui muy feliz en cada uno de los días que viví en este pequeño
                pedacito de nuestra inmensa Patagonia… Aprendí a amar el paisaje
                de la estepa patagónica… Fue poco mi tiempo en Río Mayo, pero
                debo decirles que soy chubutense por adopción y por elección."
              </blockquote>{" "}
              <span className="vv-estilo-detalle">
                La jornada incluyó un desfile cívico-militar, la inauguración
                del Centro de Monitoreo, la presentación del nuevo sistema de
                telemedicina en el Hospital Rural de Río Mayo, la visita al Club
                de Abuelos y la inauguración de la obra de iluminación en el
                ingreso a la localidad.
              </span>{" "}
              <br />
              <br />
              Durante su estadía, Villarruel{" "}
              <span className="vv-estilo-detalle">
                también recorrió el hospital de Comodoro Rivadavia,
              </span>{" "}
              dialogó con profesionales de la salud, visitó el mural en homenaje
              al Gral. Enrique Mosconi y acompañó la inauguración del Muro de
              Contención Costero en el Hospital Alvear.{" "}
              <span className="vv-estilo-detalle">En Rada Tilly,</span> mantuvo
              un encuentro con la intendente y concejales locales, reafirmando
              su compromiso con la Patagonia. <br />
              <br />{" "}
              <span className="vv-estilo-detalle">
                {" "}
                El regreso de Victoria Villarruel a Río Mayo no solo honró su
                historia personal, sino que también transmitió un mensaje de
                federalismo, soberanía y cercanía con el pueblo argentino.
              </span>
            </p>
          ),
          imagenes: [chubutVV, chubutVVDos],
          lugar: "Río Mayo",
        },
      ],
    },

    "tierra-del-fuego": {
      nombre: "Tierra del Fuego",
      visitas: [
        {
          fecha: "Abril de 2025",
          descripcion: (
            <p>
              El 2 de abril de 2025, en un día nevado pero con el corazón
              inflamado del fuego de nuestros héroes,{" "}
              <span className="vv-estilo-detalle">
                la vicepresidente Victoria Villarruel encabezó los actos por el
                Día de la Veteranía y de los Caídos en la Guerra de Malvinas en
                Ushuaia,
              </span>{" "}
              Capital de las Malvinas. <br />
              <br /> Durante el acto central, Villarruel participó de ofrendas
              florales y discursos junto a autoridades locales, con la presencia
              de niños y colegios con sus banderas de ceremonia, destacando la
              importancia de transmitir memoria y patriotismo a las nuevas
              generaciones. <br />
              <br />{" "}
              <span className="vv-estilo-detalle">
                La agenda incluyó visitas al Destacamento más austral de la
                Gendarmería Nacional Argentina, Grupo Lapataia, y al Parque
                Nacional Bahía Lapataia, el más austral del país,
              </span>{" "}
              donde compartió con argentinos y extranjeros que recorrían el
              lugar, recibiendo muestras de cariño y admiración por nuestra
              tierra y nuestros veteranos de Malvinas. Villarruel agradeció al
              gobernador Gustavo Melella por la invitación y{" "}
              <span className="vv-estilo-detalle">
                expresó su compromiso de volver a Tierra del Fuego, reafirmando
                su respeto por los héroes de Malvinas y el profundo amor por la
                Patria.
              </span>
            </p>
          ),
          imagenes: [tierraVV, tierraVVDos],
          lugar: "Ushuaia",
        },
      ],
    },

    catamarca: {
      nombre: "Catamarca",
      visitas: [
        {
          fecha: "Abril de 2024",
          descripcion: (
            <p>
              En abril de 2024, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel visitó la provincia de Catamarca, invitada
                por el gobernador Raúl Jalil para participar en la tradicional
                Bajada de la Virgen del Valle,
              </span>{" "}
              una de las celebraciones religiosas más importantes del norte
              argentino. <br />
              <br />
              Antes del acto central, Villarruel mantuvo una reunión con el
              gobernador y su gabinete, donde dialogaron sobre temas vinculados
              al desarrollo provincial y al fortalecimiento de las
              instituciones. Posteriormente,{" "}
              <span className="vv-estilo-detalle">
                recorrieron las viviendas que el Gobierno de Catamarca construye
                para los efectivos militares destinados en la provincia,
              </span>{" "}
              destacando la importancia de acompañar y apoyar a las Fuerzas
              Armadas. <br />
              <br /> Durante la jornada, también{" "}
              <span className="vv-estilo-detalle">
                visitó la Cuesta del Portezuelo, uno de los paisajes más
                emblemáticos de Catamarca,
              </span>{" "}
              y culminó su visita participando en la emotiva Bajada de la Virgen
              del Valle, en la Catedral Basílica. Villarruel agradeció la cálida
              recepción de los catamarqueños y expresó:
              <blockquote className="cita">
                "¡Gracias Catamarca! ¡Que la Virgen Morenita proteja a la
                Argentina!"
              </blockquote>{" "}
              <span className="vv-estilo-detalle">
                La visita combinó actividades institucionales, sociales y de fe,
              </span>{" "}
              reflejando el profundo respeto de la vicepresidente por las
              tradiciones y valores espirituales que unen al pueblo argentino.
            </p>
          ),
          imagenes: [catamarcaVV, catamarcaVVDos],
          lugar: "San Fernando del Valle de Catamarca",
        },

        {
          fecha: "Julio de 2024",
          descripcion: (
            <p>
              En julio de 2024, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel visitó la provincia de Catamarca para
                participar de la Fiesta Nacional e Internacional del Poncho,
              </span>{" "}
              uno de los eventos culturales más emblemáticos del norte
              argentino. <br />
              <br /> Durante su recorrido, Villarruel conoció ponchos, chalinas,
              orfebrería, artesanías en cuero, esterillas hilados, ponchos y
              guantes de vicuña, apreciando el trabajo artesanal y la riqueza
              cultural de la provincia. <br />
              <br />
              <span className="vv-estilo-detalle">
                También visitó la cocina de la Peña, donde compartió la cena y
                saludó a todos los presentes, destacando el esfuerzo y la
                dedicación de quienes mantienen vivas las tradiciones locales.{" "}
              </span>
              La vicepresidente expresó su gratitud por la calidez de los
              catamarqueños:{" "}
              <blockquote className="cita">
                "Un día muy intenso pero que me llevo en el corazón por tanto
                amor de los argentinos. ¡Gracias Catamarca por tanto!"
              </blockquote>{" "}
              <span className="vv-estilo-detalle">
                La visita reflejó el compromiso de Villarruel con la cultura,
                las tradiciones y la identidad nacional,
              </span>{" "}
              resaltando la importancia del trabajo artesanal y la celebración
              de la historia local.
            </p>
          ),
          imagenes: [fiestaPonchoVV, fiestaPonchoVVDos],
          lugar: "San Fernando del Valle de Catamarca",
        },
        {
          fecha: "Julio 2025",
          descripcion: (
            <p>
              En 2025, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel visitó nuevamente la provincia de Catamarca,
              </span>{" "}
              compartiendo una jornada con vecinos y trabajadores marcada por
              identidad, tradición y valores profundamente arraigados en la
              historia nacional. <br />
              <br />{" "}
              <span className="vv-estilo-detalle">
                En Belén, conocida como la cuna del poncho argentino, Villarruel
                recorrió el taller del artesano Antonio Gutiérrez, donde conoció
                ponchos dedicados a la selección argentina
              </span>{" "}
              y a la emblemática Ruta 40, hechos con técnicas ancestrales que
              reflejan el esfuerzo, dedicación y orgullo del interior del país.
              <br />
              <br /> Posteriormente,{" "}
              <span className="vv-estilo-detalle">
                visitó la cooperativa de las Arañitas Hilanderas,{" "}
              </span>
              donde 30 mujeres lideradas por Rosita trabajan cada día hilando,
              tiñendo y tejiendo a mano verdaderas obras de arte. Villarruel
              destacó el compromiso de estas mujeres con la preservación de la
              cultura textil del norte argentino. <br />
              <br />
              La recorrida continuó en El Rodeo, donde{" "}
              <span className="vv-estilo-detalle">
                la vicepresidente conoció la imponente imagen de la Virgen del
                Valle, escultura de 52 metros construida gracias a la fe y
                perseverancia de Walter D’Agostini.
              </span>{" "}
              Desde los miradores, se contemplan las Sierras de Ambato, símbolo
              de la grandeza del paisaje y la conexión con la identidad
              argentina. Villarruel expresó:{" "}
              <blockquote className="cita">
                "Argentina es trabajo, tradiciones y amor por nuestra tierra",
              </blockquote>{" "}
              resaltando el ejemplo de quienes construyen día a día desde el
              interior profundo.{" "}
              <span className="vv-estilo-detalle">
                La visita reafirmó la riqueza cultural, productiva y espiritual
                de Catamarca, destacando la fuerza del trabajo local y la fe
                inquebrantable de su gente.
              </span>
            </p>
          ),
          imagenes: [elrodeoVV, elrodeoVVDos],
          lugar: "Belén – El Rodeo",
        },
      ],
    },

    mendoza: {
      nombre: "Mendoza",
      visitas: [
        {
          fecha: "Marzo de 2024",
          descripcion: (
            <p>
              El 3 de marzo de 2024, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel visitó la provincia de Mendoza para
                participar en los actos oficiales de la Fiesta Nacional de la
                Vendimia,
              </span>{" "}
              una de las celebraciones más emblemáticas del país. <br />
              <br /> Durante su estadía,{" "}
              <span className="vv-estilo-detalle">
                asistió al tradicional desayuno de la Corporación Vitivinícola
                Argentina (COVIAR),
              </span>{" "}
              donde destacó la importancia de articular esfuerzos entre el
              sector público y el privado para impulsar el desarrollo nacional.
              En su discurso, definió a Mendoza como "la provincia de la
              libertad", en alusión a su rol histórico en el Cruce de los Andes
              y en la gesta de la Independencia argentina. <br />
              <br />
              Villarruel también participó del Carrusel Vendimial, donde saludó
              a los asistentes y compartió momentos con los vecinos, recibiendo
              el afecto del público. El lunes 4 de marzo,{" "}
              <span className="vv-estilo-detalle">
                mantuvo una reunión en la Casa de Gobierno junto a la
                vicegobernadora Hebe Casado y miembros del gabinete provincial.
              </span>{" "}
              Durante el encuentro, se abordaron temas estratégicos para
              Mendoza, como infraestructura, rutas y pasos fronterizos, con el
              objetivo de fortalecer la cooperación entre la provincia y la
              Nación. <br />
              <br /> Además,{" "}
              <span className="vv-estilo-detalle">
                visitó la Bodega Catena Zapata, reconocida a nivel internacional
                por la excelencia de sus vinos, donde expresó su orgullo por el
                trabajo y la proyección de la industria vitivinícola mendocina.
              </span>{" "}
              Esta visita combinó actividades protocolares, institucionales y
              culturales, reafirmando el compromiso de Victoria Villarruel con
              el desarrollo y la identidad productiva de Mendoza.
            </p>
          ),
          imagenes: [mendozaVV, mendozaVVDos],
          lugar: "Ciudad de Mendoza",
        },
      ],
    },

    jujuy: {
      nombre: "Jujuy",
      visitas: [
        {
          fecha: "Agosto de 2024",
          descripcion: (
            <p>
              En el marco de la conmemoración por el{" "}
              <span className="vv-estilo-detalle">
                212° aniversario del Éxodo Jujeño, la vicepresidente Victoria
                Villarruel viajó a la provincia de Jujuy
              </span>{" "}
              para participar en los actos oficiales y recorrer distintos puntos
              emblemáticos de la región . <br />
              <br /> Durante su paso por San Pedro,{" "}
              <span className="vv-estilo-detalle">
                visitó la finca Campo Alegre junto a las hermanas Rodríguez
                Pardo,
              </span>{" "}
              representantes de la tercera generación de productores de caña de
              azúcar, donde destacó el valor del trabajo familiar y la
              producción regional. Posteriormente,{" "}
              <span className="vv-estilo-detalle">
                se subió al Tren Solar de la Quebrada,
              </span>{" "}
              realizando el trayecto desde Volcán hasta Tilcara, acompañada por
              el gobernador Carlos Sadir. Desde allí, se trasladó al
              emprendimiento de{" "}
              <span className="vv-estilo-detalle">
                Arcadium Lithium, en las cercanías de Olaroz, donde se
                interiorizó sobre el proceso de extracción de litio,
              </span>{" "}
              un recurso estratégico para el desarrollo energético del país.
              <br />
              <br /> Como cierre de su recorrido,{" "}
              <span className="vv-estilo-detalle">
                Villarruel visitó uno de sus lugares preferidos en la provincia:
                las imponentes Salinas Grandes,{" "}
              </span>
              símbolo natural y orgullo del norte argentino.{" "}
              <span className="vv-estilo-detalle">
                La visita reflejó su compromiso con el desarrollo productivo,
                tecnológico y ambiental de la región,
              </span>{" "}
              así como su reconocimiento a la historia y el esfuerzo del pueblo
              jujeño.
            </p>
          ),
          imagenes: [jujuyVV, jujuyVVDos],
          lugar: "San Pedro – Volcán – Tilcara – Olaroz – Salinas Grandes",
        },
      ],
    },

    "entre-rios": {
      nombre: "Entre Ríos",
      visitas: [
        {
          fecha: "Octubre de 2024",
          descripcion: (
            <p>
              En octubre de 2024, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                {" "}
                Victoria Villarruel visitó la provincia de Entre Ríos para
                participar en la XVII edición de la Fiesta Nacional del Arroz
                (FNA),
              </span>{" "}
              realizada en la ciudad de San Salvador, epicentro de la cuenca
              arrocera del país. <br />
              <br /> Durante la jornada, Villarruel recorrió los stands de la
              muestra agroindustrial, dialogó con expositores y productores, y
              compartió momentos con el público que se acercó a disfrutar del
              evento, símbolo del trabajo y la identidad entrerriana. <br />
              <br />
              <span className="vv-estilo-detalle">
                La vicepresidente mantuvo además reuniones con la comisión
                organizadora, con autoridades de la Federación Agraria Argentina
                (FAA)
              </span>
              , y con representantes de la Cooperativa Arrocera de San Salvador
              Ltda., donde también visitó sus instalaciones para conocer de
              cerca los procesos productivos del sector. <br />
              <br />{" "}
              <span className="vv-estilo-detalle">
                El objetivo de su visita fue interiorizarse sobre la realidad de
                los productores arroceros, escuchar sus inquietudes y fortalecer
                el vínculo con una de las economías regionales más importantes
                del litoral.
              </span>{" "}
              Esta participación reafirmó su compromiso con el federalismo
              productivo y el desarrollo agroindustrial argentino, pilares
              fundamentales para el crecimiento del país.
            </p>
          ),
          imagenes: [entreriosVV, entreriosVVDos],
          lugar: "San Salvador – Paraná",
        },
      ],
    },

    formosa: {
      nombre: "Formosa",
      visitas: [
        {
          fecha: "Octubre de 2025",
          descripcion: (
            <p>
              La vicepresidente Victoria{" "}
              <span className="vv-estilo-detalle">
                Villarruel visitó la provincia de Formosa para participar en el
                acto conmemorativo del Día del Héroe Formoseño,
              </span>{" "}
              encabezado junto al gobernador Gildo Insfrán. <br />
              <br />
              <span className="vv-estilo-detalle">
                La ceremonia se llevó a cabo en el Regimiento de Infantería de
                Monte 29
              </span>{" "}
              "Coronel Ignacio José Warnes" y recordó a los soldados y policías
              que perdieron la vida durante el ataque de Montoneros hace 50
              años. <br />
              <br />
              <span className="vv-estilo-detalle">
                Villarruel destacó la importancia de honrar la memoria de
                quienes defendieron la provincia y la Patria,
              </span>{" "}
              reafirmando su compromiso con los valores de justicia, verdad y
              reconocimiento histórico hacia los héroes locales y nacionales.
            </p>
          ),
          imagenes: [formosaVV, formosaVVDos],
          lugar: "Ciudad de Formosa",
        },
      ],
    },

    misiones: {
      nombre: "Misiones",
      visitas: [
        {
          fecha: "Septiembre de 2024",
          descripcion: (
            <p>
              En septiembre de 2024, la vicepresidente Victoria{" "}
              <span className="vv-estilo-detalle">
                Villarruel visitó la provincia de Misiones para participar de la
                tradicional Fiesta Internacional del Inmigrante en la ciudad de
                Oberá,
              </span>{" "}
              uno de los eventos culturales más representativos del litoral
              argentino. <br />
              <br /> Durante su recorrido por el predio ferial,{" "}
              <span className="vv-estilo-detalle">
                {" "}
                conoció las casas típicas, la gastronomía y las costumbres de
                las diversas colectividades que conforman la identidad
                pluricultural de la provincia,
              </span>{" "}
              destacando el valor del trabajo y la convivencia entre las
              comunidades. <br />
              <br />
              En su paso por Misiones, Villarruel{" "}
              <span className="vv-estilo-detalle">
                también visitó el refugio de animales silvestres Guirá Oga, en
                Puerto Iguazú,
              </span>{" "}
              un espacio dedicado al rescate y rehabilitación de especies
              nativas de la selva misionera. Allí valoró el compromiso ambiental
              del equipo y la importancia de proteger la biodiversidad del
              ecosistema. <br />
              <br />
              Finalmente, junto al intendente de Colonia Wanda,{" "}
              <span className="vv-estilo-detalle">
                recorrió las reconocidas Minas de Wanda,
              </span>{" "}
              donde se extraen piedras semipreciosas como la amatista. La
              vicepresidente destacó el potencial minero y turístico del norte
              misionero y el esfuerzo de quienes impulsan el desarrollo local
              con sostenibilidad. <br />
              <br />{" "}
              <span className="vv-estilo-detalle">
                Esta visita combinó actividades culturales, ambientales y
                productivas,
              </span>{" "}
              reflejando la visión federal y el compromiso de Victoria
              Villarruel con el crecimiento de las provincias argentinas.
            </p>
          ),
          imagenes: [misionesVV, misionesVVDos],
          lugar: "Oberá – Puerto Iguazú – Colonia Wanda",
        },
      ],
    },

    "la-rioja": {
      nombre: "La Rioja",
      visitas: [
        {
          fecha: "2024",
          descripcion:
            "Victoria Villarruel visitó la provincia de La Rioja para participar en diversos actos oficiales y reunirse con autoridades locales.",
          descripcionCorta:
            "Victoria Villarruel visitó La Rioja para actos oficiales y reuniones con autoridades.",
          imagenes: [],
          lugar: "Ciudad de La Rioja",
        },
      ],
    },

    neuquen: {
      nombre: "Neuquén",
      visitas: [
        {
          fecha: "Octubre de 2024",
          descripcion: (
            <p>
              El 22 de octubre de 2024, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel visitó la provincia de Neuquén,
              </span>{" "}
              donde fue recibida por el gobernador Rolo Figueroa y la
              vicegobernadora Gloria Ruiz. Junto a ellos, desarrolló una agenda
              institucional centrada en la producción energética, el desarrollo
              regional y la articulación público-privada. <br />
              <br /> Villarruel{" "}
              <span className="vv-estilo-detalle">
                participó como disertante en el Argentina–Texas Summit 2024,
              </span>{" "}
              un encuentro clave en el que se debatió el futuro energético del
              país, con foco en Vaca Muerta, una de las principales fuentes de
              crecimiento económico y tecnológico de la Argentina. <br />
              <br /> Durante su visita,{" "}
              <span className="vv-estilo-detalle">
                mantuvo además una reunión con representantes de la Federación
                de Cámaras del Sector Energético de Neuquén (FECENE),{" "}
              </span>
              donde escuchó las inquietudes de las pymes locales y reafirmó su
              compromiso con la producción nacional y la generación de empleo.{" "}
              <br />
              <br />
              <span className="vv-estilo-detalle">
                En su paso por Añelo, acompañada por el intendente Fernando
                Banderet, recorrió la zona núcleo de explotación de Oil & Gas,{" "}
              </span>
              interiorizándose sobre las necesidades de infraestructura,
              educación y salud que acompañan el crecimiento de la región.{" "}
              <br />
              <br />
              Antes de finalizar su visita,{" "}
              <span className="vv-estilo-detalle">
                Villarruel recorrió la Bodega Malma, uno de los principales
                emprendimientos vitivinícolas del sur argentino,
              </span>{" "}
              donde destacó el potencial productivo y turístico de la provincia.
              La visita a Neuquén reflejó su visión federal y su apoyo al
              desarrollo energético y económico sostenible del país.
            </p>
          ),
          imagenes: [neuquenVV, neuquenVVDos],
          lugar: "Ciudad de Neuquén – Añelo",
        },
      ],
    },

    "rio-negro": {
      nombre: "Río Negro",
      visitas: [
        {
          fecha: "Enero de 2024",
          descripcion: (
            <p>
              En enero de 2024, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel visitó la ciudad de San Carlos de Bariloche,
              </span>{" "}
              donde mantuvo una intensa agenda institucional y social.{" "}
              <span className="vv-estilo-detalle">
                {" "}
                Fue recibida por el intendente Walter Cortés, quien la declaró
                huésped de honor
              </span>{" "}
              y le presentó los principales proyectos y necesidades de la
              ciudad. <br />
              <br /> Durante su recorrido,{" "}
              <span className="vv-estilo-detalle">
                Villarruel visitó la sede de INVAP,{" "}
              </span>
              empresa estatal referente en desarrollo tecnológico, donde expresó
              su reconocimiento al talento y la capacidad de los profesionales
              argentinos. También{" "}
              <span className="vv-estilo-detalle">
                se reunió con empresarios locales para dialogar sobre temas como
                la reforma laboral, la seguridad, el desarrollo industrial y la
                política de cielos abiertos,
              </span>{" "}
              destacando la importancia de impulsar la producción y el empleo en
              la Patagonia. <br />
              <br />
              Asimismo,{" "}
              <span className="vv-estilo-detalle">
                visitó la Escuela Militar de Montaña "Teniente General Juan
                Domingo Perón"
              </span>
              , donde valoró el trabajo del Ejército Argentino y su rol en la
              defensa de la soberanía nacional. En sus declaraciones, reafirmó
              su compromiso con el orden, la justicia y el respeto a la
              propiedad privada frente a los conflictos por usurpaciones de
              tierras. <br />
              <br />
              <span className="vv-estilo-detalle">
                Esta visita reflejó su profundo interés por las problemáticas
                del sur argentino y su compromiso con el desarrollo federal y la
                defensa de los valores patrios.
              </span>
            </p>
          ),
          imagenes: [rioNegroVV, rioNegroVVDos],
          lugar: "San Carlos de Bariloche",
        },
      ],
    },

    "san-luis": {
      nombre: "San Luis",
      visitas: [
        {
          fecha: "Mayo de 2024",
          descripcion: (
            <p>
              El 2 de mayo de 2024, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel realizó una visita oficial a la provincia de
                San Luis, donde fue recibida por el gobernador Claudio Poggi
              </span>{" "}
              en la Casa de Gobierno. En el encuentro,{" "}
              <span className="vv-estilo-detalle">
                el mandatario le otorgó el título de Huésped de Honor
              </span>{" "}
              en reconocimiento a su presencia y compromiso institucional.
              <br />
              <br /> Durante su estadía, Villarruel participó en las
              tradicionales festividades religiosas del{" "}
              <span className="vv-estilo-detalle">
                Divino Señor de Renca y del Santo Cristo de la Quebrada
              </span>
              , dos celebraciones profundamente arraigadas en la fe y cultura
              sanluiseña. A lo largo de la jornada, expresó su alegría por poder
              compartir estos momentos de devoción y encuentro con la comunidad,
              destacando el valor espiritual y cultural de las tradiciones que
              unen a los argentinos. <br />
              <br />
              <span className="vv-estilo-detalle">
                La visita reflejó su cercanía con las provincias y su respeto
                por las expresiones de fe popular que forman parte del
                patrimonio nacional.
              </span>
            </p>
          ),
          imagenes: [sanLuisVV, sanLuisVVDos],
          lugar: "San Luis – Renca – Villa de la Quebrada",
        },
      ],
    },

    "santa-fe": {
      nombre: "Santa Fe",
      visitas: [
        {
          fecha: "Febrero de 2024",
          descripcion: (
            <p>
              El 3 de febrero de 2024, la vicepresidente{" "}
              <span className="vv-estilo-detalle">
                Victoria Villarruel visitó San Lorenzo,
              </span>{" "}
              en la provincia de Santa Fe, para participar del acto
              conmemorativo por el{" "}
              <span className="vv-estilo-detalle">
                211° aniversario de la Batalla de San Lorenzo.
              </span>{" "}
              La ceremonia se realizó en el histórico Campo de la Gloria, donde
              Villarruel estuvo acompañada por autoridades locales y nacionales.
              <br />
              <br /> Durante el evento,{" "}
              <span className="vv-estilo-detalle">
                la vicepresidente destacó la importancia de esta fecha en la
                historia argentina y rindió homenaje a los héroes que lucharon
                por la independencia del país.
              </span>{" "}
              <br />
              <br /> Villarruel compartió imágenes de su participación en sus
              redes sociales, reafirmando su{" "}
              <span className="vv-estilo-detalle">
                compromiso con la memoria histórica y el reconocimiento a los
                próceres nacionales,
              </span>{" "}
              valores fundamentales que guían su labor como dirigente nacional.
            </p>
          ),
          imagenes: [santafeVV, santafeVVDos],
          lugar: "San Lorenzo",
        },

        {
          fecha: "Junio de 2024",
          descripcion: (
            <p>
              En junio de 2024, la vicepresidente Victoria{" "}
              <span className="vv-estilo-detalle">
                Villarruel participó de los actos del Día de la Bandera en
                Rosario,
              </span>{" "}
              reafirmando su compromiso con los símbolos patrios y la identidad
              nacional. <br />
              <br />
              Durante la jornada, Villarruel{" "}
              <span className="vv-estilo-detalle">
                destacó la importancia de honrar la Bandera Argentina
              </span>{" "}
              y transmitir a las nuevas generaciones los valores de unidad,
              memoria y amor por la Patria. En sus palabras:{" "}
              <blockquote className="cita">
                "No hay Bandera más bella y tierra más bendita. Argentina todos
                los días en el corazón."
              </blockquote>
              <span className="vv-estilo-detalle">
                La visita combinó actos cívicos y emotivos, reflejando el
                vínculo profundo de la vicepresidente con los símbolos
                históricos y culturales de la Nación.
              </span>
            </p>
          ),
          imagenes: [banderaroVV, banderaroVVDos],
          lugar: "Rosario",
        },
        {
          fecha: "Junio de 2025",
          descripcion: (
            <p>
              En 2025, la vicepresidente Victoria{" "}
              <span className="vv-estilo-detalle">
                Villarruel participó de los actos del Día de la Bandera en
                Rosario,
              </span>{" "}
              donde{" "}
              <span className="vv-estilo-detalle">
                tomó parte de la Promesa a la Bandera
              </span>
              , reafirmando su compromiso con los valores patrios y la formación
              cívica de los jóvenes argentinos. <br />
              <br /> Posteriormente, Villarruel se trasladó a San Nicolás, en la
              provincia de Buenos Aires, para visitar{" "}
              <span className="vv-estilo-detalle">
                la Basílica de la Virgen del Rosario de San Nicolás
              </span>
              , destacando la importancia de la fe y la devoción como pilares
              culturales y espirituales del país. <br />
              <br />
              <span className="vv-estilo-detalle">
                La visita combinó actos cívicos y religiosos, reflejando el amor
                de Villarruel por la Patria argentina y su vínculo con los
                símbolos históricos y espirituales de la nación.
              </span>
            </p>
          ),
          imagenes: [banderaVV, banderaVVDos],
          lugar: "Rosario – San Nicolás",
        },
      ],
    },

    "santiago-del-estero": {
      nombre: "Santiago del Estero",
      visitas: [
        {
          fecha: "Julio de 2025",
          descripcion: (
            <p>
              El 20 de julio de 2025,{" "}
              <span className="vv-estilo-detalle">
                la vicepresidente Victoria Villarruel visitó la Ciudad Capital
                de Santiago del Estero, en el marco de su gira institucional por
                el norte argentino.
              </span>{" "}
              Procedente de Catamarca, desarrolló una agenda orientada a
              fortalecer el vínculo entre el Gobierno nacional y las
              administraciones provinciales, en un contexto de diálogo sobre
              gobernabilidad y federalismo. <br />
              <br /> Durante su estadía,{" "}
              <span className="vv-estilo-detalle">
                Villarruel se reunió con el gobernador Gerardo Zamora, con quien
                abordó temas institucionales, obras públicas, distribución de
                fondos y desarrollo regional.
              </span>{" "}
              La reunión se llevó a cabo en un clima de interés mutuo por
              mantener canales de comunicación abiertos y efectivos entre Nación
              y provincia. <br />
              <br />
              <span className="vv-estilo-detalle">
                Su presencia en Santiago del Estero formó parte de una agenda
                federal
              </span>{" "}
              que incluyó actividades en Catamarca, reafirmando el compromiso de
              la vicepresidente con las provincias del norte argentino y el{" "}
              <span className="vv-estilo-detalle">
                fortalecimiento de la cooperación institucional más allá de las
                diferencias políticas.
              </span>
            </p>
          ),
          descripcionCorta:
            "Victoria Villarruel visitó Santiago del Estero para actos oficiales y reuniones con autoridades.",
          imagenes: [santiagoVV, santiagoVVDos],
          lugar: "Santiago del Estero Capital",
        },
      ],
    },

    corrientes: {
      nombre: "Corrientes",
      visitas: [
        {
          fecha: "Febrero de 2024",
          descripcion: (
            <p>
              En febrero de 2024, la vicepresidente Victoria Villarruel visitó
              la provincia de Corrientes para participar en los actos
              conmemorativos por el{" "}
              <span className="vv-estilo-detalle">
                246° aniversario del natalicio del General José de San Martín.
              </span>{" "}
              Arribó el sábado 24 al aeropuerto Fernando Piragine Niveyro, donde
              fue recibida por el gobernador Gustavo Valdés. <br />
              <br />
              Al día siguiente,
              <span className="vv-estilo-detalle">
                se trasladó a la localidad de Yapeyú, cuna del Libertador, para
                asistir a la ceremonia oficial en su honor.
              </span>{" "}
              Durante su discurso, Villarruel resaltó la importancia de la
              unidad nacional en tiempos difíciles, afirmando:{" "}
              <blockquote className="cita">
                "En esta tierra soy correntina y todos, argentinos, en estos
                momentos tan difíciles de la Argentina, tenemos que estar
                cohesionados y aunados para sacar nuestro país adelante y para
                ayudar a nuestros compatriotas que más están sufriendo."
              </blockquote>{" "}
              <span className="vv-estilo-detalle">
                En reconocimiento a su presencia, el gobernador Valdés la
                declaró huésped de honor de la provincia.
              </span>{" "}
              La visita de Villarruel reflejó su profundo respeto por la figura
              de San Martín y su compromiso con los valores patrióticos que
              forjaron la identidad nacional.
            </p>
          ),
          imagenes: [corrientesVV, corrientesVVDos],
          lugar: "Yapeyú",
        },
        {
          fecha: "Agosto de 2025",
          descripcion: (
            <p>
              En 2024, la vicepresidente Victoria Villarruel visitó nuevamente
              la provincia de Corrientes, participando en la{" "}
              <span className="vv-estilo-detalle">
                recepción de los restos del sargento Juan Bautista Cabral en la
                localidad de Saladas.
              </span>{" "}
              <br />
              <br /> La ceremonia tuvo un fuerte contenido histórico e
              institucional,{" "}
              <span className="vv-estilo-detalle">
                honrando la memoria de quien salvó la vida del general José de
                San Martín
              </span>{" "}
              durante la primera victoria de los Granaderos a Caballo en la
              lucha por la independencia. Durante su discurso, Villarruel
              expresó:{" "}
              <blockquote className="cita">
                "Cabral nos recuerda que la patria se hace con actos de grandeza
                silenciosos y sacrificios cotidianos… Para los que tenemos el
                privilegio de servir a nuestro pueblo, la entrega del sargento
                Cabral es un llamado a poner lo mejor de nosotros, con coraje y
                sin esperar recompensa."
              </blockquote>{" "}
              La agenda de la visita incluyó un recorrido por la{" "}
              <span className="vv-estilo-detalle">
                Casa de Gobierno de Corrientes, la Iglesia de Nuestra Señora de
                la Merced, la plaza 25 de Mayo, el paseo costero y el proyecto
                La Unión,
              </span>{" "}
              un espacio en refuncionalización que albergará un centro
              científico, museo y polo gastronómico. <br />
              <br /> Posteriormente, Villarruel se trasladó a Saladas, donde{" "}
              <span className="vv-estilo-detalle">
                participó del acto oficial en la Plaza Cabral y del desfile
                cívico-militar,{" "}
              </span>
              recibiendo a los restos del sargento Cabral con la presencia de
              autoridades locales y vecinos, incluidos decenas de niños con
              uniforme de Granaderos. <br />
              <br /> Esta visita marcó un momento histórico para Saladas, que
              por primera vez recibió la visita de un vicepresidente, y{" "}
              <span className="vv-estilo-detalle">
                reafirmó el compromiso de Villarruel con la memoria histórica,
                el federalismo y la identidad nacional.
              </span>
            </p>
          ),
          imagenes: [saladasVV, saladasVVDos],
          lugar: "Saladas",
        },
      ],
    },
  };

  const provincia = visitasProvincias[slug];
  const [imagenIndex, setImagenIndex] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [slug]);

  if (!provincia) {
    return (
      <div className="container-provincia-detalle">
        <div className="container">
          <h2>Provincia no encontrada</h2>
          <Button onClick={() => navigate("/")} variant="primary">
            Volver al Inicio
          </Button>
        </div>
      </div>
    );
  }

  const visitas = provincia.visitas || [provincia];

  return (
    <div className="container-provincia-detalle">
      <Container>
        <div className="row">
          <div className="col-12">
            <Button
              onClick={() => navigate(-1)}
              variant="outline-primary"
              className="boton-volver"
            >
              ← Volver al mapa
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="titulo-provincia">{provincia.nombre}</h1>
          </div>
        </div>

        {visitas.map((visita, visitaIndex) => (
          <div key={visitaIndex} style={{ marginBottom: "4rem" }}>
            <div className="row">
              <div className="col-12">
                <div className="info-visita">
                  <p className="fecha-visita">
                    <strong>Fecha de visita:</strong> {visita.fecha}
                  </p>
                  <p className="lugar-visita">
                    <strong>Lugar:</strong> {visita.lugar}
                  </p>
                </div>
              </div>
            </div>

            {visita.imagenes && visita.imagenes.length > 0 ? (
              <div className="row">
                <div className="col-12">
                  <Carousel
                    fade
                    indicators={visita.imagenes.length > 1}
                    className="carousel-provincia"
                    activeIndex={imagenIndex[visitaIndex] || 0}
                    onSelect={(index) =>
                      setImagenIndex({ ...imagenIndex, [visitaIndex]: index })
                    }
                  >
                    {visita.imagenes.map((imagen, index) => (
                      <Carousel.Item key={index}>
                        <img
                          src={imagen}
                          alt={`${provincia.nombre} - Visita ${
                            visitaIndex + 1
                          } - Imagen ${index + 1}`}
                          className="imagen-provincia"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-12">
                  <div className="placeholder-imagen">
                    <p>Imagen no disponible</p>
                  </div>
                </div>
              </div>
            )}

            <div className="row">
              <div className="col-12">
                <div className="descripcion-container">
                  <h2 className="subtitulo-descripcion">Sobre la visita</h2>
                  <p className="descripcion-visita">{visita.descripcion}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ProvinciaDetalle;
