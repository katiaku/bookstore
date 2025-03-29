import { BiCheckCircle } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
    password: string;
    confirmPassword: string;
};

export default function RegisterForm() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState, watch, reset } =
        useForm<FormValues>({
            mode: 'onChange',
        });

    const { errors, dirtyFields } = formState;

    function goToLogin() {
        setTimeout(() => {
            navigate('/login');
        }, 600);
    }

    async function onSubmit(data: FormValues) {
        try {
            const resp = await fetch(
                'https://api-bookshelve.vercel.app/register',
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            );

            const json = await resp.json();

            if (json) {
                toast.success('User registered successfully', {
                    position: 'bottom-right',
                    theme: 'colored',
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                toast.error('There was an error...', {
                    position: 'bottom-right',
                    theme: 'colored',
                });
                console.log(error);
            }
        }
        reset();
    }

    const password = watch('password');

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-4 flex w-full flex-col p-4 font-poppins text-slate-200 md:w-[350px]"
        >
            <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm">
                    First Name:
                </label>

                <div
                    className={`flex items-center justify-between rounded-md border-[1px] bg-transparent px-0 py-0 text-sm ${errors.firstName ? 'border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="text"
                        id="firstName"
                        placeholder="John"
                        className="w-full bg-transparent px-2 py-2 focus:outline-none"
                        {...register('firstName', {
                            required: {
                                value: true,
                                message: 'First name is required',
                            },
                        })}
                    />
                    {dirtyFields.firstName && !errors.firstName && (
                        <span className="pr-2 text-lime-500">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.firstName ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.firstName.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm">
                    Last Name:
                </label>

                <div
                    className={`flex items-center justify-between rounded-md border-[1px] bg-transparent px-0 py-0 text-sm ${errors.lastName ? 'border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Doe"
                        className="w-full bg-transparent px-2 py-2 focus:outline-none"
                        {...register('lastName', {
                            required: {
                                value: true,
                                message: 'Last name is required',
                            },
                        })}
                    />
                    {dirtyFields.lastName && !errors.lastName && (
                        <span className="pr-2 text-lime-500">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.lastName ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.lastName.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm">
                    Email:
                </label>

                <div
                    className={`flex items-center justify-between rounded-md border-[1px] bg-transparent px-0 py-0 text-sm ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="email"
                        id="email"
                        placeholder="email@email.com"
                        className="w-full bg-transparent px-2 py-2 focus:outline-none"
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                        })}
                    />
                    {dirtyFields.email && !errors.email && (
                        <span className="pr-2 text-lime-500">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.email ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.email.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="photo" className="text-sm">
                    Photo URL:
                </label>

                <div
                    className={`flex items-center justify-between rounded-md border-[1px] bg-transparent px-0 py-0 text-sm ${errors.photo ? 'border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="text"
                        id="photo"
                        placeholder="https://photo.jpg"
                        className="w-full bg-transparent px-2 py-2 focus:outline-none"
                        {...register('photo', {
                            required: {
                                value: true,
                                message: 'Photo URL is required',
                            },
                        })}
                    />
                    {dirtyFields.photo && !errors.photo && (
                        <span className="pr-2 text-lime-500">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.photo ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.photo.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="text-sm">
                    Password:
                </label>

                <div
                    className={`flex items-center justify-between rounded-md border-[1px] bg-transparent px-0 py-0 text-sm ${errors.password ? 'border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="password"
                        id="password"
                        minLength={8}
                        placeholder="12345678"
                        className="w-full bg-transparent px-2 py-2 focus:outline-none"
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Password is required',
                            },
                            minLength: {
                                value: 8,
                                message:
                                    'The password must be at least 8 characters long',
                            },
                        })}
                    />
                    {dirtyFields.password && !errors.password && (
                        <span className="pr-2 text-lime-500">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.password ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.password.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="confirmPassword" className="text-sm">
                    Confirm Password:
                </label>

                <div
                    className={`flex items-center justify-between rounded-md border-[1px] bg-transparent px-0 py-0 text-sm ${errors.confirmPassword ? 'border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="password"
                        id="confirmPassword"
                        minLength={8}
                        placeholder="12345678"
                        className="w-full bg-transparent px-2 py-2 focus:outline-none"
                        {...register('confirmPassword', {
                            required: {
                                value: true,
                                message: 'Please confirm the password',
                            },
                            validate: value =>
                                value === password || 'Passwords do not match',
                        })}
                    />
                    {dirtyFields.confirmPassword && !errors.confirmPassword && (
                        <span className="pr-2 text-lime-500">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.confirmPassword ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.confirmPassword.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <button
                className="mt-4 rounded-full bg-orange-400 px-4 py-[.6rem] font-semibold text-blue-950"
                onClick={goToLogin}
            >
                Submit Data
            </button>
        </form>
    );
}
