'use client'
import React, { useState} from 'react';

export default function Animation() {


    const [isVisible, setIsVisible] = useState(true);

    const handleHide = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
        }, 100); // 1 second delay
    };

    return (
        <>
            <div className="relative top-0 mt-[-32vh] overflow-hidden w-[80%] h-16 mx-[8%] ">
                <div className='flex items-center'>
                    <button className='bg-[#E76F0E] py-4 px-3 items-center z-50 text-lg'>FAIR / EXHIBITIONS: </button>
                    <span className='bg-white h-[60px] w-5 items-center z-50'></span>
                    {isVisible && (
                        <div className="absolute whitespace-nowrap text-[#000066] animate-slide text-md font-bold right-full">
                            HEIMTEXTIL FAIR FRANKFURT 2024 {'–'} GERMANY FROM 9th-12th January 2024 (ASPEN TEXTILE (PVT) LTD HALL # 10.0, STAND # B61-A)
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}
