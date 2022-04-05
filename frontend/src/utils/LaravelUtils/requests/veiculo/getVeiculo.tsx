import { httpService } from "../../http"
import { LaravelVeiculo } from "../../LaravelTypes";

export const getVeiculo = (id: number) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<LaravelVeiculo>(`/veiculos/show/${id}`, config);
}