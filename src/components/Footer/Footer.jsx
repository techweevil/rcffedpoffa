import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"
import logo from "../../images/rcf_logo.png"
import Button from '../helpers/Button';

const Footer = () => {
    return (
        <footer className='flex md:flex-row flex-col gap-4 md:justify-between bg-black text-white md:p-12 py-10 px-4 w-full '>
            <div className='flex md:flex-row flex-col gap-8 md:gap-[10rem]  '>

                <div>
                    <div className='mb-4'>
                        <img className='w-12' src={logo} alt="" />
                        <p className='text-[12px]'>&copy; COPYRIGHT RCF 2022 </p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='text-[12px]'>phone number</p>
                        <p className='text-[12px]'>BEHIND NNPC GAS STATION, <br /> OPP. FEDPOFFA, OFFA KWARA STATE.
                        </p>
                        <p className='text-[12px]'>rcffedpoffa@gmail.com</p>
                    </div>
                </div>

                <div className='flex gap-14 '>
                    <div className='flex flex-col gap-3'>

                        <p>Quicklinks</p>
                        <p className='text-[12px]'>
                            <Link to={'/aboutus'}>ABOUT US</Link>
                        </p>
                        <p className='text-[12px]'>
                            <Link to={'/sermons'}>SERMONS</Link>
                        </p>
                        <p className='text-[12px]'>
                            <Link to={'/events'}>EVENTS</Link>
                        </p>
                        <p className='text-[12px]'>
                            <Link to={'/blog'}>BLOG</Link>
                        </p>
                    </div>
                    <div>
                        <p>CONNECT</p>
                        <div className='flex gap-6 mt-2 text-[1.5rem]'>
                            <div><FaFacebookSquare /></div>
                            <div><FaTwitterSquare /></div>
                            <div><FaWhatsappSquare /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p className='text-[32px] font-semibold'>SUSCRIBE TO GET <br /> LATEST UPDATES AND NEWS</p>

                <div className='flex '>
                    <input type="email" className='w-[18rem] p-3 rounded-lg' placeholder='Youremail@gmail.com' />

                    <span className='-ml-10'><Button name={'SUSCRIBE'} /></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer