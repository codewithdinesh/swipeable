import React from 'react'
import Review from './Review'

const ReviewContainer = () => {
    return (
        <div className=' max-w-sm'>

            <Review review={
                {
                    text: "I learned the real importance of communication skill, and how to use that skill in a better way. I have learned that this life is just not meant to live for one self only but whenever we get a chance to beautify someone else's world we should move towards that.",
                    name: "Sakshi",
                }
            } />
        </div>
    )
}

export default ReviewContainer