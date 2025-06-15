import apiClientCalidadVida from "./apliClient";

export const obtenerGraficoPresenciaPadres = async () => {
    try {
        const response = await apiClientCalidadVida.get(`/grafica/presenciapadresvsingreso`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo el gráfico de presencia de padres vs ingreso: ", error);
        throw error;
    }
}

export const obtenerGraficoEducacionPadres = async () => {
    try {
        const response = await apiClientCalidadVida.get(`/grafica/educacionpadresvsingreso`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo el gráfico de educación de padres vs ingreso: ", error);
        throw error;
    }
}

export const obtenerGraficoEducacionPresenciaPadreVsIngreso = async () => {
    try {
        const response = await apiClientCalidadVida.get(`/grafica/educacionpresenciapadrevsingreso`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo el gráfico de educación y presencia de padres vs ingreso: ", error);
        throw error;
    }
}

export const obtenerGraficoEducacionPresenciaMadreVsIngreso = async () => {
    try {
        const response = await apiClientCalidadVida.get(`/grafica/educacionpresenciamadrevsingreso`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo el gráfico de educación y presencia de madres vs ingreso: ", error);
        throw error;
    }
}