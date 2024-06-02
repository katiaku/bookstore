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

    const { errors } = formState;

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
                <label htmlFor="title" className="text-sm font-semibold">
                    Title:
                </label>
                <input
                    type="text"
                    id="title"
                    placeholder="Harry Potter"
                    className={ errors.title ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
                    {...register('title', {
                        required: { value: true, message: 'Title is required'}
                    })}
                />
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

            <div className="flex flex-col">
                <label htmlFor="author" className="text-sm font-semibold">
                    Author:
                </label>
                <input
                    type="text"
                    id="author"
                    placeholder="J.K.Rowling"
                    className={ errors.author ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
                    {...register('author', {
                        required: { value: true, message: 'Author is required'}
                    })}
                />
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

            <div className="flex flex-col">
                <label htmlFor="type" className="text-sm font-semibold">
                    Book Type:
                </label>
                <input
                    type="text"
                    id="type"
                    placeholder="Hard cover"
                    className={ errors.type ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
                    {...register('type', {
                        required: { value: true, message: 'Book type is required'}
                    })}
                />
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
                        required: { value: true, message: 'Photo is required'},
                        pattern: {
                            value: /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i,
                            message: 'Invalid photo URL'
                        }
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
                <label htmlFor="price" className="text-sm font-semibold">
                    Price:
                </label>
                <input
                    type="number"
                    id="price"
                    placeholder="10.00"
                    step={0.01}
                    className={ errors.price ? "text-sm bg-transparent border-[1px] border-red-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-red-400" : "text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200" }
                    {...register('price', {
                        required: { value: true, message: 'Price is required'},
                        min: { value: 0.01, message: 'Please enter a positive number'}
                    })}
                />
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
            
            <button className="bg-orange-400 text-white px-4 py-[.8rem] mt-4 font-bold">
                <a className="w-full h-full" href="/books">Submit Data</a>
            </button>
        </form>
    )
}
