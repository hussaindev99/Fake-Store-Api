import React from 'react';
import Slider from '../(component)/slider/Slider';
import Image from 'next/image';

export default function page() {
    return (
        <>
            <Slider />
            <div className='mx-4 md:mx-[7%] mb-[10%] text-sm'>

                {/* Certification Header */}
                <div>
                    <p className='text-lg md:text-xl'>Certification</p>
                    <div className='flex items-center'>
                        <p className='h-px w-12 md:w-16 bg-[#E55A0D]'></p>
                        <p className='h-px w-9 md:w-11 bg-[#E5E5E5]'></p>
                    </div>
                </div>

                {/* CEO Information */}
                <div className='text-sm md:text-base mt-10'>
                    <p>Mr. Muhammad Ikram Sheikh (C.E.O)</p>
                    <p className='my-2'>E-Mail: <span className='text-[#FDD043] cursor-pointer'>chiefexecutive@aspentextile.com</span></p>
                    <p>Cell: +92</p>
                </div>

                {/* Director Information */}
                <div className='text-sm md:text-base mt-6 md:mt-10'>
                    <p>Mr. Wasil Irfan Sheikh (Director)</p>
                    <p className='my-2'>E-Mail: <span className='text-[#FDD043] cursor-pointer'>export@aspentextile.com</span></p>
                    <p>Cell: +92 321 956 3636</p>
                </div>

                {/* Another Director */}
                <div className='text-sm md:text-base mt-6 md:mt-10'>
                    <p>Mr. Imran Mehmood Sheikh (Director)</p>
                    <p>Cell: +92</p>
                </div>

                {/* Office Information */}
                <div className='text-sm md:text-base mt-6 md:mt-10 border-b-2 border-[#00000081] pb-6 md:pb-[5%]'>
                    <p>ASPEN TEXTILE (Pvt) Ltd</p>
                    <p className='my-2'>Head Office: C-170 Ali Chowk, Dhuddi Wala, Jaranwala Road,</p>
                    <p>Faisalabad, Pakistan.</p>
                    <p className='my-2'>Tel: +92 41 8546136 , +92 41 8547136 , +92 418557290</p>
                    <p>Fax: +92 41 8737636</p>
                    <p className='my-2'>E-Mail: <span className='text-[#FDD043] cursor-pointer'>aspen@aspentextile.com</span></p>
                    <p>URL: www.aspentextile.com</p>
                </div>

                {/* Contact Form */}
                <div className='mt-6 md:mt-10'>
                    <p className='text-xl md:text-2xl'>Contact Us Form:</p>

                    {/* Form Fields */}
                    <div className='space-y-4'>
                        {['First Name', 'Last Name', 'Company Name', 'Email Address', 'Country Name', 'Company Address'].map((label, index) => (
                            <div key={index} className='flex flex-col md:flex-row items-center w-full md:w-[50%] justify-between'>
                                <label htmlFor={label.toLowerCase().replace(' ', '')} className="block text-[#FDD043] text-sm md:text-base">{label}: <span className='text-[#FE0000]'>*</span></label>
                                <input
                                    type="text"
                                    name={label.toLowerCase().replace(' ', '')}
                                    className="mt-1 md:mt-0 block w-full md:w-72 outline-[#FDD043] rounded-sm h-6 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                />
                            </div>
                        ))}

                        {/* Message Field */}
                        <div className='flex flex-col md:flex-row items-start md:items-center w-full md:w-[50%] justify-between'>
                            <label htmlFor="message" className='block text-[#FDD043] text-sm md:text-base'>Message: <span className='text-[#FE0000]'>*</span></label>
                            <textarea id="message" name="message" rows="4" className='mt-1 md:mt-0 block w-full md:w-72 h-32 p-2 outline-[#FDD043] ring-1 ring-inset ring-gray-400 focus:text-gray-800' />
                        </div>

                        {/* Security Code */}
                        <div className='flex flex-col md:flex-row items-start md:items-center w-full md:w-[50%] justify-between'>
                            <label htmlFor="securitycode" className='block text-[#FDD043] text-sm md:text-base'>Security Code: <span className='text-[#FE0000]'>*</span></label>
                            <div className="flex items-center mt-1 md:mr-[25%]">
                                <input
                                    type="text"
                                    name="securitycode"
                                    className="block w-20 outline-[#FDD043] rounded-sm h-6 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                />
                                <p className='h-6 px-2 bg-black text-white ml-2'>42149</p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className='mt-4 md:mt-6 px-4 py-1 bg-gray-200 text-gray-600 hover:bg-gray-400 text-sm rounded-md w-full md:w-[25%] md:ml-[25%]'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
