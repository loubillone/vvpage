import React, { useEffect, useState } from "react";
// import axios from "axios";
// import NoticiasV from "./NoticiasV";
import "../css/ultNoticias.css";
import Card from "react-bootstrap/Card";
import cardUno from "../assets/img/cardsNoticias/cardUno.png";
import cardDos from "../assets/img/cardsNoticias/cardDos.jpg";
import cardTres from "../assets/img/cardsNoticias/cardTres.jpg";
import cardCuatro from "../assets/img/cardsNoticias/cardCuatro.jpg";
import cardCinco from "../assets/img/cardsNoticias/cardCinco.jpg";
import cardSeis from "../assets/img/cardsNoticias/cardSeis.jpg";

const UltimasNoticias = () => {
  // const [articulos, setArticulos] = useState([]);

  // useEffect(() => {
  //   const getNoticias = async () => {
  //     try {
  //       const resp = await axios.get(
  //         `https://newsapi.org/v2/everything?q=+"victoria-villarruel",-"lemoine",-"milei"&searchIn=title&pageSize=6&excludeDomains=lapoliticaonline.com,laizquierdadiario.com,derechadiario.com.ar,perfil.com,actualidad.rt.com&sortBy=publishedAt&apiKey=d23648580208429392e6f42665303f0f`
  //       );

  //       setArticulos(resp.data.articles);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getNoticias();
  // }, []);

  const noticias = [
    {
      imagen: cardDos,
      titulo:
        "Victoria Villarruel regresó al Festival de Doma y Folklore de Jesús María: “Acá soy cordobesa”",
      descripcion:
        "Descripción de la noticia 2Victoria Villarruel regresó al Festival de Doma y Folklore de Jesús María: “Acá soy cordobesa”",
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
        "Desde hoy los sueldos iban a incrementarse a $9,5 millones, pero la vicepresidenta firmó un decreto para volver atrás con la medida; Milei había cuestionado a los legisladores y los libertarios le reclamaron a la titular del Senado frenar el aumento",
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
  return (
    <div>
      <div className="container-fluid">
        <div className="row fila-noticias-index">
          <h4 className="titulo-noticias-index">ÚLTIMAS NOTICIAS</h4>
        </div>

        {/* <div className="row fila-card-index">
          {articulos.map((articulo, index) => {
            return (
              <NoticiasV
                key={index}
                title={articulo.title}
                description={articulo.description}
                src={articulo.urlToImage}
                url={articulo.url}
                source={articulo.source}
                publishedAt={articulo.publishedAt}
              />
            );
          })}
        </div> */}

        <div className="row fila-card-index">
          {noticias.map((noticia, index) => (
            <div
              key={index}
              className="col-10 offset-1 col-sm-6 offset-sm-0 col-lg-4 offset-lg-0"
            >
              <Card className="card-noticias">
                <Card.Img variant="top" src={noticia.imagen} />
                <Card.Body>
                  <Card.Title className="card-title-index">
                    {noticia.titulo}
                  </Card.Title>
                  <Card.Text className="card-textoDesc">
                    {noticia.descripcion}
                  </Card.Text>
                  <a
                    href={noticia.enlace}
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
    </div>
  );
};

export default UltimasNoticias;
