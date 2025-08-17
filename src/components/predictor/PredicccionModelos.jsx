import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const PrediccionModelos = ({ resultado, onComparar }) => {
  const modelos = ["GradientBoosting", "MlpRegressor", "LightGBM", "XGBRegressor", "Comparar todos"];

  if (!resultado) return <div className="alert alert-info">Esperando datos para predicción...</div>;

  const importanciaData = Object.entries(resultado.importancia).map(([key, value]) => ({
    name: key,
    importancia: value,
  }));

  return (
    <div className="card">
      <div className="card-header text-white" style={{ backgroundColor: '#000051' }}>Resultado de Predicción</div>
      <div className="card-body">
        <h5>Ingreso Predicho: <strong>${resultado.prediccion.toLocaleString()}</strong></h5>

        <div style={{ height: 250 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={importanciaData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="importancia" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4">
          <label>Hacer comparación con otro modelo:</label>
          <select className="form-select" onChange={(e) => onComparar(e.target.value)}>
            <option value="">Seleccione una opción</option>
            {modelos.map((modelo, index) => (
              <option key={index} value={modelo}>{modelo}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PrediccionModelos;
