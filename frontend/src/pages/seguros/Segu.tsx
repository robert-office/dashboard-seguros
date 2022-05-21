import { useLocation } from 'react-router-dom';
import { Divider, Stack } from "@mui/material";
import DataTable from "../../components/datatable/Datatable";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";
import { DatatableDashboardOptions } from "../../utils/DatatablesUtils/datatableGeneralOptions";
import { useEffect, useState } from "react";
import { Subtitle } from '../../components/typografy/Subtitle';
import { ButtonCreate } from '../../components/buttonCreate';
import { BarGraph } from '../../components/barGraph';
import { RadialGraph } from '../../components/radialGraph';

export const Segu = () => {

    const blueData = [{ x: '2022', y: 12 }, { x: '2021', y: 2 }, { x: '2020', y: 11 }, { x: '2019', y: 12 }, { x: '2018', y: 2 }, { x: '2017', y: 11 }];
    const greenData = [
        {angle: 17, radius: 100, label: 'VIVO'},
        {angle: 32, radius: 100, label: 'OI'},
        {angle: 45, radius: 100, label: 'CLARO'},
        {angle: 67, radius: 100, label: 'TIM'},
    ];


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

                <div className='flex w-full justify-between my-5 md:my-0'>
                    <SectionTitle text="Seguros" />
                    <ButtonCreate href='/criar/seguro' title='novo seguro' />
                </div>

                <Stack
                    direction={{xs: 'column', md: 'row' }}
                    
                    className="lg:my-6 my-2 w-full sm:space-x-2"
                >
                    <Stack
                        direction="column"
                        className="my-2 w-full md:p-4 p-2 rounded-lg space-y-4 h-60"
                        style={{
                            boxShadow: '0px 0px 14px 5px rgba(0,0,0,0.30)'
                        }}
                    >
                        <Subtitle text='Vendas por ano' />
                        <BarGraph data={blueData} />
                    </Stack>
                    <Stack
                        direction="column"
                        className="my-2 w-full md:p-4 p-2 rounded-lg space-y-4 h-60"
                        style={{
                            boxShadow: '0px 0px 14px 5px rgba(0,0,0,0.30)'
                        }}
                    >
                        <Subtitle text='Distribuição de Operadoras' />
                        <RadialGraph data={greenData} />
                    </Stack>
                    <Stack
                        direction="column"
                        className="my-2 w-full md:p-4 p-2 rounded-lg space-y-4 h-60"
                        style={{
                            boxShadow: '0px 0px 14px 5px rgba(0,0,0,0.30)'
                        }}
                    >
                        <Subtitle text='Maiores vendedores (todos os tempos)' />
                        <BarGraph data={blueData} />
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