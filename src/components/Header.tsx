import { RxHamburgerMenu } from "react-icons/rx"; 
import { AiOutlineClose } from "react-icons/ai"; 
import Logo from "./Logo";
import Menu from "./Menu";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    return (
        <div className="relative z-20 flex items-center px-4 md:px-10 h-[90px] bg-white">
            <Logo />

            <div className="hidden md:block h-full w-full">
                <Menu />
            </div>

            <button
                className="md:hidden font-bold text-4xl text-blue-950 ml-auto mr-2"
                onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            >
                {isOpenSidebar ? <AiOutlineClose /> : <RxHamburgerMenu /> }
            </button>

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
