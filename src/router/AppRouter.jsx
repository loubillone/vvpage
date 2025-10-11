import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Navegador from "../components/Navegador";
import Biografia from "../pages/Biografia";
import Trayectoria from "../pages/Trayectoria";
// import Noticias from "../pages/Noticias";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";
import Footer from "../components/Footer";
import Celtyv from "../components/Celtyv";
import Malvinas from "../components/Malvinas";
import GaleriaDetalle from "../components/GaleriaDetalle";
import Senado from "../pages/Senado";
import VictimasTerrorismo from "../components/VictimasTerrorismo";

const AppContent = () => {
  const location = useLocation();
  const isGalleryDetail =
    location.pathname.startsWith("/galeria/") &&
    location.pathname !== "/galeria";

  return (
    <>
      <Navegador />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/celtyv" element={<Celtyv />} />
        <Route path="/senado" element={<Senado />} />
        <Route path="/malvinas" element={<Malvinas />} />
        <Route path="/victimasDelTerrorismo" element={<VictimasTerrorismo />} />
        <Route path="/trayectoria" element={<Trayectoria />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeria/:categoria" element={<GaleriaDetalle />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      {!isGalleryDetail && <Footer />}
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
