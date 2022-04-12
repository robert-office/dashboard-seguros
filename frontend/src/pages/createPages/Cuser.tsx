import { Backdrop, CircularProgress, Stack, Divider, MenuItem } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { ButtonSubbmit } from "../../components/buttonSubbmit";
import { CssTextField } from "../../components/cssTextField";
import BasicDatePicker from "../../components/datePicker";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { Subtitle } from "../../components/typografy/Subtitle";
import { createUser } from "../../utils/LaravelUtils/requests/user/createUser";
import { formatarDataInvertida, serializeForm } from "../../utils/utils";


export const Cuser = () => {
    const { enqueueSnackbar } = useSnackbar()
    const [open, setOpen] = useState(false)
    const roles = [
        {
            value: '1',
            label: 'administrador',
        },
        {
            value: '2',
            label: 'vendedor',
        },
        {
            value: '3',
            label: 'telemarketing',
        },
        {
            value: '4',
            label: 'desenvolvedor',
        }
    ]

    const onSubmit = (e: any) => {
        e.preventDefault();
        /// recupera os dados do form
        const form: any = document.querySelector('#form_create_user')!;
        let data = serializeForm(form);
        // abre o backdrop
        setOpen(true);
        /// cria o user
        createUser(data).then((response) => {
            enqueueSnackbar('Usuario criado com sucesso!', { variant: 'success' });
        }).catch((response) => {
            enqueueSnackbar('erro ao persistir as informações!', { variant: 'error' });
        }).finally(() => {
            setOpen(false);
        });
    }

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <SectionTitle text={`Criando novo User`} />

            <form onSubmit={onSubmit} id={'form_create_user'}>
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
                            <CssTextField className="sm:w-1/2 w-full" name="nome" label="Nome completo" />
                            <CssTextField className="sm:w-1/2 w-full" name="nome_fantasia" label="nome fantasia" />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}>

                        <CssTextField name="email" className="sm:w-1/3 w-full" label="e-mail" />
                        <BasicDatePicker name="data_aniversario" label='Data de aniversário' className="sm:w-1/3 w-full" />
                        <CssTextField className="sm:w-1/3 w-full" sx={{ color: 'white' }} defaultValue={1} name="role" select label="Role">
                            {roles.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </CssTextField>
                    </Stack>
                </Stack>

                <ButtonSubbmit title={'Criar novo Usuario'} />
            </form>
        </div>
    );
}