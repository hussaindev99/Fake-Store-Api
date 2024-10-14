import React from 'react';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import Link from 'next/link';

export default function Nav() {
    return (
        <div className='w-full h-auto bg-[#00124B] text-white flex flex-col md:flex-row justify-between items-center p-4 px-[8%]'>
            <div className='flex flex-col md:flex-row items-center mb-2 md:mb-0'>
                <div className='flex items-center mb-1 md:mb-0'>
                    <IoCall className='mr-2 text-[14px]' />
                    <p className='text-[12px]'>+92 41 8546136</p>
                </div>
                <div className='flex items-center mb-1 md:mb-0 mx-4'>
                    <MdEmail className='mr-2' />
                    <p className='text-[12px] cursor-pointer hover:text-[#EA933B]'>aspen@aspentextile.com</p>
                </div>
                <div className='flex items-center mx-4'>
                    <MdEmail className='mr-2' />
                    <p className='text-[12px] cursor-pointer hover:text-[#EA933B]'>export@aspentextile.com</p>
                </div>
            </div>

            <div className='flex items-center'>
                <Link href="/" className='mx-2 text-[14px] hover:text-[#EA933B]'>
                    <FaFacebookF />
                </Link>
                <Link href="/" className='mx-2 text-[14px] hover:text-[#EA933B]'>
                    <FaTwitter />
                </Link>
                <Link href="/" className='mx-2 text-[14px] hover:text-[#EA933B]'>
                    <BiLogoLinkedin />
                </Link>
            </div>
        </div>
    );
}
