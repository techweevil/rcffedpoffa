import React from 'react'
import Benefit from './Benefit/Benefit'
import Excos from './Excos/Excos'
import MeetUs from './MeetUs/MeetUs'
import Showcase from './Showcase/Showcase'


const AboutUs = () => {
    return (
        <div>
            <Showcase />
            <MeetUs />
            <Benefit />
            <Excos />
        </div>
    )
}

export default AboutUs