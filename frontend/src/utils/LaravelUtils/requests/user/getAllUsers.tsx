import { LoadOptions } from "react-select-async-paginate";
import { httpService } from "../../http"
import { IPaginateUsers } from "../../LaravelTypes";

export const getAllUsers = ( PageAtual: number, query: string = ''  ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateUsers>(`/users/showAll/${PageAtual}/${query}`, config);
}

export const userLoadOptions: LoadOptions<any, any, { page: number }> = async (searchQuery, loadedOptions, { page }: any) => {

    const result = await getAllUsers(Number(page), String(searchQuery));

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