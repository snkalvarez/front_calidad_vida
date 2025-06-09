import { useState } from "react";
import { obtenerResultadosRealVsPrediccion } from "../../api/resultadosRealPredicho";

const useFetchRealPredicho = () =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRealPredicho = async (modelo) => {
        setLoading(true);
        setError(null);
        try {
            const response = await obtenerResultadosRealVsPrediccion(modelo);
            setData(response.data);
        } catch (error) {
            setError('Error al obtener los resultados reales vs predicción', error);
        } finally {
            setLoading(false);
        }
    }

    return { data, loading, error, fetchRealPredicho };
}

export default useFetchRealPredicho;