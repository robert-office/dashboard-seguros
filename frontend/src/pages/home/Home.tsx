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

import { DatatableDashboardOptions } from "../../utils/DatatablesUtils/datatableGeneralOptions";
import { useEffect, useState } from "react";

export const Home = () => {

    const [rows, setRows] = useState<any[]>([]);

    useEffect(() => {
        DatatableDashboardOptions.getRowsFN().then((response) => {
            setRows(DatatableDashboardOptions.formatData( response.data.result.data ))
        })
    })

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

                </Stack>

                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    className="mt-4"
                >
                    <DataTable
                        rows={rows}
                        columns={DatatableDashboardOptions.columns}
                    />
                </Stack>
            </BaseLayout>
        </>
    );
}