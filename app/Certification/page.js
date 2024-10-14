import React from 'react'
import Slider from '../(component)/slider/Slider'
import Image from 'next/image'
import certification from '@/app/public/image/Certificate.jpg'
export default function page() {
    return (
        <>
            <Slider />
            <div className='mt-[-12%] mx-[7%] mb-[10%]'>
                <p className='text-xl'>Certification</p>
                <div className='flex items-center'>
                    <p className='h-px w-16 bg-[#E55A0D]'></p>
                    <p className='h-px w-11 bg-[#E5E5E5]'></p>
                </div>
                <Image src={certification} alt="" />
            </div>

        </>
    )
}
