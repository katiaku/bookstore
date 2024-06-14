import LoginForm from "../components/forms/LoginForm"

export default function LoginPage() {
    return (
        <div className="relative bg-blue-950 page-height overflow-y-scroll">
            <div className="w-full h-full overflow-hidden opacity-25">
                <img
                    className="h-full w-full object-cover"
                    src="../../public/img/bg-5.avif"
                    alt=""
                />
            </div>

            <div className="absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-white font-poppins text-center text-2xl mb-8">
                    We've been missing you.
                    <br />
                    Log in to your <span className="text-orange-400">BookShelve</span> account!
                </h1>
                <LoginForm />
            </div>
        </div>
    )
}
