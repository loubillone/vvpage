import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import Home from "../pages/Home";
import Navegador from "../components/Navegador";
import Biografia from "../pages/Biografia";
import Trayectoria from "../pages/Trayectoria";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";
import Celtyv from "../components/Celtyv";
import GaleriaDetalle from "../components/GaleriaDetalle";
import Senado from "../pages/Senado";
import SenadoAnio from "../pages/SenadoAnio";
import SenadoActividadDetalle from "../pages/SenadoActividadDetalle";
import ProvinciaDetalle from "../pages/ProvinciaDetalle";
import VisitaDetalle from "../pages/VisitaDetalle";
import Discursos from "../pages/Discursos";
import ScrollToTop from "../components/ScrollToTop";

// Redirects de compatibilidad: las URLs canónicas de provincias pasaron de
// /provincia/... a /provincias/..., pero /provincia/... pudo haber sido
// indexado por buscadores o compartido en redes antes del cambio. Estos
// componentes preservan los parámetros de la URL vieja y redirigen (client
// side, vía React Router) a la URL nueva equivalente.
//
// IMPORTANTE: este <Navigate replace /> NO es una redirección HTTP 301 real.
// Es una redirección que solo ocurre una vez que el JS de React se ejecuta en
// el navegador, por lo que no transfiere "SEO juice" a buscadores ni bots que
// no ejecuten JavaScript. La redirección 301 real se debe implementar más
// adelante a nivel de servidor (.htaccess), en una fase posterior.
const RedirectProvinciaLegacy = () => {
  const { slug } = useParams();
  return <Navigate to={`/provincias/${slug}`} replace />;
};

const RedirectVisitaLegacy = () => {
  const { slug, visitaSlug } = useParams();
  return <Navigate to={`/provincias/${slug}/${visitaSlug}`} replace />;
};

const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <Navegador />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/celtyv" element={<Celtyv />} />
        <Route
          path="/senado"
          element={<Navigate to="/senado/malvinas" replace />}
        />
        <Route path="/senado/:tema" element={<Senado />} />
        <Route path="/senado/:tema/:anio" element={<SenadoAnio />} />
        <Route
          path="/senado/:tema/:anio/:actividadSlug"
          element={<SenadoActividadDetalle />}
        />
        <Route path="/trayectoria" element={<Trayectoria />} />
        <Route path="/discursos" element={<Discursos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeria/:categoria" element={<GaleriaDetalle />} />
        <Route path="/provincias/:slug" element={<ProvinciaDetalle />} />
        <Route
          path="/provincias/:slug/:visitaSlug"
          element={<VisitaDetalle />}
        />
        {/* Compatibilidad temporal con las URLs antiguas (singular).
            Ver comentario junto a RedirectProvinciaLegacy más arriba. */}
        <Route path="/provincia/:slug" element={<RedirectProvinciaLegacy />} />
        <Route
          path="/provincia/:slug/:visitaSlug"
          element={<RedirectVisitaLegacy />}
        />
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
