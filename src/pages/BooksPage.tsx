import BookItem from "../components/BookItem";

export default function BooksPage() {
    return (
        <div className="bg-blue-950 page-height overflow-y-scroll flex flex-wrap justify-start gap-14 gap-y-20 p-20">
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
        </div>
    )
}
