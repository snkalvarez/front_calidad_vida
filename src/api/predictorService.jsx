import apiClientCalidadVida from "./apliClient";

export const obtenerPrediccion = async (data, algoritmo) => {
  try {
    const response = await apiClientCalidadVida.post(
      `/predict?model=${algoritmo}`, // model va como query param
      data // body debe ser SOLO los datos de entrada
    );
    return response.data;
  } catch (error) {
    console.error("Error obteniendo la predicción: ", error);
    throw error;
  }
};
