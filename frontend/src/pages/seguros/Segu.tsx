import { useLocation } from 'react-router-dom';
import { Divider, Stack } from "@mui/material";
import DataTable from "../../components/datatable/Datatable";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";
import './seguroStyles.css';

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
import { Subtitle } from '../../components/typografy/Subtitle';
import { ButtonCreate } from '../../components/buttonCreate';

export const Segu = () => {

    const greenData = [{ x: 'A', y: 10 }, { x: 'B', y: 5 }, { x: 'C', y: 15 }];
    const blueData = [{ x: 'A', y: 12 }, { x: 'B', y: 2 }, { x: 'C', y: 11 }];


    ///// TABELA //////

    /// rows da tabela
    const [rows, setRows] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    /// paginação da tabela
    const search = useLocation().search;
    const page = Number(new URLSearchParams(search).get(`${DatatableDashboardOptions.tableName}Page`));
    const PageAtual = page ? page : 1;

    /// puxando dados da tabela
    useEffect(() => {
        DatatableDashboardOptions.getRowsFN(PageAtual).then((response) => {
            setRows(DatatableDashboardOptions.formatData(response.data.result.data));
            setTotalPages(response.data.result.total);
        });
    }, [PageAtual]);

    return (
        <>
            <BaseLayout>

                <div className='flex w-full justify-between'>
                    <SectionTitle text="Seguros" />
                    <ButtonCreate href='/criar/seguro' title='novo seguro' />
                </div>

                <Stack
                    direction="row"
                    divider={<Divider orientation="horizontal" flexItem />}
                    className="lg:my-6 my-2 w-full space-x-2"
                >
                    <Stack
                        direction="column"
                        className="my-2 w-full p-2 rounded-lg"
                        style={{
                            boxShadow: '0px 0px 14px 5px rgba(0,0,0,0.30)'
                        }}
                    >
                        <Subtitle text='Todos os Seguros' />
                        <XYPlot className={'text-white'} xType="ordinal" width={400} height={300} xDistance={100}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <VerticalBarSeries barWidth={0.5} className="" data={greenData} />
                            <VerticalBarSeries barWidth={0.5} data={blueData} />
                        </XYPlot>
                    </Stack>
                    <Stack
                        direction="column"
                        className="my-2 w-full p-2 rounded-lg"
                        style={{
                            boxShadow: '0px 0px 14px 5px rgba(0,0,0,0.30)'
                        }}
                    >
                        <Subtitle text='Todos os Seguros' />
                        <XYPlot xType="ordinal" width={400} height={300} xDistance={100}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <VerticalBarSeries barWidth={0.5} className="" data={greenData} />
                            <VerticalBarSeries barWidth={0.5} data={blueData} />

                        </XYPlot>
                    </Stack>
                </Stack>


                <Subtitle text='Todos os Seguros' />
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    className="lg:mt-4 mt-1"
                >
                    <DataTable
                        totalPages={totalPages}
                        tableName={DatatableDashboardOptions.tableName}
                        rows={rows}
                        columns={DatatableDashboardOptions.columns}
                    />
                </Stack>
            </BaseLayout>
        </>
    );
}