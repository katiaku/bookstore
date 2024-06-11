import { BiCheckCircle } from "react-icons/bi"; 
import { useForm } from "react-hook-form";
import { User } from "../../config/types";
import { toast } from "react-toastify";

type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    photo: string,
}

export default function EditProfileForm() {

    const { register, handleSubmit, formState, reset } = useForm<FormValues>({
        mode: "onSubmit"
    });

    const { errors, dirtyFields } = formState;

    let updatedUser: User | null = null;

    function onSubmit(data: FormValues) {
        console.log('submitted', data);

        updatedUser = data;
        handleUpdateUser(updatedUser);
        reset();
    }

    function handleUpdateUser(submitData: User) {

        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(submitData),
            headers: {
                'Content-type': 'application/json'
            }
        };

        fetch('http://localhost:3000/users', requestOptions)
            .then(resp => {
                if (resp.ok) toast.success("User profile updated successfully", {
                    position: "bottom-right",
                    theme: "colored"
                });
                return resp.json();
            })
            .then(data => console.log(data))
            .catch(error => {
                toast.error("There was an error...", {
                    position: "bottom-right",
                    theme: "colored"
                });
                console.log(error);
            });
    }
    
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-4 w-full md:w-[350px] font-poppins flex flex-col p-4 text-slate-200"
        >
            <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-semibold">
                    First Name:
                </label>

                <div className={
                        errors.firstName 
                        ?
                        "flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
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
                <label htmlFor="lastName" className="text-sm font-semibold">
                    Last Name:
                </label>

                <div className={
                        errors.lastName 
                        ?
                        "flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
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
                <label htmlFor="email" className="text-sm font-semibold">
                    Email:
                </label>

                <div className={
                        errors.email 
                        ?
                        "flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
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
                <label htmlFor="photo" className="text-sm font-semibold">
                    Photo URL:
                </label>

                <div className={
                        errors.photo 
                        ?
                        "flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
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

            <button className="bg-orange-400 text-blue-950 px-4 py-[.6rem] mt-4 font-bold">
                Submit Data
            </button>
        </form>
    )
}
