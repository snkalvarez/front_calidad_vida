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
      <hr className="my-2" />
    <footer className="bg-light py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <article>
            <p className="lead fw-semibold">
              Gráfico sobre la presencia y educación de padres/madres en el hogar y su relación con el ingreso familiar.
            </p>
            <p>
              <strong>Eje Y:</strong> Ingreso promedio del hogar en millones según la categoría del eje X.
            </p>
            <p>
              <strong>Eje X:</strong> Opciones de educación: "No Sabe", "Ninguno", 
              "All Uni" (Termino toda la Universidad), 
              "Alg Uni" (hizo algo de universidad), 
              "All Tec/Tecno" (Termino el Técnico/Tecnológico), 
              "Alg Tec/Tecno" (hizo algo de Técnico/Tecnológico), 
              "All Secun" (Termino toda la Secundaria), 
              "Alg Secun" (hizo algo de Secundaria), 
              "All Prim" (Termino toda la Primaria), 
              "Alg Prim" (hizo algo de Primaria).
            </p>
            <p>
              <strong>Estado:</strong> se diferencia según el color de la linea, donde cada color representa una categoría de vive en el hogar: "Vive en el hogar", "No vive en el hogar" o "Falleció".
            </p>
          </article>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default GrafInteraccionPadres;
