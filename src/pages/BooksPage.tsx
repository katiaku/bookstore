import BookItem from "../components/BookItem";

export default function BooksPage() {
    return (
        <div className="bg-blue-950 page-height overflow-y-scroll flex flex-wrap justify-start gap-14 gap-y-20 px-20 pt-20 pb-10">
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <div className="bg-blue-950 w-full h-100"></div>
        </div>
    )
}
