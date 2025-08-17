import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Loader from '../Loader';
import useFetchPresePadres from '../../hooks/graficas/useFetchPresePadres';
import TipoGraficoSelector from './TipoGraficoSelector';
import { getPresenciaTraces } from './traces/getPresenciaTraces';
import { getPresenciaLayout } from './layout/getPresenciaLayout';

const GrafPresenciaPadres = () => {
  const [tipoGrafico, setTipoGrafico] = useState('linea');
  const { data, loading, error, fetchPresenciaPadres } = useFetchPresePadres();

  useEffect(() => {
    fetchPresenciaPadres();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const traces = getPresenciaTraces(tipoGrafico, data);
  const layout = getPresenciaLayout(tipoGrafico, data.metadata);

  return (
  <div className="container py-4">
    <section className="mb-4">
      <TipoGraficoSelector value={tipoGrafico} onChange={setTipoGrafico} />
    </section>

    <section className="mb-5">
      <Plot data={traces} layout={layout} config={{ responsive: true }} style={{ width: "100%", height: "500px" }} />
    </section>
    <hr className="my-2" />
    <footer className="bg-light py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <article>
            <p className="lead fw-semibold">
              Gráfico sobre la presencia de padres/madres en el hogar y su relación con el ingreso familiar.
            </p>
            <p>
              <strong>Eje Y:</strong> Opciones de presencia: "Vive en el hogar", "No vive en el hogar" o "Falleció".
            </p>
            <p>
              <strong>Eje X:</strong> Ingreso promedio del hogar en millones según la categoría del eje Y.
            </p>
          </article>
        </div>
      </div>
    </footer>
  </div>
);

};

export default GrafPresenciaPadres;
