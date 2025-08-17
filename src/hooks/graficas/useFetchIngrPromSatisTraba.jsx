import { useState } from "react";
import { obtenerGraficoIngresoEdadPromedioSegunSatisTrabajo } from "../../api/graficasService";

const useFetchIngrPromSatisTraba = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchIngPromSatisTraba = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await obtenerGraficoIngresoEdadPromedioSegunSatisTrabajo();
            setData(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return { data, loading, error, fetchIngPromSatisTraba };
}
export default useFetchIngrPromSatisTraba;