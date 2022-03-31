import { httpService } from "../../http"
import { Icliente } from "../../LaravelTypes";

export const getCliente = ( id: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<Icliente>(`/clientes/show/${id}`, config);
}