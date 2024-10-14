'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { ImCross } from "react-icons/im";

// Import images correctly from the public folder
import towel1 from '@/app/public/image/towel1(1)(1).png';
import towel2 from '@/app/public/image/towel2(1)(1).jpg'; 
import towel3 from '@/app/public/image/towel3(1)(1).jpg';
import towels4 from '@/app/public/image/towel4.jpeg';
import towels5 from '@/app/public/image/towel5.jpeg';
import towels6 from '@/app/public/image/towel6.jpeg';
import towels7 from '@/app/public/image/towel7.jpeg';
import towels8 from '@/app/public/image/towel8.jpeg';
import towels9 from '@/app/public/image/towel9.jpg';
import towels10 from '@/app/public/image/towel10.jpg';
import towels11 from '@/app/public/image/towel11.jpg';
import towels12 from '@/app/public/image/towel12.jpg';
import towels13 from '@/app/public/image/towel13.jpg';
import towels14 from '@/app/public/image/towel14.jpg';
import towels15 from '@/app/public/image/towel15.jpg';
import towels16 from '@/app/public/image/towel16.jpeg';
import towels17 from '@/app/public/image/towel17.jpg';
import towels18 from '@/app/public/image/towel18.jpg';
import towels19 from '@/app/public/image/towel19.jpg'

export default function page() {
    const images = [
        towel1, towel2, towel3, towels4, towels5, towels6, towels7, towels8, towels9, towels10,
        towels11, towels12, towels13, towels14, towels15, towels16, towels17, towels18, towels19,
    ];

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Handle image click
    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    // Close modal
    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    // Go to the next image
    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Go to the previous image
    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative mx-[8%] mb-10">
            {/* Image Grid */}
            <p className='mt-[-5%] text-xl'>Towels</p>
            <div className='flex items-center mb-[5%]'>
                <p className='h-px w-16 bg-[#E55A0D]'></p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-[2%]">
                {images.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt={`Towel image ${index + 1}`}
                        className="h-[150px] w-full sm:h-[200px] lg:h-[250px] object-cover border-4 border-[#dfdada] cursor-pointer"
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>

            {/* Modal for clicked image */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="relative w-[90%] max-w-[600px]">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white hover:text-black text-2xl"
                        >
                            <ImCross />
                        </button>

                        {/* Left arrow */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white hover:text-black text-4xl"
                        >
                            <FaArrowAltCircleLeft />
                        </button>

                        {/* Right arrow */}
                        <button
                            onClick={handleNext}
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white hover:text-black text-4xl"
                        >
                            <FaArrowAltCircleRight />
                        </button>

                        {/* Display clicked image */}
                        <Image
                            src={images[selectedImageIndex]}
                            alt="Selected Towel"
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
