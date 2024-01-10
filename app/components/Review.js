import React from 'react'

const Review = ({ review }) => {


    return (
        <div className='card p-2 rounded-lg bg-orange-100 cursor-pointer m-1'>

            <p className='m2 my-4 font-light cursor-pointer'>
                {review.text}
            </p>

            <h4 className=' my-4 font-bold cursor-pointer'>
                {review.name}
            </h4>
        </div>
    )
}

export default Review