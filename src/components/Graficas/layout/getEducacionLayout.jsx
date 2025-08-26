export function getEducacionLayout(data, tipoGrafico) {
  const baseLayout = {
    title: data.labels.title,
    xaxis: {title: data.labels.x },
    yaxis: {title: data.labels.y },
    grid: { rows: tipoGrafico === "pie" ? 1 : undefined, columns: tipoGrafico === "pie" ? 2 : undefined }
  }
  return baseLayout;
}
