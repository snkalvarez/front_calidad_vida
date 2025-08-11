import { useState } from "react";
import Loader from "../Loader";
import Plot from "react-plotly.js";
import TipoGraficoSelector from "./TipoGraficoSelector";
import useGrafInteraccionPadres from "../../hooks/graficas/useGrafInteraccionPadres";

const GrafInteraccionPadres = () => {
  const [seleccion, setSeleccion] = useState("");
  const [tipoGrafico, setTipoGrafico] = useState("linea");

  const { loading, error, trazas, layout } = useGrafInteraccionPadres(seleccion, tipoGrafico); 

  return (
    <div className="card shadow mb-4 my-2">
      <div className="card-header text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: "#000051" }}>
        <span>Ingreso según Educación y Presencia en el Hogar</span>
        <div className="d-flex gap-2">
          <select value={seleccion} onChange={(e) => setSeleccion(e.target.value)} className="form-select form-select-sm w-auto" >
            <option value="">Seleccione</option>
            <option value="padre">Padre</option>
            <option value="madre">Madre</option>
          </select>
          <TipoGraficoSelector value={tipoGrafico} onChange={setTipoGrafico} />
        </div>
      </div>

      <div className="card-body">
        {loading && <Loader />}
        {error && <div className="alert alert-danger">Error al cargar los datos: {error.message}</div>}

        {!loading && trazas && tipoGrafico !== "pie" && (
          <Plot data={trazas} layout={layout} config={{ responsive: true }} />
        )}

        {!loading && trazas && tipoGrafico === "pie" && (
          <Plot
            data={[{
              type: "pie",
              labels: trazas.labels,
              values: trazas.values,
              textinfo: "label+percent",
              insidetextorientation: "radial"
            }]}
            layout={layout}
            config={{ responsive: true }}
          />
        )}
      </div>
    </div>
  );
};

export default GrafInteraccionPadres;
