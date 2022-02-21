import { useLocation } from 'react-router-dom';
import { Divider, Stack } from "@mui/material";
import DataTable from "../../components/datatable/Datatable";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";
import { DatatableUsersByRolesOptions } from "../../utils/DatatablesUtils/datatableGeneralOptions";
import { useEffect, useState } from "react";
import { Subtitle } from '../../components/typografy/Subtitle';

export const Telem = () => {
    ///// TABELA //////

    /// rows da tabela
    const [rows, setRows] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    /// paginação da tabela
    const search = useLocation().search;
    const page = Number(new URLSearchParams(search).get(`${DatatableUsersByRolesOptions.tableName}Page`));
    const PageAtual = page ? page : 1;

    /// puxando dados da tabela
    useEffect(() => {
        DatatableUsersByRolesOptions.getRowsFN(PageAtual, 3).then((response) => {
            setRows(DatatableUsersByRolesOptions.formatData(response.data.result.data));
            setTotalPages(response.data.result.total);
        });
    }, [PageAtual]);

    return (
        <>
            <BaseLayout>
                <SectionTitle text="Telemarketing" />

                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    className="mt-4"
                    spacing={2}
                    justifyContent="space-between"
                >

                </Stack>

                <Subtitle text='Todos os Operadores de Telemarketing' />

                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    className="lg:mt-4 mt-1"
                >
                    <DataTable
                        totalPages={totalPages}
                        tableName={DatatableUsersByRolesOptions.tableName}
                        rows={rows}
                        columns={DatatableUsersByRolesOptions.columns}
                    />
                </Stack>
            </BaseLayout>
        </>
    );
}