import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import "../css/privacidad.css";

const SITE_URL = import.meta.env.VITE_SITE_URL;

const Privacidad = () => {
  return (
    <div>
      <Helmet>
        <title>Privacidad y cookies | Todo por Argentina</title>
        <meta
          name="description"
          content="Información sobre el tratamiento de datos del formulario de contacto, el uso de Google Analytics y las preferencias de cookies en Todo por Argentina."
        />
        <link rel="canonical" href={`${SITE_URL}/privacidad`} />
      </Helmet>

      <main className="container-privacidad">
        <h1 className="titulo-privacidad">Privacidad y cookies</h1>

        <h2 className="subtitulo-privacidad">Sobre este sitio</h2>
        <p className="parrafo-privacidad">
          Todo por Argentina es un sitio independiente. No representa de manera
          oficial a Victoria Villarruel ni a ninguna institución pública.
        </p>

        <h2 className="subtitulo-privacidad">Formulario de contacto</h2>
        <p className="parrafo-privacidad">
          Si usás el formulario de contacto, el sitio puede solicitar:
        </p>
        <ul className="lista-privacidad">
          <li>nombre</li>
          <li>correo electrónico</li>
          <li>teléfono</li>
          <li>mensaje</li>
        </ul>
        <p className="parrafo-privacidad">
          Esos datos se utilizan para responder el contacto recibido. El envío
          del formulario se realiza a través de EmailJS.
        </p>

        <h2 className="subtitulo-privacidad">Google Analytics</h2>
        <p className="parrafo-privacidad">
          El sitio puede usar Google Analytics 4 para obtener estadísticas
          generales sobre cómo se recorre la página.
        </p>
        <p className="parrafo-privacidad">
          Analytics solo se habilita si aceptás esa medición. Rechazarla no
          impide usar el sitio. La preferencia se guarda de forma local en el
          navegador y se puede cambiar más adelante.
        </p>

        <h2 className="subtitulo-privacidad">Cookies de Analytics</h2>
        <p className="parrafo-privacidad">
          Si Analytics está activo, GA4 puede usar cookies propias de medición,
          por ejemplo <code className="codigo-privacidad">_ga</code> y{" "}
          <code className="codigo-privacidad">_ga_&lt;identificador&gt;</code>.
        </p>

        <h2 className="subtitulo-privacidad">Preferencias</h2>
        <p className="parrafo-privacidad">
          En el pie de página está el enlace Preferencias de cookies. Desde ahí
          se puede volver a aceptar o rechazar Analytics, sin dejar de usar el
          resto del sitio.
        </p>

        <h2 className="subtitulo-privacidad">Servicios externos</h2>
        <p className="parrafo-privacidad">
          Algunas funciones del sitio dependen de servicios externos. Hoy se
          utilizan, entre otros:
        </p>
        <ul className="lista-privacidad">
          <li>Cloudinary, para imágenes</li>
          <li>YouTube, para contenido audiovisual</li>
          <li>EmailJS, para el formulario de contacto</li>
          <li>Font Awesome, para iconos</li>
        </ul>
        <p className="parrafo-privacidad">
          Esos servicios pueden procesar las solicitudes técnicas necesarias
          para mostrar su contenido o prestar su función.
        </p>

        <h2 className="subtitulo-privacidad">Cambios</h2>
        <p className="parrafo-privacidad">
          Esta información puede actualizarse si cambian las funcionalidades o
          los servicios que usa el sitio.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidad;
