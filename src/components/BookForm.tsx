export default function BookForm() {
    return (
        <form className="mx-4 w-full md:w-[350px] font-poppins flex flex-col p-4 text-slate-200">
            <div className="flex flex-col">
                <label htmlFor="title" className="text-sm font-semibold">
                    Title:
                </label>
                <input
                    type="text"
                    id="title"
                    placeholder="Harry Potter"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                />
                <div className="h-4"></div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="author" className="text-sm font-semibold">
                    Author:
                </label>
                <input
                    type="text"
                    id="author"
                    placeholder="J.K.Rowling"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                />
                <div className="h-4"></div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="type" className="text-sm font-semibold">
                    Book Type:
                </label>
                <input
                    type="text"
                    id="type"
                    placeholder="Hard cover"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                />
                <div className="h-4"></div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="photo" className="text-sm font-semibold">
                    Photo:
                </label>
                <input
                    type="text"
                    id="photo"
                    placeholder="https://photo.jpg"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                />
                <div className="h-4"></div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="price" className="text-sm font-semibold">
                    Price:
                </label>
                <input
                    type="number"
                    id="price"
                    placeholder="10.00"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                />
                <div className="h-4"></div>
            </div>
            
            <button className="bg-orange-400 text-white px-4 py-[.8rem] mt-4 font-bold">
                Submit Data
            </button>
        </form>
    )
}
