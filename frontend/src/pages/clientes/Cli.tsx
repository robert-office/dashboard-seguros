import { useLocation } from 'react-router-dom';
import { Divider, Stack } from "@mui/material";
import DataTable from "../../components/datatable/Datatable";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";
import { DatatableClientesOptions } from "../../utils/DatatablesUtils/datatableGeneralOptions";
import { useEffect, useState } from "react";
import { Subtitle } from '../../components/typografy/Subtitle';

export const Cli = () => {
    ///// TABELA //////

    /// rows da tabela
    const [rows, setRows] = useState<any[]>([]);

    /// paginação da tabela
    const search = useLocation().search;
    const page = Number(new URLSearchParams(search).get(`${DatatableClientesOptions.tableName}Page`));
    const PageAtual = page ? page : 1;

    /// puxando dados da tabela
    useEffect(() => {
        DatatableClientesOptions.getRowsFN(PageAtual).then((response) => {
            setRows(DatatableClientesOptions.formatData(response.data.result.data));
        });
    }, [PageAtual]);

    return (
        <>
            <BaseLayout>
                <SectionTitle text="Clientes" />

                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    className="mt-4"
                    spacing={2}
                    justifyContent="space-between"
                >

                </Stack>

                <Subtitle text='Todos os Clientes' />

                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    className="lg:mt-4 mt-1"
                >
                    <DataTable
                        tableName={DatatableClientesOptions.tableName}
                        rows={rows}
                        columns={DatatableClientesOptions.columns}
                    />
                </Stack>
            </BaseLayout>
        </>
    );
}