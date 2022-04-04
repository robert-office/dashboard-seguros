import { httpService } from "../../http"
import { LaravelUser } from "../../LaravelTypes";

export const getUser = (id: number) => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get<LaravelUser>(`/users/show/${id}`, config);
}