import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../config/schema";
import { toast } from "react-toastify";
import useUserContext from "../../hooks/useUserContext";

type FormValues = {
    email: string,
    password: string
}

export default function LoginForm() {

    const { login } = useUserContext();

    const { register, handleSubmit, formState, reset } = useForm<FormValues>({
        mode: "onChange",
        resolver: zodResolver(loginSchema)
    });

    const { errors } = formState;

    async function onSubmit(data: FormValues) {
        try {
            const resp = await fetch('http://localhost:3000/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            
            const json = await resp.json();
        
            if (json.code === 200) toast.success("User logged in successfully", {
                position: "bottom-right",
                theme: "colored"
            });
        
            login(json.result);
        
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
                    htmlFor="email"
                    className="text-sm font-semibold"
                >
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="email@email.com"
                    className={
                        errors.email
                        ?
                        "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400"
                        :
                        "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                    }
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
                <label 
                    htmlFor="password" 
                    className="text-sm font-semibold"
                >
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="12345678"
                    className={
                        errors.password
                        ?
                        "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400"
                        :
                        "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                    }
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

            <button className="bg-orange-400 text-blue-950 px-4 py-[.6rem] mt-4 font-bold">
                Log In
            </button>
        </form>
    )
}
