import { BookListProps } from "../config/types";
import BookItem from "./BookItem";

export default function BookList(props: BookListProps) {

    const { books, getBooks } = props;

    return (
        <section className="flex flex-wrap justify-center gap-14 gap-y-20 pt-16 md:pt-20 pb-20 px-4 md:px-20 w-full">
            { books.map(book => <BookItem key={book.id_book} book={book} getBooks={getBooks}/>) }
        </section>
    )
}
