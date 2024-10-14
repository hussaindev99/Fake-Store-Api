'use client'
import React from 'react';
import Image from 'next/image';
import heimet2024 from '@/app/public/image/heimtextilefair2024.jpg'; // Use your image path

export default function FairAndExhibitions() {
    return (
        <div className="container mx-[9%] w-[80%] px-4 py-8 ">
            <div className="md:flex md:items-start md:space-x-8">
                <div className="md:w-2/3">
                    <h2 className="text-2xl  mb-4">Fair & Exhibitions Aspen Textile</h2>
                    <div className='flex items-center mb-6'>
                        <p className='h-[1px] w-20 bg-[#EA933B]'></p>
                        <p className='h-[1px] w-64 bg-[#e5e5e5]'></p>
                    </div>
                    <p className="mb-4 text-[14px] text-[#9F9F9F]">Aspen Textile is ranked among the leading textile industries with a history of 2 decades of premium quality textiles. We have achieved this remarkable position by following our strong commitment to the top quality products & services.</p>
                    <p className="my-6 text-[14px] text-[#9F9F9F]">Our strong sense to adopt latest technical innovations is also a key factor of our vertical growth. Aspen is a respectable name in the international textile market for its commitment and responsiveness to customer satisfaction in high quality products & services. Aspen is an integrated structure of state of the art setup of machineries and highly skilled & experienced manpower.</p>
                    <p className="mb-4 text-[14px] text-[#9F9F9F]">We produce complete range of textiles ranging from top quality fabrics to high profile made ups & textiles and export to Europe, South/Central/North America, Middle East, Russian countries. The blend of our most sophisticated tools, skilled & dedicated workforce of over 500 employees and quality assurance system results in finest quality fabrics & textile products. Our slogan is “Excellence Without Compromise” we transform this ideology into reality by our Quality Assurance Department.</p>
                </div>
                <div className=" flex justify-center mt-6 md:mt-2">
                    <Image
                        src={heimet2024}
                        alt="Heimtextile Fair 2024"
                        className=" shadow-lg w-[600px] h-auto sm:h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
