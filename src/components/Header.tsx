import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
    return (
        <div className="flex items-center px-10 h-[90px] bg-white">
            <Logo />
            <Menu />
        </div>
    )
}
