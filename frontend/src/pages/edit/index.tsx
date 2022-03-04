import { useParams } from "react-router-dom";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";
import { editPages, Iedit } from "../../utils/edit";

export const EditPageNotFund = () => {
    const { resource } = useParams()

    return (
        <SectionTitle justifyText={'text-center'} text={`Pagina de edição "${resource}" não encontrada!`} />
    );
}

export const Edit = () => {
    const { resource, id } = useParams()

    function isTheResource(resourceToFind: Iedit) {
        return resourceToFind.name === resource;
    }

    const resourceToUse = editPages.find(isTheResource);

    return (
        <BaseLayout>
            {resourceToUse ? resourceToUse.page(Number(id)) : <EditPageNotFund />}
        </BaseLayout>
    );
}