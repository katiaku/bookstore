import { BiLogInCircle } from "react-icons/bi"; 
import { BiPencil } from "react-icons/bi"; 
// import { AiOutlineToTop } from "react-icons/ai"; 
// import { BiSearchAlt2 } from "react-icons/bi"; 
// import { BiLibrary } from "react-icons/bi"; 

export default function HomePage() {
    return (
        <div className="bg-blue-950 page-height overflow-y-scroll flex flex-col flex-wrap justify-center items-center">
            <div className="flex h-full">
                <div className="lg:w-1/2 h-full flex flex-col justify-center gap-20 p-6 md:px-20 md:py-6">
                    <h1 className="cursor-default text-slate-200 text-6xl font-poppins font-bold leading-tight">Best Place To Keep Your <span className="text-orange-400">Favourite</span> Books</h1>
                    
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 font-poppins">
                        <button className="bg-orange-400 border-2 px-4 py-[.8rem] w-full md:w-[10rem] border-orange-400 text-blue-950 font-semibold flex items-center justify-center gap-3">Register<BiPencil /></button>
                        <button className="bg-transparent border-2 px-4 py-[.8rem] w-full md:w-[10rem] border-orange-400 text-orange-400 font-semibold flex items-center justify-center gap-3">Log In<BiLogInCircle /></button>
                    </div>
                    
                    {/* <div className="cursor-default flex w-full justify-center items-start gap-4 md:gap-20 font-poppins mt-auto">
                        <div className="flex flex-col gap-5 justify-center items-start">
                            <BiLibrary className="text-3xl text-white" />
                            <p className="text-white">Create your own library</p>
                        </div>
                        <div className="flex flex-col gap-5 justify-center items-start">
                            <BiSearchAlt2 className="text-3xl text-white" />
                            <p className="text-white">Discover your best books</p>
                        </div>
                        <div className="flex flex-col gap-5 justify-center items-start">
                            <AiOutlineToTop className="text-3xl text-white" />
                            <p className="text-white">Increase your knowledge</p>
                        </div>
                    </div> */}
                </div>
                
                <div className="hidden lg:block h-full w-1/2 overflow-hidden">
                    <img src="../../public/img/bg-4.avif" alt="Pile of different books." className="h-full w-full object-cover hover:scale-110 transition-all duration-1000" />
                </div>
            </div>
        </div>
    )
}
