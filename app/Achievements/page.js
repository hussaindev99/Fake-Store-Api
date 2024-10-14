'use client'; // Ensure you're using the Next.js client-side component
import React from 'react'; // Import React only once
 // Import Slider only once
import Image from 'next/image'; // Import Next.js Image component
import achievements from '@/app/public/image/achievement.png'; // Import your image
import Slider from '../(component)/slider/Slider';

export default function page() {
    return (
        <div>
            <Slider />
            {/* Main container */}
            <div className='flex flex-col md:flex-row justify-between w-full overflow-x-hidden'>
                {/* Text Section */}
                <div className='md:w-[80%] w-full px-4 md:px-0 ml-0 md:ml-[7%]'>
                    <p className='text-xl'>Achievements</p>
                    <div className='flex items-center mt-4'>
                        <p className='h-px w-20 bg-[#E55A0D]'></p>
                        <p className='h-px w-12 bg-[#E5E5E5]'></p>
                    </div>
                    <p className='text-sm text-[#978997] w-full md:w-[80%] my-7'>
                        Aspen Textile marks the personification of accomplished success of an industrious, erudite, committed & experienced man of commendable personality of management and technical skills, the founder, owner and C.E.O of Aspen Textile and the businessman of the year, Mr.Muhammad Ikram Sheikh having rich experience of textiles of more than 38 years has led Aspen to a world class company, now recognized as “Symbol of Reliability & Quality”. He has a strong belief & transparent vision for quality. He devotes much of his efforts & attention to improve & maintain the quality standards of Aspen. He has taken practical steps by setting up a specific quality assurance department fully devoted to monitor & review each process at all stages. His personal involvement & attention at each phase keeps all the process being performed with optimum efficiency & high morale.
                    </p>
                    <p className='text-sm text-[#978997]'>
                        Aspen Textile, ISO 9001:2008 certified, ensures that the quality standards are followed and met as per the customer’s requirements.
                    </p>
                </div>

                {/* Image Section */}
                <div className='md:w-[20%] w-full mt-8 md:mt-0 flex justify-center md:justify-end'>
                    <div className='w-[90%] md:w-auto ml-0 md:ml-[-50%] mr-0 md:mr-[30%] mt-11 mb-44'>
                        <Image
                            src={achievements}
                            alt="Achievement Image"
                            className='object-cover w-full h-auto'
                        />
                        <p className='text-sm text-[#000000] mt-2 text-center md:text-left'>
                            “OUR C.E.O MR.MUHAMMAD IKRAM SHEIKH RECEIVING BEST EXPORTER AWARD FOR YEAR 2006 - 2007 FROM PRIME MINISTER OF PAKISTAN”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
