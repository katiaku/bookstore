import { BookListProps } from '../config/types';
import BookItem from './BookItem';

export default function BookList(props: BookListProps) {
    const { books, getBooks } = props;

    return (
        <section className="flex w-full flex-wrap justify-center gap-14 gap-y-20 px-4 pb-20 pt-16 md:justify-start md:px-20 md:pt-20">
            {books.map(book => (
                <BookItem key={book.id_book} book={book} getBooks={getBooks} />
            ))}
        </section>
    );
}
