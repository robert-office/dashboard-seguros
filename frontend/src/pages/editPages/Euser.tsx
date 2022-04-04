import { EditUser } from "../../components/editComponents/user";
import { Epages } from "../../utils/edit";

export const Euser = ({ id }: Epages) => {
    return (
        <EditUser id={id} />
    );
}