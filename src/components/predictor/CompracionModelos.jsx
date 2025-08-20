import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';
import useFetchDataTabla from '../../hooks/datos/useFetchDataTabla';
import { useEffect, useMemo } from 'react';
import Loader from '../Loader';

const unirDatosModelos = (dataTbl, modelos) => {
  if (!dataTbl || !modelos) return [];
  return dataTbl
  .filter(item => item.Algoritmo != "RandomForest")// ignoramoes RandomForest ya que no lo necesitamos y no obtendremos valor de predicción para este.
  .map((item) => {
    // buscamos en modelos por clave que coincida con el nombre del modelo
    // normalizamos el nombre porque pueden contener mayusculas o minusculas
    const nombre = item.Algoritmo;
    const claveModelo = Object.keys(modelos).find(
      key => key.toLowerCase() === nombre.toLowerCase()
    );

    return {
      ...item, //metricas
      ...(claveModelo ? modelos[claveModelo] : {}) // info extra
    };
  });
};

const ComparacionModelos = ({ modelos }) => {

  const { data: dataTbl, loading: loadingTbl, error: errorTbl, fetchDataTabla } = useFetchDataTabla();
  
  const datosUnificados = useMemo(
    () => unirDatosModelos(dataTbl, modelos),
    [dataTbl, modelos]
  );

  useEffect(() => {
    if (!dataTbl) fetchDataTabla();
  }, [])

  if(loadingTbl) return <Loader />;
  if(errorTbl) return <div>Error al cargar los datos de la tabla comparativa: {errorTbl.message}</div>;

  const ChartCard = ({ title, dataKey, color }) => (
  <div style={{ width: "100%", height: 300, marginBottom: 30 }}>
    <h3>{title}</h3>
    <ResponsiveContainer>
      <BarChart data={datosUnificados}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Algoritmo" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} fill={color} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

  return (
    <div className="mt-4">
      <h5>Comparación de Modelos</h5>
      <div style={{ padding: "20px" }}>
      <ChartCard title="Tiempo de Predicción (s)" dataKey="Tiempo_Prediccion"  color="#1140daff"/>
      <ChartCard title="Error Absoluto Medio (MAE)" dataKey="MAE" color="#445ff5ff"/>
      <ChartCard title="Error Cuadrático Medio (RMSE)" dataKey="RMSE" color="#5661c5ff"/>
      <ChartCard title="Predicción" dataKey="prediccion" color="#0004ffff"/>
    </div>

    </div>
  );
};

export default ComparacionModelos;
