'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { ImCross } from "react-icons/im";

// Import images correctly from the public folder
import Hospitality1 from '@/app/public/image/hos1.jpg';
import Hospitality2 from '@/app/public/image/hos2.jpg'; 
import Hospitality3 from '@/app/public/image/hos3.jpg';
import Hospitality4 from '@/app/public/image/hos4.jpg';
import Hospitality5 from '@/app/public/image/hos5.jpg';
import Hospitality6 from '@/app/public/image/hos6.jpg';
import Hospitality7 from '@/app/public/image/hos7.jpg';
import Hospitality8 from '@/app/public/image/hos8.jpg';
import Hospitality9 from '@/app/public/image/hos9.jpg';
import Hospitality10 from '@/app/public/image/hos10.jpg';
import Hospitality11 from '@/app/public/image/hos11.jpg';
import Hospitality12 from '@/app/public/image/hos12.jpg';
import Hospitality13 from '@/app/public/image/hos13.jpg';
import Hospitality14 from '@/app/public/image/hos14.jpg';
import Hospitality15 from '@/app/public/image/hos15.jpg';
import Hospitality16 from '@/app/public/image/hos16.jpg';
import Hospitality17 from '@/app/public/image/hos17.jpg';
import Hospitality18 from '@/app/public/image/hos18.jpg';
import Hospitality19 from '@/app/public/image/hos19.jpg';
import Hospitality20 from '@/app/public/image/hos20.jpg';

export default function page() {
    const images = [
        Hospitality1, Hospitality2, Hospitality3, Hospitality4, Hospitality5, Hospitality6, Hospitality7, Hospitality8, Hospitality9, Hospitality10,
        Hospitality11, Hospitality12, Hospitality13, Hospitality14, Hospitality15, Hospitality16, Hospitality17, Hospitality18, Hospitality19, Hospitality20,
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
                        alt={`Hospitality image ${index + 1}`}
                        className="h-[150px] sm:h-[200px] lg:h-[250px] w-full border-4 border-[#dfdada] cursor-pointer object-cover"
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
                            alt="Selected Hospitality"
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
