import { RiEdit2Fill } from 'react-icons/ri';
import useUserContext from '../hooks/useUserContext';
import Quote from '../components/Quote';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../public/img/bg-7.avif';
import blankProfilePicture from '../../public/img/blank_profile_picture.webp';

export default function ProfilePage() {
    const navigate = useNavigate();

    const { user } = useUserContext();

    function goToEditProfile() {
        navigate('/edit-profile');
    }

    return (
        <div className="page-height relative flex flex-wrap justify-start overflow-y-scroll bg-blue-950">
            <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-20 p-8 lg:w-1/2">
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex gap-4">
                        <p className="cursor-default text-center font-poppins text-2xl text-white">
                            Welcome,{' '}
                            <span className="text-orange-400">
                                {user?.firstName} {user?.lastName}
                            </span>
                            !
                        </p>
                        <button onClick={goToEditProfile}>
                            <a>
                                <RiEdit2Fill className="cursor-pointer text-base text-white transition-all duration-300 ease-in-out hover:text-orange-400" />
                            </a>
                        </button>
                    </div>

                    <div className="h-[150px] w-[150px] overflow-hidden rounded-full bg-transparent">
                        <img
                            src={user?.photo || blankProfilePicture}
                            alt={`Photo of ${user?.firstName} ${user?.lastName}`}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <Quote />
                </div>
            </div>

            <div className="absolute right-0 top-0 h-full w-full overflow-hidden opacity-25 lg:w-1/2 lg:opacity-100">
                <img
                    className="h-full w-full object-cover"
                    src={bgImage}
                    alt=""
                />
            </div>
        </div>
    );
}
