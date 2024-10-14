import React from 'react';
import Image from 'next/image';
import porcessing1 from '@/app/public/image/processing1.jpg';
import porcessing2 from '@/app/public/image/processing2.jpg';
import processing3 from '@/app/public/image/processing3.jpg';
import processing4 from '@/app/public/image/processing4.jpg';
import Slider from '../(component)/slider/Slider';

export default function page() {
    return (
        <>
            <Slider />
            <div className='mx-5 md:mx-[7%] mt-[-12%] mb-[10%]'>
                <div>
                    <p className='text-xl text-center md:text-left'>Our Processing</p>
                    {/* Divider */}
                    <div className='flex items-center justify-center md:justify-start my-4'>
                        <p className='h-px w-16 bg-[#E55A0D]'></p>
                        <p className='h-px w-20 bg-[#E5E5E5]'></p>
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row'>
                    <div className='text-sm w-full md:w-[45%]'>
                        <p className='my-7'>STITCHING & PACKING</p>
                        <p className='text-[#898989]'>
                            {'On the part of MADE UPS, we would like to inform you that we are doing all type of household bed linen & accessories. For instance we are producing sheets sets, quilt covers sets, bed in bags, curtains of all type, shower curtains, table cover etc with the help of our stitching unit equipped with latest model machinery. Simple I can say regarding your made ups requirements that, your name it we have it.'}
                        </p>
                        <p className='mt-7'>QUALITY CONTROL</p>
                        <p className='text-[#898989]'>
                            {"Our very vital feature is, QUALITY ASSURANCE DEPARTMENT from weaving to finished, in this department we employed highly professional people from the textile sector. The duty of this department to check each and every process of production for this way we can check & control the production mistakes right at the spot where they occurs and rectify. Eventually on receipt of shipment whatever you'll receive that would be the best & as per customer’s requirement.Aspen Textile ensure all quality standard specified by customer like pilling, rubbing, crocking and shrinkage. Our LAB has latest equipment for all tests."}
                        </p>
                        <p className='mt-7 mb-3'>DESIGNS STUDIO</p>
                        <p className='text-[#898989]'>
                            We have also established CREATIVE DESIGNING DEPARTMENT. Where the professional designers are all the time in process of creation of new & fresh designs for different markets.
                        </p>
                        <p className='text-[#898989] mt-7'>
                            Aspen Textile uses the latest CAD/CAM systems from pixel arts silicon, ramset.
                        </p>
                    </div>

                    {/* Images Section */}
                    <div className='w-full md:w-[50%] md:ml-7 mt-7 md:mt-0'>
                        <div className='grid grid-cols-2 gap-2'>
                            <Image src={porcessing1} alt="" className='w-full h-[35vh] object-cover' />
                            <Image src={porcessing2} alt="" className='w-full h-[35vh] object-cover' />
                            <Image src={processing3} alt="" className='w-full h-[35vh] object-cover' />
                            <Image src={processing4} alt="" className='w-full h-[35vh] object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
