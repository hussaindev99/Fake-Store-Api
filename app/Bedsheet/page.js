'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import img1 from '@/app/public/image/img1.jpg';
import img2 from '@/app/public/image/img2.jpg';
import img3 from '@/app/public/image/img3.jpg';
import img4 from '@/app/public/image/img4.jpg';
import img5 from '@/app/public/image/img5.jpg';
import img6 from '@/app/public/image/img6.jpg';
import img7 from '@/app/public/image/img7.jpg';
import img8 from '@/app/public/image/img8.jpg';
import img9 from '@/app/public/image/img9.jpg';
import img10 from '@/app/public/image/img10.jpg';
import img11 from '@/app/public/image/img11.jpg';
import img12 from '@/app/public/image/img12.jpg';
import img13 from '@/app/public/image/img13.jpg';
import img14 from '@/app/public/image/img14.jpg';
import img15 from '@/app/public/image/img15.jpg';
import img16 from '@/app/public/image/img16.jpg';
import img17 from '@/app/public/image/img17.jpg';
import img18 from '@/app/public/image/img18.jpg';
import img19 from '@/app/public/image/img19.jpg';
import img20 from '@/app/public/image/img20.jpg';
import img21 from '@/app/public/image/img21.jpg';
import img22 from '@/app/public/image/img22.jpg';
import img23 from '@/app/public/image/img23.jpg';
import img24 from '@/app/public/image/img24.jpg';
import img25 from '@/app/public/image/img25.jpg';
import img26 from '@/app/public/image/img26.jpg';
import img27 from '@/app/public/image/img27.jpg';
import img28 from '@/app/public/image/img28.jpg';
import img29 from '@/app/public/image/img29.jpg';
import img30 from '@/app/public/image/img30.jpg';
import img31 from '@/app/public/image/img31.jpg';
import img32 from '@/app/public/image/img32.jpg';
import img33 from '@/app/public/image/img33.jpg';
import img34 from '@/app/public/image/img34.jpg';
import img35 from '@/app/public/image/img35.jpg';
import img36 from '@/app/public/image/img36.jpg';
import img37 from '@/app/public/image/img37.jpg';
import img38 from '@/app/public/image/img38.jpg';
import img39 from '@/app/public/image/img39.jpg';
import img40 from '@/app/public/image/img40.jpg';
import img41 from '@/app/public/image/img41.jpg';
import img42 from '@/app/public/image/img42.jpg';
import img43 from '@/app/public/image/img43.jpg';
import img44 from '@/app/public/image/img44.jpg';
import img45 from '@/app/public/image/img45.jpg';
import img46 from '@/app/public/image/img46.jpg';
import img47 from '@/app/public/image/img47.jpg';
import img48 from '@/app/public/image/img48.jpg';
import img49 from '@/app/public/image/img49.jpg';
import img50 from '@/app/public/image/img50.jpg';
import img51 from '@/app/public/image/img51.jpg';
import img52 from '@/app/public/image/img52.jpg';
import img53 from '@/app/public/image/img53.jpg';
import img54 from '@/app/public/image/img54.jpg';
import img55 from '@/app/public/image/img55.jpg';
import img56 from '@/app/public/image/img56.jpg';
import img57 from '@/app/public/image/img57.jpg';
import img58 from '@/app/public/image/img58.jpg';

export default function page() {
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
        img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
        img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
        img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
        img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
        img51, img52, img53, img54, img55, img56, img57, img58
    ];

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative mx-[8%] mb-10">
            {/* Image Grid */}
            <p className='mt-[-5%] text-xl'>Bedsheet</p>
            <div className='flex items-center mb-[5%]'>
                <p className='h-px w-16 bg-[#E55A0D]'></p>
                <p className='h-px w-5 bg-[#E5E5E5]'></p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-[2%]">
                {images.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt={`Bedsheet image ${index + 1}`}
                        className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] border-4 border-[#dfdada] cursor-pointer object-cover"
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>

            {/* Modal for clicked image */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="relative">
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
                            alt="Selected Bedsheet"
                            className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] object-cover"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
