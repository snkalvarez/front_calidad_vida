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
  { nivel: 0, masc: 1000000, fem: 900000 },
  { nivel: 1, masc: 980000, fem: 880000 },
  { nivel: 2, masc: 950000, fem: 910000 },
  { nivel: 3, masc: 970000, fem: 920000 },
  { nivel: 4, masc: 1000000, fem: 930000 },
  { nivel: 5, masc: 1050000, fem: 950000 },
  { nivel: 6, masc: 1100000, fem: 1000000 },
  { nivel: 7, masc: 1250000, fem: 1150000 },
  { nivel: 8, masc: 1400000, fem: 1300000 },
  { nivel: 9, masc: 1550000, fem: 1450000 },
  { nivel: 10, masc: 1700000, fem: 1600000 },
];

const GrafSatisfaccionGenero = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nivel" />
        <YAxis tickFormatter={(v) => `${(v / 1e6).toFixed(1)} M`} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="masc" stroke="#007bff" name="Masculino" />
        <Line type="monotone" dataKey="fem" stroke="#ff6600" name="Femenino" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GrafSatisfaccionGenero;
