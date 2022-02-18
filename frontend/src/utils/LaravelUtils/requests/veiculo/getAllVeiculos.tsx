import { httpService } from "../../http"
import { IPaginateVeiculos } from "../../LaravelTypes";

export const getAllVeiculos = () => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateVeiculos>("/veiculos/show", config);
}