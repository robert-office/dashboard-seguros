import { SectionTitle } from "../../components/typografy/SectionTitle";
import { Epages } from "../../utils/edit";

export const Ecliente = ( { id } : Epages ) => {
    return (
        <div>
            <SectionTitle text={`Editar Cliente id: ${id}`} />
        </div>
    );
}