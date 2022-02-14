import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { UserAvatar } from '../components/userAvatar/UserAvatar';

export const Header = () => {
    return (
        <header className="sticky bg-primaryColor h-14 w-full flex flex-row">
            <nav className="relative w-80 flex justify-between px-8">
                <div className='relative w-auto self-center'>
                    <DirectionsCarIcon sx={{ color: "#FF2D20" }} />
                </div>
                <div className='relative w-auto self-center'>
                    <p className='text-xl font-semibold font-serif text-secundaryColor lg:flex hidden'> Acompany Seguros </p>
                </div>
            </nav>
           
            <div className='ml-auto mr-3 my-auto'>
                <UserAvatar />
            </div>
        </header>
    );
}