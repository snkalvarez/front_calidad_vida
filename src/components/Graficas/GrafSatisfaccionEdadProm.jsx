import { useEffect } from "react";
import Plot from "react-plotly.js";
import useFetchIngrPromSatisTraba from "../../hooks/graficas/useFetchIngrPromSatisTraba";
import Loader from "../Loader";

const GrafSatisfaccionEdadProm = () => {

  const { data, loading, error, fetchIngPromSatisTraba } = useFetchIngrPromSatisTraba();

  useEffect(() => {
    fetchIngPromSatisTraba();
  }, []);

  if (loading) return <Loader />;

  if (error) return <div>Error al cargar los datos: {error.message}</div>;

  const { x_labels, income, age } = data;

  return (
    <Plot
      data={[
        {
          x: x_labels,
          y: income,
          name: "Ingreso mensual",
          type: "scatter",
          mode: "lines+markers",
          marker: { symbol: "circle" },
          line: { color: "green", width: 2 },
          yaxis: "y1"
        },
        {
          x: x_labels,
          y: age,
          name: "Edad promedio",
          type: "scatter",
          mode: "lines+markers",
          marker: { symbol: "square" },
          line: { color: "blue", width: 2, dash: "dash" },
          yaxis: "y2"
        }
      ]}
      layout={{
        title: "Ingreso y edad promedio según satisfacción con el trabajo",
        xaxis: {
          title: "Nivel de satisfacción (0 = nada satisfecho, 10 = totalmente satisfecho)",
          tickmode: "linear",
          dtick: 1
        },
        yaxis: {
          title: "Ingreso mensual promedio del hogar",
          side: "left",
          showgrid: true,
          zeroline: false
        },
        yaxis2: {
          title: "Edad promedio",
          overlaying: "y",
          side: "right",
          showgrid: false,
          zeroline: false
        },
        legend: {
          title: { text: "Indicador" },
          orientation: "h",
          x: 0,
          y: -0.2
        },
        margin: { t: 50, l: 60, r: 60, b: 60 },
        hovermode: "x unified"
      }}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default GrafSatisfaccionEdadProm;
