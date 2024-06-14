import { BiLogInCircle } from "react-icons/bi"; 
import { BiPencil } from "react-icons/bi";  
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="bg-blue-950 page-height overflow-y-scroll flex flex-col flex-wrap justify-center items-center">
            <div className="flex h-full">
                <div className="lg:w-1/2 h-full flex flex-col justify-center gap-20 p-6 md:px-20 md:py-6">
                    <h1 className="cursor-default text-slate-200 text-6xl font-poppins font-bold leading-tight">Best Place To Get Your <span className="text-orange-400">Favourite</span> Books</h1>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 font-poppins">
                        <button
                            className="bg-orange-400 hover:scale-105 transition-all duration-300 border-[1px] py-[.6rem] w-full md:w-[9rem] border-orange-400 text-blue-950 flex items-center justify-center gap-2 rounded-full"
                            onClick={() => navigate("/register")}
                        >
                            Register
                            <BiPencil />
                        </button>
                        <button
                            className="bg-transparent hover:scale-105 transition-all duration-300 border-[1px] py-[.6rem] w-full md:w-[9rem] border-orange-400 text-orange-400 flex items-center justify-center gap-2 rounded-full"
                            onClick={() => navigate("/login")}
                        >
                            Log In
                            <BiLogInCircle />
                        </button>
                    </div>
                </div>
                
                <div className="hidden lg:block h-full w-1/2 overflow-hidden">
                    <img src="../../public/img/bg-4.avif" alt="Pile of different books." className="h-full w-full object-cover hover:scale-110 transition-all duration-1000" />
                </div>
            </div>
        </div>
    )
}
