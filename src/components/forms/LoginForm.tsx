import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../config/schema';
import { toast } from 'react-toastify';
import useUserContext from '../../hooks/useUserContext';
import { useNavigate } from 'react-router-dom';
import FormButton from '../ui/FormButton';

type FormValues = {
    email: string;
    password: string;
};

export default function LoginForm() {
    const navigate = useNavigate();

    const { login } = useUserContext();

    const { register, handleSubmit, formState, reset } = useForm<FormValues>({
        mode: 'onChange',
        resolver: zodResolver(loginSchema),
    });

    const { errors } = formState;

    async function onSubmit(data: FormValues) {
        try {
            const resp = await fetch(
                'https://api-bookshelve.vercel.app/login',
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            );

            const json = await resp.json();

            if (json)
                toast.success('User logged in successfully', {
                    position: 'bottom-right',
                    theme: 'colored',
                });

            login(json);
            navigate('/profile');
        } catch (error) {
            if (error instanceof Error) {
                toast.error('There was an error...', {
                    position: 'bottom-right',
                    theme: 'colored',
                });
                console.log(error);
            }
            reset();
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-4 flex w-full flex-col p-4 font-poppins text-slate-200 md:w-[350px]"
        >
            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="email@email.com"
                    className={`rounded-md border-[1px] bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-1 ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-slate-200'}`}
                    {...register('email')}
                />
                {errors.email ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.email.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="text-sm">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="12345678"
                    className={
                        errors.password
                            ? 'rounded-md border-[1px] border-red-400 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400'
                            : 'rounded-md border-[1px] border-slate-200 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-200'
                    }
                    {...register('password')}
                />
                {errors.password ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.password.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>
            <FormButton onClick={handleSubmit(onSubmit)} label="Log In" />
        </form>
    );
}
