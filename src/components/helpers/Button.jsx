import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ name, dark }) => {
    return (
        <motion.button
            whileTap={{ scale: .9 }}

            className={`${dark ? 'bg-black text-[#FFFDD0] hover:bg-[#FFFDD0] hover:text-black' : 'bg-[#FFFDD0] text-black hover:bg-black hover:text-[#FFFDD0]'} rounded-lg px-[3rem] py-[.8rem] text-[1rem] `}>
            {name}
        </motion.button>
    )
}

export default Button