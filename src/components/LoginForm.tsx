// import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../config/schema";

type FormValues = {
    email: string,
    password: string
}

export default function LoginForm() {

    // const [formValues, setFormValues] = useState({
    //     email: '',
    //     password: ''
    // });

    // function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    //     setFormValues({ ...formValues, [event.target.name]: event.target.value });
    //     console.log(formValues);
    // }

    const { register, handleSubmit, formState } = useForm<FormValues>({
        mode: "onSubmit",
        resolver: zodResolver(loginSchema)
    });

    const { errors } = formState;

    function onSubmit(data: FormValues) {
        console.log('submitted', data);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-4 w-full md:w-[350px] font-poppins flex flex-col p-4 text-slate-200"
        >
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
                    // {...register('email', {
                    //     required: { value: true, message: 'Email is required'}
                    // })}
                    {...register('email')}
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
                <label htmlFor="password" className="text-sm font-semibold">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="12345678"
                    className={ errors.password ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
                    // value={formValues.password}
                    // name="password"
                    // onChange={handleInputChange}
                    // {...register('password', {
                    //     required: { value: true, message: 'Password is required'}
                    // })}
                    {...register('password')}
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

            <button className="bg-orange-400 text-white px-4 py-[.8rem] mt-4 font-bold">
                Log In
            </button>
        </form>
    )
}
