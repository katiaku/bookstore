import { SidebarProps } from "../config/types";
import Menu from "./Menu";

export default function Sidebar({ isOpenSidebar, setIsOpenSidebar }: SidebarProps) {
    return (
        <div className="absolute w-1/2 top-[60px] right-0 page-height py-20 bg-orange-400">
            <Menu
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
            />
        </div>
    )
}
