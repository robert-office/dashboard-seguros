import { Header } from "../Header";
import { MenuItens } from "../../components/menuItens/MenuItens";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from "../../components/container/Container";
import { menus } from "../../utils/MenuHeaderItens";
import { useState } from "react";
import { SearchBar } from "../../components/searchBar/SearchBar";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

interface LayoutProps {
    children?: React.ReactNode;
}

export const BaseLayout = ({ children }: LayoutProps) => {
    const LGmatches = useMediaQuery('(min-width:1024px)');

    const [searchValue, setSearchValue] = useState("");

    return (
        <main className="relative">
            <main className="w-full flex flex-row">
                <aside className="relative bg-primaryColor overflow-y-hidden" style={{
                    minWidth: LGmatches ? "250px" : "100px",
                    minHeight: '100vh'
                }}>
                    <div className='fixed flex flex-col max-h-full'>
                        <nav className="relative h-14 lg:w-[250px] w-full flex justify-between px-8">
                            <div className='relative w-auto self-center'>
                                <DirectionsCarIcon sx={{ color: "#FF2D20" }} />
                            </div>
                            <div className='relative w-auto self-center'>
                                <p className='text-sm font-semibold font-serif text-secundaryColor lg:flex hidden'> Acompany Seguros </p>
                            </div>
                        </nav>
                        <div className="relative flex flex-col overflow-y-scroll max-h-full">

                            <div className="w-full lg:block hidden">
                                <SearchBar value={searchValue} setSearchValue={setSearchValue} />
                            </div>

                            {menus.filter((value) => {
                                return value.text?.toLowerCase().startsWith(searchValue.toLowerCase())
                            }).map((menuItem, id) => {
                                return <MenuItens key={id} text={menuItem.text} sub={menuItem.sub} href={menuItem.href} icon={menuItem.icon} ></MenuItens>
                            })}
                        </div>
                    </div>
                </aside>
                <section className="relative w-full flex flex-col">
                    <Header />
                    <section className="relative w-full pl-2 sm:pl-3 lg:pl-7 sm:pt-2 pt-1">
                        <Container>
                            {children}
                        </Container>
                    </section>
                </section>
            </main>
        </main>
    );
}