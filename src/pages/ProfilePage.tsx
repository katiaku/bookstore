import EditProfileForm from "../components/forms/EditProfileForm";

export default function ProfilePage() {
    return (
        <div className="bg-blue-950 page-height overflow-y-scroll flex flex-wrap justify-start">
            <div className="w-full h-full overflow-hidden opacity-25">
                <img className="h-full w-full object-cover" src="../../public/img/bg-7.avif" alt="" />
            </div>
            <div className="absolute top-0 z-10 w-full h-full flex justify-center items-center">
                <EditProfileForm />
            </div>
        </div>
    )
}
