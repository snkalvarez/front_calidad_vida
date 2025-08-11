const TipoGraficoSelector = ({ value, onChange }) => (
  <div className="d-flex align-items-center gap-2">
    <label htmlFor="tipoGrafico" className="mr-2 font-bold">Tipo de gráfico:</label>
    <select id="tipoGrafico" value={value} onChange={(e) => onChange(e.target.value)} className="border rounded px-2 py-1">
      <option value="linea">Línea</option>
      <option value="barras">Barras</option>
      <option value="dispersión">Dispersión</option>
      <option value="area">Área</option>
      <option value="boxplot">Boxplot</option>
      <option value="pie">Pie (totales)</option>
    </select>
  </div>
);

export default TipoGraficoSelector;
