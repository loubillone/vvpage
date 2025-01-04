import React from "react";
import FlyerHome from "../components/FlyerHome";
import UltimasNoticias from "../components/UltimasNoticias";
import FotosIndex from "../components/FotosIndex";
import NuestroCompromiso from "../components/NuestroCompromiso";

const Home = () => {
  return (
    <div>
      <FlyerHome />

      <UltimasNoticias />

      <FotosIndex />

      <NuestroCompromiso />
    </div>
  );
};

export default Home;
