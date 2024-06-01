import { useEffect, useState } from "react";
import BookItem from "../components/BookItem";
import { Book } from "../config/types";
// import { UserContext } from "../providers/UserProvider";

export default function BooksPage() {

    const [books, setBooks] = useState<Book[]>([]);

    const id_user = 2;
    // const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:3000/books?id_user=${id_user}`)
            .then(resp => resp.json())
            .then(books => setBooks(books))
            .catch(error => console.log(error))
    }, [id_user]);

    return (
        <div className="bg-blue-950 page-height overflow-y-scroll w-full">
            <div className="flex flex-wrap justify-center gap-14 gap-y-20 py-20 px-4 md:px-20 w-full">
                {books.map((book) => (
                    <BookItem book={book} key={book.id_book} />
                ))}
            </div>
        </div>
    )
}
