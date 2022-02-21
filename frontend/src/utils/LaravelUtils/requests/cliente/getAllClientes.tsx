import { httpService } from "../../http"
import { IPaginateClientes, IPaginateUsers } from "../../LaravelTypes";

export const getAllClientes = ( PageAtual: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateClientes>(`/clientes/showAll/${PageAtual}`, config);
}