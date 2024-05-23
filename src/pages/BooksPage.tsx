import BookItem from "../components/BookItem";
import books from "../mock/mock_data";

export default function BooksPage() {

    return (
        <div className="bg-blue-950 page-height overflow-y-scroll flex flex-wrap justify-start gap-14 gap-y-20 p-20">
            {books.map((book) => (
                <BookItem book={book} />
            ))}
        </div>
    )
}
