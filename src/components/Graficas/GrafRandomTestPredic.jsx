import axios from "axios";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function GrafRandomTestPredic() {
    const [plotData, setPlotData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        axios.get('http://localhost:5000/plot-data')
        .then(response => {
            setPlotData(response.data);
            setLoading(false);
        }).catch(err => {
            console.error("Error fetching plot data:", err);
            setError(err);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Cargando gráfica...</div>;
    }
    if (error) {
        return <div>Error al cargar la gráfica: {error.message}</div>;
    }
  return (
    <div>
      <h2>Random Forest - y real vs y predicho</h2>
      <Plot data={plotData.data} layout={plotData.layout} style={{ width: "100%", height: "500px" }} useResizeHandler />
    </div>
  );
}
export default GrafRandomTestPredic;