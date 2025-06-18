import { useEffect } from "react";
import Loader from "../Loader";
import Plot from "react-plotly.js";
import useFetchIngEdadSegunSatisTrabja from "../../hooks/graficas/useFetchIngrEdadSegunSatisTrabja";

const GrafSatisfaccionEdadGrupo = () => {

  const {data, loading, error, fetchIngEdadSegunSatisTrabja} = useFetchIngEdadSegunSatisTrabja();
  
  useEffect(() => {
    fetchIngEdadSegunSatisTrabja();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  const { x_labels, income_series, age_series } = data;

  // Colores opcionales por grupo de edad
  const colors = {
    "15-29": "blue",
    "30-44": "orange",
    "45-59": "green",
    "60-74": "red"
  };

  const traces = [];

  // Ingreso mensual - eje Y izquierdo
  Object.entries(income_series).forEach(([group, values]) => {
    traces.push({
      x: x_labels,
      y: values,
      name: `Ingreso (${group})`,
      type: "scatter",
      mode: "lines+markers",
      marker: { symbol: "circle" },
      line: { width: 2, color: colors[group] },
      yaxis: "y1"
    });
  });

  // Edad promedio - eje Y derecho
  Object.entries(age_series).forEach(([group, values]) => {
    traces.push({
      x: x_labels,
      y: values,
      name: `Edad (${group})`,
      type: "scatter",
      mode: "lines+markers",
      marker: { symbol: "square" },
      line: { width: 2, dash: "dash", color: colors[group] },
      yaxis: "y2"
    });
  });

  return (
    <Plot
      data={traces}
      layout={{
        title: "Ingreso y edad según satisfacción con el trabajo",
        xaxis: {
          title: "Nivel de satisfacción laboral",
          tickmode: "linear",
          dtick: 1
        },
        yaxis: {
          title: "Ingreso mensual promedio",
          side: "left"
        },
        yaxis2: {
          title: "Edad promedio",
          overlaying: "y",
          side: "right"
        },
        legend: {
          title: { text: "Grupo de edad" }
        },
        margin: { t: 50, l: 60, r: 60, b: 60 },
        hovermode: "x unified"
      }}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default GrafSatisfaccionEdadGrupo;
