import { Divider, Stack } from "@mui/material";
import { SectionTitle } from "../../components/typografy/SectionTitle";
import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";

export const Conf = () => {

    return (
        <>
            <BaseLayout>
                <SectionTitle text="Configurações" />

                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    className="mt-4"
                    spacing={2}
                    justifyContent="space-between"
                >

                </Stack>
            </BaseLayout>
        </>
    );
}