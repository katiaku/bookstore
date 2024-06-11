import { NavLink } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export default function Menu() {

    const { user, logout } = useUserContext();

    return (
        <nav className="flex flex-col md:flex-row md:w-1/2 h-full mx-auto justify-center items-center font-semibold uppercase font-poppins text-xl md:text-base gap-0">
            <NavLink
                to="/"
                className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-8 lg:px-12 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
            >
                Home
            </NavLink>

            {!user && <NavLink
                to="/login"
                className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-8 lg:px-12 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
            >
                Login
            </NavLink>}
            {!user && <NavLink
                to="/register"
                className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-8 lg:px-12 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
            >
                Register
            </NavLink>
}
            {user && <NavLink
                to="/profile"
                className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-8 lg:px-12 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
            >
                Profile
            </NavLink>}
            {user && <NavLink
                to="/books"
                className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-8 lg:px-12 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
            >
                Books
            </NavLink>}
            {user && <NavLink
                to="/add-book"
                className="border-4 border-x-0 border-transparent md:[&.active]:border-b-orange-400 w-full h-full md:px-4 lg:px-8 flex text-nowrap items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-blue-950 md:hover:bg-orange-400 hover:text-white"
            >
                Add Book
            </NavLink>}

            {/* TODO: style the logout button */}
            {user && <button onClick={logout} className="text-blue-600 hover:text-white" >Logout</button>}

        </nav>
    )
}
