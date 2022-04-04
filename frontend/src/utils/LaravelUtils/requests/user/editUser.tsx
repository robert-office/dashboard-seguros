import { httpService } from "../../http"

export const editUser = ( data: any, id: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.post(`/users/edit/${id}}`, data, config)
}