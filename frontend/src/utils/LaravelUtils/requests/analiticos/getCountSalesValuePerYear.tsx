import { httpService } from "../../http"

export const getCountSalesValuePerYear = () => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get(`/seguros/showSalesValuePerYear`, config);
}