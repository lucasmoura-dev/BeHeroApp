import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.100.2:3333' // coloca o ip da maquina ou localhost
    // o ip é o que mostra lá no site do axios
});

export default api;