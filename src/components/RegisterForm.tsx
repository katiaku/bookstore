export default function RegisterForm() {
    return (
        <form className="mx-4 w-full md:w-[350px] font-poppins flex flex-col p-4 text-slate-200">
            <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="John"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                />
                <div className="h-4"></div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="surname" className="text-sm font-semibold">
                    Surname:
                </label>
                <input
                    type="text"
                    id="surname"
                    placeholder="Doe"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                />
                <div className="h-4"></div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="email@email.com"
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
                <label htmlFor="password" className="text-sm font-semibold">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="12345678"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                />
                <div className="h-4"></div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="confirmPassword" className="text-sm font-semibold">
                    Confirm Password:
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="12345678"
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
