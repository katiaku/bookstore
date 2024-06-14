import { RxHamburgerMenu } from "react-icons/rx"; 
import { AiOutlineClose } from "react-icons/ai"; 
import Logo from "./Logo";
import Menu from "./Menu";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import useUserContext from "../hooks/useUserContext";
import { IoMdLogOut } from "react-icons/io";
import Avatar from "./Avatar";

export default function Header() {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const { user, logout } = useUserContext();

    // TODO: header is not updated when user changes

    return (
        
        <div className="relative z-20 flex items-center px-4 lg:px-10 h-[60px] bg-white">
            <Logo />

            <p className="font-nunito text-2xl md:text-md lg:text-2xl font-bold pl-2 text-blue-950 mr-4">
                <span className="text-orange-400">B</span>ook<span className="text-orange-400">S</span>helve
            </p>

            <div className="hidden md:block h-full w-full">
                <Menu />
            </div>

            {user && <Avatar user={user} />}

            <button
                className="md:hidden font-bold text-2xl text-blue-950 mr-2"
                style={{marginLeft: user ? "0" : "auto"}}
                onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            >
                {isOpenSidebar ? <AiOutlineClose /> : <RxHamburgerMenu /> }
            </button>

            {user && <button onClick={logout} className="font-semibold text-2xl md:text-xl text-blue-950 pl-2 flex items-center justify-center transition-all ease-in-out duration-300 hover:text-orange-400"><IoMdLogOut /></button>}

            <AnimatePresence>
                {
                    isOpenSidebar 
                && 
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                    >
                        <Sidebar isOpenSidebar={isOpenSidebar} />
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}
