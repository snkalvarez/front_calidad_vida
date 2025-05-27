
const InfoMetricas = () => {
  const datos = [
    {
      algoritmo: "RandomForest",
      mae: 25.9246,
      rmse: 103.203,
      entrenamiento: 94.8083,
      prediccion: 13.2571,
      peso: 3031.3627,
    },
    {
      algoritmo: "XGBoost",
      mae: 8111.9491,
      rmse: 30376.2244,
      entrenamiento: 5.8786,
      prediccion: 0.5094,
      peso: 0.7404,
    },
    {
      algoritmo: "GradientBoosting",
      mae: 5668.3905,
      rmse: 29127.9507,
      entrenamiento: 27.3905,
      prediccion: 0.3373,
      peso: 0.3647,
    },
    {
      algoritmo: "MLPRegressor",
      mae: 5547.2761,
      rmse: 48315.7149,
      entrenamiento: 169.2024,
      prediccion: 0.3206,
      peso: 0.3006,
    },
  ];

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body bg-primary text-white">
          <h3 className="card-title mb-1">Metricas</h3>
          <p className="card-text mb-0">Luego de evaluar las métricas obtenidas utilizando los parámetros por defecto para los distintos modelos, se identificó que los dos algoritmos con mejor desempeño fueron RandomForest y XGBoost. Por tal motivo, se procedió a optimizar sus hiperparámetros. Tras este proceso, el modelo XGBoost optimizado resultó ser el que obtuvo las métricas más favorables. </p>
        </div>
        
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr className="text-center">
                  <th>Algoritmo</th>
                  <th>MAE</th>
                  <th>RMSE</th>
                  <th>Entrenamiento (s)</th>
                  <th>Predicción (s)</th>
                  <th>Peso (MB)</th>
                </tr>
              </thead>
              <tbody>
                {datos.map((fila, index) => (
                  <tr key={index} className="text-center align-middle">
                    <td className="fw-bold">{fila.algoritmo}</td>
                    <td>{fila.mae.toFixed(2)}</td>
                    <td>{fila.rmse.toFixed(2)}</td>
                    <td>{fila.entrenamiento.toFixed(2)}</td>
                    <td>{fila.prediccion.toFixed(2)}</td>
                    <td>{fila.peso.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMetricas;
