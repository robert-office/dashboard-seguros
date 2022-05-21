import { RadialChart } from 'react-vis';
import { AutoSizer } from 'react-virtualized';
import "./radialGraph.css";

type IdataGraph = {
    angle: number,
    radius: number,
    label: string,
    subLabel?: string
}

type IradialGraph = {
    data: IdataGraph[]
}

export const RadialGraph = ({ data }: IradialGraph) => {
    return (
        <div className='w-full h-full'>
            <AutoSizer>
                {({ height, width }) => (
                    <RadialChart width={width} height={height} showLabels animation data={data} />
                )}
            </AutoSizer>
        </div>
    )
}