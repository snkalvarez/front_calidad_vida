const InfoMetricas = ({data}) => {

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body text-white" style={{ backgroundColor: '#15488C' }}>
          <h3 className="card-title mb-1">Metricas</h3>
          <p className="card-text mb-0">Luego de evaluar las métricas obtenidas utilizando los parámetros por defecto para los distintos modelos, se identificó que los dos algoritmos con mejor desempeño fueron RandomForest y XGBoost. Por tal motivo, se procedió a optimizar sus hiperparámetros. Tras este proceso, el modelo XGBoost optimizado resultó ser el que obtuvo las métricas más favorables. </p>
        </div>
        
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0 small">
              <thead className="table-light">
                <tr className="text-center">
                  <th>Algoritmo</th>
                  <th>Conjunto</th>
                  <th>Dumificado</th>
                  <th>MAE</th>
                  <th>RMSE</th>
                  <th>R2</th>
                  <th>Entrenamiento (s)</th>
                  <th>Predicción (s)</th>
                  <th>Peso (MB)</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((dato, index) => (
                  <tr key={index} className="text-center align-middle">
                    <td className="fw-bold">{dato.Algoritmo}</td>
                    <td>{dato.Conjunto}</td>
                    <td>{dato.Dumificado}</td>
                    <td>{dato.MAE}</td>
                    <td>{dato.RMSE}</td>
                    <td>{dato.R2}</td>
                    <td>{dato.Tiempo_Entrenamiento}</td>
                    <td>{dato.Tiempo_Prediccion}</td>
                    <td>{dato.Peso_Modelo_MB}</td>
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
