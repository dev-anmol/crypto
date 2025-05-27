'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import '../../app/globals.css'


const NavBar = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const navItems: NavItem[] = [
        { title: "Home", href: '/home' },
        { title: "About", href: '/about' },
        { title: "Contact", href: '/contact' },
        { title: "Login", href: '/login' },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                opacity: { duration: 0.3, ease: "easeInOut" },
                scale: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    restDelta: 0.001,
                }
            }}
            className={`giest relative bg-purple-100/80 shadow-2xl p-1 mt-8 rounded-full items-center flex justify-center md:gap-10 backdrop-blur-sm pointer-events-auto z-50 text-xs`}>
            {navItems.map((item, idx) => (
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.3 }}
                    className='relative px-2 py-1'
                    key={idx}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <motion.a
                        href={item.href}
                        className='cursor-pointer text-neutral-800 px-3 py-4 font-medium rounded-full relative z-10'
                        style={{ color: hovered === idx ? 'white' : '#262626' }}
                    >
                        {item.title}
                    </motion.a>
                    <AnimatePresence>
                        {hovered === idx && (
                            <motion.div
                                layoutId="navbar-hover"
                                className="absolute inset-0 bg-black/80 rounded-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </motion.div>
    )
}

type NavItem = {
    title: string,
    href: string
}

export default NavBar