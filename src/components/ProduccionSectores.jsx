import PropTypes from "prop-types";
import { SECTORES } from "../data/sectoresProductivos";

// Gráfico de barras horizontales: porcentaje de establecimientos únicos
// por sector. Cantidades y total salen de indiceProduccion (nunca se
// hardcodean). Las barras comparten escala (la del sector con más
// establecimientos), así que sus largos siguen siendo proporcionales.
// Cada fila es un botón: selecciona el sector como filtro del explorador.

const formatearPorcentaje = (valor) =>
  valor.toLocaleString("es-AR", { maximumFractionDigits: 1 });

const ProduccionSectores = ({
  porSector,
  total,
  sectorSeleccionado,
  onSeleccionar,
}) => {
  // Orden: más establecimientos primero; empates, en el orden de SECTORES.
  const ordenSectores = Object.keys(SECTORES);
  const filas = Object.entries(porSector)
    .filter(([, cantidad]) => cantidad > 0)
    .sort(
      ([a, ca], [b, cb]) =>
        cb - ca || ordenSectores.indexOf(a) - ordenSectores.indexOf(b)
    );
  const maximo = Math.max(...filas.map(([, cantidad]) => cantidad), 1);

  return (
    <div className="produccion-sectores">
      <ul className="produccion-sectores-lista">
        {filas.map(([sector, cantidad]) => {
          const porcentaje = total ? (cantidad / total) * 100 : 0;
          const activo = sectorSeleccionado === sector;
          const nombre = SECTORES[sector]?.nombre ?? sector;
          return (
            <li key={sector}>
              <button
                type="button"
                className={`produccion-sector-fila${activo ? " activo" : ""}${
                  sectorSeleccionado && !activo ? " atenuado" : ""
                }`}
                aria-pressed={activo}
                aria-label={`${nombre}: ${cantidad} de ${total} establecimientos, ${formatearPorcentaje(
                  porcentaje
                )} %. ${activo ? "Quitar filtro" : "Filtrar el listado por este sector"}`}
                onClick={() => onSeleccionar(activo ? null : sector)}
              >
                <span className="produccion-sector-nombre">{nombre}</span>
                <span className="produccion-sector-barra" aria-hidden="true">
                  <span
                    className="produccion-sector-barra-relleno"
                    style={{ width: `${(cantidad / maximo) * 100}%` }}
                  />
                </span>
                <span className="produccion-sector-valor" aria-hidden="true">
                  <strong>{formatearPorcentaje(porcentaje)} %</strong>
                  <span>
                    {cantidad} {cantidad === 1 ? "establecimiento" : "establecimientos"}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="produccion-sectores-nota">
        Porcentajes calculados sobre {total} establecimientos únicos. Tocá un
        sector para filtrar el listado.
      </p>
    </div>
  );
};

ProduccionSectores.propTypes = {
  porSector: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  sectorSeleccionado: PropTypes.string,
  onSeleccionar: PropTypes.func.isRequired,
};

export default ProduccionSectores;
