import { useCallback, useState } from "react";
import { obtenerPrediccion } from "../../api/predictorService";

const usePostPrediccion = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [dataForm, setDataForm] = useState(null);

    const postPrediccion = useCallback (async (body, algoritmo) => {
        setDataForm(null);
        setLoading(true);
        setError(null);
        try {
            const response = await obtenerPrediccion(body, algoritmo);
            setDataForm(body);
            setData(response);
            return response;
        } catch (error) {
            console.error("Error al obtener la predicción: ", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);
    return { data, loading, dataForm, setDataForm, error, postPrediccion };
};

export default usePostPrediccion;