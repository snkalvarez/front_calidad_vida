import { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useFetchEducaPresenPadre from "../../hooks/graficas/useFetchEducaPresenPadre";
import Loader from "../Loader";
import Plot from "react-plotly.js";

const dataPadre = [
  { nivel: "Ninguno", enHogar: 1100000, noHogar: 800000, fallecido: 450000 },
  { nivel: "Primaria", enHogar: 1150000, noHogar: 1250000, fallecido: 550000 },
  { nivel: "Secundaria", enHogar: 1800000, noHogar: 1450000, fallecido: 1150000 },
  { nivel: "Tecnólogo", enHogar: 3200000, noHogar: 2900000, fallecido: 1400000 },
  { nivel: "Universitario", enHogar: 4100000, noHogar: 3900000, fallecido: 1750000 },
];

const dataMadre = [
  { nivel: "Ninguno", enHogar: 900000, noHogar: 700000, fallecido: 350000 },
  { nivel: "Primaria", enHogar: 1050000, noHogar: 950000, fallecido: 550000 },
  { nivel: "Secundaria", enHogar: 1600000, noHogar: 1150000, fallecido: 950000 },
  { nivel: "Tecnólogo", enHogar: 3200000, noHogar: 2900000, fallecido: 1400000 },
  { nivel: "Universitario", enHogar: 4100000, noHogar: 3900000, fallecido: 1750000 },
];

const GrafInteraccionPadres = () => {
  const [seleccion, setSeleccion] = useState("padre");
  const datax = seleccion === "padre" ? dataPadre : dataMadre;
  const { data, loading, error, fetchEducaPresenPadre } = useFetchEducaPresenPadre();

  useEffect(() => {
    fetchEducaPresenPadre().then(() => console.log("Datos cargados:", data));
  }, []);
  
  if (loading) return <Loader />;
  if (error) return <div className="alert alert-danger">Error al cargar los data: {error}</div>;

  const trazas = Object.keys(data.series).map((estado) => ({
    x: data.x_labels,
    y: data.series[estado],
    type: "scatter",
    mode: "lines+markers",
    name: `Padre: ${estado}`
  }));

  return (

    <div className="card shadow mb-4 my-2">
      <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
        <span>Ingreso según Educación y Presencia en el Hogar</span>
        <select value={seleccion} onChange={(e) => setSeleccion(e.target.value)} className="form-select form-select-sm w-auto" >
          <option value="padre">Padre</option>
          <option value="madre">Madre</option>
        </select>
      </div>
      <div className="card-body">
        <Plot data={trazas}
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
      </div>
    </div>
  );
};

export default GrafInteraccionPadres;
