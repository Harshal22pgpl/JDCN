import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function NoticeCard({ img, title, description, id }) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const truncatedDescription = truncateText(description, 150); // Adjust the character count as needed

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full h-[500px]"> {/* Set a fixed height */}
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-purple-gray-500 shadow-purple-gray-500/40">
        <img
          src={img}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow">
        <h5 className="block mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-purple-gray-900">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit line-clamp-3">
          {truncatedDescription}
        </p>
      </div>
      <div className="p-6 pt-0">
        <Link href={`/detail-news/${id}`}>
          <div className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-85 active:opacity-85">
            Read More
          </div>
        </Link>
      </div>
    </div>
  );
}
