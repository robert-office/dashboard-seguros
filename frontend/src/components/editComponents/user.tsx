import { Backdrop, CircularProgress, Divider, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Epages } from "../../utils/edit";
import { LaravelUser } from "../../utils/LaravelUtils/LaravelTypes";
import { compareObjects, formatarDataInvertida, serializeForm } from "../../utils/utils";
import { ButtonSubbmit } from "../buttonSubbmit";
import { CssTextField } from "../cssTextField";
import BasicDatePicker from "../datePicker";
import { SectionTitle } from "../typografy/SectionTitle";
import { Subtitle } from "../typografy/Subtitle";
import { useSnackbar } from 'notistack';
import { getUser } from "../../utils/LaravelUtils/requests/user/getUser";
import { editUser } from "../../utils/LaravelUtils/requests/user/editUser";

export const EditUser = ({ id }: Epages) => {
    const [info, setInfo] = useState<LaravelUser>()
    const [defaultInfos, setDefaultInfos] = useState({})
    const { enqueueSnackbar } = useSnackbar()
    const [open, setOpen] = useState(false)

    /// puxando dados da tabela
    useEffect(() => {
        getUser(id).then((response) => {
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
        editUser(data, id).then((response) => {

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

            <SectionTitle text={`Editando User de id: ${id}`} />
            
            <form onSubmit={onSubmit} id={'form_edit_user'}>
                <Stack
                    className="my-10"
                    direction="column"
                    spacing={4}>

                    <Stack
                        direction="column"
                        spacing={2}>
                        <Subtitle text='Dados do Usuario' />
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                        >
                            <CssTextField className="sm:w-1/2 w-full" defaultValue={info.nome} name="nome" label="Nome completo" />
                            <CssTextField className="sm:w-1/2 w-full" defaultValue={info.nome_fantasia} name="nome_fantasia" label="nome fantasia" />
                        </Stack>
                    </Stack>
                    <Stack
                        direction="column"
                        spacing={2}>

                        <CssTextField defaultValue={info.email} name="email" className="w-full" label="e-mail" />
                    </Stack>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <BasicDatePicker valor={info.data_aniversario} name="data_aniversario" label='Data de aniversário' className="sm:w-1/3 w-full" />
                        <BasicDatePicker disabled valor={info.created_at} label='Data de entrada' className="sm:w-1/3 w-full" />
                        <BasicDatePicker disabled valor={info.update_at} label='Ultima modifição' className="sm:w-1/3 w-full" />
                    </Stack>
                </Stack>
                
                <ButtonSubbmit title={'Salvar Alterações (Usuario)'} />

            </form>
        </div>
    );
}