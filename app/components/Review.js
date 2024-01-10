import React from 'react'
import { useSwipeable } from 'react-swipeable';

const Review = ({ review }) => {


    return (
        <div className='card p-2 rounded-lg bg-orange-100'>

            <p className='m2 my-4 font-light'>
                {review.text}
            </p>

            <h4 className=' my-4 font-bold'>
                {review.name}
            </h4>
        </div>
    )
}

export default Review