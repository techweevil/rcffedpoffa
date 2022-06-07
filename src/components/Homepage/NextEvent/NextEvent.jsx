import React from 'react'
import Container from '../../helpers/Container'
import image from '../../../images/landingPageBg.jpg'
import time from "../../../images/time.svg"
import venue from "../../../images/venue.svg"
import Button from '../../helpers/Button'

const NextEvent = () => {
    return (
        <section className='flex flex-col items-center mt-[4rem]'>
            <Container>
                <div>
                    <div >
                        <div className='text-center'>
                            <h3 className='font-bold tracking-[.5rem] text-[1.2rem]'>UPCOMING PROGRAMS</h3>
                            <h1 className='md:text-[64px] text-[42px] font-[700] md:leading-[82px] leading-[60px] my-[1.8rem]'>COME WITH YOUR EXPECTATIONS TO:</h1>
                        </div>

                        <div className='flex md:flex-row flex-col'>
                            <div className='w-[40%] p-10 py-14 bg-[#FFF5EB]'>
                                <div className='flex flex-row items-end justify-between my-4'>
                                    <h4 className='text-[#A54E2B]'>UPCOMING EVENT</h4>
                                    <div className='flex flex-col items-end'>
                                        <p className='font-bold leading-3'>20</p>
                                        <p>JUNE</p>
                                    </div>
                                </div>
                                <h2 className='text-[32px] font-bold'>COME WITH YOUR FAITH </h2>
                                <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, atque. Lorem ipsum dolor sit amet consectetur dadipisicing elit. Laudantium, error.</p>

                                <div className='flex flex-col gap-4'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={time} alt="" />
                                        <p>Sunday 8:00am </p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <img src={venue} alt="" />
                                        <p>RCF Fedpoffa </p>
                                    </div>

                                    <Button name={"REGISTER"} dark />
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </Container>
        </section>
    )
}

export default NextEvent