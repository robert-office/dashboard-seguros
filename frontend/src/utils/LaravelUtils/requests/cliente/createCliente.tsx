import { httpService } from "../../http"

export const createCliente = ( data: any) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.post(`/clientes/create`, data, config)
}