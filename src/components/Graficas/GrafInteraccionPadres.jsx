import { useEffect, useState } from "react";
import useFetchEducaPresenPadre from "../../hooks/graficas/useFetchEducaPresenPadre";
import useFetchEducaPresenMadre from "../../hooks/graficas/useFetchEducaPresenMadre";
import Loader from "../Loader";
import Plot from "react-plotly.js";

const GrafInteraccionPadres = () => {
  const [seleccion, setSeleccion] = useState("");
  const [tipoGrafico, setTipoGrafico] = useState("línea");

  const {
    data: dataP,
    loading: loadingP,
    error: errorP,
    fetchEducaPresenPadre
  } = useFetchEducaPresenPadre();
  const {
    data: dataM,
    loading: loadingM,
    error: errorM,
    fetchEducaPresenMadre
  } = useFetchEducaPresenMadre();

  useEffect(() => {
    if (seleccion === "padre" && !dataP?.series) {
      fetchEducaPresenPadre();
    } else if (seleccion === "madre" && !dataM?.series) {
      fetchEducaPresenMadre();
    }
  }, [seleccion]);

  const construirTrazas = (data, genero) => {
    const series = data.series;
    const xLabels = data.x_labels;

    // Para gráfico pie, agrupar promedio total por estado
    if (tipoGrafico === "pie") {
      return Object.entries(series).map(([estado, ingresos]) => {
        const promedio =
          ingresos.reduce((acc, val) => acc + val, 0) / ingresos.length;
        return { estado, promedio };
      }).reduce((acc, cur) => {
        acc.labels.push(cur.estado);
        acc.values.push(cur.promedio);
        return acc;
      }, { labels: [], values: [] });
    }

    // Otros tipos de gráfico
    return Object.entries(series).map(([estado, ingresos]) => {
      switch (tipoGrafico) {
        case "línea":
          return {
            x: xLabels,
            y: ingresos,
            type: "scatter",
            mode: "lines+markers",
            name: `${genero}: ${estado}`
          };
        case "barras":
          return {
            x: xLabels,
            y: ingresos,
            type: "bar",
            name: `${genero}: ${estado}`
          };
        case "dispersión":
          return {
            x: xLabels,
            y: ingresos,
            type: "scatter",
            mode: "markers",
            name: `${genero}: ${estado}`,
            marker: { size: 10 }
          };
        case "area":
          return {
            x: xLabels,
            y: ingresos,
            type: "scatter",
            mode: "lines",
            fill: "tozeroy",
            name: `${genero}: ${estado}`
          };
        case "boxplot":
          return {
            y: ingresos,
            type: "box",
            name: `${genero}: ${estado}`
          };
        case "histograma":
          return {
            x: ingresos,
            type: "histogram",
            name: `${genero}: ${estado}`,
            opacity: 0.6
          };
        default:
          return {};
      }
    });
  };

  const trazas =
    seleccion === "padre"
      ? dataP?.series && construirTrazas(dataP, "Padre")
      : seleccion === "madre"
      ? dataM?.series && construirTrazas(dataM, "Madre")
      : [];

  const loading =
    (seleccion === "padre" && loadingP) ||
    (seleccion === "madre" && loadingM);

  const error = errorP || errorM;

  const layoutPie = {
    title: `Distribución promedio del ingreso por estado (${seleccion})`,
    width: 800,
    height: 500,
    legend: { orientation: "h", y: -0.2 }
  };

  const layoutDefault = {
    title:
      seleccion === "padre"
        ? "Ingreso del hogar según educación del padre y su presencia en el hogar"
        : "Ingreso del hogar según educación de la madre y su presencia en el hogar",
    xaxis:
      ["boxplot", "histograma", "pie"].includes(tipoGrafico)
        ? { title: "Ingreso ($)" }
        : {
            title:
              seleccion === "padre"
                ? "Nivel educativo del padre"
                : "Nivel educativo de la madre",
            tickangle: -45
          },
    yaxis: {
      title:
        tipoGrafico === "boxplot" || tipoGrafico === "pie"
          ? "Ingreso mensual"
          : "Ingreso mensual promedio del hogar",
      tickprefix: "$",
      hoverformat: ",.0f"
    },
    width: 1000,
    height: 500,
    plot_bgcolor: "#fff",
    paper_bgcolor: "#fff",
    margin: { l: 100, r: 50, t: 60, b: 60 },
    legend: { title: { text: "Estado" } },
    barmode: tipoGrafico === "histograma" ? "overlay" : undefined
  };

  return (
    <div className="card shadow mb-4 my-2">
      <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
        <span>Ingreso según Educación y Presencia en el Hogar</span>
        <div className="d-flex gap-2">
          <select
            value={seleccion}
            onChange={(e) => setSeleccion(e.target.value)}
            className="form-select form-select-sm w-auto"
          >
            <option value="">Seleccione</option>
            <option value="padre">Padre</option>
            <option value="madre">Madre</option>
          </select>

          <select
            value={tipoGrafico}
            onChange={(e) => setTipoGrafico(e.target.value)}
            className="form-select form-select-sm w-auto"
          >
            <option value="línea">Línea</option>
            <option value="barras">Barras</option>
            <option value="dispersión">Dispersión</option>
            <option value="area">Área</option>
            <option value="boxplot">Boxplot</option>
            <option value="histograma">Histograma</option>
            <option value="pie">Pie</option>
          </select>
        </div>
      </div>

      <div className="card-body">
        {loading && <Loader />}
        {error && (
          <div className="alert alert-danger">
            Error al cargar los datos: {error.message}
          </div>
        )}

        {!loading && trazas && trazas.length > 0 && tipoGrafico !== "pie" && (
          <Plot data={trazas} layout={layoutDefault} config={{ responsive: true }} />
        )}

        {!loading && trazas && tipoGrafico === "pie" && (
          <Plot
            data={[
              {
                type: "pie",
                labels: trazas.labels,
                values: trazas.values,
                textinfo: "label+percent",
                insidetextorientation: "radial"
              }
            ]}
            layout={layoutPie}
            config={{ responsive: true }}
          />
        )}
      </div>
    </div>
  );
};

export default GrafInteraccionPadres;
