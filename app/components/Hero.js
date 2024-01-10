import React from 'react'
import ReviewContainer from './ReviewContainer'
import CustomSlider from './CustomSlider'

const Hero = () => {

    let reviews = [
        {
            text: "It was lovely to hear from you during this course Ankur, you really have the power to impress through story telling, would love to hear more from you about the art of story telling.My takeaway to follow will be to learn story telling, using every opportunity to communicate better.",
            name: "PARTHA DATTA",
        },
        {
            text: " I have learned that this life is just not meant to live for one self only but whenever we get a chance to beautify someone else's world we should move towards that. I learned the real importance of communication skill, and how to use that skill in a better way. I have learned that this life is just not meant to live for one self only but whenever we get a chance to beautify someone else's world we should move towards that.",
            name: "SALMAN ASHRAF",
        },
        {
            text: "I would definitely suggest taking the course.I have already told my friends about it and asked them to take it.It is a very well structured course and will teach you everything you need to learn to master the art of communication.And the best part is it's very low priced.",
            name: "Omkar",
        },
        {
            text: "It was a wonderful training session with Ankur Warikoo on effective communication. I have learnt more than what I was supposed to. It's really amazing to hear your life lessons and the decisions you made in your life. ",
            name: "NILESH BHALCHIM",
        },
        {
            text: "It wasn't only about the language, vocabulary, fluency or storytelling as people speak of it. Even though we've heard of how important it is to be a good story teller, the part in this course on story telling and communication was more about how to tell our story in alignment with knowing audience. Because it is going to decide which story, tone and the feel of it. ",
            name: "ANKITA S"
        }, {

            text: "One should definitely enroll this course! It's worth it, trust me! I will highly recommend it for people who really want to learn and gain confidence on how to communicate effectively. Effective communication is a perfect and an awesome course you can enroll at a very cheap and affordable price! . ",
            name: "MIHIR JHA"

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