import { AiOutlineToTop } from "react-icons/ai"; 
import { BiSearchAlt2 } from "react-icons/bi"; 
import { BiLibrary } from "react-icons/bi"; 

export default function HomePage() {
    return (
        <div className="relative bg-blue-950 page-height overflow-y-scroll flex flex-col flex-wrap justify-center items-center">
            <div className="flex h-full">
                <div className="w-1/2 h-full flex flex-col justify-start py-20 gap-20 px-12">
                    <h1 className="cursor-default text-white text-6xl font-nunito font-bold leading-tight">Best Place To Keep Your <span className="text-orange-400">Favourite</span> Books.</h1>
                    <div className="flex gap-8 font-poppins">
                        <button className="bg-orange-400 border-2 px-4 py-[.8rem] w-[9rem] border-orange-400 text-blue-950 font-semibold">Register</button>
                        <button className="bg-transparent border-2 px-4 py-[.8rem] w-[9rem] border-orange-400 text-orange-400 font-semibold">Log In</button>
                    </div>
                </div>
                <div className="h-full w-1/2 overflow-hidden">
                    <img src="../../public/img/bg-4.avif" alt="" className="h-full w-full object-cover" />
                </div>
            </div>
            
            <div className="absolute bottom-0 p-8 cursor-default flex bg-orange-400 w-full justify-center gap-20 font-poppins">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <BiLibrary className="text-5xl text-blue-950" />
                    <p className="font-semibold text-blue-950">Create your own library.</p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <BiSearchAlt2 className="text-5xl text-blue-950" />
                    <p className="font-semibold text-blue-950">Discover your best books.</p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <AiOutlineToTop className="text-5xl text-blue-950" />
                    <p className="font-semibold text-blue-950">Increase your knowledge.</p>
                </div>
            </div>
        </div>
    )
}
