import { BiCheckCircle } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { Book } from "../../config/types";
import { toast } from "react-toastify";

type FormValues = {
    title: string,
    author: string,
    type: string,
    photo: string,
    price: number
}

export default function EditBookForm() {

    const { register, handleSubmit, formState, reset } = useForm<FormValues>({
        mode: "onSubmit"
    });

    const { errors, dirtyFields } = formState;

    let updatedBook: Book | null = null;

    function onSubmit(data: FormValues) {
        console.log('submitted', data);

        updatedBook = data;
        handleUpdateBook(updatedBook);
        reset();
    }

    function handleUpdateBook(submitData: Book) {

        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(submitData),
            headers: {
                'Content-type': 'application/json'
            }
        };

        fetch('http://localhost:3000/books', requestOptions)
            .then(resp => {
                if (resp.ok) toast.success("Book updated successfully", {
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
                <label htmlFor="title" className="text-sm">
                    Title:
                </label>

                <div className={
                        errors.title 
                        ?
                        "rounded-md flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "rounded-md flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
                    }
                >
                    <input
                        type="text"
                        id="title"
                        placeholder="Harry Potter"
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('title', {
                            required: { value: true, message: 'Title is required'}
                        })}
                    />
                    { dirtyFields.title && !errors.title && <span className="text-lime-500 pr-2"><BiCheckCircle /></span> }
                </div>
                { 
                    errors.title 
                    ? 
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        { errors.title.message }
                    </div> 
                    : 
                    <div className="h-4"></div> 
                }
            </div>

            <div className="flex flex-col relative">
                <label htmlFor="author" className="text-sm">
                    Author:
                </label>
                
                <div className={
                        errors.author 
                        ?
                        "rounded-md flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "rounded-md flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
                    }
                >
                    <input
                        type="text"
                        id="author"
                        placeholder="J.K.Rowling"
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('author', {
                            required: { value: true, message: 'Author is required'}
                        })}
                    />
                    { dirtyFields.author && !errors.author && <span className="text-lime-500 pr-2"><BiCheckCircle /></span> }
                </div>
                { 
                    errors.author 
                    ? 
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        { errors.author.message }
                    </div> 
                    : 
                    <div className="h-4"></div> 
                }
            </div>

            <div className="flex flex-col relative">
                <label htmlFor="type" className="text-sm">
                    Book Type:
                </label>
                
                <div className={
                        errors.type 
                        ?
                        "rounded-md flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "rounded-md flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
                    }
                >
                    <input
                        type="text"
                        id="type"
                        placeholder="Hard Cover"
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('type', {
                            required: { value: true, message: 'Book type is required'}
                        })}
                    />
                    { dirtyFields.type && !errors.type && <span className="text-lime-500 pr-2"><BiCheckCircle /></span> }
                </div>
                { 
                    errors.type 
                    ? 
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        { errors.type.message }
                    </div> 
                    : 
                    <div className="h-4"></div> 
                }
            </div>

            <div className="flex flex-col relative">
                <label htmlFor="photo" className="text-sm">
                    Photo URL:
                </label>
                
                <div className={
                        errors.photo 
                        ?
                        "rounded-md flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "rounded-md flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
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

            <div className="flex flex-col relative">
                <label htmlFor="price" className="text-sm">
                    Price:
                </label>

                <div className={
                        errors.price 
                        ?
                        "rounded-md flex items-center justify-between border-[1px] border-red-400 py-0 px-0 text-sm bg-transparent"
                        :
                        "rounded-md flex items-center justify-between border-[1px] border-slate-200 py-0 px-0 text-sm bg-transparent"
                    }
                >
                    <input
                        type="number"
                        id="price"
                        placeholder="10.00"
                        step={0.01}
                        className="w-full py-2 px-2 focus:outline-none bg-transparent"
                        {...register('price', {
                            required: { value: true, message: 'Price is required'}
                        })}
                    />
                    { dirtyFields.price && !errors.price && <span className="text-lime-500 pr-2"><BiCheckCircle /></span> }
                </div>
                { 
                    errors.price 
                    ? 
                    <div className="h-4 text-red-400 text-xs text-right pt-1">
                        { errors.price.message }
                    </div> 
                    : 
                    <div className="h-4"></div> 
                }
            </div>
            
            <button className="rounded-full bg-orange-400 text-blue-950 px-4 py-[.6rem] mt-4 font-semibold">
                <a className="w-full h-full" href="/books">Submit Data</a>
            </button>
        </form>
    )
}
