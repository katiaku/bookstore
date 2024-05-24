export default function Menu() {

    return (
        <nav className="flex flex-col md:flex-row w-1/2 h-full mx-auto justify-start md:justify-center items-start md:items-center font-bold uppercase font-poppins text-xl md:text-base gap-8 md:gap-0">
            <a
                href="#"
                className="md:h-full md:px-16 lg:px-20 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 md:hover:bg-orange-400 hover:text-white"
            >
                Home
            </a>
            <a
                href="#"
                className="md:h-full md:px-16 lg:px-20 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 md:hover:bg-orange-400 hover:text-white"
            >
                Libros
            </a>
            <a
                href="#"
                className="md:h-full md:px-16 lg:px-20 flex items-center justify-center text-blue-950 transition-all ease-in-out duration-300 md:hover:bg-orange-400 hover:text-white"
            >
                Login
            </a>
        </nav>
    )
}
