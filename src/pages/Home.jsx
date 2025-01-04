import React from "react";
import FlyerHome from "../components/FlyerHome";
import UltimasNoticias from "../components/UltimasNoticias";
import FotosIndex from "../components/FotosIndex";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <FlyerHome />

      <UltimasNoticias />

      <FotosIndex />
    </div>
  );
};

export default Home;
