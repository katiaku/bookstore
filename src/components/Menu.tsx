import { NavLink } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';
import { SidebarProps } from '../config/types';

export default function Menu({ setIsOpenSidebar }: SidebarProps) {
    const { user } = useUserContext();

    const handleLinkClick = () => {
        if (setIsOpenSidebar) {
            setIsOpenSidebar(false);
        }
    };

    return (
        <nav className="mx-auto flex h-full flex-col items-center justify-center gap-0 py-20 font-poppins text-xl font-semibold uppercase md:w-1/2 md:flex-row md:py-0 md:text-base">
            <NavLink
                to="/"
                onClick={handleLinkClick}
                className="flex h-full w-full items-center justify-center border-4 border-x-0 border-transparent text-blue-950 transition-all duration-300 ease-in-out hover:bg-blue-950 hover:text-white md:px-8 md:hover:bg-orange-400 lg:px-12 md:[&.active]:border-b-orange-400"
            >
                Home
            </NavLink>

            {!user && (
                <NavLink
                    to="/login"
                    onClick={handleLinkClick}
                    className="flex h-full w-full items-center justify-center border-4 border-x-0 border-transparent text-blue-950 transition-all duration-300 ease-in-out hover:bg-blue-950 hover:text-white md:px-8 md:hover:bg-orange-400 lg:px-12 md:[&.active]:border-b-orange-400"
                >
                    Login
                </NavLink>
            )}
            {!user && (
                <NavLink
                    to="/register"
                    onClick={handleLinkClick}
                    className="flex h-full w-full items-center justify-center border-4 border-x-0 border-transparent text-blue-950 transition-all duration-300 ease-in-out hover:bg-blue-950 hover:text-white md:px-8 md:hover:bg-orange-400 lg:px-12 md:[&.active]:border-b-orange-400"
                >
                    Register
                </NavLink>
            )}
            {/* {user && <NavLink
                to="/profile"
                onClick={handleLinkClick}
                className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-8 lg:px-12 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
            >
                Profile
            </NavLink>} */}
            {user && (
                <NavLink
                    to="/books"
                    onClick={handleLinkClick}
                    className="flex h-full w-full items-center justify-center border-4 border-x-0 border-transparent text-blue-950 transition-all duration-300 ease-in-out hover:bg-blue-950 hover:text-white md:px-8 md:hover:bg-orange-400 lg:px-12 md:[&.active]:border-b-orange-400"
                >
                    Books
                </NavLink>
            )}
            {user && (
                <NavLink
                    to="/add-book"
                    onClick={handleLinkClick}
                    className="flex h-full w-full items-center justify-center text-nowrap border-4 border-x-0 border-transparent text-blue-950 transition-all duration-300 ease-in-out hover:bg-blue-950 hover:text-white md:px-8 md:hover:bg-orange-400 md:[&.active]:border-b-orange-400"
                >
                    Add Book
                </NavLink>
            )}
        </nav>
    );
}
