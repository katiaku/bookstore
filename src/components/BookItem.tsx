// import styles from './bookItem.module.css';
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import { Book } from "../config/types";

export default function BookItem() {

    const book1: Book = {
        id_book: 1,
        id_user: 1,
        title: "El Perfume",
        author: "Patrick Suskind",
        photo: "https://imagessl2.casadellibro.com/a/l/s7/32/9788432228032.webp",
        price: 19.9,
        type: "Tapa dura"
    }

    return (
        <div className='font-poppins w-[400px] h-[280px] relative shadow-md bg-slate-100'>
            <div className='absolute shadow-md left-[15px] -top-[20px] h-[280px] overflow-hidden'>
                <img
                    src={ book1.photo }
                    alt={`Foto del libro ${ book1.title } de ${ book1.author }` }
                    width="170"
                />
            </div>

            <div className='absolute left-[200px] w-1/2 h-full py-[15px] pr-[15px] flex flex-col justify-between'>
                <div>
                    <p className='font-bold text-3xl text-slate-700'>{ book1.title }</p>
                    <p className='mt-1 mb-10 text-slate-700'>{ book1.author }</p>
                    <p className='text-sm italic text-slate-500'>{ book1.type }</p>
                </div>

                <div className='absolute -left-[37px] -bottom-[15px] w-[60px] h-[60px] rounded-full bg-orange-400 text-white flex justify-center items-center shadow-md'>
                    <span>{ book1.price }€</span>
                </div>

                <div className='self-end flex gap-2'>
                    <RiEdit2Fill className="cursor-pointer text-slate-700 hover:text-orange-400 transition-all ease-in-out duration-300" />
                    <RiDeleteBin5Fill className="cursor-pointer text-slate-700 hover:text-red-700 transition-all ease-in-out duration-300" />
                </div>
            </div>
        </div>
    )
}
