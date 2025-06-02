import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis, YAxis
} from "recharts";

const dataPadre = [
  { nivel: "Ninguno", enHogar: 1100000, noHogar: 800000, fallecido: 450000 },
  { nivel: "Primaria", enHogar: 1150000, noHogar: 1250000, fallecido: 550000 },
  { nivel: "Secundaria", enHogar: 1800000, noHogar: 1450000, fallecido: 1150000 },
  { nivel: "Tecnólogo", enHogar: 3200000, noHogar: 2900000, fallecido: 1400000 },
  { nivel: "Universitario", enHogar: 4100000, noHogar: 3900000, fallecido: 1750000 },
];

const dataMadre = [
   { nivel: "Ninguno", enHogar: 900000, noHogar: 700000, fallecido: 350000 },
  { nivel: "Primaria", enHogar: 1050000, noHogar: 950000, fallecido: 550000 },
  { nivel: "Secundaria", enHogar: 1600000, noHogar: 1150000, fallecido: 950000 },
  { nivel: "Tecnólogo", enHogar: 3200000, noHogar: 2900000, fallecido: 1400000 },
  { nivel: "Universitario", enHogar: 4100000, noHogar: 3900000, fallecido: 1750000 },
];

const GrafInteraccionPadres = () => {
  const [seleccion, setSeleccion] = useState("padre");
  const data = seleccion === "padre" ? dataPadre : dataMadre;

  return (

    <div className="card shadow mb-4 my-2">
      <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
        <span>Ingreso según Educación y Presencia en el Hogar</span>
        <select
          value={seleccion}
          onChange={(e) => setSeleccion(e.target.value)}
          className="form-select form-select-sm w-auto"
        >
          <option value="padre">Padre</option>
          <option value="madre">Madre</option>
        </select>
      </div>
      <div className="card-body">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nivel" angle={-45} textAnchor="end" height={70} />
            <YAxis tickFormatter={(val) => `${(val / 1000000).toFixed(1)} M`} />
            <Tooltip formatter={(val) => `${(val / 1000000).toFixed(2)} M`} />
            <Legend />
            <Line type="monotone" dataKey="enHogar" name="Está en el hogar" stroke="#0000ff" />
            <Line type="monotone" dataKey="noHogar" name="No está en el hogar" stroke="#ffa500" />
            <Line type="monotone" dataKey="fallecido" name="Fallecido" stroke="#28a745" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GrafInteraccionPadres;
