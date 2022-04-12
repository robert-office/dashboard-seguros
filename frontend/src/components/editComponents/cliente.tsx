import { Backdrop, CircularProgress, Divider, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { DatatableClientesOptions } from "../../utils/DatatablesUtils/datatableGeneralOptions";
import { Epages } from "../../utils/edit";
import { Icliente } from "../../utils/LaravelUtils/LaravelTypes";
import { editCliente } from "../../utils/LaravelUtils/requests/cliente/editCliente";
import { compareObjects, formatarDataInvertida, serializeForm } from "../../utils/utils";
import { ButtonSubbmit } from "../buttonSubbmit";
import { CssTextField } from "../cssTextField";
import BasicDatePicker from "../datePicker";
import { SectionTitle } from "../typografy/SectionTitle";
import { Subtitle } from "../typografy/Subtitle";
import { useSnackbar } from 'notistack';
import { getCliente } from "../../utils/LaravelUtils/requests/cliente/getCliente";

export const EditCliente = ({ id }: Epages) => {
    const [info, setInfo] = useState<Icliente>()
    const [defaultInfos, setDefaultInfos] = useState({})
    const { enqueueSnackbar } = useSnackbar()
    const [open, setOpen] = useState(false)

    /// puxando dados da tabela
    useEffect(() => {
        getCliente(id).then((response) => {
            setInfo(response.data);

            /// seta os dados principais defaults
            const form: any = document.querySelector('#form_edit_user')!;
            const data = serializeForm(form);
            setDefaultInfos(data);
        });
    }, [id]);

    /// carregando dados
    if (!info) {
        return (
            <SectionTitle text={`Carregando dados...`} />
        )
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        
        const form: any = document.querySelector('#form_edit_user')!;
        let data = serializeForm(form);

        if (compareObjects(defaultInfos, data)) {
            
            enqueueSnackbar('mude as informações primeiro!', { variant: 'warning' });
            return;
        }
        
        setOpen(true);

        /// edita o cliente
        editCliente(data, id).then((response) => {

            enqueueSnackbar('informações alterados com sucesso!', { variant: 'success' });

        }).catch((response) => {

            enqueueSnackbar('erro ao alterar as informações!', { variant: 'error' });

        }).finally(() => {
            setOpen(false);
        });
    }

    /// já foi processado os dados
    return (
        <div>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <SectionTitle text={`Editando cliente de id: ${id}`} />

            <form onSubmit={onSubmit} id={'form_edit_user'}>
                <Stack
                    className="mt-7"
                    direction="column"
                    spacing={4}>
                    <Stack
                        direction="column"
                        spacing={3}>
                        <Subtitle text='Dados do Cliente' />
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                        >
                            <CssTextField className="sm:w-1/2 w-full" name="nome" defaultValue={info.nome} label="Nome completo" />
                            <CssTextField className="sm:w-1/2 w-full" name="nome_fantasia" defaultValue={info.nome_fantasia} label="nome fantasia" />
                        </Stack>
                    </Stack>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <BasicDatePicker valor={info.data_aniversario} name={'data_aniversario'} label='Data de aniversário' className="sm:w-1/3 w-full" />
                        <BasicDatePicker disabled valor={info.created_at} label='Data de entrada' className="sm:w-1/3 w-full" />
                        <BasicDatePicker disabled valor={info.updated_at} label='Ultima modifição' className="sm:w-1/3 w-full" />
                    </Stack>

                </Stack>

                <ButtonSubbmit title={'Salvar dados (Clientes)'} />
            </form>
        </div>
    );
}