import { httpService } from "../../http"

export const createVeiculo = ( data: any) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.post(`/veiculos/create`, data, config)
}