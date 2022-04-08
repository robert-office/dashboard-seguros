import { LoadOptions } from "react-select-async-paginate";
import { httpService } from "../../http"
import { IPaginateClientes } from "../../LaravelTypes";

export const getAllClientes = ( PageAtual: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateClientes>(`/clientes/showAll/${PageAtual}`, config);
}

export const clienteLoadOptions: LoadOptions<any, any, { page: number }> = async (searchQuery, loadedOptions, { page }: any) => {

    const result = await getAllClientes(Number(page));

    const clienteResults = result.data.result.data;
    const optionsResults = clienteResults.map(({ id, nome }) => {
        return { "value": id, "label": nome }
    })

    return {
        options: optionsResults,
        hasMore: true,
        additional: {
            page: page + 1,
        },
    };
}