import { Divider, Stack, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { Epages } from "../../utils/edit";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#FF2D20',
    },

    '& label': {
        color: 'white',
    },

    '&:hover label': {
        color: '#FF2D20',
    },

    '& .MuiOutlinedInput-root': {
        '& input': {
            color: 'white'
        },
        '& fieldset': {
            borderColor: '#FF2D20',
        },
        '&:hover fieldset': {
            borderColor: '#FF2D20',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#FF2D20',
        },
    },
});

export const Ecliente = ({ id }: Epages) => {
    return (
        <div>
            <SectionTitle text={`Editando cliente de id: ${id}`} />

            <Stack
                className="my-10"
                direction="column"
                spacing={2}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <CssTextField className="sm:w-1/2" label="nome completo" />
                    <CssTextField className="sm:w-1/2" label="nome fantasia" />
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <CssTextField className="sm:w-1/2" label="nome completo" />
                    <CssTextField className="sm:w-1/2" label="nome fantasia" />
                </Stack>
            </Stack>
        </div>
    );
}