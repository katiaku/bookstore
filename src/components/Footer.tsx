import { FaDesktop } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <ul className="fixed bottom-0 w-full h-[50px] px-4 lg:px-10 flex items-center justify-center md:justify-end gap-10 font-poppins bg-white">
            <li>
                <a
                    href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova/"
                    target="_blanc"
                    className="text-blue-950 hover:text-orange-400 text-xl md:text-base transition-all ease-in-out duration-300"
                >
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/katiaku/bookstore"
                    target="_blanc"
                    className="text-blue-950 hover:text-orange-400 text-xl md:text-base transition-all ease-in-out duration-300"
                >
                    <FaGithub />
                </a>
            </li>
            <li>
                <a
                    href="https://katiaku-portfolio.vercel.app/"
                    target="_blanc"
                    className="text-blue-950 hover:text-orange-400 text-xl md:text-base transition-all ease-in-out duration-300"
                >
                    <FaDesktop />
                </a>
            </li>
        </ul>
    )
}
