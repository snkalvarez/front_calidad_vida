import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Loader from '../Loader';
import useFetchEducaPadres from '../../hooks/graficas/useFetchEducaPadres';
import TipoGraficoSelector from './TipoGraficoSelector';
import { getEducacionTraces } from './traces/getEducacionTraces';
import { getEducacionLayout } from './layout/getEducacionLayout';

const GrafEducacionPadres = () => {
  const [tipoGrafico, setTipoGrafico] = useState("linea");
  const { data, loading, error, fetchEducacionPadres } = useFetchEducaPadres();

  useEffect(() => {
    fetchEducacionPadres();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const traces = getEducacionTraces(tipoGrafico, data);
  const layout = getEducacionLayout(tipoGrafico);

  return (
    <div className="p-4">
      <TipoGraficoSelector value={tipoGrafico} onChange={setTipoGrafico} />
      <Plot
        data={traces}
        layout={layout}
        config={{ responsive: true }}
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
};

export default GrafEducacionPadres;
