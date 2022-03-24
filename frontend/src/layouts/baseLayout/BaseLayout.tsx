import { Header } from "../Header";
import { MenuListItens } from "../../components/menuItens/MenuItens";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from "../../components/container/Container";
import { menus } from "../../utils/MenuHeaderItens";
import { useState } from "react";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { SwipeableDrawer, List, Divider } from "@mui/material";

interface LayoutProps {
    children?: React.ReactNode;
}

export const BaseLayout = ({ children }: LayoutProps) => {
    const LGmatches = useMediaQuery('(min-width:1024px)');
    const [menuDrawer, setMenuDrawer] = useState(false);

    const toglleDrawer = () => setMenuDrawer(!menuDrawer);

    return (
        <main className="relative">
            <SwipeableDrawer
                anchor={'left'}
                open={menuDrawer}
                onClose={() => setMenuDrawer(false)}
                onOpen={() => setMenuDrawer(true)}
                sx={{
                    
                    '& .MuiDrawer-paper': {
                      backgroundColor: 'rgb(9 9 16 / 1)'
                    },
                  }}
            >
                <aside className="bg-primaryColor" style={{
                    minWidth: "250px"
                }}>
                    <nav className="relative min-h-[56px] w-full flex justify-between px-8">
                        <div className='relative w-auto self-center'>
                            <DirectionsCarIcon sx={{ color: "#FF2D20" }} />
                        </div>
                        <div className='relative w-auto self-center'>
                            <p className='text-sm font-semibold font-serif text-secundaryColor'> Acompany Seguros </p>
                        </div>
                    </nav>
                    
                    <Divider sx={{borderColor: '#FF2D20'}}/>

                    <List
                        sx={{ width: '100%', bgcolor: '' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"

                    >
                        {menus.map((menuItem, id) => {
                            return <MenuListItens key={`drawer_${id}`} text={menuItem.text} sub={menuItem.sub} href={menuItem.href} icon={menuItem.icon} ></MenuListItens>
                        })}
                    </List>
                </aside>
            </SwipeableDrawer>

            <main className="w-full flex flex-row">
                <aside className="relative bg-primaryColor overflow-y-hidden lg:flex hidden" style={{
                    minWidth: "250px",
                    minHeight: '100vh'
                }}>
                    <div className='fixed flex flex-col max-h-full'>
                        <nav className="relative min-h-[56px] lg:w-[250px] w-full flex justify-between px-8">
                            <div className='relative w-auto self-center'>
                                <DirectionsCarIcon sx={{ color: "#FF2D20" }} />
                            </div>
                            <div className='relative w-auto self-center'>
                                <p className='text-sm font-semibold font-serif text-secundaryColor lg:flex hidden'> Acompany Seguros </p>
                            </div>
                        </nav>

                        <Divider sx={{borderColor: '#FF2D20'}}/>

                        <div className="relative flex flex-col overflow-y-scroll max-h-full">
                            <List
                                sx={{ width: '100%', bgcolor: '' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"

                            >
                                {menus.map((menuItem, id) => {
                                    return <MenuListItens key={`menu_${id}`} text={menuItem.text} sub={menuItem.sub} href={menuItem.href} icon={menuItem.icon} ></MenuListItens>
                                })}
                            </List>
                        </div>
                    </div>
                </aside>
                <section className="relative w-full flex flex-col">
                    <Header toggle={toglleDrawer} />
                    <section className="relative w-full pt-4 pl-4">
                        <Container>
                            {children}
                        </Container>
                    </section>
                </section>
            </main>
        </main>
    );
}