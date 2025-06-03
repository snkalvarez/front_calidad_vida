import { useEffect, useState } from 'react';
import ComparacionModelos from './CompracionModelos';
import PrediccionModelos from "./PredicccionModelos";
import PredictorVariables from "./PredictorVariables";
import usePostPrediccion from '../../hooks/predictor/usePostPrediccion';

const Predictor = () => {
  
  const { data, loading, error, postPrediccion } = usePostPrediccion();
  const [resultado, setResultado] = useState(null);
  const [comparacion, setComparacion] = useState(null);

  useEffect(() => {
    if (data) {
      console.log("obtuvimos la respuesta", data);
      manejarEnvio(data);
    }
  }, [data]);

  const manejarEnvio = (data) => {
    console.log("Datos enviados:", data);
    setResultado({
      modelo: data.modelo,
      ingreso: data.prediccion,
      importancia: data.importancia,
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
          <PredictorVariables onSubmit={postPrediccion} />
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
