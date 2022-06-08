import React from 'react'
import Container from '../../helpers/Container'
import classes from './Showcase.module.css'

const Showcase = () => {
  return (
    <section className={` ${classes.bg} flex flex-col items-center `}>
      <Container>
        <div className='mt-[10rem] text-white '>
          <h3>CONTACT</h3>
          <h1 className='md:text-[64px] text-[52px] font-[700] md:leading-[82px] my-[1.8rem]'>GET IN TOUCH <br /> WITH THE FELLOWSHIP...</h1>


          <div className='flex gap-2 items-center my-[4rem]'>
            <div className='w-[18px] h-[1px] bg-white'></div>
            <p className='bg-black opacity-70'><i>we'll welcome YOU in God's warm embrace</i></p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Showcase