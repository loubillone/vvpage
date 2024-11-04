import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navegador from "../components/Navegador";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
