import { Stack, Divider } from "@mui/material";
import { Epages } from "../../utils/edit";
import { CssTextField } from "../cssTextField";
import { Subtitle } from "../typografy/Subtitle";

export const EditEnderecos = ({id} : Epages) => {
    return (
        <Stack
            className="my-10"
            direction="column"
            spacing={4}>
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
    );
}