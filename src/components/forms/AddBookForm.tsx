import { BiCheckCircle } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useUserContext from '../../hooks/useUserContext';
import { useNavigate } from 'react-router-dom';
import FormButton from '../ui/FormButton';

type FormValues = {
    title: string;
    author: string;
    type: string;
    photo: string;
    price: number;
};

type AddBookDataType = {
    id_user?: number;
} & FormValues;

export default function AddBookForm() {
    const { user } = useUserContext();

    const navigate = useNavigate();

    const { register, handleSubmit, formState, reset } = useForm<FormValues>({
        mode: 'onChange',
    });

    const { errors, dirtyFields } = formState;

    async function onSubmit(data: FormValues) {
        const addBookData: AddBookDataType = {
            ...data,
            id_user: user?.id_user,
        };

        try {
            const resp = await fetch(
                'https://api-bookshelve.vercel.app/books',
                {
                    method: 'POST',
                    body: JSON.stringify(addBookData),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            );

            const json = await resp.json();

            if (json) {
                toast.success('Book added successfully', {
                    position: 'bottom-right',
                    theme: 'colored',
                });
                navigate('/books');
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

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-4 flex w-full flex-col p-4 font-poppins text-slate-200 md:w-[350px]"
        >
            <div className="flex flex-col">
                <label htmlFor="title" className="text-sm">
                    Title:
                </label>

                <div
                    className={`flex items-center justify-between rounded-md border-[1px] bg-transparent px-0 py-0 text-sm ${errors.title ? 'border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="text"
                        id="title"
                        placeholder="Harry Potter"
                        className="w-full bg-transparent px-2 py-2 focus:outline-none"
                        {...register('title', {
                            required: {
                                value: true,
                                message: 'Title is required',
                            },
                        })}
                    />
                    {dirtyFields.title && !errors.title && (
                        <span className="pr-2 text-lime-500">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.title ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.title.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="relative flex flex-col">
                <label htmlFor="author" className="text-sm">
                    Author:
                </label>

                <div
                    className={`flex items-center justify-between rounded-md border-[1px] bg-transparent px-0 py-0 text-sm ${errors.author ? 'border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="text"
                        id="author"
                        placeholder="J.K.Rowling"
                        className="w-full bg-transparent px-2 py-2 focus:outline-none"
                        {...register('author', {
                            required: {
                                value: true,
                                message: 'Author is required',
                            },
                        })}
                    />
                    {dirtyFields.author && !errors.author && (
                        <span className="pr-2 text-lime-500">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.author ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.author.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="relative flex flex-col">
                <label htmlFor="type" className="text-sm">
                    Book Type:
                </label>

                <div
                    className={`flex items-center justify-between rounded-md border-[1px] bg-transparent px-0 py-0 text-sm ${errors.type ? 'border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="text"
                        id="type"
                        placeholder="Hard Cover"
                        className="w-full bg-transparent px-2 py-2 focus:outline-none"
                        {...register('type', {
                            required: {
                                value: true,
                                message: 'Book type is required',
                            },
                        })}
                    />
                    {dirtyFields.type && !errors.type && (
                        <span className="pr-2 text-lime-500">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.type ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.type.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="relative flex flex-col">
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

            <div className="relative flex flex-col">
                <label htmlFor="price" className="text-sm">
                    Price:
                </label>

                <div
                    className={`flex items-center justify-between rounded-md border-[1px] bg-transparent px-0 py-0 text-sm ${errors.price ? 'border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="number"
                        id="price"
                        placeholder="10.00"
                        step={0.01}
                        className="w-full bg-transparent px-2 py-2 focus:outline-none"
                        {...register('price', {
                            required: {
                                value: true,
                                message: 'Price is required',
                            },
                        })}
                    />
                    {dirtyFields.price && !errors.price && (
                        <span className="pr-2 text-lime-500">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.price ? (
                    <div className="h-4 pt-1 text-right text-xs text-red-400">
                        {errors.price.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>
            <FormButton onClick={handleSubmit(onSubmit)} label="Submit Data" />
        </form>
    );
}
