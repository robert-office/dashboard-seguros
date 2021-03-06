import { LoadOptions } from "react-select-async-paginate";
import { httpService } from "../../http"
import { IPaginateClientes } from "../../LaravelTypes";

export const getAllClientes = ( PageAtual: number, query: string = '' ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    }

    return httpService.get<IPaginateClientes>(`/clientes/showAll/${PageAtual}`, config);
}

export const clienteLoadOptions: LoadOptions<any, any, { page: number }> = async (searchQuery, loadedOptions, { page }: any) => {

    const result = await getAllClientes(Number(page), String(searchQuery));

    const clienteResults = result.data.result.data;
    const optionsResults = clienteResults.map(({ id, nome }) => {
        return { "value": id, "label": nome }
    })

    return {
        options: optionsResults,
        hasMore: Boolean(result.data.result.to),
        additional: {
            page: page + 1,
        },
    };
}