import apiClientCalidadVida from "./apliClient"

export const obtenerDataTablaComparativa = async () => {
    try {
        const response = await apiClientCalidadVida.get(`datacomparativa`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo la data de la tabla comparativa ", error);
        throw error;
    }
}