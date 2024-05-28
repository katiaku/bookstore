import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <ul className="fixed bottom-0 w-full h-[50px] flex items-center justify-center gap-10 font-poppins bg-white">
            <li>
                <a href="https://www.facebook.com/" target="_blanc" className="text-blue-950 hover:text-orange-400 transition-all ease-in-out duration-300">
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target="_blanc" className="text-blue-950 hover:text-orange-400 transition-all ease-in-out duration-300">
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href="https://x.com/?lang=en" target="_blanc" className="text-blue-950 hover:text-orange-400 transition-all ease-in-out duration-300">
                    <FaXTwitter />
                </a>
            </li>
        </ul>
    )
}
