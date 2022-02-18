import { httpService } from "../../http"
import { IPaginateUsers } from "../../LaravelTypes";

export const getAllClientes = () => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateUsers>("/clientes/show", config);
}