import React from 'react'
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"
import Container from '../../helpers/Container';

const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => (
        console.log(data),
        reset({
            fullName: '',
            email: '',
            message: '',
        })
    )

    return (
        <section className='bg-[#E5E5E5] p-[5rem] flex flex-col items-center'>
            <Container>
                <div className=' flex md:flex-row flex-col justify-between gap-[4rem] items-center'>

                    <div className='w-full'>
                        <p className='font-bold mb-3'>CONTACT FORM:</p>

                        <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
                            <input className='w-[100%] p-3 rounded-md'
                                {...register("fullName")} type="text" placeholder='Your full Name' />
                            <input className='w-[100%] p-3 rounded-md' {...register("email")} type="email" placeholder='Your Email' />
                            <textarea className='w-[100%] p-3 rounded-md'  {...register("message")} cols="30" rows="5"></textarea>

                            <motion.input
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.96 }}
                                className='bg-[#FFD2A4] p-3 rounded-md font-bold hover:text-[#E5E5E5] hover:bg-black ' type="submit" />
                        </form>

                    </div>

                    <div className='flex flex-col gap-4 w-[100%]'>
                        <div>
                            <p>Address</p>
                            <p className='font-bold text-[18px]'>BEHIND NNPC GAS STATION,<br />
                                OPP. FEDPOFFA, OFFA, KWARA STATE.</p>
                        </div>
                        <div>
                            <p>Contact</p>
                            <p className='font-bold text-[18px]'>08000000000000</p>
                            <p className='font-bold text-[18px]'>rcffedpoffa@gmail.com</p>
                        </div>

                        <div>
                            <p>find Us here</p>
                            <div className='flex gap-4 text-[1rem]'>
                                <div><FaFacebookSquare /></div>
                                <div><FaTwitterSquare /></div>
                                <div><FaWhatsappSquare /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default ContactForm