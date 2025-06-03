import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const data = [
  { nivel: 0, ingreso: 900000, edad: 47 },
  { nivel: 1, ingreso: 880000, edad: 46.5 },
  { nivel: 2, ingreso: 910000, edad: 46.5 },
  { nivel: 3, ingreso: 920000, edad: 46 },
  { nivel: 4, ingreso: 940000, edad: 45.5 },
  { nivel: 5, ingreso: 980000, edad: 45.2 },
  { nivel: 6, ingreso: 1100000, edad: 45 },
  { nivel: 7, ingreso: 1250000, edad: 44.8 },
  { nivel: 8, ingreso: 1400000, edad: 44.5 },
  { nivel: 9, ingreso: 1500000, edad: 44.3 },
  { nivel: 10, ingreso: 1600000, edad: 44.2 },
];

const GrafSatisfaccionEdadProm = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nivel" label={{ value: "Nivel de satisfacción", position: "insideBottom", offset: -5 }} />
        <YAxis yAxisId="left" tickFormatter={(v) => `${(v / 1e6).toFixed(1)} M`} />
        <YAxis yAxisId="right" orientation="right" domain={[44, 47.5]} />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="ingreso" stroke="#2ca02c" name="Ingreso mensual promedio" />
        <Line yAxisId="right" type="monotone" dataKey="edad" stroke="#1f77b4" strokeDasharray="5 5" name="Edad promedio" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GrafSatisfaccionEdadProm;
