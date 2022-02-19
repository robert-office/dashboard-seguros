import { httpService } from "../../http"
import { IPaginateSeguros } from "../../LaravelTypes";

export const getAllSeguros = ( PageAtual: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateSeguros>(`/seguros/show/${PageAtual}`, config); 
}