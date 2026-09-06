import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/provinciaDetalle.css";
import "../css/visitaCard.css";
import { Container, Button } from "react-bootstrap";
import { visitasProvincias } from "../data/visitasProvincias";
import VisitaCard from "../components/VisitaCard";

// Convierte "YYYY-MM-DD" o "YYYY-MM" en un número comparable (YYYYMMDD),
// para poder ordenar visitas sin importar la precisión de la fecha.
const fechaISOaNumero = (fechaISO) => {
  if (!fechaISO) return 0;
  const [anio, mes, dia] = fechaISO.split("-");
  const anioNum = parseInt(anio, 10) || 0;
  const mesNum = mes ? parseInt(mes, 10) : 1;
  const diaNum = dia ? parseInt(dia, 10) : 1;
  return anioNum * 10000 + mesNum * 100 + diaNum;
};

const ProvinciaDetalle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const provincia = visitasProvincias[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [slug]);

  if (!provincia) {
    return (
      <div className="container-provincia-detalle">
        <div className="container">
          <h2>Provincia no encontrada</h2>
          <Button onClick={() => navigate("/")} variant="primary">
            Volver al Inicio
          </Button>
        </div>
      </div>
    );
  }

  const visitasOriginales = provincia.visitas || [];
  // Copia antes de ordenar: no se muta el array original de datos.
  const visitas = [...visitasOriginales].sort(
    (a, b) => fechaISOaNumero(b.fechaISO) - fechaISOaNumero(a.fechaISO)
  );

  return (
    <div className="container-provincia-detalle">
      <Container>
        <div className="row">
          <div className="col-12">
            <Button
              onClick={() => navigate("/#mapa-argentina")}
              variant="outline-primary"
              className="boton-volver"
            >
              ← Volver al mapa
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="titulo-provincia">{provincia.nombre}</h1>
          </div>
        </div>

        <p className="visitas-count">
          {visitas.length} {visitas.length === 1 ? "visita" : "visitas"}
        </p>

        <div className="visitas-grid">
          {visitas.map((visita) => (
            <VisitaCard
              key={visita.slug}
              visita={visita}
              provinciaSlug={slug}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProvinciaDetalle;
