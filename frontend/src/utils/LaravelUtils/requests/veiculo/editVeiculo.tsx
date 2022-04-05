import { httpService } from "../../http"

export const editVeiculo = ( data: any, id: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.post(`/veiculos/edit/${id}}`, data, config)
}