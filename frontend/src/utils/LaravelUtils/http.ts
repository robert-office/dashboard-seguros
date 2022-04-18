import axios from "axios";

/// alow origin
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const httpService = axios.create({
    baseURL: `https://acompany-seguros.herokuapp.com/api`
});