import { Divider, Stack } from "@mui/material";
import { CssTextField } from "../../components/cssTextField";
import BasicDatePicker from "../../components/datePicker";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { Subtitle } from "../../components/typografy/Subtitle";
import { Epages } from "../../utils/edit";

export const Eveiculo = ({ id }: Epages) => {
    return (
        <div>
            <SectionTitle text={`Editando Veiculo de id: ${id}`} />

            <Stack
                className="my-10"
                direction="column"
                spacing={4}>

                <Stack
                    direction="column"
                    spacing={2}>
                    <Subtitle text='Dados do Veículo' />
                    
                        <CssTextField className="w-full" label="Nome veículo" />
                </Stack>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <BasicDatePicker label='Data de entrada'    className="sm:w-1/3 w-full" />
                    <BasicDatePicker label='Ultima modificação' className="sm:w-1/3 w-full" />
                    <CssTextField disabled defaultValue={'55251.00'} className="sm:w-1/3" label="Valor" />
                </Stack>

                
            </Stack>

            {/* mostra os dados do cliente só para confirmação */}
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
                        <CssTextField className="sm:w-1/2" label="Nome completo" />
                        <CssTextField className="sm:w-1/2" label="nome fantasia" />
                    </Stack>
                </Stack>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <BasicDatePicker label='Data de aniversário' className="sm:w-1/3 w-full" />
                    <BasicDatePicker label='Data de entrada' className="sm:w-1/3 w-full" />
                    <BasicDatePicker label='Ultima modifição' className="sm:w-1/3 w-full" />
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