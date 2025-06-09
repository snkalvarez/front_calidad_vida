import apiClientCalidadVida from "./apliClient";

export const obtenerResultadosRealVsPrediccion = async (modelo) => {
    try {
        const response = await apiClientCalidadVida.get(`/data_real_predic/pkl?model=${modelo}`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo los resultados reales vs predicción: ", error);
        throw error;
    }
}