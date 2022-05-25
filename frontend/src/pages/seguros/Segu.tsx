import { useLocation } from 'react-router-dom';
import { Divider, Stack } from "@mui/material";
import DataTable from "../../components/datatable/Datatable";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";
import { DatatableDashboardOptions } from "../../utils/DatatablesUtils/datatableGeneralOptions";
import { useEffect, useRef, useState } from "react";
import { Subtitle } from '../../components/typografy/Subtitle';
import { ButtonCreate } from '../../components/buttonCreate';
import { VendasPorAnoGrafico } from '../../components/barGraph';
import { OperadorasCountGrafico } from '../../components/radialGraph';
import { ValorVendasPorAnoGrafico } from '../../components/lineGraph';

export const Segu = () => {

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
                    direction={{ xs: 'column', md: 'row' }}

                    className="lg:my-6 my-2 w-full sm:space-x-2"
                >
                    <Stack
                        direction="column"
                        className="my-2 w-full md:p-4 p-2 rounded-lg space-y-4 h-60"
                        style={{
                            boxShadow: '0px 0px 14px 5px rgba(0,0,0,0.30)'
                        }}
                    >
                        <Subtitle text='Total de Vendas (por ano)' />
                        <VendasPorAnoGrafico />
                    </Stack>
                    <Stack
                        direction="column"
                        className="my-2 w-full md:p-4 p-2 rounded-lg space-y-4 h-60"
                        style={{
                            boxShadow: '0px 0px 14px 5px rgba(0,0,0,0.30)'
                        }}
                    >
                        <Subtitle text='Distribuição de Operadoras' />
                        <OperadorasCountGrafico />
                    </Stack>
                    <Stack
                        direction="column"
                        className="my-2 w-full md:p-4 p-2 rounded-lg space-y-4 h-60"
                        style={{
                            boxShadow: '0px 0px 14px 5px rgba(0,0,0,0.30)'
                        }}
                    >
                        <Subtitle text='Valor das Vendas (por ano)' />
                        <ValorVendasPorAnoGrafico />
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