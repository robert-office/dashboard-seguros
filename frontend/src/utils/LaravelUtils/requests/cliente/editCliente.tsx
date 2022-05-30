import { httpService } from "../../http"

export const editCliente = ( data: any, id: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.post(`/clientes/edit/${id}`, data, config)
}