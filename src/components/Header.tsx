import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
    return (
        <div className="flex items-center py-4 px-10">
            <Logo />
            <Menu />
        </div>
    )
}
