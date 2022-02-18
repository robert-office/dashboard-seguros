import { httpService } from "../../http"
import { IPaginateRastreadores } from "../../LaravelTypes";

export const getAllRastreadores = () => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateRastreadores>("/rastreadores/show", config);
}