import { CgCloseO } from "react-icons/cg"; 
import { BsWikipedia } from "react-icons/bs"; 
import { AiFillStar } from "react-icons/ai"; 
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import { BookItemProps } from "../config/types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BookItem(props: BookItemProps) {

    const { book, getBooks } = props;

    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [rating, setRating] = useState(book.rating || 0);

    async function deleteBook () {
        try {
            const resp = await fetch(`http://localhost:3000/books?id_book=${book.id_book}`, { method: 'DELETE' });
            const json = await resp.json();
            
            if (json) {
                toast.success("Book deleted successfully", {
                    position: "bottom-right",
                    theme: "colored"
                });
                getBooks();
            }
            
        } catch (error) {
            toast.error("There was an error...", {
                position: "bottom-right",
                theme: "colored"
            });
            console.log(error);
        }
    }

    function editBook () {
        navigate('/edit-book', { state: book });
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    async function handleRating(starValue: number) {
        try {
            const resp = await fetch(`http://localhost:3000/books`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id_book: book.id_book, rating: starValue })
            });
            const json = await resp.json();
            
            if (json) {
                setRating(starValue);
                getBooks();
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='font-poppins w-full max-w-[400px] md:w-[400px] h-[280px] relative shadow-md bg-slate-200'>
            <div className='cursor-pointer absolute shadow-md left-[15px] -top-[15px] max-h-[280px] overflow-hidden'>
                <img
                    src={ book.photo || '../../public/img/no_cover_available.png' }
                    alt={`The cover of ${ book.title } by ${ book.author }` }
                    width="170"
                    onClick={openModal}
                />
            </div>

            <div className='cursor-default bg-slate-200 absolute right-0 md:left-[200px] w-1/2 h-full py-[15px] px-[15px] pr-[15px] md:pl-0 flex flex-col justify-between items-start'>
                <div className="w-[170px] md:w-[185px] text-wrap overflow-hidden flex flex-col gap-2 pr-6 md:pr-0 md:pl-2">
                    <p className='font-nunito font-bold text-xl md:text-2xl text-slate-700'>
                        { book.title }
                    </p>
                    <p className='text-xs italic text-slate-700'>
                        by { book.author }
                    </p>
                    <p className='text-xs italic text-slate-500'>
                        { book.type }
                    </p>
                    <p className="flex">
                        {[1, 2, 3, 4, 5].map((starValue) => (
                            <AiFillStar
                                key={starValue}
                                className={`cursor-pointer ${starValue <= rating ? 'text-orange-400' : 'text-slate-500'}`}
                                onClick={() => handleRating(starValue)}
                            />
                        ))}
                    </p>
                </div>

                <div className='absolute -left-[20%] md:-left-[30px] -bottom-[15px] w-[60px] h-[60px] rounded-full bg-orange-400 text-white text-sm flex justify-center items-center shadow-md'>
                    <span>
                        { book.price }€
                    </span>
                </div>

                <div className='self-end flex gap-3 text-sm'>
                    <a
                        href={`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(book.title)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <BsWikipedia className="cursor-pointer text-slate-700 hover:text-orange-400 transition-all ease-in-out duration-300" />
                    </a>
                    <button onClick={ editBook }>
                        <RiEdit2Fill className="cursor-pointer text-slate-700 hover:text-orange-400 transition-all ease-in-out duration-300" />
                    </button>
                    <button onClick={ deleteBook }>
                        <RiDeleteBin5Fill className="cursor-pointer text-slate-700 hover:text-red-700 transition-all ease-in-out duration-300" />
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 h-screen w-screen bg-blue-950 flex items-center justify-center z-50 p-10">
                    <div className="w-content h-content text-right">
                        <button
                            className="mb-4 text-xl text-white hover:text-orange-400 transition-all ease-in-out duration-300"
                            onClick={closeModal}
                        >
                            <CgCloseO />
                        </button>
                        <div className="w-auto md:w-[450px]">
                            <img
                                src={book.photo || '../../public/img/no_cover_available.png'}
                                alt={`The cover of ${book.title} by ${book.author}`}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
