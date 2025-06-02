import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const datosPorModelo = {
  XGBoost: [
    { id: 1, real: 1200, predicho: 1100 },
    { id: 2, real: 1500, predicho: 1480 },
    { id: 3, real: 1300, predicho: 1250 },
    { id: 4, real: 1600, predicho: 1580 },
    { id: 5, real: 1400, predicho: 1410 },
  ],
  MLPRegressor: [
    { id: 1, real: 1200, predicho: 1000 },
    { id: 2, real: 1500, predicho: 1300 },
    { id: 3, real: 1300, predicho: 1350 },
    { id: 4, real: 1600, predicho: 1620 },
    { id: 5, real: 1400, predicho: 1450 },
  ],
  RandomForest: [
    { id: 1, real: 1200, predicho: 1150 },
    { id: 2, real: 1500, predicho: 1520 },
    { id: 3, real: 1300, predicho: 1280 },
    { id: 4, real: 1600, predicho: 1610 },
    { id: 5, real: 1400, predicho: 1390 },
  ],
  GradientBoosting: [
    { id: 1, real: 1200, predicho: 1180 },
    { id: 2, real: 1500, predicho: 1475 },
    { id: 3, real: 1300, predicho: 1310 },
    { id: 4, real: 1600, predicho: 1585 },
    { id: 5, real: 1400, predicho: 1385 },
  ],
};

const GraficasPrediccion = () => {
  const [modeloSeleccionado, setModeloSeleccionado] = useState("XGBoost");

  const handleChange = (e) => {
    setModeloSeleccionado(e.target.value);
  };

  return (
    <div className="card mt-4 shadow">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Comparación: Valores Reales vs Predicción</h5>
        <select
          className="form-select w-auto"
          value={modeloSeleccionado}
          onChange={handleChange}
        >
          <option value="XGBoost">XGBoost</option>
          <option value="MLPRegressor">MLPRegressor</option>
          <option value="RandomForest">RandomForest</option>
          <option value="GradientBoosting">GradientBoosting</option>
        </select>
      </div>
      <div className="card-body">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={datosPorModelo[modeloSeleccionado]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" label={{ value: "ID", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Valor", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="real" stroke="#007bff" name="Valor Real" />
            <Line type="monotone" dataKey="predicho" stroke="#28a745" name="Predicción" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraficasPrediccion;
