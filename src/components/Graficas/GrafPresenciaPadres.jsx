import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Loader from '../Loader';
import useFetchPresePadres from '../../hooks/graficas/useFetchPresePadres';
import TipoGraficoSelector from './TipoGraficoSelector';
import { getPresenciaTraces } from './traces/getPresenciaTraces';
import { getPresenciaLayout } from './layout/getPresenciaLayout';

const GrafPresenciaPadres = () => {
  const [tipoGrafico, setTipoGrafico] = useState('linea');
  const { data , loading, error, fetchPresenciaPadres } = useFetchPresePadres();

  useEffect(() => {
    fetchPresenciaPadres();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const traces = getPresenciaTraces(tipoGrafico, data);
  const layout = getPresenciaLayout(data.meta);
  
  
  return (
  <div className="container py-4">
    <section className="mb-4">
      <TipoGraficoSelector value={tipoGrafico} onChange={setTipoGrafico} />
    </section>

    <section className="mb-5">
       <Plot data={traces} layout={layout} config={{ responsive: true }} style={{ width: "100%", height: "600px" }} />
    </section>
    <hr className="my-2" />
    <footer className="bg-light py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <article>
            <p className="lead ">
              Cuando el padre o la madre viven en el hogar los hogares presentan ingresos promedio de 1.7M.  
              Cuando alguno de los dos no vive en el hogar, el ingreso promedio baja significativamente aproximadamente a 1.3M siendo la condición más desfavorable.
              Los efectos son similares para hogares donde se cumplen las condiciones de los dos padres vive en el hogar.
            </p>
          </article>
        </div>
      </div>
    </footer>
  </div>
);

};

export default GrafPresenciaPadres;
