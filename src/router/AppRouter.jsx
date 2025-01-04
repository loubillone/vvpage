import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navegador from "../components/Navegador";
import Biografia from "../pages/Biografia";
import Trayectoria from "../pages/Trayectoria";
import Noticias from "../pages/Noticias";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/trayectoria" element={<Trayectoria />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
