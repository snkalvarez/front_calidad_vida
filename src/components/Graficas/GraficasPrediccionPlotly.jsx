import { useEffect, useState } from "react";
import useFetchRealPredicho from "../../hooks/resultadoRealPredic/useFetchRealPredicho";
import Plotly from 'plotly.js-basic-dist';
import Loader from "../Loader";

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

    return (
        <>
            <select className="form-select w-auto" value={modeloSeleccionado} onChange={handleChange}>
                <option value="">Seleccione un modelo</option>
                <option value="XGBoostX3">XGBoost</option>
                <option value="MlpRegressorX3">MLPRegressor</option>
                <option value="RandomForestX3">RandomForest</option>
                <option value="GradientBoostingX3">GradientBoosting</option>
            </select>
            {
                loading ? (
                    <Loader />
                ) :(
                    <div id="grafico" style={{ width: "100%", height: "600px" }}></div>
                )
            }
        </>
    );
};

export default GraficasPrediccionPlotly;
