import { useState } from "react";
import { obtenerGraficoEducacionPresenciaPadreVsIngreso } from "../../api/graficasService";

const useFetchEducaPresenPadre = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEducaPresenPadre = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await obtenerGraficoEducacionPresenciaPadreVsIngreso();
            setData(response);
        } catch (error) {
            setError('Error al obtener los datos de educación y presencia de padres', error);
            console.error('Error fetching educación y presencia padres:', error);   
        } finally {
            setLoading(false);
        }
    }
    return { data, loading, error, fetchEducaPresenPadre };
};

export default useFetchEducaPresenPadre;