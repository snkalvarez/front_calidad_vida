import { useState } from "react";
import { obtenerGraficoPresenciaPadres } from "../../api/graficasService";

const useFetchPresePadres = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPresenciaPadres = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await obtenerGraficoPresenciaPadres();
            setData(data);
        } catch (error) {
            setError('Error al obtener los datos de presencia de padres', error);
            console.error('Error fetching presencia padres:', error);   
        } finally {
            setLoading(false);
        }
    }

    return { data, loading, error, fetchPresenciaPadres };
};

export default useFetchPresePadres;