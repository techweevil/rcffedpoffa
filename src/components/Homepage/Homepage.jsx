import React, { useEffect } from 'react'
import Showcase from './Showcase/Showcase'
import WhatWeAre from './WhatWeAre/WhatWeAre'
import Aos from 'aos'
import "aos/dist/aos.css"
import AboutUs from './AboutUs/AboutUs'


const Homepage = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <div className=''>
            <Showcase />
            <div data-aos='fade-up'>
                <WhatWeAre />
            </div>
            <div data-aos='fade-up'>
            <AboutUs />
            </div>
        </div>
    )
}

export default Homepage