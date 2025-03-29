import { FaRegSadTear } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error404() {
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const idTimeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        const idInterval = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);
        }, 1000);

        return () => {
            clearTimeout(idTimeout);
            clearInterval(idInterval);
        };
    }, [navigate]);

    return (
        <div className="page-height flex w-screen flex-col items-center justify-center bg-blue-950 text-white">
            <div className="mb-4 text-8xl text-orange-400">
                <FaRegSadTear />
            </div>
            <h1 className="mb-4 font-poppins text-6xl font-semibold">
                Error 404
            </h1>
            <h2 className="font-poppins text-3xl font-semibold">
                Page Not Found
            </h2>
            <p className="mt-10 text-lg">
                Redirecting to Home in {timer} seconds...
            </p>
        </div>
    );
}
