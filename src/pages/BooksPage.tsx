import { BiSearch } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { Book } from '../config/types';
import BookList from '../components/BookList';
import useUserContext from '../hooks/useUserContext';
import { toast } from 'react-toastify';
import { AiFillStar } from 'react-icons/ai';

export default function BooksPage() {
    const [books, setBooks] = useState<Book[]>([]);
    const { user } = useUserContext();

    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    async function getBooks() {
        try {
            const resp = await fetch(
                `https://api-bookshelve.vercel.app/books?id_user=${user?.id_user}`
            );

            const json = await resp.json();
            console.log(json);

            setBooks(json);
        } catch (error) {
            if (error instanceof Error) {
                toast.error('There was an error...', {
                    position: 'bottom-right',
                    theme: 'colored',
                });
                console.log(error.message);
            }
        }
    }

    useEffect(() => {
        getBooks();
    }, []);

    async function findByRating(rating: number) {
        try {
            const resp = await fetch(
                `https://api-bookshelve.vercel.app/rating`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id_user: user?.id_user, rating }),
                }
            );

            const json = await resp.json();
            console.log(json);

            setBooks(json);
        } catch (error) {
            if (error instanceof Error) {
                toast.error('There was an error...', {
                    position: 'bottom-right',
                    theme: 'colored',
                });
                console.log(error.message);
            }
        }
    }

    async function searchBooks(query: string) {
        if (!query) {
            setSuggestions([]);
            return;
        }
        try {
            const resp = await fetch(
                `https://api-bookshelve.vercel.app/search?id_user=${user?.id_user}&query=${query}`
            );
            const json = await resp.json();
            const titlesAndAuthors = json.map(
                (book: Book) => `${book.title} by ${book.author}`
            );
            setSuggestions(titlesAndAuthors);
        } catch (error) {
            if (error instanceof Error) {
                toast.error('There was an error...', {
                    position: 'bottom-right',
                    theme: 'colored',
                });
                console.log(error.message);
            }
        }
    }

    async function selectSuggestion(suggestion: string) {
        try {
            const [title] = suggestion.split(' by ');
            const resp = await fetch(
                `https://api-bookshelve.vercel.app/search?id_user=${user?.id_user}&query=${title}`
            );
            const json = await resp.json();
            setBooks(json);
            setSuggestions([]);
            setSearchQuery('');
        } catch (error) {
            if (error instanceof Error) {
                toast.error('There was an error...', {
                    position: 'bottom-right',
                    theme: 'colored',
                });
                console.log(error.message);
            }
        }
    }

    return (
        <div className="page-height flex w-full flex-col items-center overflow-y-scroll bg-blue-950">
            <div className="mt-8 cursor-default px-8 text-slate-200 md:self-start">
                {books.length === 1 ? (
                    <p>Results: found {books.length} book.</p>
                ) : (
                    <p>Results: found {books.length} books.</p>
                )}
            </div>

            <div className="mt-6 flex flex-col justify-center gap-4 text-xs md:w-full md:flex-row md:justify-between md:px-8">
                <div className="relative w-full md:w-[300px]">
                    <div className="flex w-full items-center justify-between gap-4 rounded-md border-[1px] border-slate-200 bg-transparent px-4 py-2 text-slate-200 focus:outline-none">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => {
                                setSearchQuery(e.target.value);
                                searchBooks(e.target.value);
                            }}
                            placeholder="Search by title or author"
                            className="h-full w-full bg-transparent text-sm focus:outline-none"
                        />
                        <BiSearch className="text-lg" />
                    </div>
                    {suggestions.length > 0 && (
                        <ul className="absolute z-10 mt-4 rounded-md border-[1px] border-slate-200 bg-blue-950 p-2 text-sm text-slate-200">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => selectSuggestion(suggestion)}
                                    className="cursor-pointer rounded-md p-2 hover:bg-slate-200 hover:text-blue-950"
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3 text-orange-400">
                        {[5, 4, 3, 2, 1].map(rating => (
                            <button
                                className="flex items-center gap-1 rounded-lg border-[1px] border-slate-300 px-[.4rem] text-slate-300 transition-all duration-300 ease-in-out hover:border-orange-300 hover:text-orange-300"
                                key={rating}
                                onClick={() => findByRating(rating)}
                            >
                                <p>{rating}</p>
                                <AiFillStar />
                            </button>
                        ))}
                    </div>
                    <button
                        className="rounded-lg border-[1px] border-slate-300 px-2 text-slate-300 transition-all duration-300 ease-in-out hover:border-orange-300 hover:text-orange-300"
                        onClick={getBooks}
                    >
                        All
                    </button>
                </div>
            </div>

            <BookList books={books} getBooks={getBooks} />
        </div>
    );
}
