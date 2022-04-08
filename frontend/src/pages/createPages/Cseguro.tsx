import { useSnackbar } from "notistack";
import { useState } from "react";
import { createCliente } from "../../utils/LaravelUtils/requests/cliente/createCliente";
import { formatarDataInvertida, serializeForm } from "../../utils/utils";

export const Cseguro = () => {
    const { enqueueSnackbar } = useSnackbar()
    const [open, setOpen] = useState(false)

    const onSubmit = (e: any) => {
        e.preventDefault();
        /// recupera os dados do form
        const form: any = document.querySelector('#form_create_seguro')!;
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

        </div>
    );
}