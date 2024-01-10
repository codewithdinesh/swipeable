import React from 'react'
import Section from './Section';
import Hero from './Hero';

const Main = () => {
    return (
        <div className='flex flex-col md:flex-row p-1 justify-between '>

            <Section />
            <Hero />

        </div>
    )
}

export default Main;