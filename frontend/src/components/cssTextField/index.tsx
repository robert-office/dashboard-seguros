import { styled, TextField } from "@mui/material";

export const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root.Mui-disabled': {
        '& fieldset': {
            borderColor: '#FF2D20',
        },
        '& input': {
            '-webkit-text-fill-color': 'rgba(255,255,255,0.4)',
        },
    },

    '& label.Mui-disabled': {
        color: 'white',
    },

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