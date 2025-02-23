import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/ultNoticias.css";
import Card from "react-bootstrap/Card";
import cardUno from "../assets/img/cardsNoticias/cardUno.png";
import cardDos from "../assets/img/cardsNoticias/cardDos.jpg";
import cardTres from "../assets/img/cardsNoticias/cardTres.jpg";
import cardCuatro from "../assets/img/cardsNoticias/cardCuatro.jpg";
import cardCinco from "../assets/img/cardsNoticias/cardCinco.jpg";
import cardSeis from "../assets/img/cardsNoticias/cardSeis.jpg";
import tablaLibra from "../assets/img/cardsNoticias/tablaLibra.jpeg";
import abdala from "../assets/img/cardsNoticias/abdala.jpg";
import congreso from "../assets/img/cardsNoticias/congreso.jpg";
import ficha from "../assets/img/cardsNoticias/ficha.jpg";
import javierMilei from "../assets/img/cardsNoticias/javierMilei.jpg";
import vvSenado from "../assets/img/cardsNoticias/vvSenado.jpg";

const UltimasNoticias = () => {
  const location = useLocation();

  const ultNoticias = [
    {
      imagen: cardDos,
      titulo:
        "Victoria Villarruel regresó al Festival de Doma y Folklore de Jesús María: “Acá soy cordobesa”",
      descripcion:
        "Victoria Villarruel regresó al Festival de Doma y Folklore de Jesús María: “Acá soy cordobesa”",
      enlace:
        "https://www.clarin.com/politica/victoria-villarruel-regreso-festival-doma-folklore-jesus-maria-aca-cordobesa_0_VCIvrLafRF.html",
    },
    {
      imagen: cardTres,
      titulo:
        "Victoria Villarruel elige el bajo perfil y pasa sus vacaciones alejada de los flashes en Córdoba",
      descripcion:
        "Antes de asistir al Festival de Jesús María, la vice se recluyó en Villa Allende. Las días en silencio y sin selfies en la casa de su amigo cónsul.",
      enlace:
        "https://www.letrap.com.ar/politica/victoria-villarruel-elige-el-perfil-y-pasa-sus-vacaciones-alejada-los-flashes-cordoba-n5413449",
    },
    {
      imagen: cardUno,
      titulo:
        "Victoria Villarruel congeló las dietas de los senadores hasta el 31 de marzo tras la polémica con el Ejecutivo",
      descripcion:
        "Desde hoy los sueldos iban a incrementarse a $9,5 millones, pero la vicepresidenta firmó un decreto para volver atrás con la medida",
      enlace:
        "https://www.lanacion.com.ar/politica/victoria-villarruel-congelo-las-dietas-de-lo-senadores-hasta-el-31-de-marzo-nid02012025/",
    },

    {
      imagen: cardCuatro,
      titulo:
        "Guillermo Francos incluyó a Victoria Villarruel en las negociaciones por las sesiones extraordinarias",
      descripcion:
        "El jefe de Gabinete concurrió al Senado para hablar con los bloques dialoguistas sobre los proyectos pretendidos por el Poder Ejecutivo y la vicepresidenta, enfrentada con la Casa Rosada, participó del encuentro",
      enlace:
        "https://www.lanacion.com.ar/politica/guillermo-francos-incluyo-a-victoria-villarruel-en-las-negociaciones-por-las-sesiones-nid22012025/",
    },

    {
      imagen: cardCinco,
      titulo:
        "Referentes mendocinos y ex combatientes de Malvinas criticaron a Milei y “desagraviaron” a Victoria Villarruel",
      descripcion:
        "“Son ellos quienes debían combatir los privilegios de la casta, y no solamente han traído a los mismos de siempre, sino también, a los peores de antes”, sostuvieron.",
      enlace:
        "https://mendozatoday.com.ar/2025/01/13/referentes-mendocinos-y-ex-combatientes-de-malvinas-criticaron-a-milei-y-desagraviaron-a-victoria-villarruel/?s=09",
    },

    {
      imagen: cardSeis,
      titulo:
        "Victoria Villarruel se reunió con confederaciones rurales argentinas",
      descripcion:
        "La vicepresidente de la Nación y presidente del Senado, Victoria Villarruel, se reunió hoy con la mesa ejecutiva de Confederaciones Rurales Argentinas (CRA) para escuchar e interiorizarse sobre los desafíos actuales y futuros de las diferentes regiones y representantes de las economías regionales del país.",
      enlace: "https://www.senado.gob.ar/prensa/22228/noticias",
    },
  ];

  const senadoNoticias = [
    {
      imagen: vvSenado,
      titulo: "Uno por uno, cómo votó cada senador la suspensión de las PASO",
      descripcion:
        "El proyecto contó con 43 votos a favor, 20 en contra y 6 abstenciones en el Senado. Diputados ya le había dado media sanción.",
      enlace:
        "https://www.clarin.com/politica/voto-senador-suspension-paso_0_4BVQWwHADj.html",
    },
    {
      imagen: tablaLibra,
      titulo:
        "El Senado rechazó crear una comisión investigadora por el caso de la criptomoneda $LIBRA",
      descripcion:
        "Lo pidió el radicalismo y contó con el acompañamiento del kirchnerismo. Varios de la UCR, el PRO y los provinciales votaron en contra. El rol de los gobernadores",
      enlace:
        "https://www.infobae.com/politica/2025/02/20/el-senado-rechazo-crear-una-comision-investigadora-por-el-caso-de-la-criptomoneda-libra/",
    },
    {
      imagen: javierMilei,
      titulo:
        "El Gobierno celebró la suspensión de las PASO: “Un lujo que Argentina no puede darse”",
      descripcion:
        "Desde la Oficina del Presidente, lanzaron un nuevo escrito que agradece “la colaboración de todos los legisladores que trabajaron para este objetivo”",
      enlace:
        "https://www.minutouno.com/politica/el-gobierno-celebro-la-suspension-las-paso-un-lujo-que-argentina-no-puede-darse-n6115895",
    },
    {
      imagen: abdala,
      titulo:
        "El insólito episodio por la confusión de Abdala sobre cómo manejar la sesión",
      descripcion:
        "La Cámara alta convirtió en ley el proyecto del oficialismo; ahora se trata reiterancia y juicio en ausencia",
      enlace:
        "https://www.lanacion.com.ar/politica/votacion-por-las-paso-en-el-senado-en-vivo-minuto-a-minuto-del-proyecto-de-javier-milei-nid20022025/",
    },
    {
      imagen: congreso,
      titulo:
        "El Senado sancionó la ley de reiterancia, el proyecto que busca evitar la “puerta giratoria” en la Justicia",
      descripcion:
        "El proyecto, que endurece las penas de delincuentes que reinciden en el delito, fue aprobado por unanimidad en la Cámara alta; la iniciativa de juicio en ausencia también consiguió los votos",
      enlace:
        "https://www.lanacion.com.ar/politica/el-senado-aprobo-la-ley-de-reiterancia-el-proyecto-que-busca-evitar-la-puerta-giratoria-en-la-nid20022025/",
    },

    {
      imagen: ficha,
      titulo:
        "Ficha Limpia obtuvo dictamen en el Senado, pero se tratará después del 1 de marzo en sesiones ordinarias",
      descripcion:
        "La iniciativa aprobada por Diputados obtuvo dictamen favorable del oficialismo y sus aliados del PRO, UCR y Juntos Somos Río Negro. A la espera de la apertura de sesiones en el Congreso.",
      enlace:
        "https://www.tiempoar.com.ar/ta_article/ficha-limpia-obtuvo-dictamen-en-el-senado-pero-se-tratara-despues-del-1-de-marzo-en-sesiones-ordinarias/",
    },
  ];
  return (
    <div>
      <div className="container-fluid">
        <div className="row fila-noticias-index">
          <h4 className="titulo-noticias-index">ÚLTIMAS NOTICIAS</h4>
        </div>

        <div className="row fila-card-index">
          {ultNoticias.map((ultNoticia, index) => (
            <div
              key={index}
              className="col-10 offset-1 col-sm-6 offset-sm-0 col-lg-4 offset-lg-0"
            >
              <Card className="card-noticias">
                <Card.Img variant="top" src={ultNoticia.imagen} />
                <Card.Body>
                  <Card.Title className="card-title-index">
                    {ultNoticia.titulo}
                  </Card.Title>
                  <Card.Text className="card-textoDesc">
                    {ultNoticia.descripcion}
                  </Card.Text>
                  <a
                    href={ultNoticia.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    Leer Más
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {location.pathname !== "/" && (
        <div className="container-fluid">
          <div className="row fila-noticias-index">
            <h4 className="titulo-noticias-index">NOTICIAS SENADO</h4>
          </div>

          <div className="row fila-card-index">
            {senadoNoticias.map((senadoNoticia, index) => (
              <div
                key={index}
                className="col-10 offset-1 col-sm-6 offset-sm-0 col-lg-4 offset-lg-0"
              >
                <Card className="card-noticias">
                  <Card.Img variant="top" src={senadoNoticia.imagen} />
                  <Card.Body>
                    <Card.Title className="card-title-index">
                      {senadoNoticia.titulo}
                    </Card.Title>
                    <Card.Text className="card-textoDesc">
                      {senadoNoticia.descripcion}
                    </Card.Text>
                    <a
                      href={senadoNoticia.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Leer Más
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UltimasNoticias;
