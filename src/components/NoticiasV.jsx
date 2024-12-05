import React from "react";
import Card from "react-bootstrap/Card";
import "../css/noticiasV.css";
import cardUno from "../assets/img/cardsNoticias/cardUno.png";

const NoticiasV = ({ title, description, src, url, source, publishedAt }) => {
  return (
    <div className="col-10 offset-1 col-sm-6 offset-sm-0 col-lg-4 offset-lg-0">
      <Card className="card-noticias">
        <Card.Img
          variant="top"
          src={src || cardUno}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = cardUno;
          }}
        />
        <Card.Body>
          <Card.Title className="card-title-index">{title}</Card.Title>
          <Card.Text className="card-textoDesc">{description}</Card.Text>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Leer Más{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          {/* <span>{source.name}</span>
          <span>{publishedAt}</span> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoticiasV;
