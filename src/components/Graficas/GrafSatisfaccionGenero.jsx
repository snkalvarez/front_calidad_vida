import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import useFetchIngrSatisTrabGen from "../../hooks/graficas/useFetchIngrSatisTrabGen";
import Loader from "../Loader";

const GrafSatisfaccionGenero = () => {
  const [tipoGrafico, setTipoGrafico] = useState("linea");
  const { data, loading, error, fetchIngrSatisTrabGen } = useFetchIngrSatisTrabGen();

  useEffect(() => {
    fetchIngrSatisTrabGen();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error al cargar los datos: {error.message}</div>;

  const { x_labels, series } = data;

  const lineColors = {
    Masc: "blue",
    Fem: "red"
  };

  let traces = [];
  let layout = {};

  if (tipoGrafico === "linea") {
    traces = Object.entries(series).map(([genero, ingresos]) => ({
      x: x_labels,
      y: ingresos,
      name: genero,
      type: "scatter",
      mode: "lines+markers",
      line: { color: lineColors[genero] || "gray", width: 2 },
      marker: { symbol: "circle" }
    }));
    layout = {
      title: "Ingreso por satisfacción y género",
      xaxis: { title: "Nivel de satisfacción", tickmode: "linear", dtick: 1 },
      yaxis: { title: "Ingreso mensual", zeroline: false },
      legend: { title: { text: "Género" }, orientation: "h", x: 0, y: -0.2 },
      margin: { t: 50, l: 60, r: 40, b: 60 },
      hovermode: "x unified"
    };
  } else if (tipoGrafico === "barras") {
    traces = Object.entries(series).map(([genero, ingresos]) => ({
      x: x_labels,
      y: ingresos,
      name: genero,
      type: "bar",
      marker: { color: lineColors[genero] || "gray" }
    }));
    layout = {
      title: "Barras: ingreso por satisfacción y género",
      barmode: "group",
      xaxis: { title: "Nivel de satisfacción" },
      yaxis: { title: "Ingreso mensual" },
      legend: { orientation: "h", x: 0, y: -0.2 },
      margin: { t: 50, l: 60, r: 40, b: 60 }
    };
  } else if (tipoGrafico === "area") {
    traces = Object.entries(series).map(([genero, ingresos]) => ({
      x: x_labels,
      y: ingresos,
      type: "scatter",
      mode: "lines",
      fill: "tozeroy",
      name: genero,
      line: { color: lineColors[genero] || "gray" }
    }));
    layout = {
      title: "Área: ingreso por satisfacción y género",
      xaxis: { title: "Nivel de satisfacción" },
      yaxis: { title: "Ingreso mensual" },
      margin: { t: 50, l: 60, r: 40, b: 60 }
    };
  } else if (tipoGrafico === "dispersión") {
    traces = Object.entries(series).map(([genero, ingresos]) => ({
      x: x_labels,
      y: ingresos,
      mode: "markers",
      type: "scatter",
      name: genero,
      marker: { size: 10, color: lineColors[genero] || "gray" }
    }));
    layout = {
      title: "Dispersión: ingreso por satisfacción y género",
      xaxis: { title: "Nivel de satisfacción" },
      yaxis: { title: "Ingreso mensual" },
      margin: { t: 50, l: 60, r: 40, b: 60 }
    };
  } else if (tipoGrafico === "boxplot") {
    traces = Object.entries(series).map(([genero, ingresos]) => ({
      y: ingresos,
      name: genero,
      type: "box",
      marker: { color: lineColors[genero] || "gray" }
    }));
    layout = {
      title: "Boxplot: ingreso por género",
      yaxis: { title: "Ingreso mensual" },
      margin: { t: 50, l: 60, r: 40, b: 60 }
    };
  } else if (tipoGrafico === "heatmap") {
    const z = Object.values(series);
    const yLabels = Object.keys(series);
    traces = [{
      z,
      x: x_labels,
      y: yLabels,
      type: "heatmap",
      colorscale: "Portland"
    }];
    layout = {
      title: "Mapa de calor: ingreso por satisfacción y género",
      xaxis: { title: "Nivel de satisfacción" },
      yaxis: { title: "Género" },
      margin: { t: 50, l: 60, r: 40, b: 60 }
    };
  } else if (tipoGrafico === "pie") {
    const totalIngresosPorGenero = Object.entries(series).map(([genero, ingresos]) => ({
      genero,
      total: ingresos.reduce((acc, val) => acc + val, 0)
    }));
    traces = [{
      labels: totalIngresosPorGenero.map(d => d.genero),
      values: totalIngresosPorGenero.map(d => d.total),
      type: "pie",
      marker: {
        colors: totalIngresosPorGenero.map(d => lineColors[d.genero] || "gray")
      }
    }];
    layout = {
      title: "Distribución total de ingreso por género",
      margin: { t: 50, l: 60, r: 40, b: 60 }
    };
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="tipoGrafico" className="mr-2 font-bold">Tipo de gráfico:</label>
        <select id="tipoGrafico" value={tipoGrafico} onChange={(e) => setTipoGrafico(e.target.value)} className="border rounded px-2 py-1" >
          <option value="linea">Línea</option>
          <option value="barras">Barras agrupadas</option>
          <option value="area">Área</option>
          <option value="dispersión">Dispersión</option>
          <option value="boxplot">Boxplot</option>
          <option value="heatmap">Heatmap</option>
          <option value="pie">Pie (suma de ingresos)</option>
        </select>
      </div>

      <Plot data={traces} layout={layout} style={{ width: "100%", height: "500px" }} />
      <hr className="my-2" />
      <footer className="bg-light py-4">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <article>
              <p className="lead fw-semibold">
                Gráfico sobre ingreso según el género y el nivel de satisfacción laboral.
              </p>
              <p>
                <strong>Eje Y a la izquierda:</strong> Ingreso promedio del hogar en millones según la categoría del eje Y.
              </p>
              <p>
                <strong>Eje X:</strong> Tenemos el nivel de satisfacción laboral, donde 0 representa "Nada satisfecho" y 10 representa "Totalmente satisfecho".
              </p>
              <p className="text-muted">
                Tener el cuenta los colores para identificar entre el genero masculino y femenino.
              </p>
            </article>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GrafSatisfaccionGenero;
