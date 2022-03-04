import { BaseLayout } from "../../layouts/baseLayout/BaseLayout";
import SVG404 from "../../assets/404/error-404.svg";
import { SectionTitle } from "../../components/typografy/SectionTitle";

export const My404 = () => {
    return (
        <BaseLayout>
            <div className="w-full flex flex-col space-y-10 justify-center my-10">
                <p className="sm:text-lg text-sm font-semibold font-serif text-secundaryColor text-center">Página não encontrada !</p>
                <img className="sm:w-96 sm:h-96 h-40 w-40 mx-auto" src={SVG404} alt="React Logo" />
            </div>
        </BaseLayout>
    );
}