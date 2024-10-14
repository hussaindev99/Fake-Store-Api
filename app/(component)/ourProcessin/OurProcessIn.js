import React from 'react';
import OurCards from './ourcards/OurCards';
import Link from 'next/link';
import PlanningStrategy from '@/app/public/image/Strategy.jpg';
import DesignDevelop from '@/app/public/image/DesignandDevelop.jpg';
import TestDeliver from '@/app/public/image/TestandDeliver.jpg';

export default function OurProcessIn(props) {


    return (
        <>
            <div className='w-full h-auto bg-[#F8F9F9] '>
                <div className='text-center justify-center mx-auto lg:mx-[21%] pt-8'>
                    <h2 className='text-3xl'>Our Working Process in 3 Steps</h2>
                    <div className='flex items-center justify-center my-4'>
                        <p className='h-[1px] w-16 bg-[#EA933B]'></p>
                        <p className='h-[1px] w-[200px] lg:w-[370px] bg-[#e5e5e5]'></p>
                    </div>
                    <p className='text-[#9F9F9F] mx-4 lg:mx-0'>The order is divided into three major categories after getting from the
                        client in order to complete the project in time with accuracy and quality</p>
                </div>

                <div className='flex mx-[5%] flex-col lg:flex-row  lg:mx-[8%] space-y-4 lg:space-y-0 lg:space-x-4 mt-8'>
                    <Link href=''>
                        <OurCards
                            image={PlanningStrategy}
                            name='PLANNING & STRATEGY'
                            text='Defining the proper strategies and planning of work is our first step to achieve goal and allocating & best utilization of available sources.'
                            className="w-full lg:w-[27%]"
                        />
                    </Link>
                    <Link href=''>
                        <OurCards
                            image={DesignDevelop}
                            name='Design & Develop'
                            text='We focus on specifications, materials, sources in details in design phase after the satisfactions to op management in the planning phase'
                            className="w-full lg:w-[27%]"
                        />
                    </Link>
                    <Link href=''>
                        <OurCards
                            image={TestDeliver}
                            name='Test & Deliver'
                            text='Testing & deliver is the final phase, in this phase completed order is fully tested and make assure all the quality is managed during its preparations'
                            className="w-full lg:w-[27%]"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}
