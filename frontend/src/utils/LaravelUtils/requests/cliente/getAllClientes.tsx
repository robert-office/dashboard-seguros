import { LoadOptions } from "react-select-async-paginate";
import { httpService } from "../../http"
import { IPaginateClientes } from "../../LaravelTypes";

export const getAllClientes = ( PageAtual: number, query: string = '' ) => {

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateClientes>(`/clientes/showAll/${PageAtual}/${query}`, config);
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