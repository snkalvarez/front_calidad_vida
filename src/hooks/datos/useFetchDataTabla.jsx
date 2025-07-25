import { useState } from "react";
import { obtenerDataTablaComparativa } from "../../api/datosService";

const useFetchDataTabla = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const fetchDataTabla = async () => {
        setLoading(true);
        setLoading(null);
        try {
            const dataTable = await obtenerDataTablaComparativa();
            setData(dataTable.data);
        } catch (error) {
            setError('Error al obtener la data de la tabla comparatica', error);
        } finally{
            setLoading(false);
        }
    }

    return {data, loading, error, fetchDataTabla};
}

export default useFetchDataTabla;