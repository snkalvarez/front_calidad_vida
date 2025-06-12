import { useEffect } from 'react';
import Loader from '../Loader';
import Plot from 'react-plotly.js';
import useFetchPresePadres from '../../hooks/graficas/useFetchPresePadres';

const GrafPresenciaPadres = () => {

  const { data, loading, error, fetchPresenciaPadres } = useFetchPresePadres();
  
  useEffect(() => {
    fetchPresenciaPadres();
  }, []);
  
  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const trazaPadre = {
    x: data.padres.map(item => item.household_monthly_income),
    y: data.padres.map(item => item.father_lives_household),
    mode: 'lines+markers',
    name: 'Padre',
    line: { color: 'blue' },
    marker: { symbol: 'circle' }
  };
  
  const trazaMadre = {
    x: data.madres.map(item => item.household_monthly_income),
    y: data.madres.map(item => item.mother_lives_household),
    mode: 'lines+markers',
    name: 'Madre',
    line: { color: 'red' },
    marker: { symbol: 'square' }
  };

  return (
    <div className="mt-3" style={{ width: '100%', height: '300px' }}>
      <div className="bg-primary text-white p-2 rounded-top">Presencia de los Padres vs Ingreso</div>
    <Plot data={[trazaPadre, trazaMadre]}
      layout={{ title: 'Impacto de la Presencia de Padre/Madre en el Ingreso del Hogar',
        xaxis: {
          title: 'Ingreso Promedio del Hogar',
          tickformat: '.1f',
          tickprefix: 'M$ '
        },
        yaxis: {
          title: 'Situación',
          tickvals: data.metadata.y_ticks,
          ticktext: data.metadata.y_labels
        },
        hovermode: 'closest',
        width: 1000,
        height: 500
      }}
      config={{ responsive: true }}
    />
    </div>
  )
}

export default GrafPresenciaPadres;
