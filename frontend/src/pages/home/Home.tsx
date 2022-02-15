import { Divider, Stack } from "@mui/material";
import DataTable from "../../components/datatable/Datatable";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries
} from 'react-vis';

export default function Example() {
    
    return (
        <></>
    );
}

export const Home = () => {
    return (
        <>
            <BaseLayout>
                <SectionTitle text="Dashboard" />

                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    className="mt-4"
                    spacing={2}
                    justifyContent="space-between"
                >
                    <Example />
                    <Example />
                </Stack>

                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    className="mt-4"
                >
                    <DataTable />

                </Stack>

            </BaseLayout>
        </>
    );
}