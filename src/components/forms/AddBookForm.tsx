import { BiCheckCircle } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import useUserContext from '../../hooks/useUserContext'
import { useNavigate } from 'react-router-dom'

type FormValues = {
    title: string
    author: string
    type: string
    photo: string
    price: number
}

type AddBookDataType = {
    id_user?: number
} & FormValues

export default function AddBookForm() {
    const { user } = useUserContext()

    const navigate = useNavigate()

    const { register, handleSubmit, formState, reset } = useForm<FormValues>({
        mode: 'onChange',
    })

    const { errors, dirtyFields } = formState

    async function onSubmit(data: FormValues) {
        const addBookData: AddBookDataType = {
            ...data,
            id_user: user?.id_user,
        }

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
            )

            const json = await resp.json()

            if (json) {
                toast.success('Book added successfully', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
                navigate('/books')
            }
        } catch (error) {
            if (error instanceof Error) {
                toast.error('There was an error...', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
                console.log(error)
            }
        }

        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-4 w-full md:w-[350px] font-poppins flex flex-col p-4 text-slate-200"
        >
            <div className="flex flex-col">
                <label htmlFor="title" className="text-sm">
                    Title:
                </label>

                <div
                    className={`rounded-md flex items-center justify-between border-[1px] py-0 px-0 text-sm bg-transparent ${errors.title ? ' border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="text"
                        id="title"
                        placeholder="Harry Potter"
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('title', {
                            required: {
                                value: true,
                                message: 'Title is required',
                            },
                        })}
                    />
                    {dirtyFields.title && !errors.title && (
                        <span className="text-lime-500 pr-2">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.title ? (
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        {errors.title.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="flex flex-col relative">
                <label htmlFor="author" className="text-sm">
                    Author:
                </label>

                <div
                    className={`rounded-md flex items-center justify-between border-[1px] py-0 px-0 text-sm bg-transparent ${errors.author ? ' border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="text"
                        id="author"
                        placeholder="J.K.Rowling"
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('author', {
                            required: {
                                value: true,
                                message: 'Author is required',
                            },
                        })}
                    />
                    {dirtyFields.author && !errors.author && (
                        <span className="text-lime-500 pr-2">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.author ? (
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        {errors.author.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="flex flex-col relative">
                <label htmlFor="type" className="text-sm">
                    Book Type:
                </label>

                <div
                    className={`rounded-md flex items-center justify-between border-[1px] py-0 px-0 text-sm bg-transparent ${errors.type ? ' border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="text"
                        id="type"
                        placeholder="Hard Cover"
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('type', {
                            required: {
                                value: true,
                                message: 'Book type is required',
                            },
                        })}
                    />
                    {dirtyFields.type && !errors.type && (
                        <span className="text-lime-500 pr-2">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.type ? (
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        {errors.type.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="flex flex-col relative">
                <label htmlFor="photo" className="text-sm">
                    Photo URL:
                </label>

                <div
                    className={`rounded-md flex items-center justify-between border-[1px] py-0 px-0 text-sm bg-transparent ${errors.photo ? ' border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="text"
                        id="photo"
                        placeholder="https://photo.jpg"
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('photo', {
                            required: {
                                value: true,
                                message: 'Photo URL is required',
                            },
                        })}
                    />
                    {dirtyFields.photo && !errors.photo && (
                        <span className="text-lime-500 pr-2">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.photo ? (
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        {errors.photo.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <div className="flex flex-col relative">
                <label htmlFor="price" className="text-sm">
                    Price:
                </label>

                <div
                    className={`rounded-md flex items-center justify-between border-[1px] py-0 px-0 text-sm bg-transparent ${errors.price ? ' border-red-400' : 'border-slate-200'}`}
                >
                    <input
                        type="number"
                        id="price"
                        placeholder="10.00"
                        step={0.01}
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('price', {
                            required: {
                                value: true,
                                message: 'Price is required',
                            },
                        })}
                    />
                    {dirtyFields.price && !errors.price && (
                        <span className="text-lime-500 pr-2">
                            <BiCheckCircle />
                        </span>
                    )}
                </div>
                {errors.price ? (
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        {errors.price.message}
                    </div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>

            <button className="rounded-full bg-orange-400 text-blue-950 px-4 py-[.6rem] mt-4 font-semibold">
                Submit Data
            </button>
        </form>
    )
}
