import { Header } from "../Header";
import { MenuItens } from "../../components/menuItens/MenuItens";

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from "../../components/container/Container";

interface LayoutProps {
    children?: React.ReactNode;
}

const menus = [
    {
        text: "Dashboard",
        href: "#",
        icon: <DashboardIcon className="self-center" sx={{ color: "#C9D1D9" }} />
    },
    {
        text: "Clientes",
        href: "#",
        icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
    },
    {
        text: "Veiculos",
        href: "#",
        icon: <LocalShippingIcon className="self-center" sx={{ color: "#C9D1D9" }} />
    },
    {
        text: "Seguros",
        href: "#",
        icon: <LocalPoliceIcon className="self-center" sx={{ color: "#C9D1D9" }} />
    }
]

export const BaseLayout = ({ children }: LayoutProps) => {
    const LGmatches = useMediaQuery('(min-width:1024px)');

    return (
        <>
            <Header />

            <main className="w-full flex flex-row">
                <aside className="relative h-screen bg-primaryColor overflow-y-scroll" style={{
                    minWidth: LGmatches ? "320px" : "100px"
                }}>
                    <div className='relative w-full h-full flex flex-col'>
                        {menus.map((menuItem, id) => {
                            return <MenuItens key={id} text={menuItem.text} href={menuItem.href} > {menuItem.icon} </MenuItens>
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