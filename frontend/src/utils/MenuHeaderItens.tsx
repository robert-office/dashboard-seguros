import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import SettingsIcon from '@mui/icons-material/Settings';

export interface IheaderMenuItens {
    text: string,
    href: string,
    icon: (color?: string) => JSX.Element | JSX.Element,
    sub?: IheadeSubMenu[],
    isSub?: boolean
}

export interface IheadeSubMenu {
    text: string,
    href: string,
    icon: JSX.Element,
    sub?: IheadeSubMenu[]
}

export const menus: IheaderMenuItens[] = [
    {
        text: "Dashboard",
        href: "/",
        icon: (color) => <DashboardIcon className="self-center" sx={{ color: color }} />
    },
    {
        text: "Funcionarios",
        href: "#",
        icon: (color) => <PeopleAltIcon className="self-center" sx={{ color: color }} />,
        sub: [
            {
                text: "Administradores",
                href: "/administradores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Vendedores",
                href: "/vendedores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Telemarketing",
                href: "/telemarketing",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Desenvolvedores",
                href: "/desenvolvedores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            }
        ]
    },
    {
        text: "Funcionarios",
        href: "#",
        icon: (color) => <PeopleAltIcon className="self-center" sx={{ color: color }} />,
        sub: [
            {
                text: "Administradores",
                href: "/administradores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Vendedores",
                href: "/vendedores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Telemarketing",
                href: "/telemarketing",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Desenvolvedores",
                href: "/desenvolvedores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            }
        ]
    },
    {
        text: "Funcionarios",
        href: "#",
        icon: (color) => <PeopleAltIcon className="self-center" sx={{ color: color }} />,
        sub: [
            {
                text: "Administradores",
                href: "/administradores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Vendedores",
                href: "/vendedores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Telemarketing",
                href: "/telemarketing",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Desenvolvedores",
                href: "/desenvolvedores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            }
        ]
    },
    {
        text: "Funcionarios",
        href: "#",
        icon: (color) => <PeopleAltIcon className="self-center" sx={{ color: color }} />,
        sub: [
            {
                text: "Administradores",
                href: "/administradores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Vendedores",
                href: "/vendedores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Telemarketing",
                href: "/telemarketing",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Desenvolvedores",
                href: "/desenvolvedores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            }
        ]
    },
    {
        text: "Funcionarios",
        href: "#",
        icon: (color) => <PeopleAltIcon className="self-center" sx={{ color: color }} />,
        sub: [
            {
                text: "Administradores",
                href: "/administradores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Vendedores",
                href: "/vendedores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Telemarketing",
                href: "/telemarketing",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            },
            {
                text: "Desenvolvedores",
                href: "/desenvolvedores",
                icon: <PeopleAltIcon className="self-center" sx={{ color: "#C9D1D9" }} />
            }
        ]
    },
    {
        text: "Clientes",
        href: "/clientes",
        icon: (color) => <PeopleAltIcon className="self-center" sx={{ color: color }} />
    },
    {
        text: "Veiculos",
        href: "/veiculos",
        icon: (color) => <LocalShippingIcon className="self-center" sx={{ color: color }} />
    },
    {
        text: "Seguros",
        href: "/seguros",
        icon: (color) => <LocalPoliceIcon className="self-center" sx={{ color: color }} />
    },
    {
        text: "Configurações",
        href: "/configuracoes",
        icon: (color) => <SettingsIcon className="self-center" sx={{ color: color }} />
    }
]