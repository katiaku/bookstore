import { useEffect, useState } from "react";
import { Book } from "../config/types";
import BookList from "../components/BookList";
import useUserContext from "../hooks/useUserContext";
import { toast } from "react-toastify";
import { AiFillStar } from "react-icons/ai";

export default function BooksPage() {

    const [books, setBooks] = useState<Book[]>([]);
    const { user } = useUserContext();

    async function getBooks () {
        try {
            const resp = await fetch(`http://localhost:3000/books?id_user=${user?.id_user}`);
        
            const json = await resp.json(); 
            console.log(json)
        
            setBooks(json);
        
        } catch (error) {
            if (error instanceof Error) {
                toast.error("There was an error...", {
                    position: "bottom-right",
                    theme: "colored"
                });
                console.log(error.message);
            }
        }
    }

    useEffect(() => {
        getBooks();
    }, []);

    async function findByRating (rating: number) {
        try {
            const resp = await fetch(`http://localhost:3000/find`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id_user: user?.id_user, rating })
            });
        
            const json = await resp.json(); 
            console.log(json);
        
            setBooks(json);
        
        } catch (error) {
            if (error instanceof Error) {
                toast.error("There was an error...", {
                    position: "bottom-right",
                    theme: "colored"
                });
                console.log(error.message);
            }
        }
    }

    return (
        <div className="bg-blue-950 page-height overflow-y-scroll w-full flex flex-col items-center">
            <div className="flex gap-3 text-xs md:self-end mt-4 mr-4 lg:mt-8 lg:mr-8">
                <div className="flex gap-3 text-orange-400">
                    {[5, 4, 3, 2, 1].map((rating) => (

                            <button
                                className="flex gap-1 items-center text-slate-100 hover:text-orange-400 border-[1px] border-slate-100 hover:border-orange-400 rounded-lg px-2 transition-all ease-in-out duration-300"
                                key={rating}
                                onClick={() => findByRating(rating)}
                            >
                                <p>{rating}</p>
                                <AiFillStar/>
                            </button>

                    ))}
                </div>
                <button
                    className="text-slate-100 hover:text-orange-400 border-[1px] border-slate-100 hover:border-orange-400 rounded-lg px-2 transition-all ease-in-out duration-300"
                    onClick={getBooks}
                >
                    All
                </button>
            </div>
            <BookList books={books} getBooks={getBooks} />
        </div>
    )
}
