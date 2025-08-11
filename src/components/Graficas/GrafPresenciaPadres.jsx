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
    <div className="p-4">
      <TipoGraficoSelector value={tipoGrafico} onChange={setTipoGrafico} />
      <Plot data={traces} layout={layout} config={{ responsive: true }} style={{ width: "100%", height: "500px" }} />
    </div>
  );
};

export default GrafPresenciaPadres;
