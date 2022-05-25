import { httpService } from "../../http"

export const getCountOperadorasBySeguro = () => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    type responseOperadorasBySeguro = {
        "id" : string,
        "nome": string,
        "seguros_count" : number
    }

    return httpService.get<responseOperadorasBySeguro[]>(`/operadoras/showOperadorasPercentageBySeguro`, config);
}