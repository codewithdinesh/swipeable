import React from 'react'
import ReviewContainer from './ReviewContainer'
import CustomSlider from './CustomSlider'

const Hero = () => {

    let reviews = [
        {
            text: "I learned the real importance of communication skill, and how to use that skill in a better way. I have learned that this life is just not meant to live for one self only but whenever we get a chance to beautify someone else's world we should move towards that.",
            name: "Sakshi",
        },
        {
            text: "I learned the real importance of communication skill, and how to use that skill in a better way. I have learned that this life is just not meant to live for one self only but whenever we get a chance to beautify someone else's world we should move towards that.",
            name: "Dinesh",
        },
        {
            text: "I learned the real importance of communication skill, and how to use that skill in a better way. I have learned that this life is just not meant to live for one self only but whenever we get a chance to beautify someone else's world we should move towards that.",
            name: "Omkar",
        }
    ]


    return (
        <div className='p-5 flex-1 justify-items-center'>

            <h2>Using Custom Slider </h2>

            <CustomSlider reviews={reviews} />

            <div className='my-5'>
                <h2>Using Library </h2>

                <ReviewContainer reviews={reviews} />
            </div>



        </div>
    )
}

export default Hero