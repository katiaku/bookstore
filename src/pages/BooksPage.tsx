import { useEffect, useState } from "react";
import BookItem from "../components/BookItem";
import { Book } from "../config/types";
// import books from "../mock/mock_data";

export default function BooksPage() {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/books?id_user=2')
            .then(resp => resp.json())
            .then(books => setBooks(books))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="bg-blue-950 page-height overflow-y-scroll">
            <div className="flex flex-wrap justify-start gap-14 gap-y-20 py-20 px-4 md:px-20">
                {books.map((book) => (
                    <BookItem book={book} key={book.id_book} />
                ))}
            </div>
        </div>
    )
}
