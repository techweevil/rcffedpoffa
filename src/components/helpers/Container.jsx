import React from 'react'

const Container = (props) => {
    return (
        <div className='md:w-[80%] w-[90%]'>
            {props.children}
        </div>
    )
}

export default Container