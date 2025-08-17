import { useState } from "react";
import { obtenerGraficoIngresoEdadSegunSatisTrabajo } from "../../api/graficasService";

const useFetchIngEdadSegunSatisTrabja = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchIngEdadSegunSatisTrabja = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await obtenerGraficoIngresoEdadSegunSatisTrabajo();
            setData(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { data, loading, error, fetchIngEdadSegunSatisTrabja };
}

export default useFetchIngEdadSegunSatisTrabja;