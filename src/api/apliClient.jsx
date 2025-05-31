import axios from "axios";

const apiClientCalidadVida = axios.create({
    baseURL: `http://192.168.101.10:5000/`,
})


export default apiClientCalidadVida;