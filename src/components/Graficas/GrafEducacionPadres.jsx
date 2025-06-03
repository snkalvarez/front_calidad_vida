import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
   { nivel: 'Ninguno', Padre: 900, Madre: 1000 },
  { nivel: 'Primaria', Padre: 1500, Madre: 1400 },
    { nivel: 'Secundaria', Padre: 2300, Madre: 2100 },
  { nivel: 'Tecnico o Tecnologo', Padre: 3600, Madre: 3500 },
  { nivel: 'Universitario', Padre: 4700, Madre: 4400 },
];

const GrafEducacionPadres = () => {
  return (
    <div className="mt-3" style={{ width: '100%', height: '300px' }}>
      <div className="bg-primary text-white p-2 rounded-top">Educación de los Padres vs Ingreso</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nivel" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Padre" fill="#8884d8" />
          <Bar dataKey="Madre" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrafEducacionPadres;
