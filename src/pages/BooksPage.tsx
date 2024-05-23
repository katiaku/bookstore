import BookItem from "../components/BookItem";

export default function BooksPage() {
    return (
        <div className="flex flex-wrap justify-center gap-10 gap-y-20 p-20">
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
        </div>
    )
}
