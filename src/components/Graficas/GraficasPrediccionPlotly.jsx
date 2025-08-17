import { useEffect, useState } from "react";
import Plotly from 'plotly.js-basic-dist';
import Loader from "../Loader";
import useFetchRealPredicho from "../../hooks/datos/useFetchRealPredicho";

const GraficasPrediccionPlotly = () => {
    const [modeloSeleccionado, setModeloSeleccionado] = useState("");

    const { data: dataRP, loading, error, fetchRealPredicho } = useFetchRealPredicho();

    const handleChange = (e) => {
        const { value } = e.target;
        if (value !== "") {
            fetchRealPredicho(value);
        }
        setModeloSeleccionado(e.target.value);
    };

    useEffect(() => {
        if (dataRP && dataRP.length > 0) {
            const yReal = dataRP.map(d => d.y_real);
            const yPredicho = dataRP.map(d => d.y_predicho);

            const trace = {
                x: yReal,
                y: yPredicho,
                mode: 'markers',
                type: 'scattergl',
                marker: { size: 3, opacity: 0.3 }
            };

            const layout = {
                title: 'Real vs Predicho',
                xaxis: { title: 'Valor Real' },
                yaxis: { title: 'Valor Predicho' },
            };

            Plotly.newPlot('grafico', [trace], layout);
        }
    }, [dataRP])

    if (error) return <div>Error al cargar los datos: {error.message}</div>;

    return (
        <div className="card mt-4 shadow">
            <div className="card-header text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: '#000051' }}>
                <h5 className="mb-0">Comparación: Valores Reales vs Predicción</h5>
                <select className="form-select w-auto" value={modeloSeleccionado} onChange={handleChange} disabled={loading}>
                    <option value="">Seleccione un modelo</option>
                    <option value="XGBRegressor">XGBRegressor</option>
                    <option value="MlpRegressor">MLPRegressor</option>
                    <option value="LightGBM">LightGBM</option>
                    <option value="GradientBoosting">GradientBoosting</option>
                </select>
            </div>
            <div className="card-body">
                <p className="fs-5">Las gráficas de Real vs. Predicción son una representación visual que compara 
                    los valores reales con los valores que un modelo ha predicho. 
                    Este tipo de gráfica es un diagrama de dispersión (scatter plot), 
                    que se usa para evaluar el rendimiento del modelo mostrando qué tan cerca están los puntos predichos de la línea de valores reales.
                </p>
                {
                    loading ? (
                        <Loader />
                    ) : (
                        <div id="grafico" style={{ width: "100%", height: "600px" }}></div>
                    )
                }
            </div>
        </div>
    );
};

export default GraficasPrediccionPlotly;
