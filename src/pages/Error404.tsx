import { FaRegSadTear } from "react-icons/fa"; 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Error404() {

    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {

        const idTimeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        const idInterval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1)
        }, 1000);

        return () => {
            clearTimeout(idTimeout);
            clearInterval(idInterval);
        }

    }, [navigate]);

    return (
        <div className="w-screen page-height flex flex-col justify-center items-center bg-blue-950 text-white">
            <div className="text-8xl mb-4 text-orange-400">
                <FaRegSadTear />
            </div>
            <h1 className="font-poppins font-semibold text-6xl mb-2">Error 404</h1>
            <h2 className="font-poppins font-semibold text-3xl">Page Not Found</h2>
            <p className="mt-8 text-lg">Redirecting to Home in { timer } seconds...</p>
        </div>
    )
}
