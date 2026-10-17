import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SECTORES, TIPOS_ESTABLECIMIENTO } from "../data/sectoresProductivos";
import ProduccionFoto from "./ProduccionFoto";

// Explorador de establecimientos productivos: listado editorial (foto +
// texto, sin cards) con filtros por provincia, sector y nombre. El filtro
// por sector lo comparte con el gráfico (lo guarda la página). Se
// muestran de a CANTIDAD_POR_PASO para no renderizar todo de entrada.

const CANTIDAD_POR_PASO = 8;

// Minúsculas y sin tildes, para que "lacteos" encuentre "Lácteos".
const normalizar = (texto) =>
  (texto ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();

const ProduccionExplorador = ({
  establecimientos,
  porProvincia,
  porSector,
  sector,
  onCambiarSector,
}) => {
  const [provincia, setProvincia] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [cantidadVisible, setCantidadVisible] = useState(CANTIDAD_POR_PASO);

  // Al cambiar cualquier filtro (incluido el sector elegido en el
  // gráfico) se vuelve a la primera tanda de resultados.
  useEffect(() => {
    setCantidadVisible(CANTIDAD_POR_PASO);
  }, [provincia, sector, busqueda]);

  const provincias = useMemo(
    () => Object.keys(porProvincia).sort((a, b) => a.localeCompare(b, "es")),
    [porProvincia]
  );
  const sectores = Object.keys(SECTORES).filter((s) => porSector[s] > 0);

  const filtrados = useMemo(() => {
    const termino = normalizar(busqueda);
    return establecimientos.filter(
      (e) =>
        (!provincia || e.provincia === provincia) &&
        (!sector || e.sector === sector) &&
        (!termino || normalizar(e.nombre).includes(termino))
    );
  }, [establecimientos, provincia, sector, busqueda]);

  const hayFiltros = Boolean(provincia || sector || busqueda);
  const visibles = filtrados.slice(0, cantidadVisible);
  const restantes = filtrados.length - visibles.length;

  const restablecer = () => {
    setProvincia("");
    setBusqueda("");
    onCambiarSector(null);
  };

  return (
    <div className="produccion-explorador">
      <form
        className="produccion-filtros"
        role="search"
        aria-label="Filtrar establecimientos"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="produccion-filtro">
          <label htmlFor="produccion-filtro-provincia">Provincia</label>
          <select
            id="produccion-filtro-provincia"
            className="form-select"
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
          >
            <option value="">Todas las provincias</option>
            {provincias.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="produccion-filtro">
          <label htmlFor="produccion-filtro-sector">Sector</label>
          <select
            id="produccion-filtro-sector"
            className="form-select"
            value={sector ?? ""}
            onChange={(e) => onCambiarSector(e.target.value || null)}
          >
            <option value="">Todos los sectores</option>
            {sectores.map((s) => (
              <option key={s} value={s}>
                {SECTORES[s].nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="produccion-filtro produccion-filtro-busqueda">
          <label htmlFor="produccion-filtro-busqueda">Buscar por nombre</label>
          <input
            id="produccion-filtro-busqueda"
            type="search"
            className="form-control"
            placeholder="Ej.: Havanna"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="produccion-boton produccion-boton-secundario"
          onClick={restablecer}
          disabled={!hayFiltros}
        >
          Restablecer filtros
        </button>
      </form>

      <p className="produccion-resultados" aria-live="polite">
        {filtrados.length === 0
          ? "Sin resultados para los filtros elegidos."
          : `Mostrando ${visibles.length} de ${filtrados.length} ${
              filtrados.length === 1 ? "establecimiento" : "establecimientos"
            }${hayFiltros ? ` (de ${establecimientos.length} en total)` : ""}.`}
      </p>

      {filtrados.length === 0 ? (
        <div className="produccion-sin-resultados">
          <p>No encontramos establecimientos con esos criterios.</p>
          <button type="button" className="produccion-boton" onClick={restablecer}>
            Ver todos los establecimientos
          </button>
        </div>
      ) : (
        <ol className="produccion-lista">
          {visibles.map((e) => {
            const tipo = TIPOS_ESTABLECIMIENTO[e.tipo]?.nombre;
            return (
              <li key={e.id} className="produccion-item">
                <ProduccionFoto
                  publicId={e.imagen}
                  alt={e.nombre}
                  className="produccion-item-foto"
                />
                <div className="produccion-item-texto">
                  <p className="produccion-item-meta">
                    <span>{e.provincia}</span>
                    <span aria-hidden="true"> · </span>
                    <span>{SECTORES[e.sector]?.nombre}</span>
                  </p>
                  <h3 className="produccion-item-nombre">{e.nombre}</h3>
                  <p className="produccion-item-rubro">{e.rubro}</p>
                  <p className="produccion-item-detalle">
                    {tipo ? `${tipo} · ` : ""}
                    {e.localidad}
                  </p>
                  {/* Un establecimiento puede figurar en más de una visita
                      (p. ej. una gira entre dos provincias): un enlace por
                      cada una, de la más reciente a la más antigua. */}
                  <ul className="produccion-item-visitas">
                    {e.apariciones.map((a) => (
                      <li key={a.url}>
                        <span className="produccion-item-visita-dato">
                          {a.visitaTitulo} · {a.fecha}
                        </span>
                        <Link
                          to={a.url}
                          className="produccion-enlace"
                          aria-label={`Ver visita: ${a.visitaTitulo} (${a.provinciaNombre}, ${a.fecha})`}
                        >
                          Ver visita <span aria-hidden="true">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      )}

      {restantes > 0 && (
        <div className="produccion-mas">
          <button
            type="button"
            className="produccion-boton"
            onClick={() => setCantidadVisible((c) => c + CANTIDAD_POR_PASO)}
          >
            Mostrar más ({restantes} {restantes === 1 ? "restante" : "restantes"})
          </button>
        </div>
      )}
    </div>
  );
};

ProduccionExplorador.propTypes = {
  establecimientos: PropTypes.arrayOf(PropTypes.object).isRequired,
  porProvincia: PropTypes.objectOf(PropTypes.number).isRequired,
  porSector: PropTypes.objectOf(PropTypes.number).isRequired,
  sector: PropTypes.string,
  onCambiarSector: PropTypes.func.isRequired,
};

export default ProduccionExplorador;
