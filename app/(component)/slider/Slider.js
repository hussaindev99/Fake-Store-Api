'use client';
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import aspentextilefirst from '@/app/public/image/401aspentextile7.jpg';
import aspentextilesecond from '@/app/public/image/273aspentextile6.jpg';
import aspentextilethird from '@/app/public/image/318aspentextile3.jpg';
import aspentextilefourth from '@/app/public/image/921aspentextile2.jpg';
import aspentextilefiveth from '@/app/public/image/756aspentextile1.jpg';
import aspentextilesixth from '@/app/public/image/496banner8.jpg';
import aspentextileseventh from '@/app/public/image/289banner9.jpg';
import aspentextileeight from '@/app/public/image/527banner6.jpg';
import aspentextilenineth from '@/app/public/image/714banner7.jpg';
import aspentextilententh from '@/app/public/image/878banner1.jpg';



const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // State to manage hover

    const slides = [
        { image: aspentextilefirst },
        { image: aspentextilesecond },
        { image: aspentextilethird },
        { image: aspentextilefourth },
        { image: aspentextilefiveth },
        { image: aspentextilesixth },
        { image: aspentextileseventh },
        { image: aspentextileeight },
        { image: aspentextilenineth },
        { image: aspentextilententh },
    ];

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 10000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <>
            <div
                className="relative text-center mx-auto w-full h-screen mt-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image Slider */}
                <div
                    className="relative h-[68vh] mt-[-8%] w-full bg-cover bg-center bg-no-repeat transition-opacity duration-500"
                    style={{
                        backgroundImage: `url(${slides[currentIndex].image.src})`,
                        backgroundAttachment: "fixed",
                    }}
                >
                    {/* Content Layer */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        {/* Previous Button (Left) */}
                        <button
                            className={`absolute left-2 top-1/2 bg-[#00000050] rounded-md transform-translate-y-1/2 flex justify-center items-center h-14 w-14 text-[#e2e7eb] p-2 focus:outline-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                            onClick={handlePrevClick}
                        >
                            <IoIosArrowBack className='h-8 w-8' />
                        </button>

                        {/* Next Button (Right) */}
                        <button
                            className={`absolute right-2 top-1/2 bg-[#00000050] rounded-md transform-translate-y-1/2 flex justify-center items-center h-14 w-14 text-[#e5eaee] p-2 focus:outline-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                            onClick={handleNextClick}
                        >
                            <IoIosArrowForward className='h-8 w-8' />
                        </button>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Slider;
