import { CgCloseO } from 'react-icons/cg';
import { BsWikipedia } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { RiDeleteBin5Fill, RiEdit2Fill } from 'react-icons/ri';
import { BookItemProps } from '../config/types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import noCoverAvailable from '../../public/img/no_cover_available.png';

export default function BookItem(props: BookItemProps) {
    const { book, getBooks } = props;

    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [rating, setRating] = useState(book.rating || 0);

    async function deleteBook() {
        try {
            const resp = await fetch(
                `https://api-bookshelve.vercel.app/books?id_book=${book.id_book}`,
                { method: 'DELETE' }
            );
            const json = await resp.json();

            if (json) {
                toast.success('Book deleted successfully', {
                    position: 'bottom-right',
                    theme: 'colored',
                });
                getBooks();
            }
        } catch (error) {
            toast.error('There was an error...', {
                position: 'bottom-right',
                theme: 'colored',
            });
            console.log(error);
        }
    }

    function editBook() {
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
            const resp = await fetch(
                `https://api-bookshelve.vercel.app/books`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id_book: book.id_book,
                        rating: starValue,
                    }),
                }
            );
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
        <div className="relative h-[280px] w-full max-w-[400px] bg-slate-200 font-poppins shadow-md md:w-[400px]">
            <div className="absolute -top-[15px] left-[15px] max-h-[280px] cursor-pointer overflow-hidden shadow-md">
                <img
                    src={book.photo || noCoverAvailable}
                    alt={`The cover of ${book.title} by ${book.author}`}
                    width="170"
                    onClick={openModal}
                />
            </div>

            <div className="absolute right-0 flex h-full w-1/2 cursor-default flex-col items-start justify-between bg-slate-200 px-[15px] py-[15px] pr-[15px] md:left-[200px] md:pl-0">
                <div className="flex w-[170px] flex-col gap-2 overflow-hidden text-wrap pr-6 md:w-[185px] md:pl-2 md:pr-0">
                    <p className="font-nunito text-xl font-bold text-slate-700">
                        {book.title}
                    </p>
                    <p className="text-xs italic text-slate-700">
                        by {book.author}
                    </p>
                    <p className="text-xs italic text-slate-500">{book.type}</p>
                    <p className="flex">
                        {[1, 2, 3, 4, 5].map(starValue => (
                            <AiFillStar
                                key={starValue}
                                className={`cursor-pointer ${starValue <= rating ? 'text-orange-400' : 'text-slate-500'}`}
                                onClick={() => handleRating(starValue)}
                            />
                        ))}
                    </p>
                </div>

                <div className="absolute -bottom-[15px] -left-[20%] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-orange-400 text-sm text-white shadow-md md:-left-[30px]">
                    <span>{book.price}€</span>
                </div>

                <div className="flex gap-3 self-end text-sm">
                    <a
                        href={`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(book.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsWikipedia className="cursor-pointer text-slate-700 transition-all duration-300 ease-in-out hover:text-orange-400" />
                    </a>
                    <button onClick={editBook}>
                        <RiEdit2Fill className="cursor-pointer text-slate-700 transition-all duration-300 ease-in-out hover:text-orange-400" />
                    </button>
                    <button onClick={deleteBook}>
                        <RiDeleteBin5Fill className="cursor-pointer text-slate-700 transition-all duration-300 ease-in-out hover:text-red-700" />
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-blue-950 p-10">
                    <div className="w-content h-content text-right">
                        <button
                            className="mb-4 text-xl text-white transition-all duration-300 ease-in-out hover:text-orange-400"
                            onClick={closeModal}
                        >
                            <CgCloseO />
                        </button>
                        <div className="w-auto md:w-[450px]">
                            <img
                                src={
                                    book.photo ||
                                    '../../public/img/no_cover_available.png'
                                }
                                alt={`The cover of ${book.title} by ${book.author}`}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
