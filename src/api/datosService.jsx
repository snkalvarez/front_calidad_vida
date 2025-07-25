import apiClientCalidadVida from "./apliClient";

export const obtenerResultadosRealVsPrediccion = async (modelo) => {
    try {
        const response = await apiClientCalidadVida.get(`/data_real_predic/csv?model=${modelo}&num_muestras=3000`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo los resultados reales vs predicción: ", error);
        throw error;
    }
}

export const obtenerDataTablaComparativa = async () => {
    try {
        const response = await apiClientCalidadVida.get(`datacomparativa`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo la data de la tabla comparativa ", error);
        throw error;
    }
}