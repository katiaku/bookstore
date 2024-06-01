import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import { Book, BookItemProps } from "../config/types";
import { toast } from "react-toastify";

export default function BookItem(props: BookItemProps) {

    const { book } = props;

    // function handleEditBook(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //     console.log(e);
    // }

    // function handleDeleteBook(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //     console.log(e);
    // }

    function handleDeleteBook(submitData: Book) {

        const requestOptions = {
            method: 'DELETE',
            body: JSON.stringify(submitData),
            headers: {
                'Content-type': 'application/json'
            }
        };

        fetch('http://localhost:3000/books', requestOptions)
            .then(resp => {
                if (resp.ok) toast.success("Book deleted successfully", {
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
        <div className='font-poppins w-full max-w-[400px] md:w-[400px] h-[280px] relative shadow-md bg-slate-200'>
            <div className='absolute shadow-md left-[15px] -top-[15px] max-h-[280px] overflow-hidden'>
                <img
                    src={ book.photo }
                    alt={`Foto del libro ${ book.title } de ${ book.author }` }
                    width="170"
                />
            </div>

            <div className='cursor-default bg-slate-200/70 absolute right-0 md:left-[200px] w-1/2 h-full py-[15px] px-[15px] md:pr-[15px] md:pl-0 flex flex-col justify-between items-start'>
                <div>
                    <p className='font-bold text-2xl md:text-3xl text-slate-700'>{ book.title }</p>
                    <p className='my-1 text-slate-700'>{ book.author }</p>
                    <p className='text-xs italic text-slate-500'>{ book.type }</p>
                </div>

                <div className='absolute -left-[20%] md:-left-[30px] -bottom-[15px] w-[60px] h-[60px] rounded-full bg-orange-400 text-white flex justify-center items-center shadow-md'>
                    <span>{ book.price }€</span>
                </div>

                <div className='self-end flex gap-2'>
                    <button>
                        <a href="/edit-book">
                            <RiEdit2Fill className="cursor-pointer text-slate-700 hover:text-orange-400 transition-all ease-in-out duration-300" />
                        </a>
                    </button>
                    <button onClick={handleDeleteBook}>
                        <RiDeleteBin5Fill className="cursor-pointer text-slate-700 hover:text-red-700 transition-all ease-in-out duration-300" />
                    </button>
                </div>
            </div>
        </div>
    )
}
