import { useState, useEffect } from 'react';
import { AutoSizer } from 'react-virtualized';
import { RadialChart } from 'react-vis';
import { getCountOperadorasBySeguro } from '../../utils/LaravelUtils/requests/analiticos/getCountOperadorasBySeguro';

import svgRaining from "../../assets/svgs/raining.svg";
import "./radialGraph.css";
import '../../../node_modules/react-vis/dist/style.css';

type IdataGraph = {
    angle: number,
    radius: number,
    label: string,
    subLabel?: string
}

type IradialGraph = {
    data: IdataGraph[]
}

export const OperadorasCountGrafico = () => {

    const [operadorasCount, setOperadorasCount] = useState<IdataGraph[]>();

    //// FAZENDO A CHAMADA PARA API RECUPERAR OS DADOS DOS GRAFICOS
    useEffect(() => {
        getCountOperadorasBySeguro().then((response) => {
            let operadoraFormatedData: IdataGraph[] = [];

            response.data.map((operadoraData) => {
                operadoraFormatedData.push(
                    {
                        angle: Number(operadoraData.seguros_count),
                        radius: 100,
                        label: String(operadoraData.nome)
                    }
                )
            })

            setOperadorasCount(operadoraFormatedData);
        });

    }, []);

    if (operadorasCount && operadorasCount.length > 0) {
        return (<RadialGraph data={operadorasCount} />);
    }

    return (
        <div className="relative w-full h-full">
            <img src={svgRaining} alt="loading img, child look at rain" className="w-full h-full px-10 pb-12" />
        </div>
    )
}

export const RadialGraph = ({ data }: IradialGraph) => {
    return (
        <div className='w-full h-full'>
            <AutoSizer>
                {({ height, width }) => (
                    <RadialChart innerRadius={60.2} radius={60.4} width={width} height={height} showLabels animation data={data} />
                )}
            </AutoSizer>
        </div>
    )
}