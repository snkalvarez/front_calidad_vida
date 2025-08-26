export function getEducacionTraces(tipo, data) {
 const { categories, father, mother, labels } = data;

  switch (tipo) {
    case "linea":
      return [
        { x: categories, y: father, type: "scatter", mode: "lines+markers", name: "Padre", line: { color: "blue" } },
        { x: categories, y: mother, type: "scatter", mode: "lines+markers", name: "Madre", line: { color: "red" } }
      ];
    case "barras":
      return [
        { x: categories, y: father, type: "bar", name: "Padre", marker: { color: "blue" } },
        { x: categories, y: mother, type: "bar", name: "Madre", marker: { color: "red" } }
      ];
    case "dispersión":
      return [
        { x: categories, y: father, mode: "markers", type: "scatter", name: "Padre", marker: { color: "blue" } },
        { x: categories, y: mother, mode: "markers", type: "scatter", name: "Madre", marker: { color: "red" } }
      ];
    case "area":
      return [
        { x: categories, y: father, type: "scatter", mode: "lines", fill: "tozeroy", name: "Padre", line: { color: "blue" } },
        { x: categories, y: mother, type: "scatter", mode: "lines", fill: "tozeroy", name: "Madre", line: { color: "red" } }
      ];
    case "boxplot":
      return [
        { y: father, type: "box", name: "Padre", marker: { color: "blue" } },
        { y: mother, type: "box", name: "Madre", marker: { color: "red" } }
      ];
    case "pie":
      return [
        { labels: categories, values: father, type: "pie", name: "Padre", hole: 0.4 },
        { labels: categories, values: mother, type: "pie", name: "Madre", hole: 0.4, domain: { column: 1 } }
      ];
    default:
      return [];
  }
}
