import { useEffect, useState } from 'react';
import ComparacionModelos from './CompracionModelos';
import PrediccionModelos from "./PredicccionModelos";
import PredictorVariables from "./PredictorVariables";
import usePostPrediccion from '../../hooks/predictor/usePostPrediccion';
import Loader from '../Loader';

const Predictor = () => {
  
  const { data: dataPredict, loading: loadingPredict, dataForm, setDataForm, error: errorPredict, postPrediccion } = usePostPrediccion();
  const [resultado, setResultado] = useState(null);
  const [comparacion, setComparacion] = useState(null);
  const [resultadosComparacion, setResultadosComparacion] = useState(null); 

  const modelos = ["GradientBoosting", "MlpRegressor", "LightGBM", "XGBRegressor"];

  useEffect(() => {
    if (dataPredict && resultado == null) {
      manejarEnvio(dataPredict);
    }
  }, [dataPredict]);

  const manejarEnvio = (data) => {
    setResultado({ ...data });
    setComparacion(null);
  };

  useEffect(() => {
    if(!resultado) setResultadosComparacion(null);
  }, [resultado]);

  const manejarComparacion = (modelo) => {
    setComparacion(modelo);
  };

  useEffect(() => {
    if (!comparacion) return; // comparación trae el modelo o la opcion todos, para comparar
    const ejecutarPrediccion = async (modelo) => {
    const res = await postPrediccion(dataForm, modelo);
    setResultadosComparacion(prev => ({
      ...prev,
      [modelo]: res
    }));
    // agregar a resultadosComparacion el resultado que ya tenemos
    if(resultado) {
      setResultadosComparacion(prev => ({
        ...prev,
        [resultado.modelo]: resultado
      }));
    }
  };

  if (comparacion === 'Comparar todos') {
    modelos.forEach(m => ejecutarPrediccion(m));
  } else {
    ejecutarPrediccion(comparacion);
  }
}, [comparacion]);

  if (errorPredict) return <div>Se produjo un error al realizar la predicción: {errorPredict.message}</div>;

  return (
    <div className="container my-4">
      {loadingPredict && <Loader />}
      <div className="row">
        <div className="col-md-6">
          <PredictorVariables onSubmit={postPrediccion} loading={loadingPredict} setDataForm={setDataForm} setResultado={setResultado} />
        </div>
        <div className="col-md-6">
          <PrediccionModelos resultado={resultado} onComparar={manejarComparacion} />
          {resultado && resultadosComparacion && <ComparacionModelos modelos={resultadosComparacion} resultado={resultado} />}
        </div>
      </div>
    </div>
  );
};


export default Predictor;
