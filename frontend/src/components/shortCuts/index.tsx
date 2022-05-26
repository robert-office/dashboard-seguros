import { Paper } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import seguroSVG from '../../assets/svgs/secure.svg';
import clienteSVG from '../../assets/svgs/client.svg';
import carroSVG from '../../assets/svgs/car.svg';
import userSVG from '../../assets/svgs/enterprise.svg';

export const shortcuts = [
    {
        svg: seguroSVG,
        text: 'Seguro'
    },
    {
        svg: clienteSVG,
        text: 'Cliente'
    },
    {
        svg: carroSVG,
        text: 'Carro'
    },
    {
        svg: userSVG,
        text: 'Usuario'
    },
]

type Ishortcut = {
    svg: string,
    text: string,
    href?: string
}
const ShortCut = ( { svg, text, href } : Ishortcut ) => {
    return (
        <Paper elevation={4} sx={{ backgroundColor: '#1F2230' }} className="relative h-40 w-full z-10 group cursor-pointer overflow-hidden">
            <img src={svg} className="absolute h-full w-full bg-cover object-cover opacity-20 object-center group-hover:scale-110 transition-all " />

            <div className="relative w-full h-full overflow-hidden flex flex-col">
                <div className="relative sm:translate-y-5 sm:group-hover:translate-y-0 group-hover:rotate-180 transition-all mx-auto">
                    <AddCircleIcon sx={{ width: 122, height: 122, fill: 'rgb(74 222 128)' }} />
                </div>
                <span className="relative mx-auto w-full text-center text-base font-extrabold text-green-400 group-hover:scale-105 sm:translate-y-40 sm:group-hover:translate-y-0 transition-all">Novo {text}</span>
            </div>
        </Paper>
    )
}

export const ShortCutsSection = () => {
    return (
        <section className="relative grid grid-cols-2 md:grid-cols-4 gap-4 lg:my-6 my-4 w-full">
            { shortcuts.map( (shortcut) => {
                return <ShortCut svg={shortcut.svg} text={shortcut.text} />
            } ) }
        </section>
    );
}