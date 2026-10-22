import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { indiceProduccion } from "../utils/indiceProduccion";
import ProduccionSectores from "../components/ProduccionSectores";
import ProduccionExplorador from "../components/ProduccionExplorador";
import ProduccionAgenda from "../components/ProduccionAgenda";
import "../css/industriaProduccion.css";

const SITE_URL = import.meta.env.VITE_SITE_URL;

// Industria y Producción (versión de desarrollo, ruta provisional).
//
// Todo el contenido sale de src/utils/indiceProduccion.js, que lo deriva
// de las visitas provinciales: acá no hay cantidades fijas. Todavía no
// figura en Navegador, Footer ni sitemap; el único acceso es el botón
// provisional del Home (AccesoProduccionHome). Mientras el diseño esté en
// revisión la página se marca noindex: quitarlo al publicarla.
//
// Dos apartados (pestañas con forma de tarjeta), uno por catálogo: establecimientos
// (establecimientosProductivos.js) y actividades del sector productivo
// (actividadesSectoriales.js). La clasificación es la de los datos; acá no
// se reclasifica nada. La pestaña activa vive solo en el estado (no en la
// URL): AnalyticsTracker registra un page_view por cada cambio de `search`.
//
// El encabezado no repite cifras generales: los contadores de las
// tarjetas y el gráfico por sector ya las muestran (las estadísticas
// siguen calculándose en indiceProduccion).

const { establecimientos, actividadesSectoriales, estadisticas } =
  indiceProduccion;

const APARTADOS = [
  {
    clave: "establecimientos",
    nombre: "Establecimientos productivos",
    descripcion: "Fábricas, empresas, fincas y emprendimientos",
    icono: "fa-industry",
    cantidad: estadisticas.totalEstablecimientos,
    unidad: ["establecimiento", "establecimientos"],
  },
  {
    clave: "actividades",
    nombre: "Actividades del sector productivo",
    descripcion: "Exposiciones, ferias y encuentros con productores",
    icono: "fa-calendar",
    cantidad: estadisticas.totalActividadesSectoriales,
    unidad: ["actividad", "actividades"],
  },
];

const prefiereMovimientoReducido = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const IndustriaProduccion = () => {
  const [apartado, setApartado] = useState(APARTADOS[0].clave);
  const pestaniasRef = useRef([]);
  // Filtro por sector compartido entre el gráfico y el explorador.
  const [sector, setSector] = useState(null);
  const exploradorRef = useRef(null);

  // Patrón de pestañas WAI-ARIA: flechas, Inicio y Fin mueven el foco y
  // activan la pestaña.
  const moverConTeclado = (evento, indice) => {
    const ultimo = APARTADOS.length - 1;
    const destino = {
      ArrowRight: indice === ultimo ? 0 : indice + 1,
      ArrowLeft: indice === 0 ? ultimo : indice - 1,
      Home: 0,
      End: ultimo,
    }[evento.key];
    if (destino === undefined) return;
    evento.preventDefault();
    setApartado(APARTADOS[destino].clave);
    pestaniasRef.current[destino]?.focus();
  };

  // Al elegir un sector en el gráfico, se lleva la vista al listado ya
  // filtrado. Quitar la selección no mueve la página.
  const seleccionarDesdeGrafico = (nuevoSector) => {
    setSector(nuevoSector);
    if (nuevoSector && exploradorRef.current) {
      exploradorRef.current.scrollIntoView({
        behavior: prefiereMovimientoReducido() ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="industria-produccion">
      <Helmet>
        <title>Industria y Producción | Victoria Villarruel</title>
        <meta
          name="description"
          content="Empresas, industrias, cooperativas y producciones regionales documentadas durante las visitas de Victoria Villarruel por la Argentina."
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={`${SITE_URL}/industria-produccion`} />
      </Helmet>

      <header className="produccion-encabezado">
        <div className="container">
          <p className="produccion-kicker">Recorrido productivo</p>
          <h1 className="produccion-titulo">Industria y Producción</h1>
          <p className="produccion-intro">
            Un recorrido por las empresas, industrias, cooperativas y
            producciones regionales, y por las exposiciones, ferias y
            encuentros sectoriales documentados durante las visitas de
            Victoria Villarruel por la Argentina.
          </p>
        </div>
      </header>

      <section
        className="produccion-apartados"
        aria-labelledby="produccion-apartados-titulo"
      >
        <div className="container">
          <h2 id="produccion-apartados-titulo" className="produccion-apartados-titulo">
            Explorá la agenda productiva
          </h2>
          <div
            className="produccion-pestanias"
            role="tablist"
            aria-labelledby="produccion-apartados-titulo"
          >
            {APARTADOS.map(({ clave, nombre, descripcion, icono, cantidad, unidad }, indice) => {
              const activo = apartado === clave;
              return (
                <button
                  key={clave}
                  ref={(nodo) => {
                    pestaniasRef.current[indice] = nodo;
                  }}
                  type="button"
                  role="tab"
                  id={`produccion-pestania-${clave}`}
                  aria-selected={activo}
                  aria-controls={`produccion-panel-${clave}`}
                  tabIndex={activo ? 0 : -1}
                  className={`produccion-pestania${activo ? " activo" : ""}`}
                  onClick={() => setApartado(clave)}
                  onKeyDown={(evento) => moverConTeclado(evento, indice)}
                >
                  <span className="produccion-pestania-icono" aria-hidden="true">
                    <i className={`fa ${icono}`} />
                  </span>
                  <span className="produccion-pestania-texto">
                    <span className="produccion-pestania-nombre">{nombre}</span>
                    <span className="produccion-pestania-descripcion">
                      {descripcion}
                    </span>
                  </span>
                  <span className="produccion-pestania-cantidad">
                    <strong>{cantidad}</strong>{" "}
                    <span className="produccion-pestania-unidad">
                      {cantidad === 1 ? unidad[0] : unidad[1]}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Los dos paneles quedan montados (solo se ocultan) para que los
          filtros de cada apartado se conserven al cambiar de pestaña. */}
      <div
        role="tabpanel"
        id="produccion-panel-establecimientos"
        aria-labelledby="produccion-pestania-establecimientos"
        hidden={apartado !== "establecimientos"}
      >
        <section
          className="produccion-bloque produccion-bloque-sectores"
          aria-labelledby="produccion-sectores-titulo"
        >
          <div className="container">
            <div className="produccion-bloque-encabezado">
              <h2 id="produccion-sectores-titulo">Por sector productivo</h2>
              <p>Distribución de los establecimientos visitados.</p>
            </div>
            <ProduccionSectores
              porSector={estadisticas.establecimientosPorSector}
              total={estadisticas.totalEstablecimientos}
              sectorSeleccionado={sector}
              onSeleccionar={seleccionarDesdeGrafico}
            />
          </div>
        </section>

        <section
          className="produccion-bloque"
          aria-labelledby="produccion-explorador-titulo"
          ref={exploradorRef}
        >
          <div className="container">
            <div className="produccion-bloque-encabezado">
              <h2 id="produccion-explorador-titulo">
                Establecimientos productivos
              </h2>
            </div>
            <ProduccionExplorador
              establecimientos={establecimientos}
              porProvincia={estadisticas.establecimientosPorProvincia}
              porSector={estadisticas.establecimientosPorSector}
              sector={sector}
              onCambiarSector={setSector}
            />
          </div>
        </section>
      </div>

      <div
        role="tabpanel"
        id="produccion-panel-actividades"
        aria-labelledby="produccion-pestania-actividades"
        hidden={apartado !== "actividades"}
      >
        <section
          className="produccion-bloque produccion-bloque-agenda"
          aria-labelledby="produccion-agenda-titulo"
        >
          <div className="container">
            <div className="produccion-bloque-encabezado">
              <h2 id="produccion-agenda-titulo">
                Actividades del sector productivo
              </h2>
            </div>
            <ProduccionAgenda actividades={actividadesSectoriales} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndustriaProduccion;
