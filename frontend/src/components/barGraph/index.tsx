import "./barGraph.css";
import '../../../node_modules/react-vis/dist/style.css';
import { useMediaQuery } from '@mui/material';
import { AutoSizer } from 'react-virtualized';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries
} from 'react-vis';
import { useState, useRef, useEffect } from "react";
import { getCountSalesPerYear } from "../../utils/LaravelUtils/requests/analiticos/getCountSalesPerYear";
import svgRaining from "../../assets/svgs/raining.svg";

type IdataGraph = {
    x: string,
    y: number
}

type IbarGraph = {
    data: IdataGraph[]
}

export const VendasPorAnoGrafico = () => {
    type IanaliticGraph = {
        x: string,
        y: number
    }
    const [totalVendas, setTotalVendas] = useState<IanaliticGraph[]>();

    //// FAZENDO A CHAMADA PARA API RECUPERAR OS DADOS DOS GRAFICOS
    useEffect(() => {

        getCountSalesPerYear().then((response) => {
            let Sales: IanaliticGraph[] = [];
            const salesInArray = Object.entries(response.data);

            salesInArray.map((saleOfYear) => {
                let ano = saleOfYear[0];
                let valor = saleOfYear[1];

                Sales.push({ x: ano, y: Number(valor) });
            });

            setTotalVendas(Sales);
        });

    }, []);

    if (totalVendas && totalVendas.length > 0) {
        return (<BarGraph data={totalVendas} />);
    }

    return (
        <div className="relative w-full h-full">
            <img src={svgRaining} alt="loading img, child look at rain" className="w-full h-full px-10 pb-12" />
        </div>
    )
}


export const BarGraph = ({ data }: IbarGraph) => {

    const matches = useMediaQuery('(min-width:600px)');
    return (
        <div className='relative w-full h-full'>
            <AutoSizer>
                {({ height, width }) => (
                    <XYPlot className={'text-white'} xType="ordinal" width={width} height={height} xDistance={!matches ? 50 : 100}>
                        <VerticalGridLines style={{ stroke: '#B7E9ED', fontWeight: 100 }} />
                        <HorizontalGridLines style={{ stroke: '#B7E9ED', fontWeight: 100 }} />
                        <XAxis />
                        <YAxis />
                        <VerticalBarSeries animation barWidth={!matches ? 0.15 : 0.3} data={data} />
                    </XYPlot>
                )}
            </AutoSizer>
        </div>
    )
}