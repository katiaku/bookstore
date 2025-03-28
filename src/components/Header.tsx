import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from './Logo';
import Menu from './Menu';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { AnimatePresence, motion } from 'framer-motion';
import useUserContext from '../hooks/useUserContext';
import { IoMdLogOut } from 'react-icons/io';
import Avatar from './Avatar';

export default function Header() {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const { user, logout } = useUserContext();

    return (
        <div className="relative z-20 flex h-[60px] items-center bg-white px-4 lg:px-10">
            <Logo />

            <p className="md:text-md mr-4 pl-2 font-nunito text-2xl font-bold text-blue-950 lg:text-2xl">
                <span className="text-orange-400">B</span>ook
                <span className="text-orange-400">S</span>helve
            </p>

            <div className="hidden h-full w-full md:block">
                <Menu />
            </div>

            {user && <Avatar user={user} />}

            <button
                className="mr-2 text-2xl font-bold text-blue-950 md:hidden"
                style={{ marginLeft: user ? '0' : 'auto' }}
                onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            >
                {isOpenSidebar ? <AiOutlineClose /> : <RxHamburgerMenu />}
            </button>

            {user && (
                <button
                    onClick={logout}
                    className="flex items-center justify-center pl-2 text-2xl font-semibold text-blue-950 transition-all duration-300 ease-in-out hover:text-orange-400 md:text-xl"
                >
                    <IoMdLogOut />
                </button>
            )}

            <AnimatePresence>
                {isOpenSidebar && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.5 }}
                    >
                        <Sidebar
                            isOpenSidebar={isOpenSidebar}
                            setIsOpenSidebar={setIsOpenSidebar}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
