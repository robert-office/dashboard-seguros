import { useParams } from "react-router-dom";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";
import { Cedit, createPages } from "../../utils/create";

export const CreatePageNotFund = () => {
    const { resource } = useParams()

    return (
        <SectionTitle justifyText={'text-center'} text={`Pagina de Criação "${resource}" não encontrada!`} />
    );
}

export const Create = () => {
    const { resource, id } = useParams()

    function isTheResource(resourceToFind: Cedit) {
        return resourceToFind.name === resource;
    }

    const resourceToUse = createPages.find(isTheResource);

    return (
        <BaseLayout>
            {resourceToUse ? resourceToUse.page : <CreatePageNotFund />}
        </BaseLayout>
    );
}