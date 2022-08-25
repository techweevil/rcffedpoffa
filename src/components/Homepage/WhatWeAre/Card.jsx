import React from 'react'
import { motion } from 'framer-motion'


const Card = ({ title, svg, text }) => {
    return (
        <motion.div
        whileHover={{scale: 1.08}}
        >
            <div className='  bg-[#FFF5EB] p-8 w-[25rem] shadow-2xl'>
                <img src={svg} alt={title} />
                <h3 className='font-semibold text-[32px] my-[1.3rem]'>{title}</h3>
                <p>{text}</p>
            </div>
            <div className='bg-[#FFD2A4]  h-16px text-[#FFD2A4] '>.</div>

        </motion.div>
    )
}

export default Card