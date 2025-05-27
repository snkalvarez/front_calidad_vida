import {
    Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";

const InfoGraficasMetricas = () => {
  const datos = [
    {
      algoritmo: "RandomForest",
      MAE: 55.004,
      RMSE: 139.649,
      R2:0.9850,
      Tiempo_Entrenamiento: 94.8083,
      Prediccion: 13.2571,
      Peso: 3.3627,
    },
    {
      algoritmo: "XGBoost",
      MAE: 91.75,
      RMSE: 41.283,
      R2:0.99,
      Tiempo_Entrenamiento: 5.8786,
      Peso: 0.7404,
    },
    {
      algoritmo: "GradientBoosting PRUEBA",
      MAE: 6.794,
      RMSE: 41.72,
      R2:0.9987,
      Tiempo_Entrenamiento: 27.3905,
      Peso: 0.3647,
    },
    {
      algoritmo: "MLPRegressor PRUEBA",
      MAE: 60,
      RMSE: 102,
      R2:0.98,
      Tiempo_Entrenamiento: 169.2024,
      Peso: 0.3006,
    },
  ];

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Gráfica de Métricas de Modelos</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={datos} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="algoritmo" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="MAE" fill="#8884d8" />
          <Bar dataKey="RMSE" fill="#82ca9d" />
          <Bar dataKey="Tiempo_Entrenamiento" fill="#ffc658" />
          <Bar dataKey="Peso" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InfoGraficasMetricas;
