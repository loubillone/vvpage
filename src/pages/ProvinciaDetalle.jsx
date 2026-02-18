import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import rioNegroUno from "../assets/img/mapaArg/rio-negro/rioNegro1.webp";
import rioNegroDos from "../assets/img/mapaArg/rio-negro/rioNegro2.webp";
import rioNegroTres from "../assets/img/mapaArg/rio-negro/rioNegro3.webp";
import rioNegroCuatro from "../assets/img/mapaArg/rio-negro/rioNegro4.webp";
import rioNegroCinco from "../assets/img/mapaArg/rio-negro/rioNegro5.webp";
import rioNegroSeis from "../assets/img/mapaArg/rio-negro/rioNegro6.webp";
import azulVV from "../assets/img/mapaArg/buenos-aires/azulVV.webp";
import azulVVDos from "../assets/img/mapaArg/buenos-aires/azulVV2.webp";
import azulVVTres from "../assets/img/mapaArg/buenos-aires/azulVV3.webp";
import azulVVCuatro from "../assets/img/mapaArg/buenos-aires/azulVV4.webp";
import lujanVV from "../assets/img/mapaArg/buenos-aires/lujanVV.webp";
import lujanVVUno from "../assets/img/mapaArg/buenos-aires/lujanVV1.webp";
import lujanVVDos from "../assets/img/mapaArg/buenos-aires/lujanVV2.webp";
import lujanVVTres from "../assets/img/mapaArg/buenos-aires/lujanVV3.webp";
import lujanVVCuatro from "../assets/img/mapaArg/buenos-aires/lujanVV4.webp";
import chivilcoyVV from "../assets/img/mapaArg/buenos-aires/chivilcoyVV.webp";
import chivilcoyVVUno from "../assets/img/mapaArg/buenos-aires/chivilcoyVV1.webp";
import chivilcoyVVDos from "../assets/img/mapaArg/buenos-aires/chivilcoyVV2.webp";
import chivilcoyVVTres from "../assets/img/mapaArg/buenos-aires/chivilcoyVV3.webp";
import chivilcoyVVCuatro from "../assets/img/mapaArg/buenos-aires/chivilcoyVV4.webp";
import chivilcoyVVCinco from "../assets/img/mapaArg/buenos-aires/chivilcoyVV5.webp";
import chivilcoyVVSeis from "../assets/img/mapaArg/buenos-aires/chivilcoyVV6.webp";
import chivilcoyVVSiete from "../assets/img/mapaArg/buenos-aires/chivilcoyVV7.webp";
import saladilloVV from "../assets/img/mapaArg/buenos-aires/saladilloVV.webp";
import saladilloVVUno from "../assets/img/mapaArg/buenos-aires/saladilloVV1.webp";
import saladilloVVDos from "../assets/img/mapaArg/buenos-aires/saladilloVV2.webp";
import saladilloVVTres from "../assets/img/mapaArg/buenos-aires/saladilloVV3.webp";
import saladilloVVCuatro from "../assets/img/mapaArg/buenos-aires/saladilloVV4.webp";
import saladilloVVCinco from "../assets/img/mapaArg/buenos-aires/saladilloVV5.webp";
import sanpedroVV from "../assets/img/mapaArg/buenos-aires/sanpedroVV.webp";
import sanpedroVVUno from "../assets/img/mapaArg/buenos-aires/sanpedroVV1.webp";
import sanpedroVVDos from "../assets/img/mapaArg/buenos-aires/sanpedroVV2.webp";
import sanpedroVVTres from "../assets/img/mapaArg/buenos-aires/sanpedroVV3.webp";
import sanpedroVVCuatro from "../assets/img/mapaArg/buenos-aires/sanpedroVV4.webp";
import sanpedroVVCinco from "../assets/img/mapaArg/buenos-aires/sanpedroVV5.webp";
import sanpedroVVSeis from "../assets/img/mapaArg/buenos-aires/sanpedroVV6.webp";
import cordobaVV from "../assets/img/mapaArg/cordoba/corVV.webp";
import cordobaVVDos from "../assets/img/mapaArg/cordoba/corVV2.webp";
import cordobaVVTres from "../assets/img/mapaArg/cordoba/corVV3.webp";
import cordobaVVCuatro from "../assets/img/mapaArg/cordoba/corVV4.webp";
import cordobaVVCinco from "../assets/img/mapaArg/cordoba/corVV5.webp";
import cordobaVVSeis from "../assets/img/mapaArg/cordoba/corVV6.webp";
import santafeVV from "../assets/img/mapaArg/santa-fe/santafeVV.webp";
import santafeVVDos from "../assets/img/mapaArg/santa-fe/santafeVV2.webp";
import santafeVVTres from "../assets/img/mapaArg/santa-fe/santafeVV3.webp";
import santafeVVCuatro from "../assets/img/mapaArg/santa-fe/santafeVV4.webp";
import saltaVV from "../assets/img/mapaArg/salta/saltaVV.webp";
import saltaVVDos from "../assets/img/mapaArg/salta/saltaVV1.webp";
import saltaVVTres from "../assets/img/mapaArg/salta/saltaVV2.webp";
import saltaVVCuatro from "../assets/img/mapaArg/salta/saltaVV3.webp";
import saltaVVCinco from "../assets/img/mapaArg/salta/saltaVV4.webp";
import saltaVVSeis from "../assets/img/mapaArg/salta/saltaVV5.webp";
import corrientesVV from "../assets/img/mapaArg/corrientes/corrientesVV.webp";
import corrientesVVDos from "../assets/img/mapaArg/corrientes/corrientesVV2.webp";
import corrientesVVTres from "../assets/img/mapaArg/corrientes/corrientesVV3.webp";
import corrientesVVCuatro from "../assets/img/mapaArg/corrientes/corrientesVV4.webp";
import corrientesVVCinco from "../assets/img/mapaArg/corrientes/corrientesVV5.webp";
import corrientesVVSeis from "../assets/img/mapaArg/corrientes/corrientesVV6.webp";
import mendozaVV from "../assets/img/mapaArg/mendoza/mendozaVV.webp";
import mendozaVVDos from "../assets/img/mapaArg/mendoza/mendozaVV2.webp";
import mendozaVVTres from "../assets/img/mapaArg/mendoza/mendozaVV3.webp";
import mendozaVVCuatro from "../assets/img/mapaArg/mendoza/mendozaVV4.webp";
import mendozaVVCinco from "../assets/img/mapaArg/mendoza/mendozaVV5.webp";
import mendozaVVSeis from "../assets/img/mapaArg/mendoza/mendozaVV6.webp";
import sanLuisVV from "../assets/img/mapaArg/san-luis/sanluisVV.webp";
import sanLuisVVDos from "../assets/img/mapaArg/san-luis/sanluisVV2.webp";
import sanLuisVVTres from "../assets/img/mapaArg/san-luis/sanluisVV3.webp";
import sanLuisVVCuatro from "../assets/img/mapaArg/san-luis/sanluisVV4.webp";
import sanLuisVVCinco from "../assets/img/mapaArg/san-luis/sanluisVV5.webp";
import sanLuisVVSeis from "../assets/img/mapaArg/san-luis/sanluisVV6.webp";
import catamarcaVV from "../assets/img/mapaArg/catamarca/cataVV.webp";
import catamarcaVVDos from "../assets/img/mapaArg/catamarca/cataVV2.webp";
import catamarcaVVTres from "../assets/img/mapaArg/catamarca/cataVV3.webp";
import catamarcaVVCinco from "../assets/img/mapaArg/catamarca/cataVV5.webp";
import catamarcaVVSeis from "../assets/img/mapaArg/catamarca/cataVV6.webp";
import jujuyUno from "../assets/img/mapaArg/jujuy/jujuyVV1.webp";
import jujuyVVDos from "../assets/img/mapaArg/jujuy/jujuyVV2.webp";
import jujuyVVTres from "../assets/img/mapaArg/jujuy/jujuyVV3.webp";
import jujuyVVCuatro from "../assets/img/mapaArg/jujuy/jujuyVV4.webp";
import jujuyVVCinco from "../assets/img/mapaArg/jujuy/jujuyVV5.webp";
import jujuyVVSeis from "../assets/img/mapaArg/jujuy/jujuyVV6.webp";
import misionesVV from "../assets/img/mapaArg/misiones/misionesVV.webp";
import misionesVVDos from "../assets/img/mapaArg/misiones/misionesVV2.webp";
import misionesVVTres from "../assets/img/mapaArg/misiones/misionesVV3.webp";
import misionesVVCuatro from "../assets/img/mapaArg/misiones/misionesVV4.webp";
import misionesVVCinco from "../assets/img/mapaArg/misiones/misionesVV5.webp";
import misionesVVSeis from "../assets/img/mapaArg/misiones/misionesVV6.webp";
import neuquenVV from "../assets/img/mapaArg/neuquen/neuquenVV.webp";
import neuquenVVDos from "../assets/img/mapaArg/neuquen/neuquenVV2.webp";
import neuquenVVTres from "../assets/img/mapaArg/neuquen/neuquenVV3.webp";
import neuquenVVCuatro from "../assets/img/mapaArg/neuquen/neuquenVV4.webp";
import neuquenVVCinco from "../assets/img/mapaArg/neuquen/neuquenVV5.webp";
import neuquenVVSeis from "../assets/img/mapaArg/neuquen/neuquenVV6.webp";
import entreriosVV from "../assets/img/mapaArg/entre-rios/entreriosVV.webp";
import entreriosVVDos from "../assets/img/mapaArg/entre-rios/entreriosVV2.webp";
import entreriosVVTres from "../assets/img/mapaArg/entre-rios/entreriosVV3.webp";
import entreriosVVCuatro from "../assets/img/mapaArg/entre-rios/entreriosVV4.webp";
import entreriosVVCinco from "../assets/img/mapaArg/entre-rios/entreriosVV5.webp";
import entreriosVVSeis from "../assets/img/mapaArg/entre-rios/entreriosVV6.webp";
import santiagoVV from "../assets/img/mapaArg/santiago/santiagoVV.webp";
import santiagoVVDos from "../assets/img/mapaArg/santiago/santiagoVV2.webp";
import chubutVV from "../assets/img/mapaArg/chubut/chubutVV.webp";
import chubutVVUno from "../assets/img/mapaArg/chubut/chubutVV1.webp";
import chubutVVDos from "../assets/img/mapaArg/chubut/chubutVV2.webp";
import chubutVVTres from "../assets/img/mapaArg/chubut/chubutVV3.webp";
import chubutVVCuatro from "../assets/img/mapaArg/chubut/chubutVV4.webp";
import chubutVVCinco from "../assets/img/mapaArg/chubut/chubutVV5.webp";
import chubutVVSeis from "../assets/img/mapaArg/chubut/chubutVV6.webp";
import chubutVVOcho from "../assets/img/mapaArg/chubut/chubutVV8.webp";
import chubutVVNueve from "../assets/img/mapaArg/chubut/chubutVV9.webp";
import chubutVVDiez from "../assets/img/mapaArg/chubut/chubutVV10.webp";
import chubutVVOnce from "../assets/img/mapaArg/chubut/chubutVV11.webp";
import chubutVVDoce from "../assets/img/mapaArg/chubut/chubutVV12.webp";
import chubutVVTrece from "../assets/img/mapaArg/chubut/chubutVV13.webp";
import tierraVV from "../assets/img/mapaArg/tierra-del-fuego/tierraVV.webp";
import tierraVVDos from "../assets/img/mapaArg/tierra-del-fuego/tierraVV2.webp";
import tierraVVTres from "../assets/img/mapaArg/tierra-del-fuego/tierraVV3.webp";
import tierraVVCuatro from "../assets/img/mapaArg/tierra-del-fuego/tierraVV4.webp";
import tierraVVCinco from "../assets/img/mapaArg/tierra-del-fuego/tierraVV5.webp";
import tierraVVSeis from "../assets/img/mapaArg/tierra-del-fuego/tierraVV6.webp";
import tucuVV from "../assets/img/mapaArg/tucuman/tucumanVV.webp";
import tucuVVDos from "../assets/img/mapaArg/tucuman/tucumanVV2.webp";
import tucuVVTres from "../assets/img/mapaArg/tucuman/tucumanVV3.webp";
import tucuVVCuatro from "../assets/img/mapaArg/tucuman/tucumanVV4.webp";
import tucuVVCinco from "../assets/img/mapaArg/tucuman/tucumanVV5.webp";
import formosaVV from "../assets/img/mapaArg/formosa/formosaVV.webp";
import formosaVVDos from "../assets/img/mapaArg/formosa/formosaVV2.webp";
import formosaVVTres from "../assets/img/mapaArg/formosa/formosaVV3.webp";
import formosaVVCuatro from "../assets/img/mapaArg/formosa/formosaVV4.webp";
import saladasVV from "../assets/img/mapaArg/corrientes/saladasVV.webp";
import saladasVVUno from "../assets/img/mapaArg/corrientes/saladasVV1.webp";
import saladasVVDos from "../assets/img/mapaArg/corrientes/saladasVV2.webp";
import saladasVVTres from "../assets/img/mapaArg/corrientes/saladasVV3.webp";
import saladasVVCuatro from "../assets/img/mapaArg/corrientes/saladasVV4.webp";
import saladasVVCinco from "../assets/img/mapaArg/corrientes/saladasVV5.webp";
import saladasVVSeis from "../assets/img/mapaArg/corrientes/saladasVV6.webp";
import saladasVVSiete from "../assets/img/mapaArg/corrientes/saladasVV7.webp";
import saladasVVOcho from "../assets/img/mapaArg/corrientes/saladasVV8.webp";
import saladasVVNueve from "../assets/img/mapaArg/corrientes/saladasVV9.webp";
import saladasVVDiez from "../assets/img/mapaArg/corrientes/saladasVV10.webp";
import elrodeoVV from "../assets/img/mapaArg/catamarca/elrodeoVV.webp";
import elrodeoVVUno from "../assets/img/mapaArg/catamarca/elrodeoVV1.webp";
import elrodeoVVDos from "../assets/img/mapaArg/catamarca/elrodeoVV2.webp";
import elrodeoVVTres from "../assets/img/mapaArg/catamarca/elrodeoVV3.webp";
import elrodeoVVCuatro from "../assets/img/mapaArg/catamarca/elrodeoVV4.webp";
import elrodeoVVCinco from "../assets/img/mapaArg/catamarca/elrodeoVV5.webp";
import elrodeoVVSeis from "../assets/img/mapaArg/catamarca/elrodeoVV6.webp";
import elrodeoVVSiete from "../assets/img/mapaArg/catamarca/elrodeoVV7.webp";
import elrodeoVVOcho from "../assets/img/mapaArg/catamarca/elrodeoVV8.webp";
import elrodeoVVNueve from "../assets/img/mapaArg/catamarca/elrodeoVV9.webp";
import elrodeoVVDiez from "../assets/img/mapaArg/catamarca/elrodeoVV10.webp";
import elrodeoVVOnce from "../assets/img/mapaArg/catamarca/elrodeoVV11.webp";
import elrodeoVVDoce from "../assets/img/mapaArg/catamarca/elrodeoVV12.webp";
import banderaVV from "../assets/img/mapaArg/santa-fe/banderaVV.webp";
import banderaVVDos from "../assets/img/mapaArg/santa-fe/banderaVV2.webp";
import banderaVVTres from "../assets/img/mapaArg/santa-fe/banderaVV3.webp";
import banderaVVCuatro from "../assets/img/mapaArg/santa-fe/banderaVV4.webp";
import banderaVVCinco from "../assets/img/mapaArg/santa-fe/banderaVV5.webp";
import ruralsaltaVV from "../assets/img/mapaArg/salta/ruralsaltaVV.webp";
import ruralsaltaVVDos from "../assets/img/mapaArg/salta/ruralsaltaVV2.webp";
import ruralsaltaVVTres from "../assets/img/mapaArg/salta/ruralsaltaVV3.webp";
import guemesVV from "../assets/img/mapaArg/salta/guemesVV.webp";
import guemesVVDos from "../assets/img/mapaArg/salta/guemesVV2.webp";
import guemesVVCuatro from "../assets/img/mapaArg/salta/guemesVV4.webp";
import guemesVVCinco from "../assets/img/mapaArg/salta/guemesVV5.webp";
import banderaroVV from "../assets/img/mapaArg/santa-fe/banderaroVV.webp";
import banderaroVVDos from "../assets/img/mapaArg/santa-fe/banderaroVV2.webp";
import banderaroVVTres from "../assets/img/mapaArg/santa-fe/banderaroVV3.webp";
import banderaroVVCuatro from "../assets/img/mapaArg/santa-fe/banderaroVV4.webp";
import cordoVV from "../assets/img/mapaArg/cordoba/cordoVV.webp";
import cordoVVDos from "../assets/img/mapaArg/cordoba/cordoVV2.webp";
import mardelVV from "../assets/img/mapaArg/buenos-aires/mardelVV.webp";
import mardelVVDos from "../assets/img/mapaArg/buenos-aires/mardelVV2.webp";
import mardelVVTres from "../assets/img/mapaArg/buenos-aires/mardelVV3.webp";
import mardelVVCuatro from "../assets/img/mapaArg/buenos-aires/mardelVV4.webp";
import mardelVVCinco from "../assets/img/mapaArg/buenos-aires/mardelVV5.webp";
import fiestaPonchoVV from "../assets/img/mapaArg/catamarca/fiestaPonchoVV.webp";
import fiestaPonchoVVDos from "../assets/img/mapaArg/catamarca/fiestaPonchoVV2.webp";
import fiestaPonchoVVTres from "../assets/img/mapaArg/catamarca/fiestaPonchoVV3.webp";
import fiestaPonchoVVCuatro from "../assets/img/mapaArg/catamarca/fiestaPonchoVV4.webp";
import lariojaVVQuiroga from "../assets/img/mapaArg/larioja/lariojaVVQuiroga.jpeg";
import lariojaVVQuirogaUno from "../assets/img/mapaArg/larioja/lariojaVVQuiroga2.jpeg";
import lariojaVVQuirogaDos from "../assets/img/mapaArg/larioja/lariojaVVQuiroga3.jpg";
import lariojaQuintelaVV from "../assets/img/mapaArg/larioja/lariojaQuintelaVV.jpg";
import lariojaQuintelaVVUno from "../assets/img/mapaArg/larioja/lariojaQuintelaVV1.jpg";
import lariojaQuintelaVVDos from "../assets/img/mapaArg/larioja/lariojaQuintelaVV2.jpg";
import lariojaQuintelaVVTres from "../assets/img/mapaArg/larioja/lariojaQuintelaVV3.jpg";
import lariojaQuintelaVVCuatro from "../assets/img/mapaArg/larioja/lariojaQuintelaVV4.jpg";
import lariojaQuintelaVVCinco from "../assets/img/mapaArg/larioja/lariojaQuintelaVV5.jpg";
import lariojaQuintelaVVSeis from "../assets/img/mapaArg/larioja/lariojaQuintelaVV6.jpg";
import lariojaQuintelaVVSiete from "../assets/img/mapaArg/larioja/lariojaQuintelaVV7.jpg";
import lariojaObispoVV from "../assets/img/mapaArg/larioja/lariojaObispoVV.jpg";
import lariojaObispoVVUno from "../assets/img/mapaArg/larioja/lariojaObispoVV1.jpg";
import lariojaObispoVVDos from "../assets/img/mapaArg/larioja/lariojaObispoVV2.jpg";
import lariojaObispoVVTres from "../assets/img/mapaArg/larioja/lariojaObispoVV3.jpg";
import lariojaObispoVVCuatro from "../assets/img/mapaArg/larioja/lariojaObispoVV4.jpg";
import lariojaObispoVVCinco from "../assets/img/mapaArg/larioja/lariojaObispoVV5.jpg";
import lariojaBodegaVV from "../assets/img/mapaArg/larioja/lariojaBodegaVV.jpg";
import lariojaBodegaVVUno from "../assets/img/mapaArg/larioja/lariojaBodegaVV1.jpg";
import lariojaBodegaVVDos from "../assets/img/mapaArg/larioja/lariojaBodegaVV2.jpg";
import lariojaBodegaVVTres from "../assets/img/mapaArg/larioja/lariojaBodegaVV3.jpg";
import lariojaBodegaVVCuatro from "../assets/img/mapaArg/larioja/lariojaBodegaVV4.jpg";
import lariojaBodegaVVCinco from "../assets/img/mapaArg/larioja/lariojaBodegaVV5.jpg";
import lariojaBodegaVVSeis from "../assets/img/mapaArg/larioja/lariojaBodegaVV6.jpg";
import lariojaChayaVV from "../assets/img/mapaArg/larioja/lariojaChayaVV.jpg";
import lariojaChayaVVUno from "../assets/img/mapaArg/larioja/lariojaChayaVV1.jpg";
import lariojaChayaVVDos from "../assets/img/mapaArg/larioja/lariojaChayaVV2.jpg";
import lariojaChayaVVTres from "../assets/img/mapaArg/larioja/lariojaChayaVV3.jpg";
import lariojaChayaVVCuatro from "../assets/img/mapaArg/larioja/lariojaChayaVV4.jpg";
import lariojaParquesVV from "../assets/img/mapaArg/larioja/lariojaParquesVV.jpg";
import lariojaParquesVVUno from "../assets/img/mapaArg/larioja/lariojaParquesVV1.jpg";
import lariojaParquesVVDos from "../assets/img/mapaArg/larioja/lariojaParquesVV2.jpg";
import lariojaParquesVVTres from "../assets/img/mapaArg/larioja/lariojaParquesVV3.jpg";
import lariojaParquesVVCuatro from "../assets/img/mapaArg/larioja/lariojaParquesVV4.jpg";
import lariojaParquesVVCinco from "../assets/img/mapaArg/larioja/lariojaParquesVV5.jpg";
import lariojaParquesVVSeis from "../assets/img/mapaArg/larioja/lariojaParquesVV6.jpg";
import lariojaParquesVVSiete from "../assets/img/mapaArg/larioja/lariojaParquesVV7.jpg";
import lariojaParquesVVOcho from "../assets/img/mapaArg/larioja/lariojaParquesVV8.jpg";
import lariojaParquesVVNueve from "../assets/img/mapaArg/larioja/lariojaParquesVV9.jpg";
import lariojaTalampayaVV from "../assets/img/mapaArg/larioja/lariojaTalampayaVV.jpg";
import lariojaTalampayaVVUno from "../assets/img/mapaArg/larioja/lariojaTalampayaVV1.jpg";
import lariojaTalampayaVVDos from "../assets/img/mapaArg/larioja/lariojaTalampayaVV2.jpg";
import lariojaTalampayaVVTres from "../assets/img/mapaArg/larioja/lariojaTalampayaVV3.jpg";
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
            <>
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
                  Villarruel destacó los valores de justicia, verdad, reparación
                  y derechos humanos para todos,
                </span>{" "}
                reafirmando su compromiso con la memoria histórica y el respeto
                hacia quienes defendieron la Patria.
              </p>
            </>
          ),
          imagenes: [azulVV, azulVVDos, azulVVTres, azulVVCuatro],
          lugar: "Azul",
        },

        {
          fecha: "Mayo de 2024",
          descripcion: (
            <>
              <p>
                En mayo de 2024, la vicepresidente Victoria Villarruel visitó
                Mar del Plata, invitada por el Senador Nacional Maximiliano
                Abad, para recorrer el Parque Industrial y apoyar la producción
                y el deporte nacional. Durante su estadía,{" "}
                <span className="vv-estilo-detalle">
                  {" "}
                  Villarruel visitó la Planta de Havanna y la Planta de
                  Lucciano’s,
                </span>{" "}
                destacando la importancia de quienes invierten en el país,
                generan empleo y fomentan el desarrollo productivo local.{" "}
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
                  La visita reflejó el compromiso de Villarruel con la
                  producción, el trabajo y el deporte
                </span>
                , reforzando su vínculo con la comunidad y el desarrollo de la
                ciudad.
              </p>{" "}
            </>
          ),
          imagenes: [
            mardelVV,
            mardelVVDos,
            mardelVVTres,
            mardelVVCuatro,
            mardelVVCinco,
          ],
          lugar: "Mar Del Plata",
        },

        {
          fecha: "Mayo de 2025",
          descripcion: (
            <>
              <p>
                En mayo de 2025, la vicepresidente Victoria Villarruel visitó la{" "}
                <span className="vv-estilo-detalle">
                  Basílica Nuestra Señora de Luján
                </span>{" "}
                donde participó de un momento de recogimiento y oración ante la
                imagen de la Virgen, patrona de la Argentina. <br />
                <br />
                Durante su visita,{" "}
                <span className="vv-estilo-detalle">
                  dejó un mensaje en el libro de visitas del santuario,
                </span>{" "}
                en el que encomendó al pueblo argentino a la Virgen de Luján,
                pidiendo paz, pan y trabajo, y solicitando que su manto
                misericordioso se pose sobre todos los hogares del país. <br />
                <br />
                El mensaje concluyó con una invocación de fe y esperanza:{" "}
                <span className="vv-estilo-detalle">
                  “Virgen de Luján, ruega por nosotros”,
                </span>{" "}
                dejando constancia de una visita marcada por la espiritualidad,
                la tradición y el sentimiento de unidad nacional.
              </p>
            </>
          ),
          imagenes: [
            lujanVV,
            lujanVVUno,
            lujanVVDos,
            lujanVVTres,
            lujanVVCuatro,
          ],
          lugar: "Luján",
        },

        {
          fecha: "Mayo de 2025",
          descripcion: (
            <>
              <p>
                <span className="vv-estilo-detalle">
                  La vicepresidente Victoria Villarruel visitó las localidades
                  bonaerenses de Chivilcoy y Suipacha
                </span>{" "}
                en el marco de una recorrida por la provincia de Buenos Aires,
                enfocada en el contacto con autoridades locales, el sector
                productivo y empresas familiares. <br />
                <br />
                En Chivilcoy, fue recibida por el intendente{" "}
                <span className="vv-estilo-detalle">
                  Guillermo Britos, a quien conoció durante la campaña electoral
                  de 2023.
                </span>{" "}
                Durante la jornada, estuvo acompañada por Claudia Rucci, quien
                participó de la recorrida por distintos puntos de la región. En
                la ciudad, Villarruel recibió presentes típicos y visitó la
                empresa{" "}
                <span className="vv-estilo-detalle">
                  Ostagro, ubicada en Moquehuá,{" "}
                </span>{" "}
                dedicada a la comercialización de maquinaria agrícola, así como
                la empresa quesera{" "}
                <span className="vv-estilo-detalle">El Gauchito,</span> donde
                fue recibida por uno de sus dueños, Claudio Andreoli. <br />
                <br />{" "}
                <span className="vv-estilo-detalle">
                  La visita continuó en Suipacha, donde recorrió Lácteos Silvia,
                </span>{" "}
                una empresa familiar que emplea a 130 personas y se dedica a la
                producción de leche larga vida y una amplia variedad de quesos.
                Durante el encuentro, la vicepresidente destacó la importancia
                de las pymes, el trabajo argentino y el desarrollo de las
                economías regionales como pilares del crecimiento del país.
              </p>
            </>
          ),
          imagenes: [
            chivilcoyVV,
            chivilcoyVVUno,
            chivilcoyVVDos,
            chivilcoyVVTres,
            chivilcoyVVCuatro,
            chivilcoyVVCinco,
            chivilcoyVVSeis,
            chivilcoyVVSiete,
          ],
          lugar: "Chivilcoy - Suipacha",
        },

        {
          fecha: "Mayo de 2025",
          descripcion: (
            <>
              {" "}
              <p>
                La vicepresidente Victoria Villarruel realizó una visita a la
                ciudad de{" "}
                <span className="vv-estilo-detalle">
                  Saladillo , en la provincia de Buenos Aires, donde desarrolló
                  una agenda vinculada a la educación rural, la formación
                  técnica y la actividad productiva.
                </span>
                <br />
                <br />
                Durante su recorrida, visitó el{" "}
                <span className="vv-estilo-detalle">
                  Centro de Formación Rural “Las Margaritas”,
                </span>{" "}
                una Escuela Secundaria Técnica que cuenta con 165 alumnas, y fue
                recibida por sus autoridades y representantes de la Fundación
                Marzano. En el lugar,
                <span className="vv-estilo-detalle">
                  recorrió el entorno formativo y las instalaciones utilizadas
                  por sus 196 estudiantes,{" "}
                </span>
                interiorizándose sobre el sistema pedagógico de alternancia, un
                modelo educativo originado en Francia hace más de 90 años y
                presente en la Argentina desde 1969, siendo los Centros de
                Formación Rural de la Fundación Marzano pioneros en su
                implementación. <br />
                <br />
                Asimismo, Villarruel visitó el{" "}
                <span className="vv-estilo-detalle">
                  Frigorífico “El Regional”,
                </span>{" "}
                donde fue recibida por su propietario, Gustavo Moscoloni, y su
                equipo de trabajo. Allí conoció el funcionamiento de la planta,
                que actualmente destina el 80 % de su capacidad productiva a la{" "}
                <span className="vv-estilo-detalle">
                  empresa Cabaña Argentina, con marca propia y comercialización
                  bajo las marcas FRS y Le Gurie,
                </span>{" "}
                además de contar con habilitación para exportar a diversos
                países y locales comerciales propios para la venta al público.{" "}
                <br />
                <br />A lo largo de la jornada, la vicepresidente destacó el
                valor de la{" "}
                <span className="vv-estilo-detalle">
                  educación, el trabajo y la producción como pilares
                  fundamentales para el desarrollo de las comunidades del
                  interior{" "}
                </span>
                y el fortalecimiento de las economías regionales.
              </p>
            </>
          ),
          imagenes: [
            saladilloVV,
            saladilloVVUno,
            saladilloVVDos,
            saladilloVVTres,
            saladilloVVCuatro,
            saladilloVVCinco,
          ],
          lugar: "Saladillo",
        },
        {
          fecha: "Septiembre de 2025",
          descripcion: (
            <>
              <p>
                Por decisión del Papa Francisco en Septiembre de 2025,{" "}
                <span className="vv-estilo-detalle">
                  el templo parroquial de Nuestra Señora del Socorro fue
                  proclamado Basílica Menor,
                </span>{" "}
                en reconocimiento a su valor histórico, arquitectónico y
                espiritual. <br />
                <br />
                La vicepresidente de la Nación, Victoria Villarruel, acompañó
                junto a Claudia Rucci{" "}
                <span className="vv-estilo-detalle">
                  esta celebración tan importante e histórica para la ciudad
                  bonaerense de San Pedro,
                </span>{" "}
                junto al Nuncio Apostólico S.E. Arzobispo Mirosław Adamczyk y
                otras autoridades. <br />
                <br />
                Victoria expresó su emoción por formar parte de este momento
                destacando la importancia de la fe y la devoción de los
                argentinos:
              </p>
              <blockquote className="cita">
                "Nuestra Señora del Perpetuo Socorro ruega por la Argentina."
              </blockquote>
            </>
          ),
          imagenes: [
            sanpedroVV,
            sanpedroVVUno,
            sanpedroVVDos,
            sanpedroVVTres,
            sanpedroVVCuatro,
            sanpedroVVCinco,
            sanpedroVVSeis,
          ],
          lugar: "San Pedro",
        },
      ],
    },

    cordoba: {
      nombre: "Córdoba",
      visitas: [
        {
          fecha: "Enero de 2024",
          descripcion: (
            <>
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
                <br /> <br /> Durante su estadía, se alojó en Villa Allende, en
                la residencia de una familia amiga, fortaleciendo los lazos con
                la comunidad local.{" "}
                <span className="vv-estilo-detalle">
                  En el festival, fue recibida por la vicegobernadora Myrian
                  Prunotto, el intendente de Jesús María Federico Zárate y el
                  presidente de la comisión organizadora Juan López.
                </span>{" "}
                Villarruel expresó su agradecimiento por la cálida recepción,
                afirmando:
              </p>
              <blockquote className="cita">
                "Siempre me reciben con amor, acá soy cordobesa."
              </blockquote>
              <p>
                Además, compartió en sus redes sociales su participación en el
                festival, destacando la importancia de preservar y promover la
                cultura nacional y los eventos tradicionales que unen a las
                comunidades de todo el país.
                <span className="vv-estilo-detalle">
                  <br /> <br />
                  Esta visita reflejó su interés por participar activamente en
                  eventos culturales y tradicionales,{" "}
                </span>
                reafirmando su compromiso con el federalismo y el vínculo con
                las distintas regiones argentinas.
              </p>
            </>
          ),
          imagenes: [
            cordobaVV,
            cordobaVVDos,
            cordobaVVTres,
            cordobaVVCuatro,
            cordobaVVCinco,
            cordobaVVSeis,
          ],
          lugar: "Jesús María",
        },

        {
          fecha: "Mayo de 2024",
          descripcion: (
            <>
              <p>
                El 25 de mayo de 2024, la vicepresidente{" "}
                <span className="vv-estilo-detalle">
                  Victoria Villarruel visitó la ciudad de Córdoba para
                  participar de los actos oficiales conmemorativos del Día de la
                  Patria
                </span>
                , acompañando al presidente y autoridades nacionales. Villarruel
                agradeció la organización del evento y la colaboración de las
                fuerzas de seguridad, expresando en sus redes:
              </p>
              <blockquote className="cita">
                “¡Gracias Córdoba por recibirnos ayer! Un 25 de mayo distinto en
                mi querida Córdoba. Agradezco a la Fuerza Aérea por el traslado
                junto con los ministros del gabinete, a la Policía Federal por
                cuidarnos siempre y a todos los que hicieron cómoda nuestra
                breve estadía allí para el acto del Presidente.”
              </blockquote>
              <p>
                <span className="vv-estilo-detalle">
                  La visita reforzó el compromiso de la vicepresidente con la
                  memoria histórica, la identidad nacional y la cercanía con las
                  provincias argentinas.
                </span>
              </p>
            </>
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
            <>
              <p>
                En Tucumán,{" "}
                <span className="vv-estilo-detalle">
                  la vicepresidente Victoria Villarruel celebró el Día de la
                  Independencia acompañada por vecinos y autoridades locales.
                </span>{" "}
                Durante su visita, fue recibida con cariño, generosidad y
                alegría, reafirmando su vínculo personal y afectivo con la
                provincia que considera su tierra querida. <br />
                <br />
                <span className="vv-estilo-detalle">
                  Villarruel destacó la importancia de esta fecha histórica para
                  la Patria Argentina,
                </span>{" "}
                celebrando la independencia y transmitiendo su orgullo por la
                historia y los valores nacionales. En sus palabras:{" "}
              </p>

              <blockquote className="cita">
                "¡¡¡Feliz de estar nuevamente en mi Tucumán querido!!! ¡Viva la
                Patria! ¡Viva la Patria! ¡Viva la Patria!"
              </blockquote>
              <p>
                La visita reflejó el compromiso de la vicepresidente con la
                <span className="vv-estilo-detalle">
                  {" "}
                  memoria histórica y el federalismo
                </span>{" "}
                así como con las provincias que forjaron los cimientos de la
                Argentina.
              </p>
            </>
          ),
          imagenes: [tucuVV, tucuVVDos, tucuVVTres, tucuVVCuatro, tucuVVCinco],
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
            <>
              <p>
                El 20 de febrero de 2024, la vicepresidente{" "}
                <span className="vv-estilo-detalle">
                  Victoria Villarruel participó de los actos conmemorativos por
                  el 211° aniversario de la Batalla de Salta.
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
            </>
          ),
          imagenes: [
            saltaVV,
            saltaVVDos,
            saltaVVTres,
            saltaVVCuatro,
            saltaVVCinco,
            saltaVVSeis,
          ],
          lugar: "Ciudad de Salta",
        },
        {
          fecha: "Junio de 2024",
          descripcion: (
            <>
              <p>
                El 17 de junio de 2024, la vicepresidente{" "}
                <span className="vv-estilo-detalle">
                  Victoria Villarruel participó en Salta de los actos
                  conmemorativos en honor al General Martín Miguel de Güemes
                </span>
                , destacando la importancia de las tradiciones, la historia y
                los héroes que forjaron la Nación. Durante la jornada, <br />{" "}
                <br />
                <span className="vv-estilo-detalle">
                  Villarruel desfiló junto a Los Infernales, vistiendo con
                  humildad las ropas de gaucho salteño,
                </span>{" "}
                y se emocionó con cada fortín preparado para el desfile, en un
                homenaje al esfuerzo y la dedicación de las comunidades locales.
                La vicepresidente expresó:{" "}
              </p>
              <blockquote className="cita">
                "Recuperar el orgullo de ser argentinos es abrazar nuestro
                pasado común, amarlo y darlo a conocer a las nuevas
                generaciones… Cada gaucho es mi hermano. ¡Todo por Argentina!"
              </blockquote>
              <p>
                <span className="vv-estilo-detalle">
                  La visita reafirmó su compromiso con la memoria histórica, la
                  identidad nacional y las tradiciones del norte argentino,{" "}
                </span>
                destacando el valor de transmitir a las nuevas generaciones la
                historia y los héroes de la Patria.
              </p>
            </>
          ),
          imagenes: [guemesVV, guemesVVDos, guemesVVCuatro, guemesVVCinco],
          lugar: "Ciudad de Salta",
        },

        {
          fecha: "Agosto de 2024",
          descripcion: (
            <>
              <p>
                En agosto de 2024,{" "}
                <span className="vv-estilo-detalle">
                  la vicepresidente Victoria Villarruel realizó una gira por
                  Jujuy y Salta,
                </span>{" "}
                destacando el valor del trabajo rural y la producción
                agropecuaria como pilares de la identidad argentina. <br />
                <br />{" "}
                <span className="vv-estilo-detalle">
                  En San Pedro, Jujuy, Villarruel recorrió la finca Campo
                  Alegre,
                </span>{" "}
                acompañada por las hermanas Rodríguez Pardo y sus esposos,
                tercera generación de productores de caña de azúcar, y pudo
                conocer de cerca el esfuerzo y la dedicación que sostienen la
                producción local. <br />
                <br />{" "}
                <span className="vv-estilo-detalle">
                  Posteriormente, se trasladó a Salta, donde participó de la 80°
                  Exposición Rural,
                </span>{" "}
                acompañando a la Sociedad Rural de Salta, productores y
                distintas entidades del sector. Allí se exhibió lo mejor de la
                producción provincial, destacando la capacidad de la región para
                generar alimentos y recursos que sostienen a toda la Nación.
                Villarruel expresó:{" "}
              </p>
              <blockquote className="cita">
                "El campo es esfuerzo, sacrificio pero también es dignidad,
                esperanza y amor a la tierra… El campo es la tierra de los
                ancestros que alimenta el cuerpo pero también el alma de nuestra
                amada Patria. ¡Viva el campo argentino, el bendito suelo que nos
                alimenta, nos da cobijo y nos permite vivir y respirar
                argentinidad!
              </blockquote>
              <p>
                <span className="vv-estilo-detalle">
                  {" "}
                  La visita resaltó la importancia del sector agropecuario para
                  la economía, la cultura y la identidad nacional,
                </span>{" "}
                reafirmando el vínculo de la vicepresidente con las provincias
                del norte argentino.
              </p>
            </>
          ),
          imagenes: [ruralsaltaVV, ruralsaltaVVDos, ruralsaltaVVTres],
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
            <>
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
                Torres, y camino a Río Mayo realizó una breve parada en
                Sarmiento, saludando a empleados y vecinos. <br />
                <br />
                <span className="vv-estilo-detalle">
                  En Río Mayo, fue declarada Huésped de Honor y participó del
                  acto oficial junto al gobernador Torres,
                </span>{" "}
                el vicegobernador Gustavo Menna, el intendente Gustavo Loyaute,
                senadoras y diputadas nacionales, autoridades provinciales y
                municipales, fuerzas armadas y de seguridad. <br />
                <br /> Durante la ceremonia, Villarruel recordó con emoción su
                niñez en la localidad:{" "}
              </p>
              <blockquote className="cita">
                "Fui muy feliz en cada uno de los días que viví en este pequeño
                pedacito de nuestra inmensa Patagonia… Aprendí a amar el paisaje
                de la estepa patagónica… Fue poco mi tiempo en Río Mayo, pero
                debo decirles que soy chubutense por adopción y por elección."
              </blockquote>
              <p>
                <span className="vv-estilo-detalle">
                  La jornada incluyó un desfile cívico-militar, la inauguración
                  del Centro de Monitoreo, la presentación del nuevo sistema de
                  telemedicina en el Hospital Rural de Río Mayo, la visita al
                  Club de Abuelos y la inauguración de la obra de iluminación en
                  el ingreso a la localidad.
                </span>{" "}
                <br />
                <br />
                Durante su estadía, Villarruel{" "}
                <span className="vv-estilo-detalle">
                  también recorrió el hospital de Comodoro Rivadavia,
                </span>{" "}
                dialogó con profesionales de la salud, visitó el mural en
                homenaje al Gral. Enrique Mosconi y acompañó la inauguración del
                Muro de Contención Costero en el Hospital Alvear.{" "}
                <span className="vv-estilo-detalle">En Rada Tilly,</span>{" "}
                mantuvo un encuentro con la intendente y concejales locales,
                reafirmando su compromiso con la Patagonia. <br />
                <br />{" "}
                <span className="vv-estilo-detalle">
                  {" "}
                  El regreso de Victoria Villarruel a Río Mayo no solo honró su
                  historia personal, sino que también transmitió un mensaje de
                  federalismo, soberanía y cercanía con el pueblo argentino.
                </span>
              </p>
            </>
          ),
          imagenes: [
            chubutVV,
            chubutVVUno,
            chubutVVDos,
            chubutVVTres,
            chubutVVCuatro,
            chubutVVCinco,
            chubutVVSeis,
            chubutVVOcho,
            chubutVVNueve,
            chubutVVDiez,
            chubutVVOnce,
            chubutVVDoce,
            chubutVVTrece,
          ],
          lugar: "Río Mayo - Comodoro Rivadavia - Rada Tilly",
        },
      ],
    },

    "tierra-del-fuego": {
      nombre: "Tierra del Fuego",
      visitas: [
        {
          fecha: "Abril de 2025",
          descripcion: (
            <>
              <p>
                El 2 de abril de 2025, en un día nevado pero con el corazón
                inflamado del fuego de nuestros héroes,{" "}
                <span className="vv-estilo-detalle">
                  la vicepresidente Victoria Villarruel encabezó los actos por
                  el Día de la Veteranía y de los Caídos en la Guerra de
                  Malvinas en Ushuaia,
                </span>{" "}
                Capital de las Malvinas. <br />
                <br /> Durante el acto central, Villarruel participó de ofrendas
                florales y discursos junto a autoridades locales, con la
                presencia de niños y colegios con sus banderas de ceremonia,
                destacando la importancia de transmitir memoria y patriotismo a
                las nuevas generaciones. <br />
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
                  expresó su compromiso de volver a Tierra del Fuego,
                  reafirmando su respeto por los héroes de Malvinas y el
                  profundo amor por la Patria.
                </span>
              </p>
            </>
          ),
          imagenes: [
            tierraVV,
            tierraVVDos,
            tierraVVTres,
            tierraVVCuatro,
            tierraVVCinco,
            tierraVVSeis,
          ],
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
            <>
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
                gobernador y su gabinete, donde dialogaron sobre temas
                vinculados al desarrollo provincial y al fortalecimiento de las
                instituciones. Posteriormente,{" "}
                <span className="vv-estilo-detalle">
                  recorrieron las viviendas que el Gobierno de Catamarca
                  construye para los efectivos militares destinados en la
                  provincia,
                </span>{" "}
                destacando la importancia de acompañar y apoyar a las Fuerzas
                Armadas. <br />
                <br /> Durante la jornada, también{" "}
                <span className="vv-estilo-detalle">
                  visitó la Cuesta del Portezuelo, uno de los paisajes más
                  emblemáticos de Catamarca,
                </span>{" "}
                y culminó su visita participando en la emotiva Bajada de la
                Virgen del Valle, en la Catedral Basílica. Villarruel agradeció
                la cálida recepción de los catamarqueños y expresó:
              </p>
              <blockquote className="cita">
                "¡Gracias Catamarca! ¡Que la Virgen Morenita proteja a la
                Argentina!"
              </blockquote>
              <p>
                <span className="vv-estilo-detalle">
                  La visita combinó actividades institucionales, sociales y de
                  fe,
                </span>{" "}
                reflejando el profundo respeto de la vicepresidente por las
                tradiciones y valores espirituales que unen al pueblo argentino.
              </p>
            </>
          ),
          imagenes: [
            catamarcaVV,
            catamarcaVVDos,
            catamarcaVVTres,
            catamarcaVVCinco,
            catamarcaVVSeis,
          ],
          lugar: "San Fernando del Valle de Catamarca",
        },

        {
          fecha: "Julio de 2024",
          descripcion: (
            <>
              <p>
                En julio de 2024, la vicepresidente{" "}
                <span className="vv-estilo-detalle">
                  Victoria Villarruel visitó la provincia de Catamarca para
                  participar de la Fiesta Nacional e Internacional del Poncho,
                </span>{" "}
                uno de los eventos culturales más emblemáticos del norte
                argentino. <br />
                <br /> Durante su recorrido, Villarruel conoció ponchos,
                chalinas, orfebrería, artesanías en cuero, esterillas hilados,
                ponchos y guantes de vicuña, apreciando el trabajo artesanal y
                la riqueza cultural de la provincia. <br />
                <br />
                <span className="vv-estilo-detalle">
                  También visitó la cocina de la Peña, donde compartió la cena y
                  saludó a todos los presentes, destacando el esfuerzo y la
                  dedicación de quienes mantienen vivas las tradiciones
                  locales.{" "}
                </span>
                La vicepresidente expresó su gratitud por la calidez de los
                catamarqueños:{" "}
              </p>
              <blockquote className="cita">
                "Un día muy intenso pero que me llevo en el corazón por tanto
                amor de los argentinos. ¡Gracias Catamarca por tanto!"
              </blockquote>
              <p>
                <span className="vv-estilo-detalle">
                  La visita reflejó el compromiso de Villarruel con la cultura,
                  las tradiciones y la identidad nacional,
                </span>{" "}
                resaltando la importancia del trabajo artesanal y la celebración
                de la historia local.
              </p>
            </>
          ),
          imagenes: [
            fiestaPonchoVV,
            fiestaPonchoVVDos,
            fiestaPonchoVVTres,
            fiestaPonchoVVCuatro,
          ],
          lugar: "San Fernando del Valle de Catamarca",
        },
        {
          fecha: "Julio 2025",
          descripcion: (
            <>
              <p>
                En 2025, la vicepresidente{" "}
                <span className="vv-estilo-detalle">
                  Victoria Villarruel visitó nuevamente la provincia de
                  Catamarca,
                </span>{" "}
                compartiendo una jornada con vecinos y trabajadores marcada por
                identidad, tradición y valores profundamente arraigados en la
                historia nacional. <br />
                <br />{" "}
                <span className="vv-estilo-detalle">
                  En Belén, conocida como la cuna del poncho argentino,
                  Villarruel recorrió el taller del artesano Antonio Gutiérrez,
                  donde conoció ponchos dedicados a la selección argentina
                </span>{" "}
                y a la emblemática Ruta 40, hechos con técnicas ancestrales que
                reflejan el esfuerzo, dedicación y orgullo del interior del
                país.
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
                Desde los miradores, se contemplan las Sierras de Ambato,
                símbolo de la grandeza del paisaje y la conexión con la
                identidad argentina. Villarruel expresó:{" "}
              </p>
              <blockquote className="cita">
                "Argentina es trabajo, tradiciones y amor por nuestra tierra",
              </blockquote>
              <p>
                resaltando el ejemplo de quienes construyen día a día desde el
                interior profundo.{" "}
                <span className="vv-estilo-detalle">
                  La visita reafirmó la riqueza cultural, productiva y
                  espiritual de Catamarca, destacando la fuerza del trabajo
                  local y la fe inquebrantable de su gente.
                </span>
              </p>
            </>
          ),
          imagenes: [
            elrodeoVV,
            elrodeoVVUno,
            elrodeoVVDos,
            elrodeoVVTres,
            elrodeoVVCuatro,
            elrodeoVVCinco,
            elrodeoVVSeis,
            elrodeoVVSiete,
            elrodeoVVOcho,
            elrodeoVVNueve,
            elrodeoVVDiez,
            elrodeoVVOnce,
            elrodeoVVDoce,
          ],
          lugar: "San Fernando del Valle de Catamarca - Belén – El Rodeo",
        },
      ],
    },

    mendoza: {
      nombre: "Mendoza",
      visitas: [
        {
          fecha: "Marzo de 2024",
          descripcion: (
            <>
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
                sector público y el privado para impulsar el desarrollo
                nacional. En su discurso, definió a Mendoza como "la provincia
                de la libertad", en alusión a su rol histórico en el Cruce de
                los Andes y en la gesta de la Independencia argentina. <br />
                <br />
                Villarruel también participó del Carrusel Vendimial, donde
                saludó a los asistentes y compartió momentos con los vecinos,
                recibiendo el afecto del público. El lunes 4 de marzo,{" "}
                <span className="vv-estilo-detalle">
                  mantuvo una reunión en la Casa de Gobierno junto a la
                  vicegobernadora Hebe Casado y miembros del gabinete
                  provincial.
                </span>{" "}
                Durante el encuentro, se abordaron temas estratégicos para
                Mendoza, como infraestructura, rutas y pasos fronterizos, con el
                objetivo de fortalecer la cooperación entre la provincia y la
                Nación. <br />
                <br /> Además,{" "}
                <span className="vv-estilo-detalle">
                  visitó la Bodega Catena Zapata, reconocida a nivel
                  internacional por la excelencia de sus vinos, donde expresó su
                  orgullo por el trabajo y la proyección de la industria
                  vitivinícola mendocina.
                </span>{" "}
                Esta visita combinó actividades protocolares, institucionales y
                culturales, reafirmando el compromiso de Victoria Villarruel con
                el desarrollo y la identidad productiva de Mendoza.
              </p>
            </>
          ),
          imagenes: [
            mendozaVV,
            mendozaVVDos,
            mendozaVVTres,
            mendozaVVCuatro,
            mendozaVVCinco,
            mendozaVVSeis,
          ],
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
            <>
              <p>
                En el marco de la conmemoración por el{" "}
                <span className="vv-estilo-detalle">
                  212° aniversario del Éxodo Jujeño, la vicepresidente Victoria
                  Villarruel viajó a la provincia de Jujuy
                </span>{" "}
                para participar en los actos oficiales y recorrer distintos
                puntos emblemáticos de la región . <br />
                <br /> Durante su paso por San Pedro,{" "}
                <span className="vv-estilo-detalle">
                  visitó la finca Campo Alegre junto a las hermanas Rodríguez
                  Pardo,
                </span>{" "}
                representantes de la tercera generación de productores de caña
                de azúcar, donde destacó el valor del trabajo familiar y la
                producción regional. Posteriormente,{" "}
                <span className="vv-estilo-detalle">
                  se subió al Tren Solar de la Quebrada,
                </span>{" "}
                realizando el trayecto desde Volcán hasta Tilcara, acompañada
                por el gobernador Carlos Sadir. Desde allí, se trasladó al
                emprendimiento de{" "}
                <span className="vv-estilo-detalle">
                  Arcadium Lithium, en las cercanías de Olaroz, donde se
                  interiorizó sobre el proceso de extracción de litio,
                </span>{" "}
                un recurso estratégico para el desarrollo energético del país.
                <br />
                <br /> Como cierre de su recorrido,{" "}
                <span className="vv-estilo-detalle">
                  Villarruel visitó uno de sus lugares preferidos en la
                  provincia: las imponentes Salinas Grandes,{" "}
                </span>
                símbolo natural y orgullo del norte argentino.{" "}
                <span className="vv-estilo-detalle">
                  La visita reflejó su compromiso con el desarrollo productivo,
                  tecnológico y ambiental de la región,
                </span>{" "}
                así como su reconocimiento a la historia y el esfuerzo del
                pueblo jujeño.
              </p>
            </>
          ),
          imagenes: [
            jujuyUno,
            jujuyVVDos,
            jujuyVVTres,
            jujuyVVCuatro,
            jujuyVVCinco,
            jujuyVVSeis,
          ],
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
            <>
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
                  organizadora, con autoridades de la Federación Agraria
                  Argentina (FAA)
                </span>
                , y con representantes de la Cooperativa Arrocera de San
                Salvador Ltda., donde también visitó sus instalaciones para
                conocer de cerca los procesos productivos del sector. <br />
                <br />{" "}
                <span className="vv-estilo-detalle">
                  El objetivo de su visita fue interiorizarse sobre la realidad
                  de los productores arroceros, escuchar sus inquietudes y
                  fortalecer el vínculo con una de las economías regionales más
                  importantes del litoral.
                </span>{" "}
                Esta participación reafirmó su compromiso con el federalismo
                productivo y el desarrollo agroindustrial argentino, pilares
                fundamentales para el crecimiento del país.
              </p>
            </>
          ),
          imagenes: [
            entreriosVV,
            entreriosVVDos,
            entreriosVVTres,
            entreriosVVCuatro,
            entreriosVVCinco,
            entreriosVVSeis,
          ],
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
            <>
              <p>
                La vicepresidente Victoria{" "}
                <span className="vv-estilo-detalle">
                  Villarruel visitó la provincia de Formosa para participar en
                  el acto conmemorativo del Día del Héroe Formoseño,
                </span>{" "}
                encabezado junto al gobernador Gildo Insfrán. <br />
                <br />
                <span className="vv-estilo-detalle">
                  La ceremonia se llevó a cabo en el Regimiento de Infantería de
                  Monte 29
                </span>{" "}
                "Coronel Ignacio José Warnes" y recordó a los soldados y
                policías que perdieron la vida durante el ataque de Montoneros
                hace 50 años. <br />
                <br />
                <span className="vv-estilo-detalle">
                  Villarruel destacó la importancia de honrar la memoria de
                  quienes defendieron la provincia y la Patria,
                </span>{" "}
                reafirmando su compromiso con los valores de justicia, verdad y
                reconocimiento histórico hacia los héroes locales y nacionales.
              </p>
            </>
          ),
          imagenes: [formosaVV, formosaVVDos, formosaVVTres, formosaVVCuatro],
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
            <>
              <p>
                En septiembre de 2024, la vicepresidente Victoria{" "}
                <span className="vv-estilo-detalle">
                  Villarruel visitó la provincia de Misiones para participar de
                  la tradicional Fiesta Internacional del Inmigrante en la
                  ciudad de Oberá,
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
                nativas de la selva misionera. Allí valoró el compromiso
                ambiental del equipo y la importancia de proteger la
                biodiversidad del ecosistema. <br />
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
            </>
          ),
          imagenes: [
            misionesVV,
            misionesVVDos,
            misionesVVTres,
            misionesVVCuatro,
            misionesVVCinco,
            misionesVVSeis,
          ],
          lugar: "Oberá – Puerto Iguazú – Colonia Wanda",
        },
      ],
    },

    "la-rioja": {
      nombre: "La Rioja",
      visitas: [
        {
          fecha: "Febrero de 2026",
          lugar: "La Rioja",
          actividades: [
            {
              titulo: "Recepción Oficial",
              descripcion: (
                <>
                  <p>
                    La vicepresidente Victoria Villarruel arribó a la provincia
                    de <span className="vv-estilo-detalle">La Rioja</span> el
                    sábado 14 de Febrero, donde inició una agenda institucional
                    que combinó diálogo político, producción, cultura y
                    patrimonio. En su llegada, mantuvo un encuentro con el
                    gobernador
                    <span className="vv-estilo-detalle">
                      {" "}
                      Ricardo Quintela,{" "}
                    </span>
                    junto a los senadores nacionales Florencia López y Fernando
                    Rejal. <br />
                    <br />
                    Durante la reunión dialogaron sobre la{" "}
                    <span className="vv-estilo-detalle">
                      realidad provincial y el desarrollo federal
                    </span>
                    , reafirmando la importancia del vínculo entre Nación y
                    provincias. En ese marco, la vicepresidente expresó:{" "}
                  </p>
                  <blockquote className="cita">
                    "Seguimos fortaleciendo el vínculo con cada provincia,
                    acompañando el crecimiento y apostando al desarrollo federal
                    de la Argentina."
                  </blockquote>
                  <br />
                  <p>
                    <span className="vv-estilo-detalle">
                      La imagen junto al mandatario riojano generó debate
                      político
                    </span>{" "}
                    a nivel nacional. Frente a las críticas, Villarruel defendió
                    el carácter federal de su visita y la necesidad de diálogo
                    con todas las jurisdicciones del país. En sus redes sociales
                    manifestó:
                  </p>
                  <blockquote className="cita">
                    "Años atrás cuando{" "}
                    <span className="vv-estilo-detalle">
                      la casta repartía planes, IFEs y hablaba en inclusivo,
                      dándose la buena vida
                    </span>{" "}
                    mientras nos encerraban a todos, los operadores que juegan a
                    criticarme como{" "}
                    <span className="vv-estilo-detalle">
                      catadores de ideologías
                    </span>{" "}
                    no eran tan incisivos, ni ponían el cuerpo para resistir a
                    eso. Por eso, si en la Argentina profunda alguien vende más
                    aceitunas o visita un Parque Nacional, yo estoy feliz.
                    Después de todo, de eso se trata ésto, de{" "}
                    <span className="vv-estilo-detalle">
                      que los argentinos vivamos mejor,
                    </span>{" "}
                    tengamos trabajo y podamos vivir con nuestras familias en
                    Argentina."{" "}
                  </blockquote>
                </>
              ),
              imagenes: [
                lariojaQuintelaVV,
                lariojaQuintelaVVUno,
                lariojaQuintelaVVDos,
                lariojaQuintelaVVTres,
                lariojaQuintelaVVCuatro,
                lariojaQuintelaVVCinco,
                lariojaQuintelaVVSeis,
                lariojaQuintelaVVSiete,
              ],
            },
            {
              titulo: "Catedral",
              descripcion: (
                <>
                  <p>
                    En el plano espiritual, la vicepresidente recorrió la{" "}
                    <span className="vv-estilo-detalle">
                      Catedral y Santuario de San Nicolás de Bari
                    </span>{" "}
                    donde fue recibida por el obispo Dante Braida. Allí visitó
                    la capilla y el templo, destacando su arquitectura de
                    impronta neogótica, característica de comienzos del siglo
                    XX. También{" "}
                    <span className="vv-estilo-detalle">
                      dedicó un momento para la oración
                    </span>{" "}
                    y valoró el proceso de restauración realizado tras el
                    incendio intencional ocurrido en 2017, que permitió
                    recuperar este patrimonio histórico y espiritual de los
                    riojanos. <br />
                  </p>
                </>
              ),
              imagenes: [
                lariojaObispoVV,
                lariojaObispoVVUno,
                lariojaObispoVVDos,
                lariojaObispoVVTres,
                lariojaObispoVVCuatro,
                lariojaObispoVVCinco,
              ],
            },
            {
              titulo: "Bodega y producción regional",
              descripcion: (
                <>
                  <p>
                    La agenda continuó con una fuerte impronta productiva,
                    Villarruel visitó la bodega{" "}
                    <span className="vv-estilo-detalle">Vista Larga</span>
                    , empresa familiar que elabora vinos, aceite de oliva,
                    aceitunas y nueces, reflejando el espíritu productivo
                    riojano. <br />
                    <br />
                    Durante la recorrida{" "}
                    <span className="vv-estilo-detalle">
                      destacó la importancia de las economías regionales,
                    </span>{" "}
                    el trabajo genuino y el compromiso de quienes apuestan al
                    crecimiento productivo de la provincia.
                  </p>
                </>
              ),
              imagenes: [
                lariojaBodegaVV,
                lariojaBodegaVVUno,
                lariojaBodegaVVDos,
                lariojaBodegaVVTres,
                lariojaBodegaVVCuatro,
                lariojaBodegaVVCinco,
                lariojaBodegaVVSeis,
              ],
            },
            {
              titulo: "Fiesta Nacional de la Chaya",
              descripcion: (
                <>
                  <p>
                    En el ámbito cultural, participó de la{" "}
                    <span className="vv-estilo-detalle">
                      Fiesta Nacional de la Chaya
                    </span>{" "}
                    uno de los eventos más representativos del norte argentino.
                    La música, la alegría y las tradiciones populares marcaron
                    una noche donde la identidad riojana se expresó con fuerza.
                    <br />
                    <br />
                    Medios nacionales destacaron{" "}
                    <span className="vv-estilo-detalle">
                      su presencia entre el público y su interacción con los
                      asistentes.
                    </span>{" "}
                    Durante la celebración compartió la gastronomía típica de la
                    región, degustando humitas y empanadas riojanas, que destacó
                    por su sabor y tradición.
                  </p>
                </>
              ),
              imagenes: [
                lariojaChayaVV,
                lariojaChayaVVUno,
                lariojaChayaVVDos,
                lariojaChayaVVTres,
                lariojaChayaVVCuatro,
              ],
            },

            {
              titulo: "Parque Eólico Arauco y Parque de Dinosaurios",
              descripcion: (
                <>
                  <p>
                    Su recorrido incluyó también una mirada hacia el desarrollo
                    y la innovación, la vicepresidente recorrió el{" "}
                    <span className="vv-estilo-detalle">
                      Parque Eólico Arauco
                    </span>
                    , ejemplo de apuesta a las energías renovables que posiciona
                    a la provincia en la transición energética. <br />
                    <br />
                    También visitó el{" "}
                    <span className="vv-estilo-detalle">
                      Parque de Dinosaurios de Sanagasta
                    </span>
                    , un orgullo riojano que pone en valor la riqueza
                    paleontológica de la provincia y fortalece el turismo
                    regional.
                  </p>
                </>
              ),
              imagenes: [
                lariojaParquesVV,
                lariojaParquesVVUno,
                lariojaParquesVVDos,
                lariojaParquesVVTres,
                lariojaParquesVVCuatro,
                lariojaParquesVVCinco,
                lariojaParquesVVSeis,
                lariojaParquesVVSiete,
                lariojaParquesVVOcho,
                lariojaParquesVVNueve,
              ],
            },
            {
              titulo: "Talampaya y Paseo Cultural Castro Barros",
              descripcion: (
                <>
                  <p>
                    Antes de finalizar su estadía, Victoria Villarruel visitó el{" "}
                    <span className="vv-estilo-detalle">
                      Parque Nacional Talampaya
                    </span>
                    , declarado Patrimonio de la Humanidad y considerado uno de
                    los paisajes naturales más imponentes del país. Allí destacó
                    la belleza y el valor cultural de este símbolo del
                    patrimonio argentino. <br />
                    <br />
                    Asimismo, recorrió el{" "}
                    <span className="vv-estilo-detalle">
                      Paseo Cultural Castro Barros
                    </span>
                    , donde se encuentra el monumento a Juan Facundo Quiroga,
                    figura central del federalismo argentino. Desde ese lugar
                    histórico, expresó:{" "}
                  </p>
                  <blockquote className="cita">
                    {" "}
                    “Renuevo mi compromiso con una Argentina verdaderamente
                    federal, donde cada provincia tenga voz, protagonismo y
                    futuro.”
                  </blockquote>
                </>
              ),
              imagenes: [
                lariojaTalampayaVV,
                lariojaTalampayaVVUno,
                lariojaTalampayaVVDos,
                lariojaTalampayaVVTres,
                lariojaVVQuiroga,
                lariojaVVQuirogaDos,
                lariojaVVQuirogaUno,
              ],
            },
          ],
        },
      ],
    },

    neuquen: {
      nombre: "Neuquén",
      visitas: [
        {
          fecha: "Octubre de 2024",
          descripcion: (
            <>
              <p>
                El 22 de octubre de 2024, la vicepresidente{" "}
                <span className="vv-estilo-detalle">
                  Victoria Villarruel visitó la provincia de Neuquén,
                </span>{" "}
                donde fue recibida por el gobernador Rolo Figueroa y la
                vicegobernadora Gloria Ruiz. Junto a ellos, desarrolló una
                agenda institucional centrada en la producción energética, el
                desarrollo regional y la articulación público-privada. <br />
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
                  Banderet, recorrió la zona núcleo de explotación de Oil &
                  Gas,{" "}
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
                donde destacó el potencial productivo y turístico de la
                provincia. La visita a Neuquén reflejó su visión federal y su
                apoyo al desarrollo energético y económico sostenible del país.
              </p>
            </>
          ),
          imagenes: [
            neuquenVV,
            neuquenVVDos,
            neuquenVVTres,
            neuquenVVCuatro,
            neuquenVVCinco,
            neuquenVVSeis,
          ],
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
            <>
              <p>
                En enero de 2024, la vicepresidente{" "}
                <span className="vv-estilo-detalle">
                  Victoria Villarruel visitó la ciudad de San Carlos de
                  Bariloche,
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
                empresa estatal referente en desarrollo tecnológico, donde
                expresó su reconocimiento al talento y la capacidad de los
                profesionales argentinos. También{" "}
                <span className="vv-estilo-detalle">
                  se reunió con empresarios locales para dialogar sobre temas
                  como la reforma laboral, la seguridad, el desarrollo
                  industrial y la política de cielos abiertos,
                </span>{" "}
                destacando la importancia de impulsar la producción y el empleo
                en la Patagonia. <br />
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
                  del sur argentino y su compromiso con el desarrollo federal y
                  la defensa de los valores patrios.
                </span>
              </p>
            </>
          ),
          imagenes: [
            rioNegroUno,
            rioNegroDos,
            rioNegroTres,
            rioNegroCuatro,
            rioNegroCinco,
            rioNegroSeis,
          ],
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
            <>
              <p>
                El 2 de mayo de 2024, la vicepresidente{" "}
                <span className="vv-estilo-detalle">
                  Victoria Villarruel realizó una visita oficial a la provincia
                  de San Luis, donde fue recibida por el gobernador Claudio
                  Poggi
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
                sanluiseña. A lo largo de la jornada, expresó su alegría por
                poder compartir estos momentos de devoción y encuentro con la
                comunidad, destacando el valor espiritual y cultural de las
                tradiciones que unen a los argentinos. <br />
                <br />
                <span className="vv-estilo-detalle">
                  La visita reflejó su cercanía con las provincias y su respeto
                  por las expresiones de fe popular que forman parte del
                  patrimonio nacional.
                </span>
              </p>
            </>
          ),
          imagenes: [
            sanLuisVV,
            sanLuisVVDos,
            sanLuisVVTres,
            sanLuisVVCuatro,
            sanLuisVVCinco,
            sanLuisVVSeis,
          ],
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
            <>
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
                La ceremonia se realizó en el histórico Campo de la Gloria,
                donde Villarruel estuvo acompañada por autoridades locales y
                nacionales.
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
                valores fundamentales que guían su labor como dirigente
                nacional.
              </p>
            </>
          ),
          imagenes: [santafeVV, santafeVVDos, santafeVVTres, santafeVVCuatro],
          lugar: "San Lorenzo",
        },

        {
          fecha: "Junio de 2024",
          descripcion: (
            <>
              <p>
                En junio de 2024, la vicepresidente Victoria{" "}
                <span className="vv-estilo-detalle">
                  Villarruel participó de los actos del Día de la Bandera en
                  Rosario,
                </span>{" "}
                reafirmando su compromiso con los símbolos patrios y la
                identidad nacional. <br />
                <br />
                Durante la jornada, Villarruel{" "}
                <span className="vv-estilo-detalle">
                  destacó la importancia de honrar la Bandera Argentina
                </span>{" "}
                y transmitir a las nuevas generaciones los valores de unidad,
                memoria y amor por la Patria. En sus palabras:{" "}
              </p>
              <blockquote className="cita">
                "No hay Bandera más bella y tierra más bendita. Argentina todos
                los días en el corazón."
              </blockquote>
              <p>
                <span className="vv-estilo-detalle">
                  La visita combinó actos cívicos y emotivos, reflejando el
                  vínculo profundo de la vicepresidente con los símbolos
                  históricos y culturales de la Nación.
                </span>
              </p>
            </>
          ),
          imagenes: [
            banderaroVV,
            banderaroVVDos,
            banderaroVVTres,
            banderaroVVCuatro,
          ],
          lugar: "Rosario",
        },
        {
          fecha: "Junio de 2025",
          descripcion: (
            <>
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
                , reafirmando su compromiso con los valores patrios y la
                formación cívica de los jóvenes argentinos. <br />
                <br /> Posteriormente, Villarruel se trasladó a San Nicolás, en
                la provincia de Buenos Aires, para visitar{" "}
                <span className="vv-estilo-detalle">
                  la Basílica de la Virgen del Rosario de San Nicolás
                </span>
                , destacando la importancia de la fe y la devoción como pilares
                culturales y espirituales del país. <br />
                <br />
                <span className="vv-estilo-detalle">
                  La visita combinó actos cívicos y religiosos, reflejando el
                  amor de Villarruel por la Patria argentina y su vínculo con
                  los símbolos históricos y espirituales de la nación.
                </span>
              </p>
            </>
          ),
          imagenes: [
            banderaVV,
            banderaVVDos,
            banderaVVTres,
            banderaVVCuatro,
            banderaVVCinco,
          ],
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
            <>
              <p>
                El 20 de julio de 2025,{" "}
                <span className="vv-estilo-detalle">
                  la vicepresidente Victoria Villarruel visitó la Ciudad Capital
                  de Santiago del Estero, en el marco de su gira institucional
                  por el norte argentino.
                </span>{" "}
                Procedente de Catamarca, desarrolló una agenda orientada a
                fortalecer el vínculo entre el Gobierno nacional y las
                administraciones provinciales, en un contexto de diálogo sobre
                gobernabilidad y federalismo. <br />
                <br /> Durante su estadía,{" "}
                <span className="vv-estilo-detalle">
                  Villarruel se reunió con el gobernador Gerardo Zamora, con
                  quien abordó temas institucionales, obras públicas,
                  distribución de fondos y desarrollo regional.
                </span>{" "}
                La reunión se llevó a cabo en un clima de interés mutuo por
                mantener canales de comunicación abiertos y efectivos entre
                Nación y provincia. <br />
                <br />
                <span className="vv-estilo-detalle">
                  Su presencia en Santiago del Estero formó parte de una agenda
                  federal
                </span>{" "}
                que incluyó actividades en Catamarca, reafirmando el compromiso
                de la vicepresidente con las provincias del norte argentino y el{" "}
                <span className="vv-estilo-detalle">
                  fortalecimiento de la cooperación institucional más allá de
                  las diferencias políticas.
                </span>
              </p>
            </>
          ),
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
            <>
              <p>
                En febrero de 2024, la vicepresidente Victoria Villarruel visitó
                la provincia de Corrientes para participar en los actos
                conmemorativos por el{" "}
                <span className="vv-estilo-detalle">
                  246° aniversario del natalicio del General José de San Martín.
                </span>{" "}
                Arribó el sábado 24 al aeropuerto Fernando Piragine Niveyro,
                donde fue recibida por el gobernador Gustavo Valdés. <br />
                <br />
                Al día siguiente,
                <span className="vv-estilo-detalle">
                  se trasladó a la localidad de Yapeyú, cuna del Libertador,
                  para asistir a la ceremonia oficial en su honor.
                </span>{" "}
                Durante su discurso, Villarruel resaltó la importancia de la
                unidad nacional en tiempos difíciles, afirmando:{" "}
              </p>
              <blockquote className="cita">
                "En esta tierra soy correntina y todos, argentinos, en estos
                momentos tan difíciles de la Argentina, tenemos que estar
                cohesionados y aunados para sacar nuestro país adelante y para
                ayudar a nuestros compatriotas que más están sufriendo."
              </blockquote>
              <p>
                <span className="vv-estilo-detalle">
                  En reconocimiento a su presencia, el gobernador Valdés la
                  declaró huésped de honor de la provincia.
                </span>{" "}
                La visita de Villarruel reflejó su profundo respeto por la
                figura de San Martín y su compromiso con los valores patrióticos
                que forjaron la identidad nacional.
              </p>
            </>
          ),
          imagenes: [
            corrientesVV,
            corrientesVVDos,
            corrientesVVTres,
            corrientesVVCuatro,
            corrientesVVCinco,
            corrientesVVSeis,
          ],
          lugar: "Yapeyú",
        },
        {
          fecha: "Agosto de 2025",
          descripcion: (
            <>
              <p>
                En 2024, la vicepresidente Victoria Villarruel visitó nuevamente
                la provincia de Corrientes, participando en la{" "}
                <span className="vv-estilo-detalle">
                  recepción de los restos del sargento Juan Bautista Cabral en
                  la localidad de Saladas.
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
              </p>
              <blockquote className="cita">
                "Cabral nos recuerda que la patria se hace con actos de grandeza
                silenciosos y sacrificios cotidianos… Para los que tenemos el
                privilegio de servir a nuestro pueblo, la entrega del sargento
                Cabral es un llamado a poner lo mejor de nosotros, con coraje y
                sin esperar recompensa."
              </blockquote>
              <p>
                La agenda de la visita incluyó un recorrido por la{" "}
                <span className="vv-estilo-detalle">
                  Casa de Gobierno de Corrientes, la Iglesia de Nuestra Señora
                  de la Merced, la plaza 25 de Mayo, el paseo costero y el
                  proyecto La Unión,
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
            </>
          ),
          imagenes: [
            saladasVV,
            saladasVVUno,
            saladasVVDos,
            saladasVVTres,
            saladasVVCuatro,
            saladasVVCinco,
            saladasVVSeis,
            saladasVVSiete,
            saladasVVOcho,
            saladasVVNueve,
            saladasVVDiez,
          ],
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
                  {visita.lugar && (
                    <p className="lugar-visita">
                      <strong>Lugar:</strong> {visita.lugar}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Si la visita tiene actividades, renderizar cada una */}
            {visita.actividades && visita.actividades.length > 0 ? (
              visita.actividades.map((actividad, actividadIndex) => (
                <div
                  key={actividadIndex}
                  style={{ marginBottom: "3rem" }}
                  className="actividad-container"
                >
                  <div className="row">
                    <div className="col-12">
                      <h2 className="titulo-actividad">
                        {actividad.titulo || `Actividad ${actividadIndex + 1}`}
                      </h2>
                    </div>
                  </div>

                  {actividad.imagenes && actividad.imagenes.length > 0 ? (
                    <div className="row">
                      <div className="col-12">
                        <Carousel
                          fade
                          indicators={actividad.imagenes.length > 1}
                          className="carousel-provincia"
                          activeIndex={
                            imagenIndex[
                              `visita-${visitaIndex}-actividad-${actividadIndex}`
                            ] || 0
                          }
                          onSelect={(index) =>
                            setImagenIndex({
                              ...imagenIndex,
                              [`visita-${visitaIndex}-actividad-${actividadIndex}`]:
                                index,
                            })
                          }
                        >
                          {actividad.imagenes.map((imagen, index) => (
                            <Carousel.Item key={index}>
                              <img
                                src={imagen}
                                alt={`${provincia.nombre} - ${
                                  actividad.titulo ||
                                  `Actividad ${actividadIndex + 1}`
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
                        <div className="descripcion-visita">
                          {actividad.descripcion}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              /* Formato tradicional: descripción general y galería general */
              <>
                {visita.imagenes && visita.imagenes.length > 0 ? (
                  <div className="row">
                    <div className="col-12">
                      <Carousel
                        fade
                        indicators={visita.imagenes.length > 1}
                        className="carousel-provincia"
                        activeIndex={imagenIndex[visitaIndex] || 0}
                        onSelect={(index) =>
                          setImagenIndex({
                            ...imagenIndex,
                            [visitaIndex]: index,
                          })
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

                {visita.descripcion && (
                  <div className="row">
                    <div className="col-12">
                      <div className="descripcion-container">
                        <h2 className="subtitulo-descripcion">
                          Sobre la visita
                        </h2>
                        <div className="descripcion-visita">
                          {visita.descripcion}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ProvinciaDetalle;
