import BookForm from "../components/BookForm";

export default function AddBookPage() {
    return (
        <div className="relative bg-blue-950 page-height overflow-y-scroll">
            <div className="w-full h-full overflow-hidden opacity-25">
                <img className="w-full" src="../../public/img/bg-6.avif" alt="" />
            </div>
            <div className="absolute top-0 z-10 w-full h-full flex justify-center items-center">
                <BookForm />
            </div>
        </div>
    )
}
