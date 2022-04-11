import { LoadOptions } from "react-select-async-paginate";
import { httpService } from "../../http"
import { IPaginateVeiculos } from "../../LaravelTypes";

export const getAllVeiculos = ( PageAtual: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateVeiculos>(`/veiculos/showAll/${PageAtual}`, config);
}

export const getAllVeiculosIsFree = ( id: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateVeiculos>(`/veiculos/showFreeCars/${id}`, config);
}

export const veiculoFreeLoadOptions: LoadOptions<any, any, { page: number }> = async (searchQuery, loadedOptions, { page, id }: any) => {

    const result = await getAllVeiculosIsFree(Number(id));

    const veiculo = result.data.result.data;
    const optionsResults = veiculo.map(({ id, nome }) => {
        return { "value": id, "label": nome }
    })

    return {
        options: optionsResults,
        hasMore: false,
        additional: {
            page: page + 1,
            id: id
        },
    };
}
