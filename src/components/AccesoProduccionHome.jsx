import { Link } from "react-router-dom";
import "../css/accesoProduccionHome.css";

// PROVISIONAL: único acceso a /industria-produccion mientras se revisa el
// diseño de la sección (todavía no está en Navegador, Footer ni sitemap).
// Para quitarlo: borrar este archivo, src/css/accesoProduccionHome.css y
// su import/uso en pages/Home.jsx.
const AccesoProduccionHome = () => {
  return (
    <div className="container acceso-produccion-home">
      <Link to="/industria-produccion" className="acceso-produccion-home-cta">
        Industria y Producción
      </Link>
    </div>
  );
};

export default AccesoProduccionHome;
