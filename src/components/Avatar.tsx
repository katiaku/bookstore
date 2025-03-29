import { useNavigate } from 'react-router-dom';
import { AvatarProps } from '../config/types';
import blankProfilePicture from '../../public/img/blank_profile_picture.webp';

export default function Avatar({ user }: AvatarProps) {
    const navigate = useNavigate();

    function goToProfile() {
        navigate('/profile');
    }

    return (
        <div
            className="ml-auto mr-4 flex cursor-pointer flex-col items-center md:mr-2 lg:mr-4"
            onClick={goToProfile}
        >
            <div className="size-10 overflow-hidden rounded-full border border-white">
                <img
                    className="size-full object-cover"
                    src={user.photo || blankProfilePicture}
                    alt={`Photo of ${user?.firstName} ${user?.lastName}`}
                />
            </div>
        </div>
    );
}
