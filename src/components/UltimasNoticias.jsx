import React from "react";
import "../css/ultimasNoticias.css";
import Card from "react-bootstrap/Card";
import cardUno from "../assets/img/cardsNoticias/cardUno.png";
import cardDos from "../assets/img/cardsNoticias/cardDos.png";
import cardTres from "../assets/img/cardsNoticias/cardTres.png";
import cardCuatro from "../assets/img/cardsNoticias/cardCuatro.png";
import cardCinco from "../assets/img/cardsNoticias/cardCinco.png";
import cardSeis from "../assets/img/cardsNoticias/cardSeis.png";

const UltimasNoticias = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h4>ÚLTIMAS NOTICIAS</h4>
        </div>
        <div className="row">
          <div className="col-10 offset-1 col-lg-4 offset-lg-0 mb-4">
            <Card>
              <Card.Img variant="top" src={cardUno} />
              <Card.Body>
                <Card.Title>
                  Ley Bases: Victoria Villarruel acordó dinámica con jefes de
                  bloque del Senado y se espera sesión maratónica
                </Card.Title>
                <Card.Text>
                  En las horas previas al comienzo del debate de la ley Bases y
                  el paquete fiscal en el Senado, la vicepresidenta Victoria
                  Villarruel encabezó la reunión de labor parlamentaria con los
                  jefes de bloques para diagramar la sesión especial que se
                  llevará a cabo el miércoles desde las 10 para tratar las
                  iniciativas oficialistas.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-10 offset-1 col-lg-4 offset-lg-0 mb-4">
            <Card>
              <Card.Img variant="top" src={cardDos} />
              <Card.Body>
                <Card.Title>
                  Milei atrasa el vuelo a Europa para que Villarruel presida la
                  sesión y no arriesgar votos
                </Card.Title>
                <Card.Text>
                  Javier Milei atrasó su viaje a Italia para que Victoria
                  Villarruel pueda estar en la sesión del miércoles en la que el
                  gobierno buscará tener aprobada la ley bases en el Senado.
                  Como explicó LPO, el viaje de Milei al G7 le traía
                  complicaciones a la estrategia oficialista porque Villarruel
                  debía suplantarlo al frente del Ejecutivo y no podía estar al
                  frente de la sesión.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-10 offset-1 col-lg-4 offset-lg-0 mb-4">
            <Card>
              <Card.Img variant="top" src={cardTres} />
              <Card.Body>
                <Card.Title>
                  Ley Bases: a qué hora se vota y cómo ver la sesión del Senado
                  en vivo
                </Card.Title>
                <Card.Text>
                  Este miércoles, el Senado comenzará a discutir la Ley Bases y
                  el paquete impositivo. El oficialismo tiene asegurado el
                  quórum, pero aún hay dudas sobre si logrará los 37 votos
                  necesarios para imponer su dictamen.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col-10 offset-1 col-lg-4 offset-lg-0 mb-4">
            <Card>
              <Card.Img variant="top" src={cardCuatro} />
              <Card.Body>
                <Card.Title>
                  Reunión Clave: Villarruel Diagramó Cómo Será La Sesión Del
                  Miércoles Donde Se Debatirá La Ley Bases
                </Card.Title>
                <Card.Text>
                  a presidenta del Senado, Victoria Villarruel, se reunió con
                  los jefes de bloque para organizar la sesión especial de este
                  miércoles, donde se debatirán dos importantes proyectos del
                  Gobierno.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-10 offset-1 col-lg-4 offset-lg-0 mb-4">
            <Card>
              <Card.Img variant="top" src={cardCinco} />
              <Card.Body>
                <Card.Title>
                  Villarruel se reúne con los bloques del Senado para organizar
                  el debate de la Ley Bases
                </Card.Title>
                <Card.Text>
                  De cara a una sesión clave para el oficialismo en el Senado,
                  la vicepresidenta Victoria Villarruel encabezará este lunes
                  desde las 18 la reunión de Labor Parlamentaria con los jefes
                  de bloques, a fin de organizar cómo será el debate de la Ley
                  Bases y el paquete fiscal.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-10 offset-1 col-lg-4 offset-lg-0 mb-4">
            <Card>
              <Card.Img variant="top" src={cardSeis} />
              <Card.Body>
                <Card.Title>
                  Definieron cómo será la sesión por la Ley Bases
                </Card.Title>
                <Card.Text>
                  La vicepresidenta y los jefes de bloque anticipan una sesión
                  maratónica. Definieron oradores y tiempo para exponer sobre
                  Ley Bases y el paquete fiscal.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimasNoticias;
