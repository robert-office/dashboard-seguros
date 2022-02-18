import { httpService } from "../../http"
import { IPaginateSeguros } from "../../LaravelTypes";

export const getAllSeguros = () => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateSeguros>("/seguros/show", config);
}