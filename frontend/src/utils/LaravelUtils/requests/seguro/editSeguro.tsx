import { httpService } from "../../http"

export const editSeguro = ( id: number, data: any ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.post(`/seguros/edit/${id}}`, data, config)
}