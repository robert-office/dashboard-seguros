import { httpService } from "../../http"
import { IPaginateUsers } from "../../LaravelTypes";

export const getAllUsers = ( PageAtual: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateUsers>(`/users/showAll/${PageAtual}`, config);
}