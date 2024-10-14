import React from 'react'
import Image from 'next/image'
import Logos from '@/app/public/image/logos.png'
import { MdArrowForwardIos, MdLocationPin, MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";

export default function Footer() {
    return (
        <footer className="bg-[#171717] text-white ">
            <div className="container mx-auto py-10  grid grid-cols-1 md:grid-cols-3 gap-10 px-[6%]">

                {/* About Us Section */}
                <div>
                    <p className="text-lg font-semibold mb-2">About Us</p>
                    <div className="flex items-center mb-4">
                        <span className="bg-[#5FCBEB] h-px w-20"></span>
                        <span className="bg-[#2F2F2F] h-px flex-1"></span>
                    </div>
                    <Image src={Logos} alt="Aspen Logo" width={150} height={75} />
                    <p className="mt-4 text-sm text-[#929191]">
                        “Aspen Textile is ranked among the leading textile industries with a history of 2 decades of premium quality textiles.”
                    </p>
                </div>

                {/* Useful Links Section */}
                <div>
                    <p className="text-lg font-semibold mb-2">Useful Link</p>
                    <div className="flex items-center mb-4">
                        <span className="bg-[#5FCBEB] h-px w-20"></span>
                        <span className="bg-[#2F2F2F] h-px flex-1"></span>
                    </div>
                    <ul className="space-2 flex items-center">
                        {/* Updated Links with hover effect to match image */}
                        <div className='mr-10'>
                            <li className="flex items-center text-sm group my-5">
                                <MdArrowForwardIos className="mr-2 text-[#ffffff] group-hover:text-[#ffffff]" />
                                <span className="">Home</span>
                            </li>
                            <li className="flex items-center text-sm group cursor-pointer my-5">
                                <MdArrowForwardIos className="mr-2 text-[#929191] group-hover:text-[#F9941D]" />
                                <span className="text-[#929191] group-hover:text-[#F9941D]">Achievements</span>
                            </li>
                            <li className="flex items-center text-sm group cursor-pointer my-5">
                                <MdArrowForwardIos className="mr-2 text-[#929191] group-hover:text-[#F9941D]" />
                                <span className="text-[#929191] group-hover:text-[#F9941D]">Bedsheet</span>
                            </li>
                            <li className="flex items-center text-sm group cursor-pointer my-5">
                                <MdArrowForwardIos className="mr-2 text-[#929191] group-hover:text-[#F9941D]" />
                                <span className="text-[#929191] group-hover:text-[#F9941D]">Hospitality</span>
                            </li>
                        </div>
                        <div>


                            <li className="flex items-center text-sm group cursor-pointer my-5">
                                <MdArrowForwardIos className="mr-2 text-[#929191] group-hover:text-[#F9941D]" />
                                <span className="text-[#929191] group-hover:text-[#F9941D]">About Us</span>
                            </li>
                            <li className="flex items-center text-sm group cursor-pointer my-5">
                                <MdArrowForwardIos className="mr-2 text-[#929191] group-hover:text-[#F9941D]" />
                                <span className="text-[#929191] group-hover:text-[#F9941D]">Certification</span>
                            </li>
                            <li className="flex items-center text-sm group cursor-pointer my-5">
                                <MdArrowForwardIos className="mr-2 text-[#929191] group-hover:text-[#F9941D]" />
                                <span className="text-[#929191] group-hover:text-[#F9941D]">Towels</span>
                            </li>
                            <li className="flex items-center text-sm group cursor-pointer my-5">
                                <MdArrowForwardIos className="mr-2 text-[#929191] group-hover:text-[#F9941D]" />
                                <span className="text-[#929191] group-hover:text-[#F9941D]">Contact us</span>
                            </li>
                        </div>
                    </ul>
                </div>

                {/* Contact Info Section */}
                <div className=''>
                    <p className="text-lg font-semibold mb-2">Aspen Textile</p>
                    <div className="flex items-center mb-4">
                        <span className="bg-[#5FCBEB] h-px w-24"></span>
                        <span className="bg-[#2F2F2F] h-px flex-1"></span>
                    </div>
                    <p className="flex items-center text-sm text-[#929191] outline outline-1 outline-[#646262]"><MdLocationPin className="mr-2 h-14 w-10 p-1 outline outline-1 outline-[#646262]" /> <span className='m-2'>C-170 Ali Chowk, Dhuddi Wala, Jaranwala Road, Faisalabad, Pakistan.</span></p>
                    <p className="mt-3 flex items-center cursor-pointer text-sm text-[white] outline outline-1 outline-[#646262]"><IoIosCall className="mr-2 h-9 w-7 p-1 outline outline-1 outline-[#646262]" /> <span className='m-2'>+92 41 8546136</span></p>
                    <p className="mt-3 flex items-center cursor-pointer text-sm text-[#929191] outline outline-1 outline-[#646262]"><IoIosCall className="mr-2 h-9 w-7 p-1 outline outline-1 outline-[#646262]" /><span className='m-2 hover:text-[#F9941D]'> +92 41 8547136</span></p>
                    <p className="mt-3 flex items-center cursor-pointer text-sm text-[#929191] outline outline-1 outline-[#646262]"><MdEmail className="mr-2 h-9 w-7 p-1 outline outline-1 outline-[#646262]" /> <span className='m-2 hover:text-[#F9941D]'> aspen@aspentextile.com </span></p>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-[#2C2C2C] text-white py-4 w-full">
                <div className="container px-[8.5%] flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-[#b8b8b8] mb-4 md:mb-0">
                        Copyright © 2019 Aspen Textile
                        <span className="text-[white] ml-2 hover:text-[#F9941D] cursor-pointer">
                            Website Design By: Bizline
                        </span>
                    </p>
                    <div className="flex space-x-4 items-center">
                        <p className="h-8 w-8 p-2 cursor-pointer bg-[#5FCBEB] flex items-center rounded-[4px] hover:bg-[#B12D16] hover:text-white">
                            <FaTwitter className="cursor-pointer h-4 w-4" />
                        </p>
                        <p className="h-8 w-8 p-2 cursor-pointer bg-[#5FCBEB] flex items-center rounded-[4px] hover:bg-[#B12D16] hover:text-white">
                            <FaFacebookF className="cursor-pointer" />
                        </p>
                        <p className="h-8 w-8 p-2 cursor-pointer bg-[#5FCBEB] flex items-center rounded-[4px] hover:bg-[#B12D16] hover:text-white">
                            <BiLogoLinkedin className="cursor-pointer h-5 w-5" />
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    )
}
