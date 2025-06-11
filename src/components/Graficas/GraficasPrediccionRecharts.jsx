import { useEffect, useState } from "react";
import {CartesianGrid,Legend,Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis,} from "recharts";
import useFetchRealPredicho from "../../hooks/resultadoRealPredic/useFetchRealPredicho";
import Loader from "../Loader";

const GraficasPrediccionRecharts = () => {
  const [modeloSeleccionado, setModeloSeleccionado] = useState("");
  const [graficoCargado, setGraficoCargado] = useState(false);

  const {data : dataRP, loading, error, fetchRealPredicho } = useFetchRealPredicho();
  //console.log("Datos obtenidos:", dataRP);
  const handleChange = (e) => {
    const { value } = e.target;
    if (value !== "") {
        fetchRealPredicho(value);
    }
    setModeloSeleccionado(e.target.value);
    setGraficoCargado(false);
  };

  useEffect(() => {
    if (dataRP) {
        setTimeout(() => setGraficoCargado(true), 1000);
    }
  }, [dataRP]);

  return (
    <div className="card mt-4 shadow">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Comparación: Valores Reales vs Predicción</h5>
        <select className="form-select w-auto" value={modeloSeleccionado} onChange={handleChange}>
          <option value="">Seleccione un modelo</option>
          <option value="XGBoostX3">XGBoost</option>
          <option value="MlpRegressorX3">MLPRegressor</option>
          <option value="RandomForestX3">RandomForest</option>
          <option value="GradientBoostingX3">GradientBoosting</option>
        </select>
      </div>
      <div className="card-body">
        {loading && !graficoCargado ? (
            <Loader />
        ): error ? (
            <p>Error al cargar los datos</p>
        ): (
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataRP} onLoad={() => setGraficoCargado(true)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="id" label={{ value: "ID", position: "insideBottom", offset: -5 }} />
                <YAxis label={{ value: "Valor", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="y_real" stroke="#007bff" name="Valor Real" />
                <Line type="monotone" dataKey="y_predicho" stroke="#28a745" name="Predicción" />
            </LineChart>
            </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default GraficasPrediccionRecharts;
