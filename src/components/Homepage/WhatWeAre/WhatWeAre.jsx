import React from 'react'
import Container from '../../helpers/Container'
import Card from './Card'
import aboutus from './svgs/aboutus.svg'
import getInvolved from './svgs/getInvolved.svg'
import givingBack from './svgs/givingBack.svg'

const cards = [
    { title: "ABOUT US", svg: aboutus, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: "GET INVOLVED", svg: getInvolved, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: "GIVING BACK", svg: givingBack, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
]


const WhatWeAre = () => {
    return (
        <section className='flex flex-col items-center mt-[8rem]'>
            <Container>
                <div>
                    <div className='text-center'>
<h3 className='font-bold tracking-[.5rem] text-[1.2rem]'>RCF FEDPOFFA</h3>
                        <h1 className='md:text-[64px                        ] text-[42px] font-[700] md:leading-[82px] leading-[60px] my-[1.8rem]'>A CHURCH THAT'S RELEVANT</h1>
                    </div>

                    <div className='mb-[2rem] flex md:flex-row flex-col gap-5'>
                        {cards.map((card) => (
                            <Card title={card.title} svg={card.svg} text={card.text} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default WhatWeAre