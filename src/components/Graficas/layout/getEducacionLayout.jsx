export function getEducacionLayout(tipo) {
  const baseLayout = {
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

  switch (tipo) {
    case "barras":
      return { ...baseLayout, barmode: "group" };

    case "boxplot":
      return {
        title: "Distribución de ingresos por educación",
        yaxis: { title: "Ingreso Promedio del Hogar", automargin: true },
        xaxis: { title: "Género" },
        height: 500
      };

    case "heatmap":
      return {
        title: "Heatmap Ingreso vs Educación de los Padres",
        xaxis: { title: "Nivel Educativo" },
        yaxis: { title: "Género" },
      };

    case "pie":
      return {
        title: "Distribución total de ingresos por educación de Padres"
      };

    default:
      return baseLayout;
  }
}
