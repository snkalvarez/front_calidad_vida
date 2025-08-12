import { useEffect, useState } from 'react';
import ComparacionModelos from './CompracionModelos';
import PrediccionModelos from "./PredicccionModelos";
import PredictorVariables from "./PredictorVariables";
import usePostPrediccion from '../../hooks/predictor/usePostPrediccion';
import Loader from '../Loader';

const Predictor = () => {
  
  const { data, loading, error, postPrediccion } = usePostPrediccion();
  const [resultado, setResultado] = useState(null);
  const [comparacion, setComparacion] = useState(null);

  useEffect(() => {
    if (data) {
      manejarEnvio(data);
    }
  }, [data]);

  const manejarEnvio = (data) => {
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

  // if(error) return <div>Se produjo un error al realizar la predicción: {error.message}</div>;

  return (
    <div className="container my-4">
      {loading && <Loader />}
      <div className="row">
        <div className="col-md-6">
          <PredictorVariables onSubmit={postPrediccion} loading={loading} />
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
