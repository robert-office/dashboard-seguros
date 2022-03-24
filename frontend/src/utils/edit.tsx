import { Ecliente } from '../pages/editPages/Ecliente';
import { Eseguro } from '../pages/editPages/Eseguro';
import { Euser } from '../pages/editPages/Euser';
import { Eveiculo } from '../pages/editPages/Eveiculo';

export type Epages = {
    id: number
}

export type Iedit = {
    name: string,
    page: (id: number) => JSX.Element
}

export const editPages: Iedit[] = [
    {
        name: 'seguro',
        page: (id) => <Eseguro id={id}/>
    },
    {
        name: 'cliente',
        page: (id) => <Ecliente id={id} />
    },
    {
        name: 'user',
        page: (id) => <Euser id={id}/>
    },
    {
        name: 'veiculo',
        page: (id) => <Eveiculo id={id}/>
    }
];