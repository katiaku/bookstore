import AddBookForm from "../components/forms/AddBookForm";

export default function AddBookPage() {

    return (
        <div className="relative bg-blue-950 page-height overflow-y-scroll">
            <div className="w-full lg:w-1/2 h-full overflow-hidden opacity-25 lg:opacity-100">
                <img
                    className="h-full w-full object-cover"
                    src="../../public/img/bg-6.avif"
                    alt=""
                />
            </div>

            <div className="overflow-hidden absolute top-0 z-10 w-full h-full flex justify-center items-center">
                <div className="lg:w-1/2 lg:h-full"></div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:bg-blue-950 lg:h-full">
                    <h1 className="text-white font-poppins text-center text-2xl mb-4">
                        There's no such thing as
                        <br />
                        too many <span className="text-orange-400">books</span>.
                    </h1>
                    <AddBookForm />
                </div>
            </div>
        </div>
    )
}
