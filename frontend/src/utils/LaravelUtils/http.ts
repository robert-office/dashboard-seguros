import axios from "axios";

export const httpService = axios.create({
    baseURL: `https://acompany-seguros.herokuapp.com/api`
});