// import styles from './bookItem.module.css';
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";

export default function BookItem() {
    return (
        <div className='font-poppins w-[400px] h-[280px] relative shadow-md bg-slate-100'>
            <div className='absolute shadow-md left-[15px] -top-[20px]'>
                <img src="../../public/img/portada-el-perfume.jpg" alt="Portada del libro El Perfume" width="170" />
            </div>

            <div className='absolute left-[200px] w-1/2 h-full py-[15px] pr-[15px] flex flex-col justify-between'>
                <div>
                    <p className='font-bold text-3xl text-slate-700'>El Perfume</p>
                    <p className='mt-1 mb-10 text-slate-700'>Patrick Suskind</p>
                    <p className='text-sm italic text-slate-500'>Novela</p>
                </div>

                <div className='absolute -left-[37px] -bottom-[15px] w-[60px] h-[60px] rounded-full bg-orange-400 text-white flex justify-center items-center shadow-md'>
                    <span>19.9€</span>
                </div>

                <div className='self-end flex gap-2'>
                    <RiEdit2Fill className="cursor-pointer text-slate-700 hover:text-orange-400 transition-all ease-in-out duration-300" />
                    <RiDeleteBin5Fill className="cursor-pointer text-slate-700 hover:text-red-700 transition-all ease-in-out duration-300" />
                </div>
            </div>
        </div>
    )
}
