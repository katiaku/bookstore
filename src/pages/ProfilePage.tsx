import { RiEdit2Fill } from "react-icons/ri";
import useUserContext from "../hooks/useUserContext";
import Quote from "../components/Quote";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {

    const navigate = useNavigate();

    const { user } = useUserContext();

    function goToEditProfile () {
        navigate('/edit-profile');
    }

    return (
        <div className="relative bg-blue-950 page-height overflow-y-scroll flex flex-wrap justify-start">
            <div className="z-10 w-full lg:w-1/2 h-full flex flex-col justify-center items-center p-8 gap-20">

                <div className="flex flex-col gap-10 justify-center items-center">
                    <div className="flex gap-4">
                        <p className="cursor-default text-white font-poppins text-center text-2xl">Welcome, <span className="text-orange-400">{user?.firstName} {user?.lastName}</span>!</p>
                        <button onClick={goToEditProfile}>
                            <a>
                                <RiEdit2Fill className="text-base cursor-pointer text-white hover:text-orange-400 transition-all ease-in-out duration-300" />
                            </a>
                        </button>
                    </div>

                    <div className="w-[150px] h-[150px] bg-transparent rounded-full overflow-hidden">
                        <img
                            src={user?.photo || '../../public/img/blank_profile_picture.webp'}
                            alt={`Photo of ${user?.firstName} ${user?.lastName}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <Quote />
                </div>

            </div>

            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full overflow-hidden opacity-25 lg:opacity-100">
                <img
                    className="h-full w-full object-cover"
                    src="../../public/img/bg-7.avif"
                    alt=""
                />
            </div>
        </div>
    )
}
