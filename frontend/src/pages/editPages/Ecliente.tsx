import { Divider, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { CssTextField } from "../../components/cssTextField";
import BasicDatePicker from "../../components/datePicker";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { Subtitle } from "../../components/typografy/Subtitle";
import { DatatableClientesOptions } from "../../utils/DatatablesUtils/datatableGeneralOptions";
import { Epages } from "../../utils/edit";
import { Icliente } from "../../utils/LaravelUtils/LaravelTypes";

export const Ecliente = ({ id }: Epages) => {

    const [info, setInfo] = useState<Icliente>()

    /// puxando dados da tabela
    useEffect(() => {
        DatatableClientesOptions.getInfos(id).then((response) => {
            setInfo(response.data);
        });
    }, [id]);

    /// carregando dados
    if (!info) {
        return (
            <SectionTitle text={`Carregando dados...`} />
        )
    }

    /// já foi processado os dados
    return (
        <div>
            <SectionTitle text={`Editando cliente de id: ${id}`} />

            <Stack
                className="my-10"
                direction="column"
                spacing={4}>

                <Stack
                    direction="column"
                    spacing={2}>
                    <Subtitle text='Dados do Cliente' />
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <CssTextField className="sm:w-1/2" defaultValue={info.nome} label="Nome completo" />
                        <CssTextField className="sm:w-1/2" defaultValue={info.nome_fantasia} label="nome fantasia" />
                    </Stack>
                </Stack>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <BasicDatePicker valor={info.data_aniversario} label='Data de aniversário' className="sm:w-1/3 w-full" />
                    <BasicDatePicker valor={info.created_at} label='Data de entrada' className="sm:w-1/3 w-full" />
                    <BasicDatePicker valor={info.updated_at} label='Ultima modifição' className="sm:w-1/3 w-full" />
                </Stack>

                <Stack
                    direction="column"
                    spacing={2}>

                    <Subtitle text='Endereços' />
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <CssTextField className="sm:w-1/4" label="Cidade / Estado" />
                        <CssTextField className="sm:w-1/4" label="Avenida / Rua" />
                        <CssTextField className="sm:w-1/4" label="Número" />
                        <CssTextField className="sm:w-1/4" label="Complemento" />
                    </Stack>
                </Stack>
            </Stack>
        </div>
    );
}