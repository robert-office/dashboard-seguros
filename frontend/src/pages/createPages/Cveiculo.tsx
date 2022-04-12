import { Backdrop, CircularProgress, Stack, MenuItem } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { ButtonSubbmit } from "../../components/buttonSubbmit";
import { CssTextField } from "../../components/cssTextField";
import { NumberFormatt } from "../../components/numberFormat";
import { AsyncSelect } from "../../components/selectAsync;";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { Subtitle } from "../../components/typografy/Subtitle";
import { clienteLoadOptions } from "../../utils/LaravelUtils/requests/cliente/getAllClientes";
import { createVeiculo } from "../../utils/LaravelUtils/requests/veiculo/createVeiculo";
import { formatarDataInvertida, formatarValor, serializeForm } from "../../utils/utils";

export const Cveiculo = () => {
    const { enqueueSnackbar } = useSnackbar()
    const [open, setOpen] = useState(false)

    const types = [
        {
            value: '1',
            label: 'veiculo',
        },
        {
            value: '2',
            label: 'moto',
        },
        {
            value: '3',
            label: 'caminhão',
        }
    ];

    const onSubmit = (e: any) => {
        e.preventDefault();
        /// recupera os dados do form
        const form: any = document.querySelector('#form_create_veiculo')!;
        let data = serializeForm(form);

        // abre o backdrop
        setOpen(true);
        /// cria o veiculo
        createVeiculo(data).then((response) => {
            enqueueSnackbar('veiculo criado com sucesso!', { variant: 'success' });
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

            <form onSubmit={onSubmit} id={'form_create_veiculo'}>
                <SectionTitle text={`Criando novo Veiculo`} />
                <Stack
                    className="my-10"
                    direction="column"
                    spacing={4}>

                    <Stack
                        direction="column"
                        spacing={2}>
                        <Subtitle text='Dados do Veículo' />
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}>
                            <CssTextField className="sm:w-1/2 w-full" name="nome" label="Nome veículo" />
                            <CssTextField className="sm:w-1/2 w-full" sx={{ color: 'white' }} defaultValue={1} name="tipo" select label="Tipo">
                                {types.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CssTextField>
                        </Stack>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}>
                            
                            <AsyncSelect className="sm:w-1/2 w-full" name="id_cliente" loadOptions={clienteLoadOptions} placeholder={'selecione o cliente'} />
                            <NumberFormatt className="sm:w-1/2 w-full" name="valor"/>
                        </Stack>
                    </Stack>
                </Stack>
                <ButtonSubbmit title={'Criar Veículo'} />
            </form>
        </div>
    );
}