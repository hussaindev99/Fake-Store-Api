import Image from 'next/image';
import Link from 'next/link';

export default function OurProductCard({ imageSrc, title, pagelink }) {
  return (
    <div className="relative group">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={300}
        className="w-full h-64 object-cover border-4 border-gray-400"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
        <h3 className="text-lg font-bold mt-28 text-start">{title}</h3>
        <Link href={pagelink}>
          <p className="mt-4 px-7 py-3 bg-[#E76F0E] hover:bg-gray-900 rounded">
            Read More
          </p>
        </Link>
      </div>
    </div>
  );
}
