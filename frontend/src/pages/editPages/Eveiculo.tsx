import { EditVeiculo } from "../../components/editComponents/veiculo";
import { Epages } from "../../utils/edit";

export const Eveiculo = ({ id }: Epages) => {

    return (
        <EditVeiculo id={id} />
    );
}