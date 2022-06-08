import React from 'react'
import { motion } from 'framer-motion'
import Container from '../../helpers/Container'
import Button from '../../helpers/Button'
import person1 from '../../../images/person1.png'
import person2 from '../../../images/person2.png'
import person3 from '../../../images/person3.png'


const MeetUs = () => {
    return (
        <section className={`flex flex-col items-center `} >
            <Container>
                <div className='my-[4rem] '>
                    <div className='text-center'>
                        <h3 className='font-bold tracking-[.5rem] text-[1.2rem]'>RCF FEDPOFFA</h3>
                        <h1 className='md:text-[64px] text-[42px] font-[700] md:leading-[82px] leading-[60px] my-[1.8rem]'>LOVE AND COMPASSION</h1>
                        <p className='md:text-[1.2rem]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 items-center my-[2rem]'>
                        <Button name={"READ MORE"} />

                        <div className='flex md:flex-row flex-col md:gap-10 gap-2'>
                            <motion.div
                                whileHover={{ scale: 1.09 }}
                            >

                                <img className='w-[290px] ' src={person1} alt="" />
                            </motion.div>


                            <motion.div whileHover={{ scale: 1.09 }} className='md:mt-[3rem]'>
                                <img className='w-[290px] ' src={person2} alt="" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.09 }}>
                                <img className='w-[290px] ' src={person3} alt="" />
                            </motion.div>
                        </div>
                    </div>

                    <div className=' flex md:flex-row flex-col gap-[5rem] py-[3rem] md:px-[10rem] px-[1rem] '>
                        <div>
                            <p className='font-semibold'>OUR MISSION AND VISION</p>
                            <p className='text-[32px] font-bold'>STRIVING FOR A BETTER TOMORROW</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </p>
                        </div>
                        <div>
                            <p className='font-semibold'>WHAT WE DO</p>
                            <p className='text-[32px] font-bold'>AGGRESIVE EVANGELISM</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default MeetUs