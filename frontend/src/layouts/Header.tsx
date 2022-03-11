import { UserAvatar } from '../components/userAvatar/UserAvatar';

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-primaryColor h-14 w-full flex flex-row">
            <div className='ml-auto mr-3 my-auto'>
                <UserAvatar />
            </div>
        </header>
    );
}