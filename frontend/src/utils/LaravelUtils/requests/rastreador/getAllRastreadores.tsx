import { httpService } from "../../http"
import { IPaginateRastreadores } from "../../LaravelTypes";

export const getAllRastreadores = ( PageAtual: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateRastreadores>(`/rastreadores/showAll/${PageAtual}`, config);
}