import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import rioNegroVV from "../assets/img/mapaArg/rioNegro.jpg";
import rioNegroVVDos from "../assets/img/mapaArg/rioNegro2.jpg";
import azulVV from "../assets/img/mapaArg/azulVV.jpg";
import azulVVDos from "../assets/img/mapaArg/azulVV2.jpg";
import cordobaVV from "../assets/img/mapaArg/corVV.jpg";
import cordobaVVDos from "../assets/img/mapaArg/corVV2.jpg";
import santafeVV from "../assets/img/mapaArg/santafeVV.jpg";
import santafeVVDos from "../assets/img/mapaArg/santafeVV2.jpg";
import saltaVV from "../assets/img/mapaArg/saltaVV.jpg";
import saltaVVDos from "../assets/img/mapaArg/saltaVV2.jpg";
import corrientesVV from "../assets/img/mapaArg/corrientesVV.jpg";
import corrientesVVDos from "../assets/img/mapaArg/corrientesVV2.jpg";
import mendozaVV from "../assets/img/mapaArg/mendozaVV.jpg";
import mendozaVVDos from "../assets/img/mapaArg/mendozaVV2.jpg";
import sanLuisVV from "../assets/img/mapaArg/sanluisVV.jpeg";
import sanLuisVVDos from "../assets/img/mapaArg/sanluisVV2.jpeg";
import catamarcaVV from "../assets/img/mapaArg/cataVV.avif";
import catamarcaVVDos from "../assets/img/mapaArg/cataVV2.jpeg";
import jujuyVV from "../assets/img/mapaArg/jujuyVV.jpg";
import jujuyVVDos from "../assets/img/mapaArg/jujuyVV2.jpg";
import misionesVV from "../assets/img/mapaArg/misionesVV.jpg";
import misionesVVDos from "../assets/img/mapaArg/misionesVV2.jpg";
import neuquenVV from "../assets/img/mapaArg/neuquenVV.jpg";
import neuquenVVDos from "../assets/img/mapaArg/neuquenVV2.jpg";
import entreriosVV from "../assets/img/mapaArg/entreriosVV.jpg";
import entreriosVVDos from "../assets/img/mapaArg/entreriosVV2.jpg";
import santiagoVV from "../assets/img/mapaArg/santiagoVV.jpg";
import santiagoVVDos from "../assets/img/mapaArg/santiagoVV2.jpeg";
import chubutVV from "../assets/img/mapaArg/chubutVV.jpg";
import chubutVVDos from "../assets/img/mapaArg/chubutVV2.jpg";
import tierraVV from "../assets/img/mapaArg/tierraVV.jpg";
import tierraVVDos from "../assets/img/mapaArg/tierraVV2.jpg";
import tucuVV from "../assets/img/mapaArg/tucumanVV.jpg";
import tucuVVDos from "../assets/img/mapaArg/tucumanVV2.jpg";
import formosaVV from "../assets/img/mapaArg/formosaVV.jpg";
import formosaVVDos from "../assets/img/mapaArg/formosaVV2.jpg";
import saladasVV from "../assets/img/mapaArg/saladasVV.jpg";
import saladasVVDos from "../assets/img/mapaArg/saladasVV2.jpg";
import elrodeoVV from "../assets/img/mapaArg/elrodeoVV.jpg";
import elrodeoVVDos from "../assets/img/mapaArg/elrodeoVV2.jpg";
import banderaVV from "../assets/img/mapaArg/banderaVV.jpg";
import banderaVVDos from "../assets/img/mapaArg/banderaVV2.jpg";
import ruralsaltaVV from "../assets/img/mapaArg/ruralsaltaVV.jpg";
import ruralsaltaVVDos from "../assets/img/mapaArg/ruralsaltaVV2.jpg";
import guemesVV from "../assets/img/mapaArg/guemesVV.jpg";
import guemesVVDos from "../assets/img/mapaArg/guemesVV2.jpg";
import banderaroVV from "../assets/img/mapaArg/banderaroVV.jpg";
import banderaroVVDos from "../assets/img/mapaArg/banderaroVV2.jpg";
import cordoVV from "../assets/img/mapaArg/cordoVV.jpg";
import cordoVVDos from "../assets/img/mapaArg/cordoVV2.jpg";
import mardelVV from "../assets/img/mapaArg/mardelVV.jpg";
import mardelVVDos from "../assets/img/mapaArg/mardelVV2.jpg";
import fiestaPonchoVV from "../assets/img/mapaArg/fiestaPonchoVV.jpg";
import fiestaPonchoVVDos from "../assets/img/mapaArg/fiestaPonchoVV2.jpg";
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
          descripcion:
            "La vicepresidente Victoria Villarruel participó en Azul en el acto conmemorativo por los 50 años del ataque terrorista a la Guarnición Militar de Azul. Estuvo acompañada por el Ministro de Defensa Luis Petri y los familiares de las víctimas, a quienes rindió homenaje, reconociendo el dolor de las familias y la importancia de reconstruir la historia de todos los argentinos. Durante la ceremonia, Villarruel destacó los valores de justicia, verdad, reparación y derechos humanos para todos, reafirmando su compromiso con la memoria histórica y el respeto hacia quienes defendieron la Patria.",
          descripcionCorta:
            "Victoria Villarruel realizó diversas actividades en Buenos Aires como vicepresidente de la Nación.",
          imagenes: [azulVV, azulVVDos],
          lugar: "Azul",
        },

        {
          fecha: "Mayo de 2024",
          descripcion:
            "En mayo de 2024, la vicepresidente Victoria Villarruel visitó Mar del Plata, invitada por el Senador Nacional Maximiliano Abad, para recorrer el Parque Industrial y apoyar la producción y el deporte nacional. Durante su estadía, Villarruel visitó la Planta de Havanna y la Planta de Lucciano’s, destacando la importancia de quienes invierten en el país, generan empleo y fomentan el desarrollo productivo local. Posteriormente, se acercó al Premier Pádel P1 Mar del Plata 2024, donde observó los partidos de las mejores parejas masculinas y femeninas del mundo, acompañada por el Intendente Guillermo Montenegro, expresando su apoyo al deporte nacional y a los argentinos que destacan en el ámbito internacional. La visita reflejó el compromiso de Villarruel con la producción, el trabajo y el deporte, reforzando su vínculo con la comunidad y el desarrollo de la ciudad.",
          descripcionCorta:
            "Victoria Villarruel realizó diversas actividades en Buenos Aires como vicepresidente de la Nación.",
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
          descripcion:
            "En enero de 2024, la vicepresidente Victoria Villarruel visitó la provincia de Córdoba para participar en la inauguración del Festival Nacional de Doma y Folklore de Jesús María. Durante su estadía, se alojó en Villa Allende, en la residencia de una familia amiga, fortaleciendo los lazos con la comunidad local. En el festival, fue recibida por la vicegobernadora Myrian Prunotto, el intendente de Jesús María Federico Zárate y el presidente de la comisión organizadora Juan López. Villarruel expresó su agradecimiento por la cálida recepción, afirmando: “Siempre me reciben con amor, acá soy cordobesa”. Además, compartió en sus redes sociales su participación en el festival, destacando la importancia de preservar y promover la cultura nacional y los eventos tradicionales que unen a las comunidades de todo el país. Esta visita reflejó su interés por participar activamente en eventos culturales y tradicionales, reafirmando su compromiso con el federalismo y el vínculo con las distintas regiones argentinas.",
          descripcionCorta:
            "Victoria Villarruel visitó Córdoba para reunirse con autoridades locales y participar en actos oficiales.",
          imagenes: [cordobaVV, cordobaVVDos],
          lugar: "Jesús María",
        },

        {
          fecha: "Mayo de 2024",
          descripcion:
            "El 25 de mayo de 2024, la vicepresidente Victoria Villarruel visitó la ciudad de Córdoba para participar de los actos oficiales conmemorativos del Día de la Patria, acompañando al presidente y autoridades nacionales. Villarruel agradeció la organización del evento y la colaboración de las fuerzas de seguridad, expresando en sus redes:“¡Gracias Córdoba por recibirnos ayer! Un 25 de mayo distinto en mi querida Córdoba. Agradezco a la Fuerza Aérea por el traslado junto con los ministros del gabinete, a la Policía Federal por cuidarnos siempre y a todos los que hicieron cómoda nuestra breve estadía allí para el acto del Presidente.” La visita reforzó el compromiso de la vicepresidente con la memoria histórica, la identidad nacional y la cercanía con las provincias argentinas.",
          descripcionCorta:
            "Victoria Villarruel visitó Córdoba para reunirse con autoridades locales y participar en actos oficiales.",
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
          descripcion:
            "En Tucumán, la vicepresidente Victoria Villarruel celebró el Día de la Independencia acompañada por vecinos y autoridades locales. Durante su visita, fue recibida con cariño, generosidad y alegría, reafirmando su vínculo personal y afectivo con la provincia que considera su tierra querida. Villarruel destacó la importancia de esta fecha histórica para la Patria argentina, celebrando la independencia y transmitiendo su orgullo por la historia y los valores nacionales. En sus palabras: “¡¡¡Feliz de estar nuevamente en mi Tucumán querido!!! ¡Viva la Patria! ¡Viva la Patria! ¡Viva la Patria!” La visita reflejó el compromiso de la vicepresidente con la memoria histórica y el federalismo, así como con las provincias que forjaron los cimientos de la Argentina.",
          descripcionCorta:
            "Victoria Villarruel participó en los actos por el Día de la Independencia en Tucumán.",
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
          descripcion:
            "El 20 de febrero de 2024, la vicepresidente Victoria Villarruel participó de los actos conmemorativos por el 211° aniversario de la Batalla de Salta. Llegó a la provincia el 19 de febrero, donde se reunió con miembros de su partido y funcionarios locales, y confirmó su participación en la cena de gala organizada por el Club 20 de Febrero, como antesala de los festejos. El 20 de febrero, asistió al desfile cívico-militar en Plaza Belgrano, conmemorando la histórica victoria del Ejército del Norte en 1813. Durante los actos, Villarruel destacó la importancia de mantener viva la memoria histórica y los valores patrios que guiaron a nuestros próceres.",
          imagenes: [saltaVV, saltaVVDos],
          lugar: "Ciudad de Salta",
        },
        {
          fecha: "Junio de 2024",
          descripcion:
            "El 17 de junio de 2024, la vicepresidente Victoria Villarruel participó en Salta de los actos conmemorativos en honor al General Martín Miguel de Güemes, destacando la importancia de las tradiciones, la historia y los héroes que forjaron la Nación.Durante la jornada, Villarruel desfiló junto a Los Infernales, vistiendo con humildad las ropas de gaucho salteño, y se emocionó con cada fortín preparado para el desfile, en un homenaje al esfuerzo y la dedicación de las comunidades locales. La vicepresidente expresó: “Recuperar el orgullo de ser argentinos es abrazar nuestro pasado común, amarlo y darlo a conocer a las nuevas generaciones… Cada gaucho es mi hermano. ¡Todo por Argentina!” La visita reafirmó su compromiso con la memoria histórica, la identidad nacional y las tradiciones del norte argentino, destacando el valor de transmitir a las nuevas generaciones la historia y los héroes de la Patria.",
          imagenes: [guemesVV, guemesVVDos],
          lugar: "Ciudad de Salta",
        },

        {
          fecha: "Agosto de 2024",
          descripcion:
            "En agosto de 2024, la vicepresidente Victoria Villarruel realizó una gira por Jujuy y Salta, destacando el valor del trabajo rural y la producción agropecuaria como pilares de la identidad argentina. En San Pedro, Jujuy, Villarruel recorrió la finca Campo Alegre, acompañada por las hermanas Rodríguez Pardo y sus esposos, tercera generación de productores de caña de azúcar, y pudo conocer de cerca el esfuerzo y la dedicación que sostienen la producción local. Posteriormente, se trasladó a Salta, donde participó de la 80° Exposición Rural, acompañando a la Sociedad Rural de Salta, productores y distintas entidades del sector. Allí se exhibió lo mejor de la producción provincial, destacando la capacidad de la región para generar alimentos y recursos que sostienen a toda la Nación. Villarruel expresó: “El campo es esfuerzo, sacrificio pero también es dignidad, esperanza y amor a la tierra… El campo es la tierra de los ancestros que alimenta el cuerpo pero también el alma de nuestra amada Patria. ¡Viva el campo argentino, el bendito suelo que nos alimenta, nos da cobijo y nos permite vivir y respirar argentinidad!” La visita resaltó la importancia del sector agropecuario para la economía, la cultura y la identidad nacional, reafirmando el vínculo de la vicepresidente con las provincias del norte argentino.",
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
          descripcion:
            "El 22 de agosto de 2025, la vicepresidente Victoria Villarruel visitó la provincia de Chubut para participar de los festejos por el 90° aniversario de Río Mayo, en un regreso cargado de emoción y recuerdos de infancia. Arribó al Aeropuerto General Enrique Mosconi de Comodoro Rivadavia, donde fue recibida por el gobernador Ignacio“Nacho” Torres, y camino a Río Mayo realizó una breve parada en Sarmiento, saludando a empleados y vecinos. En Río Mayo, fue declarada Huésped de Honor y participó del acto oficial junto al gobernador Torres, el vicegobernador Gustavo Menna, el intendente Gustavo Loyaute, senadoras y diputadas nacionales, autoridades provinciales y municipales, fuerzas armadas y de seguridad. Durante la ceremonia, Villarruel recordó con emoción su niñez en la localidad: “Fui muy feliz en cada uno de los días que viví en este pequeño pedacito de nuestra inmensa Patagonia… Aprendí a amar el paisaje de la estepa patagónica… Fue poco mi tiempo en Río Mayo, pero debo decirles que soy chubutense por adopción y por elección.” La jornada incluyó un desfile cívico-militar, la inauguración del Centro de Monitoreo, la presentación del nuevo sistema de telemedicina en el Hospital Rural de Río Mayo, la visita al Club de Abuelos y la inauguración de la obra de iluminación en el ingreso a la localidad. Durante su estadía, Villarruel también recorrió el hospital de Comodoro Rivadavia, dialogó con profesionales de la salud, visitó el mural en homenaje al Gral. Enrique Mosconi y acompañó la inauguración del Muro de Contención Costero en el Hospital Alvear. En Rada Tilly, mantuvo un encuentro con la intendente y concejales locales, reafirmando su compromiso con la Patagonia. El regreso de Victoria Villarruel a Río Mayo no solo honró su historia personal, sino que también transmitió un mensaje de federalismo, soberanía y cercanía con el pueblo argentino.",
          descripcionCorta:
            "Victoria Villarruel visitó Río Mayo, Chubut, para participar del aniversario de la localidad.",
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
          descripcion:
            "El 2 de abril de 2025, en un día nevado pero con el corazón inflamado del fuego de nuestros héroes, la vicepresidente Victoria Villarruel encabezó los actos por el Día de los Veteranos y de los Caídos en la Guerra de Malvinas en Ushuaia, Capital de las Malvinas. Durante el acto central, Villarruel participó de ofrendas florales y discursos junto a autoridades locales, con la presencia de niños y colegios con sus banderas de ceremonia, destacando la importancia de transmitir memoria y patriotismo a las nuevas generaciones.La agenda incluyó visitas al Destacamento más austral de la Gendarmería Nacional Argentina, Grupo Lapataia, y al Parque Nacional Bahía Lapataia, el más austral del país, donde compartió con argentinos y extranjeros que recorrían el lugar, recibiendo muestras de cariño y admiración por nuestra tierra y nuestros veteranos de Malvinas. Villarruel agradeció al gobernador Gustavo Melella por la invitación y expresó su compromiso de volver a Tierra del Fuego, reafirmando su respeto por los héroes de Malvinas y el profundo amor por la Patria.",
          descripcionCorta:
            "Victoria Villarruel participó del acto oficial por Malvinas en Ushuaia.",
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
          descripcion:
            "En abril de 2024, la vicepresidente Victoria Villarruel visitó la provincia de Catamarca, invitada por el gobernador Raúl Jalil para participar en la tradicional Bajada de la Virgen del Valle, una de las celebraciones religiosas más importantes del norte argentino. Antes del acto central, Villarruel mantuvo una reunión con el gobernador y su gabinete, donde dialogaron sobre temas vinculados al desarrollo provincial y al fortalecimiento de las instituciones. Posteriormente, recorrieron las viviendas que el Gobierno de Catamarca construye para los efectivos militares destinados en la provincia, destacando la importancia de acompañar y apoyar a las Fuerzas Armadas. Durante la jornada, también visitó la Cuesta del Portezuelo, uno de los paisajes más emblemáticos de Catamarca, y culminó su visita participando en la emotiva Bajada de la Virgen del Valle, en la Catedral Basílica. Villarruel agradeció la cálida recepción de los catamarqueños y expresó: “Gracias Catamarca! ¡Que la Virgen Morenita proteja a la Argentina!” La visita combinó actividades institucionales, sociales y de fe, reflejando el profundo respeto de la vicepresidenta por las tradiciones y valores espirituales que unen al pueblo argentino.",
          descripcionCorta:
            "Victoria Villarruel asistió al Festival Cuna del Poncho en Catamarca.",
          imagenes: [catamarcaVV, catamarcaVVDos],
          lugar: "San Fernando del Valle de Catamarca",
        },

        {
          fecha: "Julio de 2024",
          descripcion:
            "En julio de 2024, la vicepresidente Victoria Villarruel visitó la provincia de Catamarca para participar de la Fiesta Nacional e Internacional del Poncho, uno de los eventos culturales más emblemáticos del norte argentino. Durante su recorrido, Villarruel conoció ponchos, chalinas, orfebrería, artesanías en cuero, esterillas hilados, ponchos y guantes de vicuña, apreciando el trabajo artesanal y la riqueza cultural de la provincia. También visitó la cocina de la Peña, donde compartió la cena y saludó a todos los presentes, destacando el esfuerzo y la dedicación de quienes mantienen vivas las tradiciones locales. La vicepresidenta expresó su gratitud por la calidez de los catamarqueños:“Un día muy intenso pero que me llevo en el corazón por tanto amor de los argentinos. ¡Gracias Catamarca por tanto!” La visita reflejó el compromiso de Villarruel con la cultura, las tradiciones y la identidad nacional, resaltando la importancia del trabajo artesanal y la celebración de la historia local.",
          descripcionCorta:
            "Victoria Villarruel asistió al Festival Cuna del Poncho en Catamarca.",
          imagenes: [fiestaPonchoVV, fiestaPonchoVVDos],
          lugar: "San Fernando del Valle de Catamarca",
        },
        {
          fecha: "Julio 2025",
          descripcion:
            "En 2025, la vicepresidente Victoria Villarruel visitó nuevamente la provincia de Catamarca, compartiendo una jornada con vecinos y trabajadores marcada por identidad, tradición y valores profundamente arraigados en la historia nacional. En Belén, conocida como la cuna del poncho argentino, Villarruel recorrió el taller del artesano Antonio Gutiérrez, donde conoció ponchos dedicados a la selección argentina y a la emblemática Ruta 40, hechos con técnicas ancestrales que reflejan el esfuerzo, dedicación y orgullo del interior del país. Posteriormente, visitó la cooperativa de las Arañitas Hilanderas, donde 30 mujeres lideradas por Rosita trabajan cada día hilando, tiñendo y tejiendo a mano verdaderas obras de arte. Villarruel destacó el compromiso de estas mujeres con la preservación de la cultura textil del norte argentino. La recorrida continuó en El Rodeo, donde la vicepresidenta conoció la imponente imagen de la Virgen del Valle, escultura de 52 metros construida gracias a la fe y perseverancia de Walter D’Agostini. Desde los miradores, se contemplan las Sierras de Ambato, símbolo de la grandeza del paisaje y la conexión con la identidad argentina. Villarruel expresó: “Argentina es trabajo, tradiciones y amor por nuestra tierra”, resaltando el ejemplo de quienes construyen día a día desde el interior profundo. La visita reafirmó la riqueza cultural, productiva y espiritual de Catamarca, destacando la fuerza del trabajo local y la fe inquebrantable de su gente.",
          descripcionCorta:
            "Victoria Villarruel asistió al Festival Cuna del Poncho en Catamarca.",
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
          descripcion:
            "El 3 de marzo de 2024, la vicepresidente Victoria Villarruel visitó la provincia de Mendoza para participar en los actos oficiales de la Fiesta Nacional de la Vendimia, una de las celebraciones más emblemáticas del país. Durante su estadía, asistió al tradicional desayuno de la Corporación Vitivinícola Argentina (COVIAR), donde destacó la importancia de articular esfuerzos entre el sector público y el privado para impulsar el desarrollo nacional. En su discurso, definió a Mendoza como “la provincia de la libertad”, en alusión a su rol histórico en el Cruce de los Andes y en la gesta de la Independencia argentina. Villarruel también participó del Carrusel Vendimial, donde saludó a los asistentes y compartió momentos con los vecinos, recibiendo el afecto del público. El lunes 4 de marzo, mantuvo una reunión en la Casa de Gobierno junto a la vicegobernadora Hebe Casado y miembros del gabinete provincial. Durante el encuentro, se abordaron temas estratégicos para Mendoza, como infraestructura, rutas y pasos fronterizos, con el objetivo de fortalecer la cooperación entre la provincia y la Nación. Además, visitó la Bodega Catena Zapata, reconocida a nivel internacional por la excelencia de sus vinos, donde expresó su orgullo por el trabajo y la proyección de la industria vitivinícola mendocina. Esta visita combinó actividades protocolares, institucionales y culturales, reafirmando el compromiso de Victoria Villarruel con el desarrollo y la identidad productiva de Mendoza.",
          descripcionCorta:
            "Victoria Villarruel visitó Mendoza para actividades oficiales y reuniones con autoridades.",
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
          descripcion:
            "En el marco de la conmemoración por el 212° aniversario del Éxodo Jujeño, la vicepresidente Victoria Villarruel viajó a la provincia de Jujuy para participar en los actos oficiales y recorrer distintos puntos emblemáticos de la región. Durante su paso por San Pedro, visitó la finca Campo Alegre junto a las hermanas Rodríguez Pardo, representantes de la tercera generación de productores de caña de azúcar, donde destacó el valor del trabajo familiar y la producción regional. Posteriormente, se subió al Tren Solar de la Quebrada, realizando el trayecto desde Volcán hasta Tilcara, acompañada por el gobernador Carlos Sadir. Desde allí, se trasladó al emprendimiento de Arcadium Lithium, en las cercanías de Olaroz, donde se interiorizó sobre el proceso de extracción de litio, un recurso estratégico para el desarrollo energético del país.Como cierre de su recorrido, Villarruel visitó uno de sus lugares preferidos en la provincia: las imponentes Salinas Grandes, símbolo natural y orgullo del norte argentino. La visita reflejó su compromiso con el desarrollo productivo, tecnológico y ambiental de la región, así como su reconocimiento a la historia y el esfuerzo del pueblo jujeño.",
          descripcionCorta:
            "Victoria Villarruel visitó Jujuy para actos oficiales y reuniones con autoridades.",
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
          descripcion:
            "En octubre de 2024, la vicepresidente Victoria Villarruel visitó la provincia de Entre Ríos para participar en la XVII edición de la Fiesta Nacional del Arroz (FNA), realizada en la ciudad de San Salvador, epicentro de la cuenca arrocera del país. Durante la jornada, Villarruel recorrió los stands de la muestra agroindustrial, dialogó con expositores y productores, y compartió momentos con el público que se acercó a disfrutar del evento, símbolo del trabajo y la identidad entrerriana.La vicepresidenta mantuvo además reuniones con la comisión organizadora, con autoridades de la Federación Agraria Argentina (FAA), y con representantes de la Cooperativa Arrocera de San Salvador Ltda., donde también visitó sus instalaciones para conocer de cerca los procesos productivos del sector. El objetivo de su visita fue interiorizarse sobre la realidad de los productores arroceros, escuchar sus inquietudes y fortalecer el vínculo con una de las economías regionales más importantes del litoral. Esta participación reafirmó su compromiso con el federalismo productivo y el desarrollo agroindustrial argentino, pilares fundamentales para el crecimiento del país.",
          descripcionCorta:
            "Victoria Villarruel visitó Entre Ríos para actos oficiales y reuniones con autoridades.",
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
          descripcion:
            "La vicepresidente Victoria Villarruel visitó la provincia de Formosa para participar en el acto conmemorativo del Día del Héroe Formoseño, encabezado junto al gobernador Gildo Insfrán. La ceremonia se llevó a cabo en el Regimiento de Infantería de Monte 29 “Coronel Ignacio José Warnes” y recordó a los soldados y policías que perdieron la vida durante el ataque de Montoneros hace 50 años. Villarruel destacó la importancia de honrar la memoria de quienes defendieron la provincia y la Patria, reafirmando su compromiso con los valores de justicia, verdad y reconocimiento histórico hacia los héroes locales y nacionales.",
          descripcionCorta:
            "Victoria Villarruel visitó Formosa para actos oficiales y reuniones con autoridades.",
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
          descripcion:
            "En septiembre de 2024, la vicepresidente Victoria Villarruel visitó la provincia de Misiones para participar de la tradicional Fiesta Internacional del Inmigrante en la ciudad de Oberá, uno de los eventos culturales más representativos del litoral argentino. Durante su recorrido por el predio ferial, conoció las casas típicas, la gastronomía y las costumbres de las diversas colectividades que conforman la identidad pluricultural de la provincia, destacando el valor del trabajo y la convivencia entre las comunidades. En su paso por Misiones, Villarruel también visitó el refugio de animales silvestres Guirá Oga, en Puerto Iguazú, un espacio dedicado al rescate y rehabilitación de especies nativas de la selva misionera. Allí valoró el compromiso ambiental del equipo y la importancia de proteger la biodiversidad del ecosistema.Finalmente, junto al intendente de Colonia Wanda, recorrió las reconocidas Minas de Wanda, donde se extraen piedras semipreciosas como la amatista. La vicepresidente destacó el potencial minero y turístico del norte misionero y el esfuerzo de quienes impulsan el desarrollo local con sostenibilidad. Esta visita combinó actividades culturales, ambientales y productivas, reflejando la visión federal y el compromiso de Victoria Villarruel con el crecimiento de las provincias argentinas.",
          descripcionCorta:
            "Victoria Villarruel visitó Misiones para actos oficiales y reuniones con autoridades.",
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
          descripcion:
            "El 22 de octubre de 2024, la vicepresidente Victoria Villarruel visitó la provincia de Neuquén, donde fue recibida por el gobernador Rolo Figueroa y la vicegobernadora Gloria Ruiz. Junto a ellos, desarrolló una agenda institucional centrada en la producción energética, el desarrollo regional y la articulación público-privada. Villarruel participó como disertante en el Argentina–Texas Summit 2024, un encuentro clave en el que se debatió el futuro energético del país, con foco en Vaca Muerta, una de las principales fuentes de crecimiento económico y tecnológico de la Argentina. Durante su visita, mantuvo además una reunión con representantes de la Federación de Cámaras del Sector Energético de Neuquén (FECENE), donde escuchó las inquietudes de las pymes locales y reafirmó su compromiso con la producción nacional y la generación de empleo. En su paso por Añelo, acompañada por el intendente Fernando Banderet, recorrió la zona núcleo de explotación de Oil & Gas, interiorizándose sobre las necesidades de infraestructura, educación y salud que acompañan el crecimiento de la región. Antes de finalizar su visita, Villarruel recorrió la Bodega Malma, uno de los principales emprendimientos vitivinícolas del sur argentino, donde destacó el potencial productivo y turístico de la provincia. La visita a Neuquén reflejó su visión federal y su apoyo al desarrollo energético y económico sostenible del país.",
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
          descripcion:
            "En enero de 2024, la vicepresidente Victoria Villarruel visitó la ciudad de San Carlos de Bariloche, donde mantuvo una intensa agenda institucional y social. Fue recibida por el intendente Walter Cortés, quien la declaró huésped de honor y le presentó los principales proyectos y necesidades de la ciudad. Durante su recorrido, Villarruel visitó la sede de INVAP, empresa estatal referente en desarrollo tecnológico, donde expresó su reconocimiento al talento y la capacidad de los profesionales argentinos. También se reunió con empresarios locales para dialogar sobre temas como la reforma laboral, la seguridad, el desarrollo industrial y la política de cielos abiertos, destacando la importancia de impulsar la producción y el empleo en la Patagonia. Asimismo, visitó la Escuela Militar de Montaña “Teniente General Juan Domingo Perón”, donde valoró el trabajo del Ejército Argentino y su rol en la defensa de la soberanía nacional. En sus declaraciones, reafirmó su compromiso con el orden, la justicia y el respeto a la propiedad privada frente a los conflictos por usurpaciones de tierras.Esta visita reflejó su profundo interés por las problemáticas del sur argentino y su compromiso con el desarrollo federal y la defensa de los valores patrios.",
          descripcionCorta:
            "Victoria Villarruel visitó Río Negro para actos oficiales y reuniones con autoridades.",
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
          descripcion:
            "El 2 de mayo de 2024, la vicepresidente Victoria Villarruel realizó una visita oficial a la provincia de San Luis, donde fue recibida por el gobernador Claudio Poggi en la Casa de Gobierno. En el encuentro, el mandatario le otorgó el título de Huésped de Honor en reconocimiento a su presencia y compromiso institucional. Durante su estadía, Villarruel participó en las tradicionales festividades religiosas del Divino Señor de Renca y del Santo Cristo de la Quebrada, dos celebraciones profundamente arraigadas en la fe y cultura sanluiseña. A lo largo de la jornada, expresó su alegría por poder compartir estos momentos de devoción y encuentro con la comunidad, destacando el valor espiritual y cultural de las tradiciones que unen a los argentinos. La visita reflejó su cercanía con las provincias y su respeto por las expresiones de fe popular que forman parte del patrimonio nacional.",
          descripcionCorta:
            "Victoria Villarruel visitó San Luis para actos oficiales y reuniones con autoridades.",
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
          descripcion:
            "El 3 de febrero de 2024, la vicepresidente Victoria Villarruel visitó San Lorenzo, en la provincia de Santa Fe, para participar del acto conmemorativo por el 211° aniversario de la Batalla de San Lorenzo. La ceremonia se realizó en el histórico Campo de la Gloria, donde Villarruel estuvo acompañada por autoridades locales y nacionales. Durante el evento, la vicepresidenta destacó la importancia de esta fecha en la historia argentina y rindió homenaje a los héroes que lucharon por la independencia del país. Villarruel compartió imágenes de su participación en sus redes sociales, reafirmando su compromiso con la memoria histórica y el reconocimiento a los próceres nacionales, valores fundamentales que guían su labor como dirigente nacional.",
          descripcionCorta:
            "Victoria Villarruel visitó Santa Fe para actos oficiales y reuniones con autoridades.",
          imagenes: [santafeVV, santafeVVDos],
          lugar: "San Lorenzo",
        },

        {
          fecha: "Junio de 2024",
          descripcion:
            "En junio de 2024, la vicepresidente Victoria Villarruel participó de los actos del Día de la Bandera en Rosario, reafirmando su compromiso con los símbolos patrios y la identidad nacional. Durante la jornada, Villarruel destacó la importancia de honrar la Bandera Argentina y transmitir a las nuevas generaciones los valores de unidad, memoria y amor por la Patria. En sus palabras: “No hay Bandera más bella y tierra más bendita. Argentina todos los días en el corazón.” La visita combinó actos cívicos y emotivos, reflejando el vínculo profundo de la vicepresidenta con los símbolos históricos y culturales de la Nación..",
          descripcionCorta:
            "Victoria Villarruel visitó Santa Fe para actos oficiales y reuniones con autoridades.",
          imagenes: [banderaroVV, banderaroVVDos],
          lugar: "Rosario",
        },
        {
          fecha: "Junio de 2025",
          descripcion:
            "En 2025, la vicepresidente Victoria Villarruel participó de los actos del Día de la Bandera en Rosario, donde tomó parte de la Promesa a la Bandera, reafirmando su compromiso con los valores patrios y la formación cívica de los jóvenes argentinos. Posteriormente, Villarruel se trasladó a San Nicolás, en la provincia de Buenos Aires, para visitar la Basílica de la Virgen del Rosario de San Nicolás, destacando la importancia de la fe y la devoción como pilares culturales y espirituales del país.La visita combinó actos cívicos y religiosos, reflejando el amor de Villarruel por la Patria argentina y su vínculo con los símbolos históricos y espirituales de la nación.",
          descripcionCorta:
            "Victoria Villarruel visitó Santa Fe para actos oficiales y reuniones con autoridades.",
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
          descripcion:
            "El 20 de julio de 2025, la vicepresidente Victoria Villarruel visitó la Ciudad Capital de Santiago del Estero, en el marco de su gira institucional por el norte argentino. Procedente de Catamarca, desarrolló una agenda orientada a fortalecer el vínculo entre el Gobierno nacional y las administraciones provinciales, en un contexto de diálogo sobre gobernabilidad y federalismo. Durante su estadía, Villarruel se reunió con el gobernador Gerardo Zamora, con quien abordó temas institucionales, obras públicas, distribución de fondos y desarrollo regional. La reunión se llevó a cabo en un clima de interés mutuo por mantener canales de comunicación abiertos y efectivos entre Nación y provincia.Su presencia en Santiago del Estero formó parte de una agenda federal que incluyó actividades en Catamarca, reafirmando el compromiso de la vicepresidenta con las provincias del norte argentino y el fortalecimiento de la cooperación institucional más allá de las diferencias políticas.",
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
          descripcion:
            "En 2024, la vicepresidente Victoria Villarruel visitó nuevamente la provincia de Corrientes, participando en la recepción de los restos del sargento Juan Bautista Cabral en la localidad de Saladas. La ceremonia tuvo un fuerte contenido histórico e institucional, honrando la memoria de quien salvó la vida del general José de San Martín durante la primera victoria de los Granaderos a Caballo en la lucha por la independencia. Durante su discurso, Villarruel expresó: “Cabral nos recuerda que la patria se hace con actos de grandeza silenciosos y sacrificios cotidianos… Para los que tenemos el privilegio de servir a nuestro pueblo, la entrega del sargento Cabral es un llamado a poner lo mejor de nosotros, con coraje y sin esperar recompensa.” La agenda de la visita incluyó un recorrido por la Casa de Gobierno de Corrientes, la Iglesia de Nuestra Señora de la Merced, la plaza 25 de Mayo, el paseo costero y el proyecto La Unión, un espacio en refuncionalización que albergará un centro científico, museo y polo gastronómico. Posteriormente, Villarruel se trasladó a Saladas, donde participó del acto oficial en la Plaza Cabral y del desfile cívico-militar, recibiendo a los restos del sargento Cabral con la presencia de autoridades locales y vecinos, incluidos decenas de niños con uniforme de Granaderos. Esta visita marcó un momento histórico para Saladas, que por primera vez recibió la visita de un vicepresidente, y reafirmó el compromiso de Villarruel con la memoria histórica, el federalismo y la identidad nacional.",
          descripcionCorta:
            "Victoria Villarruel visitó Corrientes para actos oficiales y reuniones con autoridades.",
          imagenes: [corrientesVV, corrientesVVDos],
          lugar: "Yapeyú",
        },
        {
          fecha: "Agosto de 2025",
          descripcion:
            'En febrero de 2024, la vicepresidente Victoria Villarruel visitó la provincia de Corrientes para participar en los actos conmemorativos por el 246° aniversario del natalicio del General José de San Martín. Arribó el sábado 24 al aeropuerto Fernando Piragine Niveyro, donde fue recibida por el gobernador Gustavo Valdés. Al día siguiente, se trasladó a la localidad de Yapeyú, cuna del Libertador, para asistir a la ceremonia oficial en su honor. Durante su discurso, Villarruel resaltó la importancia de la unidad nacional en tiempos difíciles, afirmando: "En esta tierra soy correntina y todos, argentinos, en estos momentos tan difíciles de la Argentina, tenemos que estar cohesionados y aunados para sacar nuestro país adelante y para ayudar a nuestros compatriotas que más están sufriendo." En reconocimiento a su presencia, el gobernador Valdés la declaró huésped de honor de la provincia. La visita de Villarruel reflejó su profundo respeto por la figura de San Martín y su compromiso con los valores patrióticos que forjaron la identidad nacional.',
          descripcionCorta:
            "Victoria Villarruel visitó Corrientes para actos oficiales y reuniones con autoridades.",
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
                    interval={5000}
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
