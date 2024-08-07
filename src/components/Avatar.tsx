import { useNavigate } from 'react-router-dom'
import { AvatarProps } from '../config/types'
import blankProfilePicture from '../../public/img/blank_profile_picture.webp'

export default function Avatar({ user }: AvatarProps) {
    const navigate = useNavigate()

    function goToProfile() {
        navigate('/profile')
    }

    return (
        <div
            className="flex flex-col items-center ml-auto mr-4 md:mr-2 lg:mr-4 cursor-pointer"
            onClick={goToProfile}
        >
            <div className="border border-white size-10 rounded-full overflow-hidden">
                <img
                    className="size-full object-cover"
                    src={user.photo || blankProfilePicture}
                    alt={`Photo of ${user?.firstName} ${user?.lastName}`}
                />
            </div>
        </div>
    )
}
