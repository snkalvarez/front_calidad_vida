export function getEducacionTraces(tipo, data) {
  const { education_labels, father_education, mother_education } = data;

  switch (tipo) {
    case "linea":
      return [
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

    case "barras":
      return [
        {
          x: father_education.income,
          y: education_labels,
          type: "bar",
          orientation: "h",
          name: "Educación Padre",
          marker: { color: "blue" },
        },
        {
          x: mother_education.income,
          y: education_labels,
          type: "bar",
          orientation: "h",
          name: "Educación Madre",
          marker: { color: "red" },
        },
      ];

    case "dispersión":
      return [
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

    case "area":
      return [
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

    case "boxplot":
      return [
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

    case "heatmap":
      return [
        {
          z: [father_education.income, mother_education.income],
          x: education_labels,
          y: ["Padre", "Madre"],
          type: "heatmap",
          colorscale: "Viridis",
        },
      ];

    case "pie":
      return [
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

    default:
      return [];
  }
}
