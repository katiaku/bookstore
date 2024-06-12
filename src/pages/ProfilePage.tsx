import { RiEdit2Fill } from "react-icons/ri";
import EditProfileForm from "../components/forms/EditProfileForm";

export default function ProfilePage() {
    return (
        <div className="bg-blue-950 page-height overflow-y-scroll flex flex-wrap justify-start">
            <div className="w-full h-full overflow-hidden opacity-25">
                <img
                    className="h-full w-full object-cover"
                    src="../../public/img/bg-7.avif"
                    alt=""
                />
            </div>

            <div className="absolute top-0 z-10 w-full h-full flex flex-col lg:flex-row justify-center items-center gap-20">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <p className="cursor-default text-white font-poppins text-center text-2xl">Welcome, <span className="text-orange-400">User</span>!</p>
                    <p className="cursor-default text-white font-poppins text-center text-xl mb-4">You have books.</p>
                    <div className="w-[150px] h-[150px] bg-white rounded-full">
                        <img src="" alt="" />
                    </div>
                    <button className="">
                        <a>
                            <RiEdit2Fill className="cursor-pointer text-white hover:text-orange-400 transition-all ease-in-out duration-300" />
                        </a>
                    </button>
                </div>
                <EditProfileForm />
            </div>
        </div>
    )
}
