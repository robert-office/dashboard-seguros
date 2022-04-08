import { styled, TextField } from "@mui/material";

export const CssTextField = styled(TextField)({
    /// disabled
    '& .MuiOutlinedInput-root.Mui-disabled': {
        '& fieldset': {
            borderColor: '#FF2D20',
        },
        '& input': {
            WebkitTextFillColor: 'rgba(255,255,255,0.4)',
        },
    },

    div: {
        color: 'white !important'
    },

    /// svg of calendar
    svg: {
        color: 'white'
    },

    /// disabled label color
    '& label.Mui-disabled': {
        color: 'white',
    },

    /// on focus
    '& label.Mui-focused': {
        color: '#FF2D20',
    },

    '& label': {
        color: '#FF2D20',
    },

    /// on hover
    '&:hover label': {
        color: '#FF2D20',
    },

    /// só pra confirmar?
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