import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import SettingsIcon from '@mui/icons-material/Settings';

export interface IheaderMenuItens {
    text: string,
    href: string,
    icon: JSX.Element,
    sub?: IheadeSubMenu[]
}

export interface IheadeSubMenu {
    text: string,
    href: string,
    icon: JSX.Element,
}

export const menus: IheaderMenuItens[] = [
    {
        text: "Dashboard",
        href: "/",
        icon: <DashboardIcon className="self-center" sx={{ color: "#C9D1D9" }} />
    },
    {
        text: "Funcionarios",
        href: "#",
        icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />,
        sub: [
            {
                text: "Vendedores",
                href: "/vendedores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Telemarketing",
                href: "#",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            }
        ]
    },
    {
        text: "Clientes",
        href: "/clientes",
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
    },
    {
        text: "Configurações",
        href: "#",
        icon: <SettingsIcon className="self-center" sx={{ color: "#C9D1D9" }} />
    }
]