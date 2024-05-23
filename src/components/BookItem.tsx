// import styles from './bookItem.module.css';
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import { BookItemProps } from "../config/types";

export default function BookItem(props: BookItemProps) {

    const { book } = props;

    function handleEditBook(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log(e);
    }

    function handleDeleteBook(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log(e);
    }

    return (
        <div className='font-poppins w-[400px] h-[280px] relative shadow-md bg-slate-100'>
            <div className='absolute shadow-md left-[15px] -top-[20px] max-h-[280px] overflow-hidden'>
                <img
                    src={ book.photo }
                    alt={`Foto del libro ${ book.title } de ${ book.author }` }
                    width="170"
                />
            </div>

            <div className='absolute left-[200px] w-1/2 h-full py-[15px] pr-[15px] flex flex-col justify-between'>
                <div>
                    <p className='font-bold text-3xl text-slate-700'>{ book.title }</p>
                    <p className='mt-1 mb-10 text-slate-700'>{ book.author }</p>
                    <p className='text-sm italic text-slate-500'>{ book.type }</p>
                </div>

                <div className='absolute -left-[37px] -bottom-[15px] w-[60px] h-[60px] rounded-full bg-orange-400 text-white flex justify-center items-center shadow-md'>
                    <span>{ book.price }€</span>
                </div>

                <div className='self-end flex gap-2'>
                    <button onClick={handleEditBook}>
                        <RiEdit2Fill className="cursor-pointer text-slate-700 hover:text-orange-400 transition-all ease-in-out duration-300" />
                    </button>
                    <button onClick={handleDeleteBook}>
                        <RiDeleteBin5Fill className="cursor-pointer text-slate-700 hover:text-red-700 transition-all ease-in-out duration-300" />
                    </button>
                </div>
            </div>
        </div>
    )
}
