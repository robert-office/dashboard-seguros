import { Header } from "../Header";
import { MenuItens } from "../../components/menuItens/MenuItens";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from "../../components/container/Container";
import { menus } from "../../utils/MenuHeaderItens";

interface LayoutProps {
    children?: React.ReactNode;
}

export const BaseLayout = ({ children }: LayoutProps) => {
    const LGmatches = useMediaQuery('(min-width:1024px)');

    return (
        <>
            <Header />

            <main className="w-full flex flex-row">
                <aside className="relative h-screen bg-primaryColor overflow-y-scroll" style={{
                    minWidth: LGmatches ? "250px" : "100px"
                }}>
                    <div className='relative w-full h-full flex flex-col'>
                        {menus.map((menuItem, id) => {
                            return <MenuItens key={id} text={menuItem.text} sub={menuItem.sub} href={menuItem.href} icon={menuItem.icon} ></MenuItens>
                        })}
                    </div>
                </aside>
                <section className="relative w-full">
                    <Container>
                        { children }
                    </Container>
                </section>
            </main>
        </>
    );
}