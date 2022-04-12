import { httpService } from "../../http"
import { LaravelSeguro } from "../../LaravelTypes";

export const getSeguro = ( id: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }


    return httpService.get<LaravelSeguro>(`/seguros/show/${id}`, config); 
}