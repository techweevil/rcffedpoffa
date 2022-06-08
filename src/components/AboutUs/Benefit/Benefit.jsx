import React from 'react'
import Container from '../../helpers/Container';
import benefit1 from '../../../images/benefit/benefit1.png'
import benefit2 from '../../../images/benefit/benefit2.png'
import benefit3 from '../../../images/benefit/benefit3.png'
import benefit4 from '../../../images/benefit/benefit4.png'

const Benefit = () => {
    return (
        <section className='flex
    flex-col items-center'>
            <Container>
                <div>
                    <div className='text-center '>
                        <p className='font-semibold'>BENEFITS</p>
                        <h2 className='text-[32px] font-bold'>THE BENEFITS OF JOINING THE FELLOWSHIP </h2>
                    </div>

                    <div className='flex md:flex-row flex-col gap-10 my-[3rem] items-center'>
                        <div className='w-[100%]'>
                            <p className='font-bold text-[32px] '>FIND FULFILMENT AND JOY </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                            </p>
                        </div>
                        <div>
                            <img src={benefit1} alt="benefits of joining1" />
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col gap-10 my-[3rem] items-center'>
                        <div>
                            <img src={benefit2} alt="benefits of joining1" />
                        </div>
                        <div className='w-[100%]'>
                            <p className='font-bold text-[32px] leading-[7rem]'>SHARED VALUES </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                            </p>
                        </div>

                    </div>

                    <div className='flex md:flex-row flex-col gap-10 my-[3rem] items-center'>
                        <div className='w-[100%]'>
                            <p className='font-bold text-[32px] leading-[7rem]'>AGAPE LOVE </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                            </p>
                        </div>
                        <div>
                            <img src={benefit3} alt="benefits of joining1" />
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col gap-10 my-[3rem] items-center'>
                        <div>
                            <img src={benefit4} alt="benefits of joining1" />
                        </div>
                        <div className='w-[100%]'>
                            <p className='font-bold text-[32px] leading-[7rem]'>ALL ARE WELCOME </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                            </p>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Benefit