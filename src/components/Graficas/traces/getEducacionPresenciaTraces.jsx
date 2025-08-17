const getEducacionPresenciaTraces = (data, genero, tipoGrafico) => {
  const { series, x_labels } = data;

  if (tipoGrafico === "pie") {
    return Object.entries(series).reduce(
      (acc, [estado, ingresos]) => {
        const promedio = ingresos.reduce((a, b) => a + b, 0) / ingresos.length;
        acc.labels.push(estado);
        acc.values.push(promedio);
        return acc;
      },
      { labels: [], values: [] }
    );
  }

  return Object.entries(series).map(([estado, ingresos]) => {
    const base = {
      x: x_labels,
      y: ingresos,
      name: `${genero}: ${estado}`
    };

    switch (tipoGrafico) {
      case "linea": return { ...base, type: "scatter", mode: "lines+markers" };
      case "barras": return { ...base, type: "bar" };
      case "dispersión": return { ...base, type: "scatter", mode: "markers", marker: { size: 10 } };
      case "area": return { ...base, type: "scatter", mode: "lines", fill: "tozeroy" };
      case "boxplot": return { y: ingresos, type: "box", name: `${genero}: ${estado}` };
      default: return {};
    }
  });
};

export default getEducacionPresenciaTraces;
