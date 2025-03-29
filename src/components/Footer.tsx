import { FaDesktop } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <ul className="fixed bottom-0 flex h-[50px] w-full items-center justify-center gap-10 bg-white px-4 font-poppins md:justify-end lg:px-10">
            <li>
                <a
                    href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova/"
                    target="_blanc"
                    className="text-xl text-blue-950 transition-all duration-300 ease-in-out hover:text-orange-400 md:text-base"
                >
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/katiaku/bookstore"
                    target="_blanc"
                    className="text-xl text-blue-950 transition-all duration-300 ease-in-out hover:text-orange-400 md:text-base"
                >
                    <FaGithub />
                </a>
            </li>
            <li>
                <a
                    href="https://katiaku-portfolio.vercel.app/"
                    target="_blanc"
                    className="text-xl text-blue-950 transition-all duration-300 ease-in-out hover:text-orange-400 md:text-base"
                >
                    <FaDesktop />
                </a>
            </li>
        </ul>
    );
}
