import React from "react";
import { useParams } from "react-router-dom";
import SenadoTemas from "../components/SenadoTemas";

const Senado = () => {
  const { tema } = useParams();

  return <SenadoTemas tema={tema} />;
};

export default Senado;
