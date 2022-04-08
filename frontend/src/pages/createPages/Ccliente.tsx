import { Backdrop, CircularProgress, Stack, Divider } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { ButtonSubbmit } from "../../components/buttonSubbmit";
import { CssTextField } from "../../components/cssTextField";
import BasicDatePicker from "../../components/datePicker";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { Subtitle } from "../../components/typografy/Subtitle";
import { createCliente } from "../../utils/LaravelUtils/requests/cliente/createCliente";
import { formatarDataInvertida, serializeForm } from "../../utils/utils";

export const Ccliente = () => {

    const { enqueueSnackbar } = useSnackbar()
    const [open, setOpen] = useState(false)

    const onSubmit = (e: any) => {
        e.preventDefault();
        /// recupera os dados do form
        const form: any = document.querySelector('#form_create_cliente')!;
        let data = formatarDataInvertida(serializeForm(form));
        // abre o backdrop
        setOpen(true);
        /// cria o cliente
        createCliente(data).then((response) => {
            enqueueSnackbar('cliente criado com sucesso!', { variant: 'success' });
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

            <SectionTitle text={`Criando novo cliente`} />

            <form onSubmit={onSubmit} id={'form_create_cliente'}>
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
                            <CssTextField className="sm:w-1/2 w-full" name="nome" label="Nome completo" />
                            <CssTextField className="sm:w-1/2 w-full" name="nome_fantasia" label="nome fantasia" />
                        </Stack>
                        
                        <BasicDatePicker name={'data_aniversario'} label='Data de aniversário' className="sm:w-1/3 w-full" />
                    </Stack>
                </Stack>

                <ButtonSubbmit title={'Criar Cliente'} />
            </form>
        </div>
    );
}