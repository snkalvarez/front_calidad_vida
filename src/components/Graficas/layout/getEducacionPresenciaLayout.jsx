const getEducacionPresenciaLayout = (genero, tipoGrafico) => {
  if (tipoGrafico === "pie") {
    return {
      title: `Distribución promedio del ingreso por estado (${genero})`,
      width: 800,
      height: 500,
      legend: { orientation: "h", y: -0.2 }
    };
  }

  return {
    title: `Ingreso del hogar según educación del ${genero.toLowerCase()} y su presencia en el hogar`,
    xaxis: ["boxplot", "pie"].includes(tipoGrafico)
      ? { title: "Ingreso ($)" }
      : {
          title: `Nivel educativo del ${genero.toLowerCase()}`,
          tickangle: -45
        },
    yaxis: {
      title: tipoGrafico === "boxplot" ? "Ingreso mensual" : "Ingreso mensual promedio del hogar",
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
};

export default getEducacionPresenciaLayout;
