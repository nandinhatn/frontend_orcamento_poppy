import axios from 'axios';

const api = axios.create({
    baseURL:"https://poppytecnologias.com.br:21227/"
})

export default api;