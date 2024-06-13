import { useEffect, useState } from "react";

type Quote = {
    _id: string,
    content: string,
    author: string;
};

export default function Quote() {

    const [quotes, setQuotes] = useState<Quote[]>([]);

    async function getQuote () {
        try {
            const resp = await fetch("https://api.quotable.io/quotes/random");
        
            const json = await resp.json(); 
            console.log(json)
        
            setQuotes(json);
        
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div className="bg-transparent font-nunito text-slate-100 text-xl border-y-[1px] mx-4 px-4 py-8">
            {quotes.map(quote => 
                <div
                    key={quote._id}
                    className="flex flex-col justify-start align-center gap-4"
                >
                    <p>{quote.content}</p>
                    <p className="self-end italic">- {quote.author}</p>
                </div>
            )}
        </div>
    )
}
