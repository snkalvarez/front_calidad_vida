import axios from "axios";

const apiClientCalidadVida = axios.create({
    baseURL: `http://localhost:5000/`,
})


export default apiClientCalidadVida;