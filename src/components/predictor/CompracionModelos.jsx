import { Bar,BarChart,CartesianGrid,Legend, ResponsiveContainer,Tooltip,XAxis, YAxis,} from 'recharts';

const ComparacionModelos = ({ modelos }) => {
  const dummyMetricas = {
    "XGBRegressor": { tiempo: 1.2, r2: 0.89, mae: 15000, rmse: 18000 },
    "MLPRegressor": { tiempo: 2.4, r2: 0.84, mae: 18000, rmse: 21000 },
    "GradientBoosting": { tiempo: 1.8, r2: 0.87, mae: 16000, rmse: 19000 },
    "LightGBM": { tiempo: 1.8, r2: 0.87, mae: 16000, rmse: 19000 },
  };

  const modelosAComparar = modelos === "Comparar todos"
    ? Object.keys(dummyMetricas)
    : [modelos, "XGBRegressor"];

  const data = modelosAComparar.map(nombre => ({
    modelo: nombre,
    tiempo: dummyMetricas[nombre].tiempo,
    r2: dummyMetricas[nombre].r2,
    mae: dummyMetricas[nombre].mae,
    rmse: dummyMetricas[nombre].rmse,
  }));

  return (
    <div className="mt-4">
      <h5>Comparación de Modelos</h5>

      {/* Tiempo */}
      <div className="mb-4">
        <h6>Tiempo de predicción (segundos)</h6>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="modelo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tiempo" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* R2 */}
      <div className="mb-4">
        <h6>R² Score</h6>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="modelo" />
            <YAxis domain={[0, 1]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="r2" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-4">
        <h6>MAE</h6>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="modelo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="mae" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-4">
        <h6>RMSE</h6>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="modelo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rmse" fill="#d84c6c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparacionModelos;
