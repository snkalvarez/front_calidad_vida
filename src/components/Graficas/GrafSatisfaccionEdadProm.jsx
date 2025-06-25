import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import useFetchIngrPromSatisTraba from "../../hooks/graficas/useFetchIngrPromSatisTraba";
import Loader from "../Loader";

const GrafSatisfaccionEdadProm = () => {
  const [tipoGrafico, setTipoGrafico] = useState("linea");
  const { data, loading, error, fetchIngPromSatisTraba } = useFetchIngrPromSatisTraba();

  useEffect(() => {
    fetchIngPromSatisTraba();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error al cargar los datos: {error.message}</div>;

  const { x_labels, income, age } = data;

  let traces = [];
  let layout = {};

  if (tipoGrafico === "linea") {
    traces = [
      {
        x: x_labels,
        y: income,
        name: "Ingreso mensual",
        type: "scatter",
        mode: "lines+markers",
        line: { color: "green", width: 2 },
        yaxis: "y1"
      },
      {
        x: x_labels,
        y: age,
        name: "Edad promedio",
        type: "scatter",
        mode: "lines+markers",
        line: { color: "blue", width: 2, dash: "dash" },
        yaxis: "y2"
      }
    ];
    layout = {
      title: "Ingreso y edad promedio según satisfacción con el trabajo",
      xaxis: {
        title: "Nivel de satisfacción",
        tickmode: "linear",
        dtick: 1
      },
      yaxis: { title: "Ingreso mensual", side: "left", showgrid: true },
      yaxis2: { title: "Edad promedio", overlaying: "y", side: "right", showgrid: false },
      legend: { orientation: "h", x: 0, y: -0.2 },
      hovermode: "x unified",
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "barras") {
    traces = [
      {
        x: x_labels,
        y: income,
        name: "Ingreso mensual",
        type: "bar",
        marker: { color: "green" }
      },
      {
        x: x_labels,
        y: age,
        name: "Edad promedio",
        type: "bar",
        marker: { color: "blue" }
      }
    ];
    layout = {
      title: "Barras: Ingreso y edad por satisfacción",
      barmode: "group",
      xaxis: { title: "Nivel de satisfacción" },
      yaxis: { title: "Valor" },
      legend: { orientation: "h", x: 0, y: -0.2 },
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "area") {
    traces = [
      {
        x: x_labels,
        y: income,
        type: "scatter",
        mode: "lines",
        fill: "tozeroy",
        name: "Ingreso",
        line: { color: "green" }
      },
      {
        x: x_labels,
        y: age,
        type: "scatter",
        mode: "lines",
        fill: "tozeroy",
        name: "Edad",
        line: { color: "blue", dash: "dash" }
      }
    ];
    layout = {
      title: "Área: Ingreso y edad según satisfacción",
      xaxis: { title: "Satisfacción" },
      yaxis: { title: "Valor" },
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "dispersión") {
    traces = [{
      x: age,
      y: income,
      mode: "markers",
      type: "scatter",
      name: "Edad vs Ingreso",
      marker: { color: "purple", size: 10 }
    }];
    layout = {
      title: "Dispersión: Edad vs Ingreso mensual",
      xaxis: { title: "Edad promedio" },
      yaxis: { title: "Ingreso mensual" },
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "boxplot") {
    traces = [
      {
        y: income,
        name: "Ingreso mensual",
        type: "box",
        marker: { color: "green" }
      },
      {
        y: age,
        name: "Edad promedio",
        type: "box",
        marker: { color: "blue" }
      }
    ];
    layout = {
      title: "Boxplot: Ingreso y edad",
      yaxis: { title: "Valor" },
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "heatmap") {
    traces = [{
      z: [income, age],
      x: x_labels,
      y: ["Ingreso", "Edad"],
      type: "heatmap",
      colorscale: "Viridis"
    }];
    layout = {
      title: "Mapa de calor: ingreso y edad",
      xaxis: { title: "Satisfacción" },
      yaxis: { title: "Indicador" },
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "pie") {
    traces = [{
      values: income,
      labels: x_labels,
      type: "pie",
      name: "Ingreso",
      marker: { colors: x_labels.map((_, i) => `hsl(${i * 30}, 70%, 60%)`) }
    }];
    layout = {
      title: "Distribución de ingreso por satisfacción",
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="tipoGrafico" className="mr-2 font-bold">Tipo de gráfico:</label>
        <select
          id="tipoGrafico"
          value={tipoGrafico}
          onChange={(e) => setTipoGrafico(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="linea">Línea (doble eje)</option>
          <option value="barras">Barras agrupadas</option>
          <option value="area">Área</option>
          <option value="dispersión">Dispersión (Edad vs Ingreso)</option>
          <option value="boxplot">Boxplot</option>
          <option value="heatmap">Heatmap</option>
          <option value="pie">Pie (Ingreso)</option>
        </select>
      </div>

      <Plot
        data={traces}
        layout={layout}
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
};

export default GrafSatisfaccionEdadProm;
