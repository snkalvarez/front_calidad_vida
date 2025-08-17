import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import Loader from "../Loader";
import useFetchIngEdadSegunSatisTrabja from "../../hooks/graficas/useFetchIngrEdadSegunSatisTrabja";

const GrafSatisfaccionEdadGrupo = () => {
  const [tipoGrafico, setTipoGrafico] = useState("linea");
  const { data, loading, error, fetchIngEdadSegunSatisTrabja } = useFetchIngEdadSegunSatisTrabja();

  useEffect(() => {
    fetchIngEdadSegunSatisTrabja();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error al cargar los datos: {error.message}</div>;

  const { x_labels, income_series, age_series } = data;

  const colors = {
    "15-29": "blue",
    "30-44": "orange",
    "45-59": "green",
    "60-74": "red"
  };

  let traces = [];
  let layout = {};

  if (tipoGrafico === "linea") {
    Object.entries(income_series).forEach(([group, values]) => {
      traces.push({
        x: x_labels,
        y: values,
        name: `Ingreso (${group})`,
        type: "scatter",
        mode: "lines+markers",
        line: { width: 2, color: colors[group] },
        yaxis: "y1"
      });
    });
    Object.entries(age_series).forEach(([group, values]) => {
      traces.push({
        x: x_labels,
        y: values,
        name: `Edad (${group})`,
        type: "scatter",
        mode: "lines+markers",
        line: { width: 2, dash: "dash", color: colors[group] },
        yaxis: "y2"
      });
    });
    layout = {
      title: "Ingreso y edad según satisfacción",
      xaxis: { title: "Satisfacción", tickmode: "linear", dtick: 1 },
      yaxis: { title: "Ingreso mensual", side: "left" },
      yaxis2: { title: "Edad", overlaying: "y", side: "right" },
      legend: { title: { text: "Grupo de edad" } },
      hovermode: "x unified",
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "barras") {
    traces = Object.entries(age_series).map(([group, values]) => ({
      x: x_labels,
      y: values,
      name: group,
      type: "bar",
      marker: { color: colors[group] }
    }));
    layout = {
      title: "Edad promedio por satisfacción laboral",
      xaxis: { title: "Satisfacción" },
      yaxis: { title: "Edad promedio" },
      barmode: "stack",
      legend: { title: { text: "Grupo de edad" } },
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "pie") {
    const grupos = Object.keys(age_series);
    const sumas = grupos.map(group =>
      age_series[group].reduce((acc, val) => acc + val, 0)
    );
    traces = [{
      values: sumas,
      labels: grupos,
      type: "pie",
      hole: 0.3,
      marker: { colors: grupos.map(group => colors[group]) }
    }];
    layout = {
      title: "Distribución total por grupo de edad",
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "boxplot") {
    traces = x_labels.map((label, idx) => {
      const ingresos = Object.values(income_series).map(grupo => grupo[idx]).filter(Boolean);
      return {
        y: ingresos,
        name: label,
        type: "box"
      };
    });
    layout = {
      title: "Distribución del ingreso por satisfacción",
      yaxis: { title: "Ingreso mensual" },
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "area") {
    traces = Object.entries(income_series).map(([group, values]) => ({
      x: x_labels,
      y: values,
      type: "scatter",
      mode: "lines",
      fill: "tozeroy",
      name: group,
      line: { color: colors[group] }
    }));
    layout = {
      title: "Área: ingreso mensual por grupo",
      xaxis: { title: "Satisfacción" },
      yaxis: { title: "Ingreso mensual" },
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "dispersión") {
    traces = Object.keys(income_series).map(group => ({
      x: age_series[group],
      y: income_series[group],
      type: "scatter",
      mode: "markers",
      name: group,
      marker: { size: 10, color: colors[group] }
    }));
    layout = {
      title: "Dispersión: Edad vs Ingreso",
      xaxis: { title: "Edad promedio" },
      yaxis: { title: "Ingreso mensual" },
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  } else if (tipoGrafico === "heatmap") {
    traces = [{
      z: Object.values(age_series),
      x: x_labels,
      y: Object.keys(age_series),
      type: "heatmap",
      colorscale: "YlGnBu"
    }];
    layout = {
      title: "Mapa de calor: Edad por satisfacción",
      xaxis: { title: "Satisfacción" },
      yaxis: { title: "Grupo de edad" },
      margin: { t: 50, l: 60, r: 60, b: 60 }
    };
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="tipoGrafico" className="mr-2 font-bold">Tipo de gráfico:</label>
        <select id="tipoGrafico" value={tipoGrafico} onChange={(e) => setTipoGrafico(e.target.value)} className="border rounded px-2 py-1" >
          <option value="linea">Línea (Ingreso + Edad)</option>
          <option value="barras">Barras apiladas (Edad)</option>
          <option value="pie">Pie (Grupos de edad)</option>
          <option value="boxplot">Boxplot (Ingreso por satisfacción)</option>
          <option value="area">Área (Ingreso)</option>
          <option value="dispersión">Dispersión (Edad vs Ingreso)</option>
          <option value="heatmap">Heatmap (Edad por satisfacción)</option>
        </select>
      </div>

      <Plot data={traces} layout={layout} style={{ width: "100%", height: "500px" }} />

      <hr className="my-2" />
      <footer className="bg-light py-4">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <article>
              <p className="lead fw-semibold">
                Gráfico sobre ingreso y satisfacción laboral por grupos de edades.
              </p>
              <p>
                <strong>Eje Y:</strong> Ingreso promedio del hogar en millones según la categoría del eje Y.
              </p>
              <p>
                <strong>Eje X:</strong> Tenemos el nivel de satisfacción laboral, donde 0 representa "Nada satisfecho" y 10 representa "Totalmente satisfecho".
              </p>
              <p>
                <strong>Grupo de Edad:</strong> Se agrupan en rangos de edad para analizar la satisfacción laboral y se diferencia según su color en el gráfico.
              </p>
            </article>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GrafSatisfaccionEdadGrupo;
