'use client'
import React, { useState } from 'react';
import OurProductCard from './ourproductcard/OurProductCard';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import towel1 from '@/app/public/image/towel1.jpeg';
import towel2 from '@/app/public/image/towel2.jpeg'; // Use the correct alias
import towel3 from '@/app/public/image/towel3.jpeg'; // Correct path
import Hospitality1 from '@/app/public/image/hos1.jpg'; // Correct path
import Hospitality2 from '@/app/public/image/hos2.jpg'; // Additional towels for sliding
import Hospitality3 from '@/app/public/image/hos3.jpg';
import Hospitality4 from '@/app/public/image/hos4.jpg';
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

export default function OurProducts() {
    const cards = [
        { imageSrc: towel1, title: 'TOWEL', pagelink: '/Towels' },
        { imageSrc: towel2, title: 'TOWEL', pagelink: '/Towels' },
        { imageSrc: towel3, title: 'TOWEL', pagelink: '/Towels' },
        { imageSrc: Hospitality1, title: 'Hospitality', pagelink: '/Hospitality' },
        { imageSrc: Hospitality2, title: 'Hospitality', pagelink: '/Hospitality' },
        { imageSrc: Hospitality3, title: 'Hospitality', pagelink: '/Hospitality' },
        { imageSrc: Hospitality4, title: 'Hospitality', pagelink: '/Hospitality' },
        { imageSrc: towel1, title: 'TOWEL', pagelink: '/Towels' },
        { imageSrc: img1, title: 'Aspen 18701', pagelink: '/Bedsheet' },
        { imageSrc: img2, title: 'Aspen 18702', pagelink: '/Bedsheet' },
        { imageSrc: img3, title: 'Aspen 18703', pagelink: '/Bedsheet' },
        { imageSrc: img4, title: 'Aspen 18704', pagelink: '/Bedsheet' },
        { imageSrc: img5, title: 'Aspen 18705', pagelink: '/Bedsheet' },
        { imageSrc: img6, title: 'Aspen 18706', pagelink: '/Bedsheet' },
        { imageSrc: img7, title: 'Aspen 18707', pagelink: '/Bedsheet' },
        { imageSrc: img8, title: 'Aspen 18708', pagelink: '/Bedsheet' },
        { imageSrc: img9, title: 'Aspen 18709', pagelink: '/Bedsheet' },
        { imageSrc: img10, title: 'Aspen 18710', pagelink: '/Bedsheet' },
        { imageSrc: img11, title: 'Aspen 18711', pagelink: '/Bedsheet' },
        { imageSrc: img12, title: 'Aspen 18712', pagelink: '/Bedsheet' },
        { imageSrc: img13, title: 'Aspen 18713', pagelink: '/Bedsheet' },
        { imageSrc: img14, title: 'Aspen 18714', pagelink: '/Bedsheet' },
        { imageSrc: img15, title: 'Aspen 18715', pagelink: '/Bedsheet' },
        { imageSrc: img16, title: 'Aspen 18716', pagelink: '/Bedsheet' },
        { imageSrc: img17, title: 'Aspen 18717', pagelink: '/Bedsheet' },
        { imageSrc: img18, title: 'Aspen 18718', pagelink: '/Bedsheet' },
        { imageSrc: img19, title: 'Aspen 18719', pagelink: '/Bedsheet' },
        { imageSrc: img20, title: 'Aspen 18720', pagelink: '/Bedsheet' },
        { imageSrc: img21, title: 'Aspen 18721', pagelink: '/Bedsheet' },
        { imageSrc: img22, title: 'Aspen 18722', pagelink: '/Bedsheet' },
        { imageSrc: img23, title: 'Aspen 18723', pagelink: '/Bedsheet' },
        { imageSrc: img24, title: 'Aspen 18724', pagelink: '/Bedsheet' },
        { imageSrc: img25, title: 'Aspen 18725', pagelink: '/Bedsheet' },
        { imageSrc: img26, title: 'Aspen 18726', pagelink: '/Bedsheet' },
        { imageSrc: img27, title: 'Aspen 18727', pagelink: '/Bedsheet' },
        { imageSrc: img28, title: 'Aspen 18728', pagelink: '/Bedsheet' },
        { imageSrc: img29, title: 'Aspen 18729', pagelink: '/Bedsheet' },
        { imageSrc: img30, title: 'Aspen 18730', pagelink: '/Bedsheet' },
        { imageSrc: img31, title: 'Aspen 18731', pagelink: '/Bedsheet' },
        { imageSrc: img32, title: 'Aspen 18732', pagelink: '/Bedsheet' },
        { imageSrc: img33, title: 'Aspen 18733', pagelink: '/Bedsheet' },
        { imageSrc: img34, title: 'Aspen 18734', pagelink: '/Bedsheet' },
        { imageSrc: img35, title: 'Aspen 18735', pagelink: '/Bedsheet' },
        { imageSrc: img36, title: 'Aspen 18736', pagelink: '/Bedsheet' },
        { imageSrc: img37, title: 'Aspen 18737', pagelink: '/Bedsheet' },
        { imageSrc: img38, title: 'Aspen 18738', pagelink: '/Bedsheet' },
        { imageSrc: img39, title: 'Aspen 18739', pagelink: '/Bedsheet' },
        { imageSrc: img40, title: 'Aspen 18740', pagelink: '/Bedsheet' },
        { imageSrc: img41, title: 'Aspen 18741', pagelink: '/Bedsheet' },
        { imageSrc: img42, title: 'Aspen 18742', pagelink: '/Bedsheet' },
        { imageSrc: img43, title: 'Aspen 18743', pagelink: '/Bedsheet' },
        { imageSrc: img44, title: 'Aspen 18744', pagelink: '/Bedsheet' },
        { imageSrc: img45, title: 'Aspen 18745', pagelink: '/Bedsheet' },
        { imageSrc: img46, title: 'Aspen 18746', pagelink: '/Bedsheet' },
        { imageSrc: img47, title: 'Aspen 18747', pagelink: '/Bedsheet' },
        { imageSrc: img48, title: 'Aspen 18748', pagelink: '/Bedsheet' },
        { imageSrc: img49, title: 'Aspen 18749', pagelink: '/Bedsheet' },
        { imageSrc: img50, title: 'Aspen 18750', pagelink: '/Bedsheet' },
        { imageSrc: img51, title: 'Aspen 18751', pagelink: '/Bedsheet' },
        { imageSrc: img52, title: 'Aspen 18752', pagelink: '/Bedsheet' },
        { imageSrc: img53, title: 'Aspen 18753', pagelink: '/Bedsheet' },
        { imageSrc: img54, title: 'Aspen 18754', pagelink: '/Bedsheet' },
        { imageSrc: img55, title: 'Aspen 18755', pagelink: '/Bedsheet' },
        { imageSrc: img56, title: 'Aspen 18756', pagelink: '/Bedsheet' },
        { imageSrc: img57, title: 'Aspen 18757', pagelink: '/Bedsheet' },
        { imageSrc: img58, title: 'Aspen 18758', pagelink: '/Bedsheet' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 4; // Number of cards to display at once

    const nextCards = () => {
        if (currentIndex + cardsPerPage < cards.length) {
            setCurrentIndex(currentIndex + cardsPerPage);
        }
    };

    const prevCards = () => {
        if (currentIndex - cardsPerPage >= 0) {
            setCurrentIndex(currentIndex - cardsPerPage);
        }
    };

    return (
        <div>
            <div className=''>
                <div className='flex items-center justify-between mx-[8%] mb-20 mt-10'>
                    <div>
                        <p className='text-2xl'>Our Products</p>
                        <p className='h-[1px] w-20 bg-[#EA933B]'></p>
                    </div>
                    <button className='text-[#EA933B] p-6 bg-gray-500'>View All</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-[6%]">
                    {cards.slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
                        <OurProductCard key={index} imageSrc={card.imageSrc} title={card.title} pagelink={card.pagelink} />
                    ))}
                </div>

                {/* Arrow navigation */}
                <div className="flex justify-center mt-4 mb-4">
                    <button
                        className={`h-10 w-10 mr-6 hover:bg-[#000000] hover:text-white hover:border-2 hover:border-white outline outline-1 outline-black flex items-center justify-center ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={prevCards}
                        disabled={currentIndex === 0}
                    >
                        <IoIosArrowBack className=' h-6 w-6' />
                    </button>
                    <button
                        className={`h-10 w-10 hover:bg-[#000000] hover:text-white hover:border-2 hover:border-white outline outline-1 outline-black flex items-center justify-center ${currentIndex + cardsPerPage >= cards.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={nextCards}
                        disabled={currentIndex + cardsPerPage >= cards.length}
                    >
                        <IoIosArrowForward className=' h-6 w-6' />
                    </button>
                </div>

            </div>
        </div>
    );
}
