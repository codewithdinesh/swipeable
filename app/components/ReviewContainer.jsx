"use client"

import React, { useState } from 'react'
import Review from './Review'
import { useSwipeable } from 'react-swipeable';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ReviewContainer = ({ reviews }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
    });


    const handleSwipe = (direction) => {
        const nextIndex =
            direction === 'left'
                ? Math.min(currentIndex + 1, reviews.length - 1)
                : Math.max(currentIndex - 1, 0);

        setCurrentIndex(nextIndex);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div {...settings} className=' max-w-sm  '>

            <Slider {...settings} className=' max-w-sm  '>
                {
                    reviews.map((review, index) => {
                        return (
                            <Review key={index} review={review} />
                        )
                    })

                }
            </Slider>

        </div>
    )
}

export default ReviewContainer