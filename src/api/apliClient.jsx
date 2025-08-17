import axios from "axios";

const apiClientCalidadVida = axios.create({
    baseURL: `https://api-predictor-calidad-vida.onrender.com/`,
})


export default apiClientCalidadVida;