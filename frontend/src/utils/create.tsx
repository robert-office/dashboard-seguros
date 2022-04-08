import { Ccliente } from "../pages/createPages/Ccliente";
import { Cseguro } from "../pages/createPages/Cseguro";
import { Cuser } from "../pages/createPages/Cuser";
import { Cveiculo } from "../pages/createPages/Cveiculo";

export type Cpages = {
    id: number
}

export type Cedit = {
    name: string,
    page: JSX.Element
}

export const createPages: Cedit[] = [
    {
        name: 'seguro',
        page: <Cseguro/>
    },
    {
        name: 'cliente',
        page: <Ccliente/>
    },
    {
        name: 'user',
        page: <Cuser/>
    },
    {
        name: 'veiculo',
        page: <Cveiculo/>
    }
];