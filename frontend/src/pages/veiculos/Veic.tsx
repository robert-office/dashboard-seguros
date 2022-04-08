import { useLocation } from 'react-router-dom';
import { Divider, Stack } from "@mui/material";
import DataTable from "../../components/datatable/Datatable";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";
import { DatatableVeiculosOptions } from "../../utils/DatatablesUtils/datatableGeneralOptions";
import { useEffect, useState } from "react";
import { Subtitle } from '../../components/typografy/Subtitle';
import { ButtonCreate } from '../../components/buttonCreate';

export const Veic = () => {
    /// rows da tabela
    const [rows, setRows] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    /// paginação da tabela
    const search = useLocation().search;
    const page = Number(new URLSearchParams(search).get(`${DatatableVeiculosOptions.tableName}Page`));
    const PageAtual = page ? page : 1;

    /// puxando dados da tabela
    useEffect(() => {
        DatatableVeiculosOptions.getRowsFN(PageAtual).then((response) => {
            setRows(DatatableVeiculosOptions.formatData(response.data.result.data));
            setTotalPages(response.data.result.total);
        });
    }, [PageAtual]);

    return (
        <>
            <BaseLayout>
                <div className='flex w-full justify-between'>
                    <SectionTitle text="Veículos" />
                    <ButtonCreate href='/criar/veiculo' title='novo veiculo' />
                </div>

                <Subtitle text='Todos os Veiculos' />

                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    className="lg:mt-4 mt-1"
                >
                    <DataTable
                        totalPages={totalPages}
                        tableName={DatatableVeiculosOptions.tableName}
                        rows={rows}
                        columns={DatatableVeiculosOptions.columns}
                    />
                </Stack>
            </BaseLayout>
        </>
    );
}