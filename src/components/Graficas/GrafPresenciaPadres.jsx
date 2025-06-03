import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { situacion: 'Fallecido/a', father: 900000, mother: 990000 },
  { situacion: 'No vive en el hogar', father: 1750000, mother: 1680000 },
  { situacion: 'Vive en el Hogar', father: 2900000, mother: 2600000 }
];

const GrafPresenciaPadres = () => (
  <div className="mt-3" style={{ width: '100%', height: '300px' }}>
    <div className="bg-secondary text-white p-2 rounded-top">
      Presencia de los Padres vs Ingreso Promedio
    </div>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="situacion" />
        <YAxis tickFormatter={val => `${(val / 1000000).toFixed(1)} M`} />
        <Tooltip formatter={(val) => `${(val / 1000000).toFixed(2)} M`} />
        <Legend />
        <Line type="monotone" dataKey="father" name="Padre" stroke="#0000ff" />
        <Line type="monotone" dataKey="mother" name="Madre" stroke="#ff0000" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default GrafPresenciaPadres;
