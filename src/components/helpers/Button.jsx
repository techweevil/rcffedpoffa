import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ name, dark, to }) => {
    return (
<Link to={`${to ? to : '/'}`}>
        <motion.button
            whileTap={{ scale: .9 }}
            
            className={`${dark ? 'bg-black text-[#FFD2A4] hover:bg-[#FFD2A4] hover:text-black' : 'bg-[#FFD2A4] text-black hover:bg-black hover:text-[#FFD2A4]'} rounded-lg px-[3rem] py-[.8rem] text-[1rem] `}> <span>
            {name} 
            </span>
        </motion.button>
</Link>
    )
}

export default Button