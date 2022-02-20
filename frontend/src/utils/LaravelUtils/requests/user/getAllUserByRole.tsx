import { httpService } from "../../http"
import { IPaginateUsersByRole } from "../../LaravelTypes";

export const getAllUserByRole = ( PageAtual: number, Role: number ) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<IPaginateUsersByRole>(`/users/showAllByRole/${PageAtual}/${Role}`, config);
}