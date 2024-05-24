import { GiHamburgerMenu } from "react-icons/gi"; 
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
    return (
        <div className="flex items-center px-4 md:px-10 h-[90px] bg-white">
            <Logo />
            <Menu />
            <button className="md:hidden font-bold text-4xl text-blue-950 ml-auto mr-2"><GiHamburgerMenu /></button>
        </div>
    )
}
