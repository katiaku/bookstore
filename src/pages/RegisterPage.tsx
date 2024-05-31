import RegisterForm from "../components/forms/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="relative bg-blue-950 page-height overflow-y-scroll">
            <div className="w-full h-full overflow-hidden opacity-25 lg:opacity-100">
                <img className="h-full w-full object-cover" src="../../public/img/bg-5.avif" alt="" />
            </div>
    
            <div className="overflow-hidden absolute top-0 z-10 w-full h-full flex justify-center items-center">
                <div className="lg:w-1/2 lg:h-full"></div>
                <div className="w-full lg:w-1/2 flex justify-center items-center lg:bg-blue-950 lg:h-full">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}
