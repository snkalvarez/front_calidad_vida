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
  { nivel: 0, edad1: 25, edad2: 40, edad3: 52, edad4: 62, ingreso1: 850000, ingreso2: 950000, ingreso3: 980000, ingreso4: 1050000 },
  { nivel: 1, edad1: 25, edad2: 40, edad3: 52, edad4: 62, ingreso1: 880000, ingreso2: 980000, ingreso3: 1000000, ingreso4: 1070000 },
  { nivel: 2, edad1: 25, edad2: 40, edad3: 52, edad4: 62, ingreso1: 870000, ingreso2: 970000, ingreso3: 1010000, ingreso4: 1100000 },
  { nivel: 3, edad1: 25, edad2: 40, edad3: 52, edad4: 62, ingreso1: 900000, ingreso2: 1000000, ingreso3: 1020000, ingreso4: 1150000 },
  { nivel: 4, edad1: 25, edad2: 40, edad3: 52, edad4: 62, ingreso1: 950000, ingreso2: 1050000, ingreso3: 1100000, ingreso4: 1200000 },
  { nivel: 5, edad1: 25, edad2: 40, edad3: 52, edad4: 62, ingreso1: 1000000, ingreso2: 1100000, ingreso3: 1200000, ingreso4: 1300000 },
  { nivel: 6, edad1: 25, edad2: 40, edad3: 52, edad4: 62, ingreso1: 1050000, ingreso2: 1150000, ingreso3: 1300000, ingreso4: 1400000 },
  { nivel: 7, edad1: 25, edad2: 40, edad3: 52, edad4: 62, ingreso1: 1100000, ingreso2: 1250000, ingreso3: 1400000, ingreso4: 1500000 },
  { nivel: 8, edad1: 25, edad2: 40, edad3: 52, edad4: 62, ingreso1: 1250000, ingreso2: 1400000, ingreso3: 1550000, ingreso4: 1650000 },
  { nivel: 9, edad1: 25, edad2: 40, edad3: 52, edad4: 62, ingreso1: 1350000, ingreso2: 1500000, ingreso3: 1600000, ingreso4: 1700000 },
  { nivel: 10, edad1: 25, edad2: 40, edad3: 52, edad4: 62, ingreso1: 1400000, ingreso2: 1600000, ingreso3: 1650000, ingreso4: 1750000 },
];

const GrafSatisfaccionEdadGrupo = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nivel" tickFormatter={(v) => `${v}`} />
        <YAxis yAxisId="left" tickFormatter={(v) => `${(v / 1e6).toFixed(1)} M`} />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="ingreso1" stroke="#8884d8" name="Ingreso (15-29)" />
        <Line yAxisId="left" type="monotone" dataKey="ingreso2" stroke="#82ca9d" name="Ingreso (30-44)" />
        <Line yAxisId="left" type="monotone" dataKey="ingreso3" stroke="#ffc658" name="Ingreso (45-59)" />
        <Line yAxisId="left" type="monotone" dataKey="ingreso4" stroke="#ff7300" name="Ingreso (60-74)" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GrafSatisfaccionEdadGrupo;
