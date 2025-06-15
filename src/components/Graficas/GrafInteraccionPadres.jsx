import { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useFetchEducaPresenPadre from "../../hooks/graficas/useFetchEducaPresenPadre";
import Loader from "../Loader";
import Plot from "react-plotly.js";
import useFetchEducaPresenMadre from "../../hooks/graficas/useFetchEducaPresenMadre";

const GrafInteraccionPadres = () => {
  const [seleccion, setSeleccion] = useState("");
  const { data: dataP, loading: loadingP, error: errorP, fetchEducaPresenPadre } = useFetchEducaPresenPadre();
  const { data: dataM, loading: loadingM, error: errorM, fetchEducaPresenMadre } = useFetchEducaPresenMadre();
  const [trazasP, setTrazasP] = useState([]);
  const [trazasM, setTrazasM] = useState([]);
  
  useEffect(() => {
    if(seleccion == "padre" && !dataP?.series) {
      fetchEducaPresenPadre();
    } else if(seleccion == "madre" && !dataM?.series) {
      fetchEducaPresenMadre();
    }
  }, [seleccion]);
  
  useEffect(() => {
    // Verifica que dataP exista, que dataP.series exista y que dataP.x_labels exista
    // antes de intentar acceder a sus propiedades
    if (seleccion === "padre" && dataP?.series && dataP?.x_labels) {
      const nuevasTrazas = Object.keys(dataP.series).map((estado) => ({
        x: dataP.x_labels,
        y: dataP.series[estado],
        type: "scatter",
        mode: "lines+markers",
        name: `Padre: ${estado}`
      }));
      setTrazasP(nuevasTrazas);
    } else {
      // Limpia las trazas si la condición no se cumple (por ejemplo, si los datos no están o la selección cambió)
      setTrazasP([]);
    }
  }, [dataP, seleccion]);

  useEffect(() => {
    if(seleccion == "madre" && dataM?.series && dataM?.x_labels) {
      const nuevasTrazas = Object.keys(dataM.series).map((estado) => ({
        x: dataM.x_labels,
        y: dataM.series[estado],
        type: "scatter",
        mode: "lines+markers",
        name: `Madre: ${estado}`
      }));
      setTrazasM(nuevasTrazas);
    } else {
      setTrazasM([]);
    }
  },[dataM, seleccion]);

  if (errorP) return <div className="alert alert-danger">Error al cargar los data: {errorP}</div>;
  if (errorM) return <div className="alert alert-danger">Error al cargar los data: {errorM}</div>;

  return (

    <div className="card shadow mb-4 my-2">
      <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
        <span>Ingreso según Educación y Presencia en el Hogar</span>
        <select value={seleccion} onChange={(e) => setSeleccion(e.target.value)} className="form-select form-select-sm w-auto" >
          <option value="">Seleccione</option>
          <option value="padre">Padre</option>
          <option value="madre">Madre</option>
        </select>
      </div>
      <div className="card-body">
        {seleccion != "" && loadingP && <Loader /> }
        {seleccion != "" && loadingM && <Loader /> }
        {seleccion == "padre" && trazasP && (
          <Plot data={trazasP}
          layout={{
            title: "Ingreso del hogar según educación del padre y su presencia en el hogar",
            xaxis: {
              title: "Nivel educativo del padre",
              tickangle: -45
            },
            yaxis: {
              title: "Ingreso mensual promedio del hogar",
              tickprefix: "$",
              hoverformat: ",.0f"
            },
            width: 1000,
            height: 500,
            plot_bgcolor: "#fff",
            paper_bgcolor: "#fff",
            margin: { l: 100, r: 50, t: 60, b: 60 },
            legend: { title: { text: "Estado del padre" } }
          }}
          config={{ responsive: true }}
        />
        )}
        {seleccion == "madre" && trazasM && (
          <Plot data={trazasM}
          layout={{
            title: "Ingreso del hogar según educación de la madre y su presencia en el hogar",
            xaxis: {
              title: "Nivel educativo de la madre",
              tickangle: -45
            },
            yaxis: {
              title: "Ingreso mensual promedio del hogar",
              tickprefix: "$",
              hoverformat: ",.0f"
            },
            width: 1000,
            height: 500,
            plot_bgcolor: "#fff",
            paper_bgcolor: "#fff",
            margin: { l: 100, r: 50, t: 60, b: 60 },
            legend: { title: { text: "Estado de la madre" } }
          }}
          config={{ responsive: true }}
        />
        )}
      </div>
    </div>
  );
};

export default GrafInteraccionPadres;
