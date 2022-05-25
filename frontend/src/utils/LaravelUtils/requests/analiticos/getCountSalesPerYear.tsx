import { httpService } from "../../http"

export const getCountSalesPerYear = () => {

    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    }

    return httpService.get(`/seguros/showSalesPerYear`, config);
}