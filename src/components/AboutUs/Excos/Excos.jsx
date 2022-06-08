import React from 'react'
import Container from '../../helpers/Container'
import ExcosCard from './ExcosCard'

const Excos = () => {
    return (
        <section className='flex flex-col items-center'>
            <Container>
                <div>
                    <div className='my-[4rem] text-center'>
                        <p>FELLOWSHIP EXCOS</p>
                        <p className='font-bold text-[32px]'>MEET OUR AMAZING EXCOS</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='md:grid-cols-3 gap-5 grid '>
                            <ExcosCard />
                            <ExcosCard />
                            <ExcosCard />

                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Excos