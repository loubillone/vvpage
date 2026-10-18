import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SECTORES, CATEGORIAS_SECTORIALES } from "../data/sectoresProductivos";
import ProduccionFoto from "./ProduccionFoto";

// Agenda productiva (pestaña "Actividades del sector productivo" de
// IndustriaProduccion): exposiciones, ferias, cámaras, entidades, organismos,
// encuentros, etc. Cada participación (una actividad sectorial dentro de
// una visita) es una entrada; una entidad visitada dos veces (COVIAR)
// aparece dos veces, cada una con la fecha y la visita correspondientes.
// Se agrupan por año a partir de fechaISO, de la más reciente a la más
// antigua. La foto es siempre la de esa participación: no se reutiliza la
// de otra visita.
//
// Filtros: provincia y sector (mismos controles que ProduccionExplorador)
// y chips por categoría. Las cantidades de los chips respetan la
// provincia y el sector elegidos.

// Ícono Font Awesome 4 por categoría (solo decorativo: el nombre de la
// categoría se muestra siempre como texto).
const ICONO_CATEGORIA = {
  exposicion: "fa-flag",
  feria: "fa-shopping-bag",
  camara: "fa-briefcase",
  entidad: "fa-university",
  organismo: "fa-flask",
  encuentro: "fa-users",
  recorrida: "fa-map-marker",
  formacion: "fa-graduation-cap",
};

const anioDe = (fechaISO) => (fechaISO ?? "").slice(0, 4);

const ProduccionAgenda = ({ actividades }) => {
  const [categoria, setCategoria] = useState(null);
  const [provincia, setProvincia] = useState("");
  const [sector, setSector] = useState("");

  const participaciones = useMemo(
    () =>
      actividades
        .flatMap((actividad) =>
          actividad.participaciones.map((p) => ({ actividad, participacion: p }))
        )
        .sort((a, b) =>
          b.participacion.fechaISO.localeCompare(a.participacion.fechaISO)
        ),
    [actividades]
  );

  const provincias = useMemo(
    () =>
      [...new Set(actividades.map((a) => a.provincia))].sort((a, b) =>
        a.localeCompare(b, "es")
      ),
    [actividades]
  );
  // Sectores presentes, en el orden de SECTORES (incluye "multisectorial").
  const sectores = Object.keys(SECTORES).filter((s) =>
    actividades.some((a) => a.sector === s)
  );

  const porProvinciaYSector = participaciones.filter(
    ({ actividad }) =>
      (!provincia || actividad.provincia === provincia) &&
      (!sector || actividad.sector === sector)
  );

  // Categorías presentes, en el orden de CATEGORIAS_SECTORIALES.
  const categorias = Object.keys(CATEGORIAS_SECTORIALES)
    .map((clave) => ({
      clave,
      cantidad: porProvinciaYSector.filter((p) => p.actividad.categoria === clave)
        .length,
    }))
    .filter((c) => c.cantidad > 0);

  const filtradas = categoria
    ? porProvinciaYSector.filter((p) => p.actividad.categoria === categoria)
    : porProvinciaYSector;

  const hayFiltros = Boolean(provincia || sector || categoria);

  const restablecer = () => {
    setProvincia("");
    setSector("");
    setCategoria(null);
  };

  const porAnio = filtradas.reduce((grupos, item) => {
    const anio = anioDe(item.participacion.fechaISO);
    if (!grupos[anio]) grupos[anio] = [];
    grupos[anio].push(item);
    return grupos;
  }, {});
  const anios = Object.keys(porAnio).sort((a, b) => b.localeCompare(a));

  return (
    <div className="produccion-agenda">
      <form
        className="produccion-filtros produccion-filtros-agenda"
        role="search"
        aria-label="Filtrar actividades del sector productivo"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="produccion-filtro">
          <label htmlFor="produccion-agenda-provincia">Provincia</label>
          <select
            id="produccion-agenda-provincia"
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
          <label htmlFor="produccion-agenda-sector">Sector</label>
          <select
            id="produccion-agenda-sector"
            className="form-select"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          >
            <option value="">Todos los sectores</option>
            {sectores.map((s) => (
              <option key={s} value={s}>
                {SECTORES[s].nombre}
              </option>
            ))}
          </select>
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

      <div
        className="produccion-chips"
        role="group"
        aria-label="Filtrar la agenda por tipo de actividad"
      >
        <button
          type="button"
          className={`produccion-chip${categoria === null ? " activo" : ""}`}
          aria-pressed={categoria === null}
          onClick={() => setCategoria(null)}
        >
          Todas <span className="produccion-chip-cantidad">{porProvinciaYSector.length}</span>
        </button>
        {categorias.map(({ clave, cantidad }) => (
          <button
            key={clave}
            type="button"
            className={`produccion-chip${categoria === clave ? " activo" : ""}`}
            aria-pressed={categoria === clave}
            onClick={() => setCategoria(categoria === clave ? null : clave)}
          >
            <i className={`fa ${ICONO_CATEGORIA[clave] ?? "fa-circle"}`} aria-hidden="true" />{" "}
            {CATEGORIAS_SECTORIALES[clave].nombre}{" "}
            <span className="produccion-chip-cantidad">{cantidad}</span>
          </button>
        ))}
      </div>

      <p className="produccion-resultados" aria-live="polite">
        {filtradas.length === 0
          ? "Sin resultados para los filtros elegidos."
          : `Mostrando ${filtradas.length} de ${participaciones.length} ${
              participaciones.length === 1 ? "participación" : "participaciones"
            }.`}
      </p>

      {filtradas.length === 0 && (
        <div className="produccion-sin-resultados">
          <p>No encontramos actividades con esos criterios.</p>
          <button type="button" className="produccion-boton" onClick={restablecer}>
            Ver todas las actividades
          </button>
        </div>
      )}

      {anios.map((anio) => (
        <section key={anio} className="produccion-agenda-anio" aria-label={`Año ${anio}`}>
          <h3 className="produccion-agenda-anio-titulo">{anio}</h3>
          <ol className="produccion-agenda-lista">
            {porAnio[anio].map(({ actividad, participacion }) => (
              <li
                key={`${actividad.id}-${participacion.url}`}
                className="produccion-agenda-item"
              >
                <ProduccionFoto
                  publicId={participacion.imagen}
                  alt={actividad.nombre}
                  className="produccion-agenda-foto"
                />
                <div className="produccion-agenda-texto">
                  <p className="produccion-agenda-categoria">
                    <i
                      className={`fa ${ICONO_CATEGORIA[actividad.categoria] ?? "fa-circle"}`}
                      aria-hidden="true"
                    />{" "}
                    {CATEGORIAS_SECTORIALES[actividad.categoria]?.nombre}
                    <span className="produccion-agenda-fecha">
                      {participacion.fecha}
                    </span>
                  </p>
                  <h4 className="produccion-agenda-nombre">{actividad.nombre}</h4>
                  <p className="produccion-agenda-detalle">
                    {SECTORES[actividad.sector]?.nombre} · {actividad.localidad},{" "}
                    {actividad.provincia}
                  </p>
                  {actividad.entidades.length > 0 && (
                    <p className="produccion-agenda-entidades">
                      {actividad.entidades.join(" · ")}
                    </p>
                  )}
                  <Link
                    to={participacion.url}
                    className="produccion-enlace"
                    aria-label={`Ver visita: ${participacion.visitaTitulo} (${participacion.provinciaNombre}, ${participacion.fecha})`}
                  >
                    Ver visita <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
};

ProduccionAgenda.propTypes = {
  actividades: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProduccionAgenda;
