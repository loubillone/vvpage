import React from "react";
import Card from "react-bootstrap/Card";
import "../css/noticiasV.css";
import cardUno from "../assets/img/cardsNoticias/cardUno.png";

const NoticiasV = ({ title, description, src, url }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <Card>
        <Card.Img variant="top" src={src ? src : { cardUno }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <a href={url} target="_blank" rel="noopener noreferrer">
            Leer más
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoticiasV;
