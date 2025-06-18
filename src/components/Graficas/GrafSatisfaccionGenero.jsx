import { useEffect } from "react";
import Plot from "react-plotly.js";
import useFetchIngrSatisTrabGen from "../../hooks/graficas/useFetchIngrSatisTrabGen";
import Loader from "../Loader";

const GrafSatisfaccionGenero = () => {
  const {data, loading, error, fetchIngrSatisTrabGen} = useFetchIngrSatisTrabGen();

  useEffect(() => {
    fetchIngrSatisTrabGen();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  const { x_labels, series } = data;

  const lineColors = {
    Masc: "blue",
    Fem: "red"
  };

  const plotData = Object.entries(series).map(([genero, ingresos]) => ({
  x: x_labels,
  y: ingresos,
  name: genero,
  type: "scatter",
  mode: "lines+markers",
  line: {
    color: lineColors[genero] || "gray",
    width: 2
  },
  marker: {
    symbol: "circle"
  }
}));

  return (
    <Plot
      data={plotData}
      layout={{
        title: "Ingreso del hogar según satisfacción con el trabajo y género",
        xaxis: {
          title: "Nivel de satisfacción (0 = nada satisfecho, 10 = totalmente satisfecho)",
          tickmode: "linear",
          dtick: 1
        },
        yaxis: {
          title: "Ingreso mensual promedio del hogar",
          zeroline: false
        },
        legend: {
          title: { text: "Género" },
          orientation: "h",
          x: 0,
          y: -0.2
        },
        margin: { t: 50, l: 60, r: 40, b: 60 },
        hovermode: "x unified"
      }}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default GrafSatisfaccionGenero;
