import { useState } from "react";
import { obtenerGraficoEducacionPresenciaMadreVsIngreso } from "../../api/graficasService";

const useFetchEducaPresenMadre = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEducaPresenMadre = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await obtenerGraficoEducacionPresenciaMadreVsIngreso();
            setData(response);
        } catch (error) {
            setError('Error al obtener los datos de educación y presencia de madres', error);
            console.error('Error fetching educación y presencia madres:', error);
        } finally {
            setLoading(false);
        }
    }
    return { data, loading, error, fetchEducaPresenMadre };
};

export default useFetchEducaPresenMadre;