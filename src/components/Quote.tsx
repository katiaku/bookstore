import { BiCopy } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type Quote = {
    // _id: string;
    quote: string;
    author: string;
};

export default function Quote() {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    async function getQuote() {
        try {
            // const resp = await fetch('http://api.quotable.io/quotes/random'); <--- deprecated since 2024 (https certificate issue)
            const resp = await fetch(
                'https://api.breakingbadquotes.xyz/v1/quotes'
            );
            const json = await resp.json();
            setQuotes(json);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    function handleCopy(content: string) {
        navigator.clipboard
            .writeText(content)
            .then(() => {
                toast.success('Quote copied to clipboard', {
                    position: 'bottom-right',
                    theme: 'colored',
                });
            })
            .catch(error => {
                console.log(error.message);
                toast.success('Could not copy text', {
                    position: 'bottom-right',
                    theme: 'colored',
                });
            });
    }

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div className="max-width-[100px] mx-4 cursor-default bg-transparent px-4 py-6 font-nunito text-base text-slate-100">
            {/* {quotes.map(quote => ( */}
            <div
                // key={quote._id}
                className="align-center max-width-[100px] flex flex-col justify-start gap-4"
            >
                <div className="relative flex gap-2">
                    <span className="absolute -left-10 top-0 -mt-4 select-none text-[6rem] leading-none text-orange-400">
                        “
                    </span>
                    <p>{quotes[0]?.quote}</p>
                    <button onClick={() => handleCopy(quotes[0]?.quote)}>
                        <a>
                            <BiCopy className="cursor-pointer text-base text-white transition-all duration-300 ease-in-out hover:text-orange-400" />
                        </a>
                    </button>
                </div>
                <a
                    href={`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(quotes[0]?.author)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-end italic hover:underline"
                >
                    - {quotes[0]?.author}
                </a>
            </div>
            {/* ))} */}
        </div>
    );
}
