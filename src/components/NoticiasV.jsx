import React from "react";
import Card from "react-bootstrap/Card";
import "../css/noticiasV.css";
import cardUno from "../assets/img/cardsNoticias/cardUno.png";

const NoticiasV = ({ title, description, src, url, source, publishedAt }) => {
  return (
    <div className="col-10 offset-1 col-sm-6 offset-sm-0 col-lg-4 offset-lg-0 mb-5">
      <Card>
        <Card.Img variant="top" src={src ? src : { cardUno }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <a href={url} target="_blank" rel="noopener noreferrer">
            Leer más
          </a>
          <span>{source.name}</span>
          <span>{publishedAt}</span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoticiasV;
