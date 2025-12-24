import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navegador from "../components/Navegador";
import Biografia from "../pages/Biografia";
import Trayectoria from "../pages/Trayectoria";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";
import Celtyv from "../components/Celtyv";
import GaleriaDetalle from "../components/GaleriaDetalle";
import Senado from "../pages/Senado";
import ProvinciaDetalle from "../pages/ProvinciaDetalle";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from "react-helmet-async";
const SITE_URL = import.meta.env.VITE_SITE_URL;

const AppContent = () => {
  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Todo Por Argentina" />
        <meta
          property="og:description"
          content="Biografía, trayectoria y actividad institucional de Victoria Villarruel."
        />
        <meta
          property="og:image"
          content={`${SITE_URL}/assets/img/index/flyer.webp`}
        />
      </Helmet>
      <ScrollToTop />
      <Navegador />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/celtyv" element={<Celtyv />} />
        <Route path="/senado/:tema" element={<Senado />} />
        <Route path="/trayectoria" element={<Trayectoria />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeria/:categoria" element={<GaleriaDetalle />} />
        <Route path="/provincia/:slug" element={<ProvinciaDetalle />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
