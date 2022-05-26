import { useState, useEffect } from 'react';
import { AutoSizer } from 'react-virtualized';
import { getCountSalesValuePerYear } from "../../utils/LaravelUtils/requests/analiticos/getCountSalesValuePerYear";
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineSeries
} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import svgRaining from "../../assets/svgs/raining.svg";

type IdataGraph = {
    x: number,
    y: number
}

type IbarGraph = {
    data: IdataGraph[]
}

export const ValorVendasPorAnoGrafico = () => {
    const [totalVendas, setTotalVendas] = useState<IdataGraph[]>();

    //// FAZENDO A CHAMADA PARA API RECUPERAR OS DADOS DOS GRAFICOS
    useEffect(() => {

        getCountSalesValuePerYear().then((response) => {
            let Sales: IdataGraph[] = [];
            const salesInArray = Object.entries(response.data);

            salesInArray.map((saleOfYear) => {
                let ano = saleOfYear[0];
                let valor = saleOfYear[1];

                Sales.push({ x: Number(ano), y: Number(valor) });
            });

            setTotalVendas(Sales);
            console.log(Sales);
        });

    }, []);

    if (totalVendas && totalVendas.length > 0) {
        return (<LineGraph data={totalVendas} />);
    }

    return (
        <div className="relative w-full h-full">
            <img src={svgRaining} alt="loading img, child look at rain" className="w-full h-full px-10 pb-12" />
        </div>
    )
}

export const LineGraph = ({ data }: IbarGraph) => {

    const yDomain = data.reduce(
        (res, row) => {
            return {
                max: Math.max(res.max, row.y),
                min: Math.min(res.min, row.y)
            };
        },
        { max: -Infinity, min: Infinity }
    );

    return (
        <div className='relative w-full h-full'>
            <AutoSizer>
                {({ height, width }) => (
                    <XYPlot width={width} height={height} xType="ordinal" margin={{left: 55}} yDomain={[yDomain.min, yDomain.max]}>
                        <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
                        <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
                        <LineSeries
                            xType='ordinal'
                            animation
                            className="third-series"
                            curve={'curveMonotoneX'}
                            data={data}
                        />
                        <XAxis
                            style={{
                                line: { stroke: '#ADDDE1' },
                                ticks: { stroke: '#ADDDE1' },
                                text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, fontSize: '10px' }
                            }}
                        />
                        <YAxis
                            style={{
                                line: { stroke: '#ADDDE1' },
                                ticks: { stroke: '#ADDDE1' },
                                text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, fontSize: '8px', }
                            }} />
                    </XYPlot>
                )}
            </AutoSizer>
        </div>
    )
}