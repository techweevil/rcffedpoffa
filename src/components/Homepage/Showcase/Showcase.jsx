import React from 'react'
import Button from '../../helpers/Button'
import Container from '../../helpers/Container'
import classes from "./Showcase.module.css"

const Showcase = () => {


    return (
        <section className={`h-screen ${classes.showcase} flex flex-col items-center `} >
            <Container>
                <div className='mt-[10rem] text-white '>
                    <h3>WELCOME TO CHURCH</h3>
                    <h1 className='md:text-[64px] text-[52px] font-[700] md:leading-[82px] my-[1.8rem]'>BECOME A PART OF <br /> OUR COMMUNITY</h1>
                    <Button name="LEARN MORE" />

                    <div className='flex gap-2 items-center my-[4rem]'>
                        <div className='w-[18px] h-[1px] bg-white'></div>
                        <p><i>we are the happiest people on campus</i></p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Showcase