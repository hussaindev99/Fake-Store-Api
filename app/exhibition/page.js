import React from 'react';
import Slider from '../(component)/slider/Slider';
import Image from 'next/image';
import Exhibition1 from '@/app/public/image/exhibition1.jpg';
import Exhibition2 from '@/app/public/image/exhibition2.jpg';
import Exhibition3 from '@/app/public/image/exhibition3.jpg';
import Exhibition4 from '@/app/public/image/exhibition4.jpg';
import Exhibition5 from '@/app/public/image/exhibition5.jpg';
import Exhibition6 from '@/app/public/image/exhibition6.jpg';
import Exhibition7 from '@/app/public/image/exhibition7.jpg';
import Exhibition8 from '@/app/public/image/exhibition8.jpg';
import Exhibition9 from '@/app/public/image/exhibition9.jpg';

export default function page() {
    return (
        <>
            <Slider />

            <div className='mt-[-12%] mx-5 md:mx-[7%]'>
                {/* Title */}
                <div>
                    <p className='text-xl text-center'>Exhibition Aspen Textile</p>
                    {/* Divider */}
                    <div className='flex items-center justify-center my-4'>
                        <p className='h-px w-16 bg-[#E55A0D]'></p>
                        <p className='h-px w-36 bg-[#E5E5E5]'></p>
                    </div>
                </div>

                {/* Exhibition Details */}
                <div className='text-lg text-center'>
                    <p className='text-2xl'>Coming Soon 2024</p>
                    <p className='text-[#000066] my-[2%]'>HEIMTEXTIL FAIR FRANKFURT 2024</p>
                    <p className='text-[#000066]'>GERMANY FROM 9th-12th January 2024</p>
                    <p className='text-[#000066] my-[2%]'>{"(ASPEN TEXTILE (PVT) LTD HALL # 10.0, STAND # B61-A"}</p>

                    {/* Bottom Divider */}
                    <div className='my-6'>
                        <p className='w-auto mx-[20%] border border-dashed border-[#0000006e]'></p>
                    </div>
                    <p className='text-2xl mb-[5%]'>Exhibition</p>
                </div>

                {/* Exhibition Images */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-8 mb-[8%]'>
                    <Image src={Exhibition1} alt="" className='w-full h-auto object-cover' />
                    <Image src={Exhibition2} alt="" className='w-full h-auto object-cover' />
                    <Image src={Exhibition3} alt="" className='w-full h-auto object-cover' />
                    <Image src={Exhibition4} alt="" className='w-full h-auto object-cover' />
                    <Image src={Exhibition5} alt="" className='w-full h-auto object-cover' />
                    <Image src={Exhibition6} alt="" className='w-full h-auto object-cover' />
                    <Image src={Exhibition7} alt="" className='w-full h-auto object-cover' />
                    <Image src={Exhibition8} alt="" className='w-full h-auto object-cover' />
                    <Image src={Exhibition9} alt="" className='w-full h-auto object-cover' />
                </div>
            </div>
        </>
    );
}
