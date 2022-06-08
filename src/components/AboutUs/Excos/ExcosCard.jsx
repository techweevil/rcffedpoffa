import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"
import dummy from '../../../images/dummy.png'


const ExcosCard = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.08 }}
            className='bg-[#F5F2F0] w-[300px] flex flex-col items-center gap-4 my-5 py-[3rem]'>
            <div className='w-[10rem] h-[10rem] overflow-hidden rounded-full shadow-xl'>
                <img className='' src={dummy} alt="" />
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <p className='font-bold text-[20px]'>EMMANUEL MEJIDA K.</p>
                <p>PRESIDENT</p>
                <div className='flex gap-4 text-[1rem]'>
                    <div><FaFacebookSquare /></div>
                    <div><FaTwitterSquare /></div>
                    <div><FaWhatsappSquare /></div>
                </div>

            </div>
        </motion.div>
    )
}

export default ExcosCard