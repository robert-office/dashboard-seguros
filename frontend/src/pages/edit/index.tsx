import { useParams } from "react-router-dom";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";

export const Edit = () => {

    const { resource, id } = useParams()

    return (
        <BaseLayout>
           
        </BaseLayout>
    );
}