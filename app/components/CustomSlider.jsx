"use client";
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Review from './Review';

const CustomSlider = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const handleSwipe = (direction) => {
        console.log('swiped', direction);
        const nextIndex =
            direction === 'left'
                ? Math.min(currentIndex + 1, reviews.length - 1)
                : Math.max(currentIndex - 1, 0);

        setCurrentIndex(nextIndex);
    };

    return (
        <div {...handlers} className='max-w-md overflow-hidden cursor-pointer select-none bg-[#fcfbd4] py-4 rounded-lg shadow-md' >


            <div className='flex transition-transform duration-300 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {reviews.map((review, index) => (
                    <div key={index} className='w-full flex-shrink-0'>
                        <Review review={review} />
                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-2'>
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        className={`w-4 h-4 rounded-full inline-block mx-1 ${index === currentIndex ? "bg-orange-500" : "bg-orange-200"}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CustomSlider;
