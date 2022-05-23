import "./barGraph.css";
import { useMediaQuery } from '@mui/material';
import { AutoSizer } from 'react-virtualized';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    Hint
} from 'react-vis';

type IdataGraph = {
    x: string,
    y: number
}

type IbarGraph = {
    data: IdataGraph[]
}

export const BarGraph = ({ data }: IbarGraph) => {

    const matches = useMediaQuery('(min-width:600px)');
    return (
        <div className='relative w-full h-full'>
            <AutoSizer>
                {({ height, width }) => (
                    <XYPlot className={'text-white'} xType="ordinal" width={width} height={height} xDistance={!matches ? 50 : 100}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />

                       

                        <VerticalBarSeries animation barWidth={!matches ? 0.15 : 0.3} data={data} />
                    </XYPlot>
                )}
            </AutoSizer>
        </div>
    )
}