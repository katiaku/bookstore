import { useEffect, useState } from "react";
import { Book } from "../config/types";
import BookList from "../components/BookList";
import useUserContext from "../hooks/useUserContext";
import { toast } from "react-toastify";

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

    return (
        <div className="bg-blue-950 page-height overflow-y-scroll w-full">
            <BookList books={books} getBooks={getBooks} />
        </div>
    )
}
