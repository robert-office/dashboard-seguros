import { Header } from "../Header";
import { MenuItens } from "../../components/menuItens/MenuItens";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from "../../components/container/Container";
import { menus } from "../../utils/MenuHeaderItens";
import { useState } from "react";
import { SearchBar } from "../../components/searchBar/SearchBar";

interface LayoutProps {
    children?: React.ReactNode;
}

export const BaseLayout = ({ children }: LayoutProps) => {
    const LGmatches = useMediaQuery('(min-width:1024px)');

    const [searchValue, setSearchValue] = useState("");

    return (
        <main className="relative">
            <Header />

            <main className="w-full flex flex-row">
                <aside className="relative min-h-screen bg-primaryColor overflow-y-scroll" style={{
                    minWidth: LGmatches ? "300px" : "100px"
                }}>
                    <div className='relative w-full h-full flex flex-col'>
                        <div className="w-full lg:block hidden">
                            <SearchBar value={searchValue} setSearchValue={setSearchValue} />
                        </div>

                        {menus.filter((value) => {
                            return value.text?.toLowerCase().startsWith(searchValue.toLowerCase())
                        }).map((menuItem, id) => {
                            return <MenuItens key={id} text={menuItem.text} sub={menuItem.sub} href={menuItem.href} icon={menuItem.icon} ></MenuItens>
                        })}
                    </div>
                </aside>
                <section className="relative w-full">
                    <Container>
                        {children}
                    </Container>
                </section>
            </main>
        </main>
    );
}