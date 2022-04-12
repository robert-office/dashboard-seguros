import { Backdrop, CircularProgress, Stack } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { ButtonSubbmit } from "../../components/buttonSubbmit";
import { CssTextField } from "../../components/cssTextField";
import { NumberFormatt } from "../../components/numberFormat";
import { AsyncSelect } from "../../components/selectAsync;";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { Subtitle } from "../../components/typografy/Subtitle";
import { clienteLoadOptions } from "../../utils/LaravelUtils/requests/cliente/getAllClientes";
import { createSeguro } from "../../utils/LaravelUtils/requests/seguro/createSeguro";
import { vendedorLoadOptions } from "../../utils/LaravelUtils/requests/user/getAllUserByRole";
import { veiculoFreeLoadOptions } from "../../utils/LaravelUtils/requests/veiculo/getAllVeiculos";
import { formatarDataInvertida, serializeForm } from "../../utils/utils";

export const Cseguro = () => {
    const { enqueueSnackbar } = useSnackbar()
    const [open, setOpen] = useState(false)

    const [cliente, setCliente] = useState('')
    const clienteOnChange = (e: { value: string, label: string } | undefined) => {
        if (e) {
            setCliente(e.value);
        }
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        /// recupera os dados do form
        const form: any = document.querySelector('#form_create_seguro')!;
        let data = serializeForm(form);

        if(cliente == '') {
            enqueueSnackbar('insira corretamente as informações!', { variant: 'warning' });
            return;
        }
        
        // abre o backdrop
        setOpen(true);
        /// cria o cliente
        createSeguro(data).then((response) => {
            enqueueSnackbar('seguro criado com sucesso!', { variant: 'success' });
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

            <SectionTitle text={`Criando novo seguro`} />

            <form onSubmit={onSubmit} id={'form_create_seguro'}>
                <Stack
                    className="mt-7"
                    direction="column"
                    spacing={4}>
                    <Stack
                        direction="column"
                        spacing={3}>
                        <Subtitle text='Dados do seguro' />
                        
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}>

                            <AsyncSelect onchangeEx={clienteOnChange} className="sm:w-1/2 w-full" name="id_cliente" loadOptions={clienteLoadOptions} placeholder={'selecione o cliente'} />

                            {cliente !== '' ? (
                                <AsyncSelect key={cliente} add={{ id: Number(cliente) }} className="sm:w-1/2 w-full" name="id_veiculo" loadOptions={veiculoFreeLoadOptions} placeholder={'selecione o veiculo'} />
                            ) : (
                                <CssTextField className="sm:w-1/2 w-full" sx={{ color: 'white' }} defaultValue={''} name="tipo" disabled label="veiculo" />
                            )}
                        </Stack>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}>
                            <AsyncSelect className="sm:w-1/2 w-full" name="id_vendedor" loadOptions={vendedorLoadOptions} placeholder={'selecione o vendedor'} />

                            <NumberFormatt className="sm:w-1/2 w-full" name="valor" />
                        </Stack>
                    </Stack>
                </Stack>

                <ButtonSubbmit title={'Criar novo seguro'} />
            </form>
        </div>
    );
}