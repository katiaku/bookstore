import { useContext, useEffect, useState } from "react";
import { Book } from "../config/types";
import { UserContext } from "../providers/UserProvider";
import BookList from "../components/BookList";

export default function BooksPage() {

    const [books, setBooks] = useState<Book[]>([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:3000/books?id_user=${user.id_user}`)
            .then(resp => resp.json())
            .then(books => setBooks(books))
            .catch(error => console.log(error))
    }, [user.id_user]);

    return (
        <div className="bg-blue-950 page-height overflow-y-scroll w-full">
            {/* <div className="flex flex-wrap justify-center gap-14 gap-y-20 py-20 px-4 md:px-20 w-full">
                {books.map((book) => (
                    <BookItem book={book} key={book.id_book} />
                ))}
            </div> */}
            <BookList />
        </div>
    )
}
