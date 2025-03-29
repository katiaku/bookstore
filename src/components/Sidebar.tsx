import { SidebarProps } from '../config/types';
import Menu from './Menu';

export default function Sidebar({
    isOpenSidebar,
    setIsOpenSidebar,
}: SidebarProps) {
    return (
        <div className="page-height absolute right-0 top-[60px] w-1/2 bg-orange-400 py-20">
            <Menu
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
            />
        </div>
    );
}
