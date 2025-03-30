import { FaDesktop } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import IconLink from './ui/IconLink';

export default function Footer() {
    return (
        <ul className="fixed bottom-0 flex h-[50px] w-full items-center justify-center gap-10 bg-white px-4 font-poppins md:justify-end lg:px-10">
            <IconLink
                icon={<FaLinkedin />}
                href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova/"
            />
            <IconLink
                icon={<FaGithub />}
                href="https://github.com/katiaku/bookstore"
            />
            <IconLink
                icon={<FaDesktop />}
                href="https://katiaku-portfolio.vercel.app/"
            />
        </ul>
    );
}
