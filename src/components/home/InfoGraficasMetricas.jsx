import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const InfoGraficasMetricas = ({datos}) => {

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Gráfica de Métricas de Modelos</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={datos} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Algoritmo" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="MAE" fill="#8884d8" />
          <Bar dataKey="RMSE" fill="#82ca9d" />
          <Bar dataKey="Tiempo_Entrenamiento" fill="#ffc658" />
          <Bar dataKey="Peso_Modelo_MB" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InfoGraficasMetricas;
