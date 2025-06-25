import { useEffect, useState } from 'react';
import Loader from '../Loader';
import Plot from 'react-plotly.js';
import useFetchEducaPadres from '../../hooks/graficas/useFetchEducaPadres';

const GrafEducacionPadres = () => {
  const [tipoGrafico, setTipoGrafico] = useState("linea");
  const { data, loading, error, fetchEducacionPadres } = useFetchEducaPadres();

  useEffect(() => {
    fetchEducacionPadres();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const { education_labels, father_education, mother_education } = data;

  let traces = [];
  let layout = {
    title: "Impacto de la educación padre/madre en los ingresos del hogar",
    xaxis: {
      title: "Ingreso Promedio del Hogar",
      tickprefix: "$",
      zeroline: false,
      gridcolor: "#eee",
    },
    yaxis: {
      title: "Nivel Educativo",
      type: "category",
      automargin: true,
    },
    width: 1000,
    height: 500,
    plot_bgcolor: "#fff",
    paper_bgcolor: "#fff",
    legend: { x: 0.9, y: 1 },
    margin: { l: 100, r: 50, t: 60, b: 60 },
  };

  switch (tipoGrafico) {
    case "linea":
      traces = [
        {
          x: father_education.income,
          y: education_labels,
          type: "scatter",
          mode: "lines+markers",
          name: "Educación Padre",
          line: { color: "blue", width: 2 },
          marker: { symbol: "circle", size: 8 },
        },
        {
          x: mother_education.income,
          y: education_labels,
          type: "scatter",
          mode: "lines+markers",
          name: "Educación Madre",
          line: { color: "red", width: 2 },
          marker: { symbol: "square", size: 8 },
        },
      ];
      break;

    case "barras":
      traces = [
        {
          x: father_education.income,
          y: education_labels,
          type: "bar",
          name: "Educación Padre",
          orientation: "h",
          marker: { color: "blue" },
        },
        {
          x: mother_education.income,
          y: education_labels,
          type: "bar",
          name: "Educación Madre",
          orientation: "h",
          marker: { color: "red" },
        },
      ];
      layout.barmode = "group";
      break;

    case "dispersión":
      traces = [
        {
          x: father_education.income,
          y: education_labels,
          type: "scatter",
          mode: "markers",
          name: "Educación Padre",
          marker: { color: "blue", size: 10 },
        },
        {
          x: mother_education.income,
          y: education_labels,
          type: "scatter",
          mode: "markers",
          name: "Educación Madre",
          marker: { color: "red", size: 10 },
        },
      ];
      break;

    case "area":
      traces = [
        {
          x: father_education.income,
          y: education_labels,
          type: "scatter",
          mode: "lines",
          fill: "tozerox",
          name: "Educación Padre",
          line: { color: "blue" },
        },
        {
          x: mother_education.income,
          y: education_labels,
          type: "scatter",
          mode: "lines",
          fill: "tozerox",
          name: "Educación Madre",
          line: { color: "red" },
        },
      ];
      break;

    case "boxplot":
      traces = [
        {
          y: father_education.income,
          name: "Padre",
          type: "box",
          marker: { color: "blue" },
        },
        {
          y: mother_education.income,
          name: "Madre",
          type: "box",
          marker: { color: "red" },
        },
      ];
      layout.yaxis = { title: "Ingreso Promedio del Hogar", automargin: true };
      layout.xaxis = { title: "Género" };
      break;

    case "heatmap":
      traces = [
        {
          z: [father_education.income, mother_education.income],
          x: education_labels,
          y: ["Padre", "Madre"],
          type: "heatmap",
          colorscale: "Viridis",
        },
      ];
      layout = {
        title: "Heatmap Ingreso vs Educación de los Padres",
        xaxis: { title: "Nivel Educativo" },
        yaxis: { title: "Género" },
      };
      break;

    case "pie":
      traces = [
        {
          type: "pie",
          labels: ["Padre", "Madre"],
          values: [
            father_education.income.reduce((a, b) => a + b, 0),
            mother_education.income.reduce((a, b) => a + b, 0),
          ],
          marker: { colors: ["blue", "red"] },
        },
      ];
      layout = { title: "Distribución total de ingresos por educación de Padres" };
      break;

    default:
      break;
  }

  return (
    <div className="p-4">
      <div className="mb-3">
        <label htmlFor="tipoGrafico" className="font-bold mr-2">Tipo de gráfico:</label>
        <select
          id="tipoGrafico"
          value={tipoGrafico}
          onChange={(e) => setTipoGrafico(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="linea">Línea</option>
          <option value="barras">Barras</option>
          <option value="dispersión">Dispersión</option>
          <option value="area">Área</option>
          <option value="boxplot">Boxplot</option>
          <option value="heatmap">Heatmap</option>
          <option value="pie">Pie (Totales)</option>
        </select>
      </div>

      <Plot
        data={traces}
        layout={layout}
        config={{ responsive: true }}
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
};

export default GrafEducacionPadres;
