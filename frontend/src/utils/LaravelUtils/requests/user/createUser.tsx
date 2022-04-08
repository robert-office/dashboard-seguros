import { httpService } from "../../http"

export const createUser = ( data: any) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.post(`/users/create`, data, config)
}