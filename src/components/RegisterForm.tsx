// import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    photo: string,
    password: string,
    confirmPassword: string
}

export default function RegisterForm() {

    // const [formValues, setFormValues] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     photo: '',
    //     password: '',
    //     confirmPassword: ''
    // });

    // function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    //     setFormValues({ ...formValues, [event.target.name]: event.target.value });
    //     console.log(formValues);
    // }

    const { register, handleSubmit, formState, watch } = useForm<FormValues>({
        mode: "onSubmit"
    });

    const { errors } = formState;

    function onSubmit(data: FormValues) {
        console.log('submitted', data);
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
                    // value={formValues.firstName}
                    // name="firstName"
                    // onChange={handleInputChange}
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
                    // value={formValues.lastName}
                    // name="lastName"
                    // onChange={handleInputChange}
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
                    // value={formValues.email}
                    // name="email"
                    // onChange={handleInputChange}
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
                    // value={formValues.photo}
                    // name="photo"
                    // onChange={handleInputChange}
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
                    // value={formValues.password}
                    // name="password"
                    // onChange={handleInputChange}
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
                    // value={formValues.confirmPassword}
                    // name="confirmPassword"
                    // onChange={handleInputChange}
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
