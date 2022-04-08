import { httpService } from "../../http"

export const createSeguro = ( data: any) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.post(`/seguros/create`, data, config)
}