import React from "react";
import flyer from "../assets/img/index/flyer.png";
import "../css/flyer.css";

const FlyerHome = () => {
  return (
    <div>
      <img src={flyer} alt="sol de mayo" className="solDeMayo" />
    </div>
  );
};

export default FlyerHome;
