import { BiCheckCircle } from "react-icons/bi"; 
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useUserContext from "../../hooks/useUserContext";
import { User } from "../../config/types";
import { useNavigate } from "react-router-dom";

type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    photo: string,
}

export default function EditProfileForm() {

    const navigate = useNavigate();

    const { user, login } = useUserContext();

    const { register, handleSubmit, formState, reset } = useForm<FormValues>({
        mode: "onChange"
    });

    const { errors, dirtyFields } = formState;

    function goToProfile() {
        setTimeout(() => {
            navigate('/profile');
        }, 600);
    }

    async function onSubmit(data: FormValues) {
        const updatedUser: User = { ...data };

        if (user) updatedUser.id_user = user.id_user;
        
        try {
            const resp = await fetch('http://localhost:3000/users', {
                method: 'PUT',
                body: JSON.stringify(updatedUser),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        
            const json = await resp.json();
        
            if (json) {
                toast.success("User profile updated successfully", {
                    position: "bottom-right",
                    theme: "colored"
                });
                login(updatedUser);
            }
            } catch (error) {
            if (error instanceof Error) {
                toast.error("There was an error...", {
                    position: "bottom-right",
                    theme: "colored"
                });
                console.log(error);
            }
        }
        reset();
    }
    
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-4 w-full md:w-[350px] font-poppins flex flex-col p-4 text-slate-200"
        >
            <div className="flex flex-col">
                <label
                    htmlFor="firstName"
                    className="text-sm"
                >
                    First Name:
                </label>

                <div className={
                        errors.firstName 
                        ?
                        "rounded-md flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "rounded-md flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
                    }
                >
                    <input
                        type="text"
                        id="firstName"
                        placeholder="John"
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('firstName', {
                            required: { value: true, message: 'First name is required'}
                        })}
                    />
                    { dirtyFields.firstName && !errors.firstName && <span className="text-lime-500 pr-2"><BiCheckCircle /></span> }
                </div>
                { 
                    errors.firstName 
                    ? 
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        { errors.firstName.message }
                    </div> 
                    : 
                    <div className="h-4"></div> 
                }
            </div>

            <div className="flex flex-col">
                <label
                    htmlFor="lastName"
                    className="text-sm"
                >
                    Last Name:
                </label>

                <div className={
                        errors.lastName 
                        ?
                        "rounded-md flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "rounded-md flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
                    }
                >
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Doe"
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('lastName', {
                            required: { value: true, message: 'Last name is required'}
                        })}
                    />
                    { dirtyFields.lastName && !errors.lastName && <span className="text-lime-500 pr-2"><BiCheckCircle /></span> }
                </div>
                { 
                    errors.lastName 
                    ? 
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        { errors.lastName.message }
                    </div> 
                    : 
                    <div className="h-4"></div> 
                }
            </div>

            <div className="flex flex-col">
                <label
                    htmlFor="email"
                    className="text-sm"
                >
                    Email:
                </label>

                <div className={
                        errors.email 
                        ?
                        "rounded-md flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "rounded-md flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
                    }
                >
                    <input
                        type="email"
                        id="email"
                        placeholder="email@email.com"
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('email', {
                            required: { value: true, message: 'Email is required'}
                        })}
                    />
                    { dirtyFields.email && !errors.email && <span className="text-lime-500 pr-2"><BiCheckCircle /></span> }
                </div>
                { 
                    errors.email 
                    ? 
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        { errors.email.message }
                    </div> 
                    : 
                    <div className="h-4"></div> 
                }
            </div>

            <div className="flex flex-col">
                <label
                    htmlFor="photo"
                    className="text-sm"
                >
                    Photo URL:
                </label>

                <div className={
                        errors.photo 
                        ?
                        "rounded-md flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "rounded-md flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
                    }
                >
                    <input
                        type="text"
                        id="photo"
                        placeholder="https://photo.jpg"
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('photo', {
                            required: { value: true, message: 'Photo URL is required'}
                        })}
                    />
                    { dirtyFields.photo && !errors.photo && <span className="text-lime-500 pr-2"><BiCheckCircle /></span> }
                </div>
                { 
                    errors.photo 
                    ? 
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        { errors.photo.message }
                    </div> 
                    : 
                    <div className="h-4"></div> 
                }
            </div>

            <button
                className="rounded-full bg-orange-400 text-blue-950 px-4 py-[.6rem] mt-4 font-semibold"
                onClick={goToProfile}
            >
                Submit Data
            </button>
        </form>
    )
}
