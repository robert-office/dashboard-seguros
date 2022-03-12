import { IconButton, Tooltip } from '@mui/material';
import { UserAvatar } from '../components/userAvatar/UserAvatar';
import MenuIcon from '@mui/icons-material/Menu';

interface IHamburguerMenu {
    toggle : () => void
}

export const Header = ({toggle} : IHamburguerMenu) => {
    return (
        <header className="sticky top-0 z-50 bg-primaryColor h-14 w-full flex flex-row">
            <div className='mr-auto ml-1 my-auto flex lg:hidden'>
                <Tooltip title="Abir/Fechar Menu">
                    <IconButton
                        size="large"
                        onClick={toggle}
                        sx={{
                            color: '#FF2D20'
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Tooltip>
            </div>
            <div className='ml-auto mr-3 my-auto'>
                <UserAvatar />
            </div>
        </header>
    );
}