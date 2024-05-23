import BookItem from "../components/BookItem";
import { Book } from "../config/types";

export default function BooksPage() {

    const book1: Book = {
        id_book: 1,
        id_user: 1,
        title: "El Perfume",
        author: "Patrick Suskind",
        photo: "https://imagessl2.casadellibro.com/a/l/s7/32/9788432228032.webp",
        price: 19.9,
        type: "Tapa dura"
    }

    return (
        <div className="bg-blue-950 page-height overflow-y-scroll flex flex-wrap justify-start gap-14 gap-y-20 p-20">
            <BookItem book={ book1 } />
            {/* <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem /> */}
        </div>
    )
}
