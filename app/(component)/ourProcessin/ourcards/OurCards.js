import React from 'react';
import Image from 'next/image';

export default function OurCards(props) {
    return (
        <div className="max-w-sm w-full rounded overflow-hidden shadow-lg border border-gray-200">
            {/* Image Section */}
            <Image
                src={props.image}
                alt="Planning & Strategy"
                className="w-full h-48 object-cover mr-6"
                width={500}
                height={300}
            />
            {/* Text Section */}
            <div className="px-6 py-4 cursor-default">
                <h3 className="font-bold text-lg mb-2 cursor-text">{props.name}</h3>
                <p className="text-gray-700 mb-4 cursor-text text-[14px] gap-8">
                    {props.text}
                </p>
                {/* Button */}
                <button className="bg-[#000000be] text-white py-3 text-[10px] px-6 rounded mt-3 hover:bg-[#E76F0E]">
                    <span className='text-[14px]'>READ MORE</span>
                </button>
            </div>
        </div>
    );
}
