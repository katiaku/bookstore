import { SidebarProps } from "../config/types";
import Menu from "./Menu";

export default function Sidebar({ isOpenSidebar }: SidebarProps) {
    return (
        <div className="absolute w-1/2 top-[90px] right-0 page-height py-20 bg-orange-400">
            <Menu isOpenSidebar={isOpenSidebar} />
        </div>
    )
}
