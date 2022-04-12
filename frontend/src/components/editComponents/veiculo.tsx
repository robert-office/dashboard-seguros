import { Backdrop, CircularProgress, Divider, MenuItem, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Epages } from "../../utils/edit";
import { LaravelVeiculo } from "../../utils/LaravelUtils/LaravelTypes";
import { compareObjects, formatarDataInvertida, serializeForm } from "../../utils/utils";
import { ButtonSubbmit } from "../buttonSubbmit";
import { CssTextField } from "../cssTextField";
import BasicDatePicker from "../datePicker";
import { SectionTitle } from "../typografy/SectionTitle";
import { Subtitle } from "../typografy/Subtitle";
import { useSnackbar } from 'notistack';
import { getVeiculo } from "../../utils/LaravelUtils/requests/veiculo/getVeiculo";
import { editVeiculo } from "../../utils/LaravelUtils/requests/veiculo/editVeiculo";
import { EditCliente } from "./cliente";
import { NumberFormatt } from "../numberFormat";

export const EditVeiculo = ({ id }: Epages) => {
    const [info, setInfo] = useState<LaravelVeiculo>()
    const [defaultInfos, setDefaultInfos] = useState({})
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

    /// puxando dados da tabela
    useEffect(() => {
        getVeiculo(id).then((response) => {
            setInfo(response.data);

            /// seta os dados principais defaults
            const form: any = document.querySelector('#form_edit_veiculo')!;
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

    const onSubmitV = (e: any) => {
        e.preventDefault();

        const form: any = document.querySelector('#form_edit_veiculo')!;
        let data = serializeForm(form);

        if (compareObjects(defaultInfos, data)) {

            enqueueSnackbar('mude as informações primeiro!', { variant: 'warning' });
            return;
        }

        setOpen(true);

        /// edita o veiculo
        editVeiculo(data, id).then((response) => {

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

            <form onSubmit={onSubmitV} id={'form_edit_veiculo'}>
                <SectionTitle text={`Editando Veiculo de id: ${id}`} />
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
                            <CssTextField className="sm:w-1/2 w-full" defaultValue={info.nome} name="nome" label="Nome veículo" />
                            <CssTextField className="sm:w-1/2 w-full" sx={{ color: 'white' }} defaultValue={info.tipo.id} name="tipo" select label="Tipo">
                                {types.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CssTextField>
                        </Stack>
                    </Stack>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <BasicDatePicker disabled={true} valor={info.created_at} label='Data de entrada' className="sm:w-1/3 w-full" />
                        <BasicDatePicker disabled={true} valor={info.updated_at} label='Ultima modificação' className="sm:w-1/3 w-full" />
                        <NumberFormatt className="sm:w-1/3 w-full" value={info.valor} name="valor"/>
                    </Stack>
                </Stack>
                <ButtonSubbmit title={'Salvar Alterações (Veículo)'} />
            </form>
        </div>
    );
}