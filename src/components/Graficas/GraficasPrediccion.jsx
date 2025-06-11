import { useState } from "react";
import {CartesianGrid,Legend,Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis,} from "recharts";
import useFetchRealPredicho from "../../hooks/resultadoRealPredic/useFetchRealPredicho";

const datosPorModelo = {
  
  XGBoostX3: [
    { y_real: 822500, y_predicho: 824532.1561017229},
    { y_real: 1000000, y_predicho: 1002105.3774261909},
    { y_real: 700000, y_predicho: 700059.3304023992},
    { y_real: 1130000, y_predicho: 1127896.9089063685},
    { y_real: 700000, y_predicho: 702027.1654506582},
    { y_real: 1000000, y_predicho: 1004663.5679420623},
    { y_real: 1160000, y_predicho: 1151115.4101951132},
    { y_real: 3200000, y_predicho: 3201799.1436206247},
    { y_real: 600000, y_predicho: 603538.8777583152},
    { y_real: 400000, y_predicho: 396785.13586262026}
],
  MLPRegressor: [
    { real: 1200, predicho: 1000 },
    { real: 1500, predicho: 1300 },
    { real: 1300, predicho: 1350 },
    { real: 1600, predicho: 1620 },
    { real: 1400, predicho: 1450 },
  ],
  RandomForest: [
    { real: 1200, predicho: 1150 },
    { real: 1500, predicho: 1520 },
    { real: 1300, predicho: 1280 },
    { real: 1600, predicho: 1610 },
    { real: 1400, predicho: 1390 },
  ],
  GradientBoosting: [
    { real: 1200, predicho: 1180 },
    { real: 1500, predicho: 1475 },
    { real: 1300, predicho: 1310 },
    { real: 1600, predicho: 1585 },
    { real: 1400, predicho: 1385 },
  ],
};

const GraficasPrediccion = () => {
  const [modeloSeleccionado, setModeloSeleccionado] = useState("XGBoostX3");

  const {data : dataRP, loading, error, fetchRealPredicho } = useFetchRealPredicho();

  const handleChange = (e) => {
    const { value } = e.target;
    fetchRealPredicho(value);
    setModeloSeleccionado(e.target.value);
  };

  return (
    <div className="card mt-4 shadow">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Comparación: Valores Reales vs Predicción</h5>
        <select className="form-select w-auto" value={modeloSeleccionado} onChange={handleChange}>
          <option value="XGBoostX3">XGBoost</option>
          <option value="MlpRegressorX3">MLPRegressor</option>
          <option value="RandomForestX3">RandomForest</option>
          <option value="GradientBoostingX3">GradientBoosting</option>
        </select>
      </div>
      <div className="card-body">
        {/* <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dataRP}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" label={{ value: "ID", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Valor", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y_real" stroke="#007bff" name="Valor Real" />
            <Line type="monotone" dataKey="y_predicho" stroke="#28a745" name="Predicción" />
          </LineChart>
        </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default GraficasPrediccion;
