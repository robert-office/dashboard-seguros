import { EditCliente } from "../../components/editComponents/cliente";
import { EditEnderecos } from "../../components/editComponents/enderecos";
import { Epages } from "../../utils/edit";

export const Ecliente = ({ id }: Epages) => {
    return (
        <div>
            <EditCliente id={id}/>
            <EditEnderecos id={id}/>
        </div>
    );
}