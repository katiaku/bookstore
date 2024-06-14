import { BiCopy } from "react-icons/bi"; 
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Quote = {
    _id: string,
    content: string,
    author: string;
};

export default function Quote() {

    const [quotes, setQuotes] = useState<Quote[]>([]);

    async function getQuote() {
        try {
            const resp = await fetch("https://api.quotable.io/quotes/random");
            const json = await resp.json(); 
            setQuotes(json);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    function handleCopy(content: string) {
        navigator.clipboard.writeText(content).then(() => {
            toast.success("Quote copied to clipboard", {
                position: "bottom-right",
                theme: "colored"
            });
        }).catch((error) => {
            console.log(error.message);
            toast.success("Could not copy text", {
                position: "bottom-right",
                theme: "colored"
            });
        });
    }

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div className=" lg:w-1/2 cursor-default bg-transparent font-nunito text-slate-100 text-xl border-y-[1px] mx-4 px-4 py-8">
            {quotes.map(quote => 
                <div
                    key={quote._id}
                    className="flex flex-col justify-start align-center gap-4"
                >
                    <div className="flex gap-2">
                        <p>{quote.content}</p>
                        <button onClick={() => handleCopy(quote.content)}>
                            <a>
                                <BiCopy className="cursor-pointer text-white text-base hover:text-orange-400 transition-all ease-in-out duration-300" />
                            </a>
                        </button>
                    </div>
                    <a 
                        href={`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(quote.author)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="self-end italic hover:underline"
                    >
                        - {quote.author}
                    </a>
                </div>
            )}
        </div>
    )
}
