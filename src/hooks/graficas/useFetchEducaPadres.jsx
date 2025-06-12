import { useState } from "react";
import { obtenerGraficoEducacionPadres } from "../../api/graficasService";

const useFetchEducaPadres = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEducacionPadres = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await obtenerGraficoEducacionPadres();
            setData(response);
        } catch (error) {
            setError('Error al obtener los datos de educación de padres', error);
            console.error('Error fetching educacion padres:', error);   
        } finally {
            setLoading(false);
        }
    }

    return { data, loading, error, fetchEducacionPadres };
}

export default useFetchEducaPadres;