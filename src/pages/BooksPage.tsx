import BookItem from "../components/BookItem";
import books from "../mock/mock_data";

export default function BooksPage() {

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
