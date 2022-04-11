import { LoadOptions } from "react-select-async-paginate";
import { httpService } from "../../http"
import { IPaginateUsersByRole } from "../../LaravelTypes";

export const getAllUserByRole = ( PageAtual: number, Role: number, query: string = '' ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateUsersByRole>(`/users/showAllByRole/${PageAtual}/${Role}/${query}`, config);
}

export const vendedorLoadOptions: LoadOptions<any, any, { page: number }> = async (searchQuery, loadedOptions, { page }: any) => {

    const result = await getAllUserByRole(Number(page), 2, searchQuery);

    const userResults = result.data.result.data;
    const optionsResults = userResults.map(({ id, nome }) => {
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