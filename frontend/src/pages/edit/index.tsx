import { useParams } from "react-router-dom";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";
import { editPages, Iedit } from "../../utils/edit";

export const Edit = () => {
    const { resource, id } = useParams()

    function isTheResource(resourceToFind: Iedit) {
        return resourceToFind.name === resource;
    }

    const resourceToUse = editPages.find(isTheResource);

    return (
        <BaseLayout>
           { resourceToUse?.page(Number(id)) }
        </BaseLayout>
    );
}