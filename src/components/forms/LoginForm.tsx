import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../config/schema";
import { User } from "../../config/types";
import { toast } from "react-toastify";

type FormValues = {
    email: string,
    password: string
}

export default function LoginForm() {

    const { register, handleSubmit, formState, reset } = useForm<FormValues>({
        mode: "onSubmit",
        resolver: zodResolver(loginSchema)
    });

    const { errors } = formState;

    let user: User | null = null;

    function onSubmit(data: FormValues) {
        console.log('submitted', data);

        user = data;
        handleLoginUser(user);
        reset();
    }

    function handleLoginUser(submitData: User) {

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(submitData),
            headers: {
                'Content-type': 'application/json'
            }
        };

        fetch('http://localhost:3000/login', requestOptions)
            .then(resp => {
                if (resp.ok) toast.success("User logged in successfully", {
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
                <label htmlFor="email" className="text-sm font-semibold">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="email@email.com"
                    className={ errors.email ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
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
