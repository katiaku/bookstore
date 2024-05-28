import EditProfileForm from "../components/EditProfileForm";

export default function EditProfilePage() {
    return (
        <div className="relative bg-blue-950 page-height overflow-y-scroll">
            <div className="w-full h-full overflow-hidden opacity-25">
                <img className="w-full h-full" src="../../public/img/bg-6.avif" alt="" />
            </div>
            <div className="absolute top-0 z-10 w-full h-full flex justify-center items-center">
                <EditProfileForm />
            </div>
        </div>
    )
}
