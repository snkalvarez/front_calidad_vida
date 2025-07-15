import { useEffect, useState } from 'react';
import Loader from '../Loader';
import Plot from 'react-plotly.js';
import useFetchPresePadres from '../../hooks/graficas/useFetchPresePadres';

const GrafPresenciaPadres = () => {
  const [tipoGrafico, setTipoGrafico] = useState("linea");
  const { data, loading, error, fetchPresenciaPadres } = useFetchPresePadres();

  useEffect(() => {
    fetchPresenciaPadres();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const ingresosPadre = data.padres.map(item => item.household_monthly_income);
  const ingresosMadre = data.madres.map(item => item.household_monthly_income);
  const presPadre = data.padres.map(item => item.father_lives_household);
  const presMadre = data.madres.map(item => item.mother_lives_household);

  let traces = [];
  let layout = {
    title: 'Impacto de la Presencia de Padre/Madre en el Ingreso del Hogar',
    xaxis: { title: 'Ingreso Promedio del Hogar', tickprefix: 'M$ ', tickformat: '.1f' },
    yaxis: { title: 'Situación', tickvals: data.metadata.y_ticks, ticktext: data.metadata.y_labels },
    margin: { t: 50, l: 80, r: 40, b: 60 },
    hovermode: 'closest'
  };

  switch (tipoGrafico) {
    case 'linea':
      traces = [
        {
          x: ingresosPadre,
          y: presPadre,
          mode: 'lines+markers',
          name: 'Padre',
          line: { color: 'blue' },
          marker: { symbol: 'circle' }
        },
        {
          x: ingresosMadre,
          y: presMadre,
          mode: 'lines+markers',
          name: 'Madre',
          line: { color: 'red' },
          marker: { symbol: 'square' }
        }
      ];
      break;

    case 'barras':
      traces = [
        {
          x: ingresosPadre,
          y: presPadre,
          type: 'bar',
          name: 'Padre',
          marker: { color: 'blue' }
        },
        {
          x: ingresosMadre,
          y: presMadre,
          type: 'bar',
          name: 'Madre',
          marker: { color: 'red' }
        }
      ];
      layout.barmode = 'group';
      break;

    case 'dispersión':
      traces = [
        {
          x: ingresosPadre,
          y: presPadre,
          type: 'scatter',
          mode: 'markers',
          name: 'Padre',
          marker: { color: 'blue', size: 10 }
        },
        {
          x: ingresosMadre,
          y: presMadre,
          type: 'scatter',
          mode: 'markers',
          name: 'Madre',
          marker: { color: 'red', size: 10 }
        }
      ];
      break;

    case 'area':
      traces = [
        {
          x: ingresosPadre,
          y: presPadre,
          type: 'scatter',
          mode: 'lines',
          fill: 'tozeroy',
          name: 'Padre',
          line: { color: 'blue' }
        },
        {
          x: ingresosMadre,
          y: presMadre,
          type: 'scatter',
          mode: 'lines',
          fill: 'tozeroy',
          name: 'Madre',
          line: { color: 'red' }
        }
      ];
      break;

    case 'boxplot':
      traces = [
        {
          y: presPadre,
          name: 'Padre',
          type: 'box',
          marker: { color: 'blue' }
        },
        {
          y: presMadre,
          name: 'Madre',
          type: 'box',
          marker: { color: 'red' }
        }
      ];
      layout.yaxis = {
        title: 'Situación',
        tickvals: data.metadata.y_ticks,
        ticktext: data.metadata.y_labels
      };
      break;

    case 'pie':
      const totalPadre = presPadre.filter(Boolean).length;
      const totalMadre = presMadre.filter(Boolean).length;

      traces = [{
        type: 'pie',
        labels: ['Padre presente', 'Madre presente'],
        values: [totalPadre, totalMadre],
        marker: { colors: ['blue', 'red'] },
        textinfo: 'label+percent',
        hole: 0.4
      }];
      layout = {
        title: 'Proporción de hogares con presencia de Padre/Madre'
      };
      break;

    default:
      break;
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="tipoGrafico" className="mr-2 font-bold">Tipo de gráfico:</label>
        <select id="tipoGrafico" value={tipoGrafico} onChange={(e) => setTipoGrafico(e.target.value)} className="border rounded px-2 py-1">
          <option value="linea">Línea</option>
          <option value="barras">Barras</option>
          <option value="dispersión">Dispersión</option>
          <option value="area">Área</option>
          <option value="boxplot">Boxplot</option>
          <option value="pie">Pie (totales)</option>
        </select>
      </div>

      <Plot data={traces} layout={layout} config={{ responsive: true }} style={{ width: "100%", height: "500px" }} />
    </div>
  );
};

export default GrafPresenciaPadres;
