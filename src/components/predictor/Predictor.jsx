import { useState } from 'react';
import ComparacionModelos from './CompracionModelos';
import PrediccionModelos from "./PredicccionModelos";
import PredictorVariables from "./PredictorVariables";

const Predictor = () => {
  const [resultado, setResultado] = useState(null);
  const [comparacion, setComparacion] = useState(null);

  const manejarEnvio = (data) => {
    console.log("Datos enviados:", data);
    setResultado({
      modelo: data.modelo,
      ingreso: 1234567,
      importancia: {
        Variable1: 0.3,
        Variable2: 0.5,
        Variable3: 0.2,
      },
    });
    setComparacion(null);
  };

  const manejarComparacion = (modelo) => {
    setComparacion(modelo);
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <PredictorVariables onSubmit={manejarEnvio} />
        </div>
        <div className="col-md-6">
          <PrediccionModelos resultado={resultado} onComparar={manejarComparacion} />
          {comparacion && <ComparacionModelos modelos={comparacion} />}
        </div>
      </div>
    </div>
  );
};


export default Predictor;
