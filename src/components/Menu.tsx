export default function Menu() {
    return (
        <nav className="hidden md:flex w-1/2 h-full mx-auto justify-center items-center font-bold uppercase font-poppins">
            <a
                href="#"
                className="h-full px-16 lg:px-20 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-orange-400 hover:text-white"
            >
                Home
            </a>
            <a
                href="#"
                className="h-full px-16 lg:px-20 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-orange-400 hover:text-white"
            >
                Libros
            </a>
            <a
                href="#"
                className="h-full px-16 lg:px-20 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 hover:bg-orange-400 hover:text-white"
            >
                Login
            </a>
        </nav>
    )
}
