import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';

type IButtonCreate = {
    title: string,
    href: string,
}

export const ButtonCreate = ({ title, href }: IButtonCreate) => {
    return (
        <Link to={href}>
            <div className="flex justify-around max-w-min h-10 align-middle bg-green-600 hover:bg-green-700 px-4 shadow-md focus:outline-none focus:ring focus:ring-violet-300 rounded-md">
                <Tooltip title={title}>
                    <IconButton sx={{ color: 'white' }}> <AddBoxIcon />  </IconButton>
                </Tooltip>

                <p className="font-semibold text-white self-center whitespace-nowrap">{title}</p>
            </div>
        </Link>
    );
}