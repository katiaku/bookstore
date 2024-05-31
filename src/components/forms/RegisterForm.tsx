import { useForm } from "react-hook-form";
import { User } from "../../config/types";

type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    photo: string,
    password: string,
    confirmPassword: string
}

export default function RegisterForm() {

    const { register, handleSubmit, formState, watch, reset } = useForm<FormValues>({
        mode: "onSubmit"
    });

    const { errors } = formState;

    let newUser: User | null = null;

    function onSubmit(data: FormValues) {
        console.log('submitted', data);

        newUser = data;
        handleSubmitUser(newUser);
        reset();
    }

    function handleSubmitUser(submitData: User) {

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(submitData),
            headers: {
                'Content-type': 'application/json'
            }
        };

        fetch('http://localhost:3000/register', requestOptions)
            .then(resp => {
                if (resp.ok) console.log('User registered successfully');
                return resp.json();
            })
            .then(data => console.log(data))
            .catch(error => {
                console.log('There was an error...', error)
            });
    }

    const password = watch('password');

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-4 w-full md:w-[350px] font-poppins flex flex-col p-4 text-slate-200"
        >
            <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-semibold">
                    First Name:
                </label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className={ errors.firstName ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
                    {...register('firstName', {
                        required: { value: true, message: 'First name is required'}
                    })}
                />
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
                <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className={ errors.lastName ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
                    {...register('lastName', {
                        required: { value: true, message: 'Last name is required'}
                    })}
                />
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
                <input
                    type="email"
                    id="email"
                    placeholder="email@email.com"
                    className={ errors.email ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
                    {...register('email', {
                        required: { value: true, message: 'Email is required'}
                    })}
                />
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
                    Photo:
                </label>
                <input
                    type="text"
                    id="photo"
                    placeholder="https://photo.jpg"
                    className={ errors.photo ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
                    {...register('photo', {
                        required: { value: true, message: 'Photo is required'}
                    })}
                />
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

            <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-semibold">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    minLength={8}
                    placeholder="12345678"
                    className={ errors.password ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
                    {...register('password', {
                        required: { value: true, message: 'Password is required'},
                        minLength: { value: 8, message: 'The password must be at least 8 characters long'}
                    })}
                />
                { 
                    errors.password 
                    ? 
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        { errors.password.message }
                    </div> 
                    : 
                    <div className="h-4"></div> 
                }
            </div>

            <div className="flex flex-col">
                <label htmlFor="confirmPassword" className="text-sm font-semibold">
                    Confirm Password:
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    minLength={8}
                    placeholder="12345678"
                    className={ errors.confirmPassword ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
                    {...register('confirmPassword', {
                        required: { value: true, message: 'Please confirm the password'},
                        validate: value => value === password || 'Passwords do not match'
                    })}
                />
                { 
                    errors.confirmPassword 
                    ? 
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        { errors.confirmPassword.message }
                    </div> 
                    : 
                    <div className="h-4"></div> 
                }
            </div>

            <button className="bg-orange-400 text-white px-4 py-[.8rem] mt-4 font-bold">
                Submit Data
            </button>
        </form>
    )
}
