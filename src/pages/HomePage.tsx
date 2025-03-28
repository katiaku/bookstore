import { BiLogInCircle } from 'react-icons/bi';
import { BiPencil } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../public/img/bg-4.avif';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="page-height flex flex-col flex-wrap items-center justify-center overflow-y-scroll bg-blue-950">
            <div className="flex h-full">
                <div className="flex h-full flex-col justify-center gap-20 p-6 md:px-20 md:py-6 lg:w-1/2">
                    <h1 className="cursor-default font-poppins text-6xl font-bold leading-tight text-slate-200">
                        Best Place To Keep Your{' '}
                        <span className="text-orange-400">Favourite</span> Books
                    </h1>
                    <div className="flex flex-col gap-6 font-poppins md:flex-row md:gap-8">
                        <button
                            className="flex w-full items-center justify-center gap-2 rounded-full border-[1px] border-orange-400 bg-orange-400 py-[.6rem] text-blue-950 transition-all duration-300 hover:scale-105 md:w-[9rem]"
                            onClick={() => navigate('/register')}
                        >
                            Register
                            <BiPencil />
                        </button>
                        <button
                            className="flex w-full items-center justify-center gap-2 rounded-full border-[1px] border-orange-400 bg-transparent py-[.6rem] text-orange-400 transition-all duration-300 hover:scale-105 md:w-[9rem]"
                            onClick={() => navigate('/login')}
                        >
                            Log In
                            <BiLogInCircle />
                        </button>
                    </div>
                </div>

                <div className="hidden h-full w-1/2 overflow-hidden lg:block">
                    <img
                        src={bgImage}
                        alt="Pile of different books."
                        className="h-full w-full object-cover transition-all duration-1000 hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
}
