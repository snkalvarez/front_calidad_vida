import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Loader from '../Loader';
import useFetchEducaPadres from '../../hooks/graficas/useFetchEducaPadres';
import TipoGraficoSelector from './TipoGraficoSelector';
import { getEducacionTraces } from './traces/getEducacionTraces';
import { getEducacionLayout } from './layout/getEducacionLayout';

const GrafEducacionPadres = () => {
  const [tipoGrafico, setTipoGrafico] = useState("linea");
  const { data, loading, error, fetchEducacionPadres } = useFetchEducaPadres();

  useEffect(() => {
    fetchEducacionPadres();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const traces = getEducacionTraces(tipoGrafico, data);
  const layout = getEducacionLayout(tipoGrafico);

  return (
    <div className="p-4">
      <TipoGraficoSelector value={tipoGrafico} onChange={setTipoGrafico} />
      <Plot data={traces} layout={layout} config={{ responsive: true }} style={{ width: "100%", height: "500px" }} />
      <hr className="my-2" />
    <footer className="bg-light py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <article>
            <p className="lead fw-semibold">
              Gráfico sobre la educación de padres/madres en el hogar y su relación con el ingreso familiar.
            </p>
            <p>
              <strong>Eje Y:</strong> Opciones de educación: "No Sabe", "Ninguno", 
              "All Uni" (Termino toda la Universidad), 
              "Alg Uni" (hizo algo de universidad), 
              "All Tec/Tecno" (Termino el Técnico/Tecnológico), 
              "Alg Tec/Tecno" (hizo algo de Técnico/Tecnológico), 
              "All Secun" (Termino toda la Secundaria), 
              "Alg Secun" (hizo algo de Secundaria), 
              "All Prim" (Termino toda la Primaria), 
              "Alg Prim" (hizo algo de Primaria).
            </p>
            <p>
              <strong>Eje X:</strong> Ingreso promedio del hogar en millones según la categoría del eje Y.
            </p>
          </article>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default GrafEducacionPadres;
