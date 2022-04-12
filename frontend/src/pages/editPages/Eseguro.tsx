import { Epages } from "../../utils/edit";
import { Backdrop, CircularProgress, Stack } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { ButtonSubbmit } from "../../components/buttonSubbmit";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { Subtitle } from "../../components/typografy/Subtitle";
import { serializeForm } from "../../utils/utils";
import { editSeguro } from "../../utils/LaravelUtils/requests/seguro/editSeguro";
import { AsyncSelect } from "../../components/selectAsync;";
import { clienteLoadOptions } from "../../utils/LaravelUtils/requests/cliente/getAllClientes";
import { veiculoFreeExLoadOptions } from "../../utils/LaravelUtils/requests/veiculo/getAllVeiculos";
import { NumberFormatt } from "../../components/numberFormat";
import { vendedorLoadOptions } from "../../utils/LaravelUtils/requests/user/getAllUserByRole";
import { LaravelSeguro } from "../../utils/LaravelUtils/LaravelTypes";
import { getSeguro } from "../../utils/LaravelUtils/requests/seguro/getSeguro";

export const Eseguro = ({ id }: Epages) => {
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
        const form: any = document.querySelector('#form_edit_seguro')!;
        let data = serializeForm(form);
        // abre o backdrop
        setOpen(true);
        /// cria o cliente
        editSeguro(id, data).then((response) => {
            enqueueSnackbar('seguro editado com sucesso!', { variant: 'success' });
        }).catch((response) => {
            enqueueSnackbar('erro ao persistir as informações!', { variant: 'error' });
        }).finally(() => {
            setOpen(false);
        });
    }

    const [seguro, setSeguro] = useState<LaravelSeguro>()
    const [defaultValueCliente, setdefaultValueCliente] = useState<{ 'label': string, 'value': string }>()
    const [defaultValueVeiculo, setdefaultValueVeiculo] = useState<{ 'label': string, 'value': string }>()
    const [defaultValueVendedor, setdefaultValueVendedor] = useState<{ 'label': string, 'value': string }>()

    useEffect(() => {
        getSeguro(id).then((response) => {
            const clienteOption = {
                'label': response.data.cliente.nome,
                'value': String(response.data.id_cliente)
            }
            setdefaultValueCliente(clienteOption);
            clienteOnChange(clienteOption)

            const veiculoOption = {
                'label': response.data.veiculo.nome,
                'value': String(response.data.id_veiculo)
            }
            setdefaultValueVeiculo(veiculoOption);

            const vendedorOption = {
                'label': response.data.vendedor.nome,
                'value': String(response.data.id_vendedor)
            }
            setdefaultValueVendedor(vendedorOption);

            setSeguro(response.data);
        }).catch((response) => {
            enqueueSnackbar('erro ao recuperar as informações!', { variant: 'error' });
            console.log(response);
        });
    }, [id])

    if (!seguro) {
        return (
            <SectionTitle text={`Carregando ...`} />
        );
    }

    return (
        <div>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <SectionTitle text={`Editando Seguro`} />

            <form onSubmit={onSubmit} id={'form_edit_seguro'}>
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

                            <AsyncSelect defaultValue={defaultValueCliente} onchangeEx={clienteOnChange} className="sm:w-1/2 w-full" name="id_cliente" loadOptions={clienteLoadOptions} placeholder={'selecione o cliente'} />
                            <AsyncSelect defaultValue={defaultValueVeiculo} key={cliente} add={{ id: Number(cliente), id_veiculo: Number(seguro.id_veiculo) }} className="sm:w-1/2 w-full" name="id_veiculo" loadOptions={veiculoFreeExLoadOptions} placeholder={'selecione o veiculo'} />
                        </Stack>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}>
                            <AsyncSelect defaultValue={defaultValueVendedor} className="sm:w-1/2 w-full" name="id_vendedor" loadOptions={vendedorLoadOptions} placeholder={'selecione o vendedor'} />

                            <NumberFormatt value={seguro.valor} className="sm:w-1/2 w-full" name="valor" />
                        </Stack>
                    </Stack>
                </Stack>

                <ButtonSubbmit title={'Editar seguro'} />
            </form>
        </div>
    );
}