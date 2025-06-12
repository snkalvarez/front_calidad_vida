import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useFetchEducaPadres from '../../hooks/graficas/useFetchEducaPadres';
import { useEffect } from 'react';
import Loader from '../Loader';
import Plot from 'react-plotly.js';

const data = [
   { nivel: 'Ninguno', Padre: 900, Madre: 1000 },
  { nivel: 'Primaria', Padre: 1500, Madre: 1400 },
    { nivel: 'Secundaria', Padre: 2300, Madre: 2100 },
  { nivel: 'Tecnico o Tecnologo', Padre: 3600, Madre: 3500 },
  { nivel: 'Universitario', Padre: 4700, Madre: 4400 },
];

const GrafEducacionPadres = () => {

  const { data, loading, error, fetchEducacionPadres } = useFetchEducaPadres();
  const { education_labels, father_education, mother_education } = data;
  useEffect(() => {
    fetchEducacionPadres();
  }, []);

  if(loading) return <Loader />;
  if(error) return <div>Error: {error}</div>;


  
  return (
    <div className="mt-3" style={{ width: '100%', height: '300px' }}>
      <div className="bg-primary text-white p-2 rounded-top">Educación de los Padres vs Ingreso</div>
      <Plot
      data={[
        {
          x: father_education.income,
          y: education_labels,
          type: "scatter",
          mode: "lines+markers",
          name: "Educación Padre",
          line: { color: "blue", width: 2 },
          marker: { symbol: "circle", size: 8 },
        },
        {
          x: mother_education.income,
          y: education_labels,
          type: "scatter",
          mode: "lines+markers",
          name: "Educación Madre",
          line: { color: "red", width: 2 },
          marker: { symbol: "square", size: 8 },
        },
      ]}
      layout={{
        title: "Impacto de la educación padre/madre en los ingresos del hogar",
        xaxis: {
          title: "Ingreso Promedio del Hogar",
          tickprefix: "$",
          zeroline: false,
          gridcolor: "#eee",
        },
        yaxis: {
          title: "Nivel Educativo",
          type: "category",
          automargin: true,
        },
        width: 1000,
        height: 500,
        plot_bgcolor: "#fff",
        paper_bgcolor: "#fff",
        legend: { x: 0.9, y: 1 },
        margin: { l: 100, r: 50, t: 60, b: 60 },
      }}
      config={{ responsive: true }}
    />
    </div>
  );
};

export default GrafEducacionPadres;
