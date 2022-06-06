import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { MdMenuOpen } from 'react-icons/md'
import { Link } from 'react-router-dom';

const navLinks = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/aboutus" },
    { name: "SERMON", link: "/sermon" },
    { name: "BLOG", link: "/blog" },
    { name: "CONTACT", link: "/contact" },
]

const Nav = () => {
    const [showNav, setShowNav] = useState(false)

    const handleClick = () => (
        setShowNav(!showNav)
    )

    return (
        <nav>

            {/* desktop */}
            <div className='hidden gap-4 md:flex ml-12 '>

                {navLinks.map((link) => (
                    <motion.p
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className='hover:bg-[#FFFDD0] hover:text-black cursor-pointer p-2'><Link to={link.link}>{link.name}</Link></motion.p>
                ))}

            </div>

            {/* mobile */}

            <div className='md:hidden'>

                <motion.button
                    onClick={handleClick}
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.92 }}
                    className='text-[2rem] absolute right-5 top-2 '
                ><MdMenuOpen /></motion.button>
                {showNav && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className=' flex flex-col items-center gap-2 absolute bg-[#FFFDD0] text-black left-0 w-full  top-12 '>

                        {navLinks.map((link) => (
                            <motion.p
                                whileTap={{ scale: 0.9 }}
                                className='hover:bg-[black] hover:text-[#FFFDD0] cursor-pointer p-2 text-center w-full'><Link to={link.link}>{link.name}</Link></motion.p>
                        ))}

                    </motion.div>)}
            </div>
        </nav>
    )
}

export default Nav