export function getPresenciaTraces(tipoGrafico, data) {

  return data.series.map(serie => {
    switch (tipoGrafico) {
      case "linea":
        return {
          x: serie.categories,
          y: serie.values,
          type: "scatter",
          mode: "lines+markers",
          name: serie.name
        };
      case "barras":
        return {
          x: serie.categories,
          y: serie.values,
          type: "bar",
          name: serie.name
        };
      case "dispersión":
        return {
          x: serie.categories,
          y: serie.values,
          type: "scatter",
          mode: "markers",
          name: serie.name
        };
      case "area":
        return {
          x: serie.categories,
          y: serie.values,
          type: "scatter",
          fill: "tozeroy",
          mode: "none",
          name: serie.name
        };
      case "boxplot":
        return {
          y: serie.values,
          type: "box",
          name: serie.name
        };
      case "pie":
        return {
          labels: serie.categories,
          values: serie.values,
          type: "pie",
          name: serie.name
        };
      default:
        return {};
    }
  });

}
