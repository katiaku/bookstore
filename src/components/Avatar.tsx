import { AvatarProps } from "../config/types";

export default function Avatar({ user }: AvatarProps) {

    return (
        <div className="flex flex-col items-center mx-2">
            <div className="border border-white size-10 rounded-full overflow-hidden">
                <img className="size-full object-cover" src={user.photo || '/img/avatar-placeholder.webp'} alt={`Photo of ${user?.firstName} ${user?.lastName}`} />
            </div>
        </div>
    )
}
