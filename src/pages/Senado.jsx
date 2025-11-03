import React from "react";
import { useParams } from "react-router-dom";
import SenadoTemas from "../components/SenadoTemas";
import Footer from "../components/Footer";

const Senado = () => {
  const { tema } = useParams();

  return (
    <>
      <SenadoTemas tema={tema} />
      <Footer />
    </>
  );
};

export default Senado;
