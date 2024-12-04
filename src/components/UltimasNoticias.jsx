import React, { useEffect, useState } from "react";
import axios from "axios";
import NoticiasV from "./NoticiasV";
import "../css/ultNoticias.css";

const UltimasNoticias = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const getNoticias = async () => {
      try {
        const resp = await axios.get(
          `https://newsapi.org/v2/everything?q="victoria-villarruel"&pageSize=6&excludeDomains=lapoliticaonline.com,laizquierdadiario.com,derechadiario.com.ar,noticias.perfil.com,actualidad.rt.com&sortBy=publishedAt&apiKey=d23648580208429392e6f42665303f0f`
        );

        setArticulos(resp.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    getNoticias();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row fila-noticias-index">
          <h4 className="titulo-noticias-index">ÚLTIMAS NOTICIAS</h4>
        </div>

        <div className="row fila-card-index">
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
        </div>
      </div>
    </div>
  );
};

export default UltimasNoticias;
