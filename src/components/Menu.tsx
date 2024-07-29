import { NavLink } from 'react-router-dom'
import useUserContext from '../hooks/useUserContext'
import { SidebarProps } from '../config/types'

export default function Menu({ setIsOpenSidebar }: SidebarProps) {
    const { user } = useUserContext()

    const handleLinkClick = () => {
        if (setIsOpenSidebar) {
            setIsOpenSidebar(false)
        }
    }

    return (
        <nav className="py-20 md:py-0 flex flex-col md:flex-row md:w-1/2 h-full mx-auto justify-center items-center font-semibold uppercase font-poppins text-xl md:text-base gap-0">
            <NavLink
                to="/"
                onClick={handleLinkClick}
                className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-8 lg:px-12 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
            >
                Home
            </NavLink>

            {!user && (
                <NavLink
                    to="/login"
                    onClick={handleLinkClick}
                    className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-8 lg:px-12 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
                >
                    Login
                </NavLink>
            )}
            {!user && (
                <NavLink
                    to="/register"
                    onClick={handleLinkClick}
                    className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-8 lg:px-12 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
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
                    className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-8 lg:px-12 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
                >
                    Books
                </NavLink>
            )}
            {user && (
                <NavLink
                    to="/add-book"
                    onClick={handleLinkClick}
                    className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-8 flex text-nowrap items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
                >
                    Add Book
                </NavLink>
            )}
        </nav>
    )
}
