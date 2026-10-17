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

const { establecimientos, actividadesSectoriales, estadisticas } =
  indiceProduccion;

const sectoresRepresentados = Object.values(
  estadisticas.establecimientosPorSector
).filter((cantidad) => cantidad > 0).length;

const prefiereMovimientoReducido = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const IndustriaProduccion = () => {
  // Filtro por sector compartido entre el gráfico y el explorador.
  const [sector, setSector] = useState(null);
  const exploradorRef = useRef(null);

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
            producciones regionales documentadas durante las visitas de
            Victoria Villarruel por la Argentina.
          </p>

          <dl className="produccion-cifras">
            <div className="produccion-cifra">
              <dt>Establecimientos productivos</dt>
              <dd>
                <span className="produccion-cifra-valor">
                  {estadisticas.totalEstablecimientos}
                </span>
                <span className="produccion-cifra-nota">
                  únicos, con {estadisticas.totalReferenciasEstablecimientos}{" "}
                  menciones en visitas
                </span>
              </dd>
            </div>
            <div className="produccion-cifra">
              <dt>Sectores productivos representados</dt>
              <dd>
                <span className="produccion-cifra-valor">
                  {sectoresRepresentados}
                </span>
                <span className="produccion-cifra-nota">
                  entre los establecimientos visitados
                </span>
              </dd>
            </div>
            <div className="produccion-cifra">
              <dt>Visitas provinciales vinculadas</dt>
              <dd>
                <span className="produccion-cifra-valor">
                  {estadisticas.totalVisitasVinculadas}
                </span>
                <span className="produccion-cifra-nota">
                  con establecimientos o actividades sectoriales
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </header>

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
            <h2 id="produccion-explorador-titulo">Establecimientos</h2>
            <p>
              Empresas, plantas, cooperativas y productores, con el enlace a la
              visita en la que se documentaron.
            </p>
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

      <section
        className="produccion-bloque produccion-bloque-agenda"
        aria-labelledby="produccion-agenda-titulo"
      >
        <div className="container">
          <div className="produccion-bloque-encabezado">
            <h2 id="produccion-agenda-titulo">Agenda productiva</h2>
            <p>
              {estadisticas.totalActividadesSectoriales} actividades
              sectoriales (exposiciones, ferias, encuentros, cámaras,
              entidades y organismos) con{" "}
              {estadisticas.totalParticipacionesSectoriales} participaciones
              registradas.
            </p>
          </div>
          <ProduccionAgenda actividades={actividadesSectoriales} />
        </div>
      </section>
    </div>
  );
};

export default IndustriaProduccion;
