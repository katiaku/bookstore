import { SidebarProps } from "../config/types";
import Menu from "./Menu";

export default function Sidebar({ isOpenSidebar, user }: SidebarProps) {
    return (
        <div className="absolute w-1/2 top-[70px] right-0 page-height py-20 bg-orange-400">
            <Menu isOpenSidebar={isOpenSidebar} user={user} />
        </div>
    )
}
