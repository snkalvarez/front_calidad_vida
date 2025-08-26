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
  const layout = getEducacionLayout(data, tipoGrafico);

  return (
    <div className="p-4">
      <TipoGraficoSelector value={tipoGrafico} onChange={setTipoGrafico} />
      <Plot data={traces} layout={layout} config={{ responsive: true }} style={{ width: "100%", height: "600px" }} />
      <hr className="my-2" />
      <footer className="bg-light py-4">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <article>
              <p className="lead fw-semibold">
                Gráfico sobre la educación de padres/madres en el hogar y su relación con el ingreso.
              </p>
              <p>
                Se ve una relación clara entre la educación de los padres/madres y mayor ingreso.
                Los hogares con mayores ingresos tienden a tener padres/madres con educación superior.
                A medida que aumenta el nivel educativo (primaria - secundaria - técnica - universitaria) también se observa un aumento en el ingreso.
                Esto sugiere que la educación de los padres/madres puede influir positivamente en el bienestar económico del hogar.
              </p>
            </article>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GrafEducacionPadres;