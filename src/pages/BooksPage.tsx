import { BiSearch } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { Book } from '../config/types'
import BookList from '../components/BookList'
import useUserContext from '../hooks/useUserContext'
import { toast } from 'react-toastify'
import { AiFillStar } from 'react-icons/ai'

export default function BooksPage() {
    const [books, setBooks] = useState<Book[]>([])
    const { user } = useUserContext()

    const [searchQuery, setSearchQuery] = useState('')
    const [suggestions, setSuggestions] = useState<string[]>([])

    async function getBooks() {
        try {
            const resp = await fetch(
                `https://api-bookshelve.vercel.app/books?id_user=${user?.id_user}`
            )

            const json = await resp.json()
            console.log(json)

            setBooks(json)
        } catch (error) {
            if (error instanceof Error) {
                toast.error('There was an error...', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
                console.log(error.message)
            }
        }
    }

    useEffect(() => {
        getBooks()
    }, [])

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
            )

            const json = await resp.json()
            console.log(json)

            setBooks(json)
        } catch (error) {
            if (error instanceof Error) {
                toast.error('There was an error...', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
                console.log(error.message)
            }
        }
    }

    async function searchBooks(query: string) {
        if (!query) {
            setSuggestions([])
            return
        }
        try {
            const resp = await fetch(
                `https://api-bookshelve.vercel.app/search?id_user=${user?.id_user}&query=${query}`
            )
            const json = await resp.json()
            const titlesAndAuthors = json.map(
                (book: Book) => `${book.title} by ${book.author}`
            )
            setSuggestions(titlesAndAuthors)
        } catch (error) {
            if (error instanceof Error) {
                toast.error('There was an error...', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
                console.log(error.message)
            }
        }
    }

    async function selectSuggestion(suggestion: string) {
        try {
            const [title] = suggestion.split(' by ')
            const resp = await fetch(
                `https://api-bookshelve.vercel.app/search?id_user=${user?.id_user}&query=${title}`
            )
            const json = await resp.json()
            setBooks(json)
            setSuggestions([])
            setSearchQuery('')
        } catch (error) {
            if (error instanceof Error) {
                toast.error('There was an error...', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
                console.log(error.message)
            }
        }
    }

    return (
        <div className="bg-blue-950 page-height overflow-y-scroll w-full flex flex-col items-center">
            <div className="text-slate-200 mt-8 px-8 md:self-start cursor-default">
                {books.length === 1 ? (
                    <p>Results: found {books.length} book.</p>
                ) : (
                    <p>Results: found {books.length} books.</p>
                )}
            </div>

            <div className="md:w-full md:px-8 flex flex-col md:flex-row justify-center md:justify-between gap-4 text-xs mt-6">
                <div className="relative w-full md:w-[300px]">
                    <div className="flex justify-between items-center gap-4 text-slate-200 w-full rounded-md bg-transparent border-[1px] py-2 px-4 focus:outline-none border-slate-200">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value)
                                searchBooks(e.target.value)
                            }}
                            placeholder="Search by title or author"
                            className="w-full h-full bg-transparent focus:outline-none text-sm"
                        />
                        <BiSearch className="text-lg" />
                    </div>
                    {suggestions.length > 0 && (
                        <ul className="absolute bg-blue-950 text-slate-200 border-[1px] rounded-md text-sm p-2 border-slate-200 z-10 mt-4">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => selectSuggestion(suggestion)}
                                    className="cursor-pointer hover:bg-slate-200 p-2 rounded-md hover:text-blue-950"
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-3 text-orange-400">
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <button
                                className="flex gap-1 items-center text-slate-300 hover:text-orange-300 border-[1px] border-slate-300 hover:border-orange-300 rounded-lg px-[.4rem] transition-all ease-in-out duration-300"
                                key={rating}
                                onClick={() => findByRating(rating)}
                            >
                                <p>{rating}</p>
                                <AiFillStar />
                            </button>
                        ))}
                    </div>
                    <button
                        className="text-slate-300 hover:text-orange-300 border-[1px] border-slate-300 hover:border-orange-300 rounded-lg px-2 transition-all ease-in-out duration-300"
                        onClick={getBooks}
                    >
                        All
                    </button>
                </div>
            </div>

            <BookList books={books} getBooks={getBooks} />
        </div>
    )
}
