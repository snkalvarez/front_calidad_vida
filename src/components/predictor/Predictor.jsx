import { useEffect, useState } from 'react';
import ComparacionModelos from './CompracionModelos';
import PrediccionModelos from "./PredicccionModelos";
import PredictorVariables from "./PredictorVariables";
import usePostPrediccion from '../../hooks/predictor/usePostPrediccion';
import Loader from '../Loader';
import useFetchDataTabla from '../../hooks/datos/useFetchDataTabla';

const Predictor = () => {
  
  const { data: dataPredict, loading: loadingPredict, dataForm, setDataForm, error: errorPredict, postPrediccion } = usePostPrediccion();
  const { data: dataTbl, loading: loadingTbl, error: errorTbl, fetchDataTabla } = useFetchDataTabla();
  const [resultado, setResultado] = useState(null);
  const [comparacion, setComparacion] = useState(null);
  const [resultadosComparacion, setResultadosComparacion] = useState({}); 

  const modelos = ["GradientBoosting", "MlpRegressor", "LightGBM", "XGBRegressor"];

  useEffect(() => {
    if (dataPredict) {
      manejarEnvio(dataPredict);
    }
  }, [dataPredict]);

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

  useEffect(() => {
    if (!comparacion) return; // comparación trae el modelo o la opcion todos, para comparar
    if (!dataTbl) fetchDataTabla(comparacion); // traemos los datos de la tabla comparativa
    const ejecutarPrediccion = async (modelo) => {
    const res = await postPrediccion(dataForm, modelo);
    setResultadosComparacion(prev => ({
      ...prev,
      [modelo]: res
    }));
  };

  if (comparacion === 'Comparar todos') {
    modelos.forEach(m => ejecutarPrediccion(m));
  } else {
    ejecutarPrediccion(comparacion);
  }
}, [comparacion]);

console.log(resultadosComparacion);

  if (errorPredict) return <div>Se produjo un error al realizar la predicción: {errorPredict.message}</div>;

  return (
    <div className="container my-4">
      {loadingPredict && <Loader />}
      <div className="row">
        <div className="col-md-6">
          <PredictorVariables onSubmit={postPrediccion} loading={loadingPredict} setDataForm={setDataForm} />
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
