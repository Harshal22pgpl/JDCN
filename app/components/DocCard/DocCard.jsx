import Link from "next/link";
import React from "react";
import { FaFilePdf } from "react-icons/fa6";

export default function DocCard({ heading, link }) {
  return (
    <div className=" w-[380px] h-24  flex gap-2 justify-around items-center p-2 bg-gray-100 rounded-lg group hover:bg-purple-600 transition-all duration-700">
      <div className="w-[90px] h-[90px]  rounded-full bg-purple-50 flex justify-center items-center group-hover:bg-white transition-all duration-700 ">
        <FaFilePdf size={45} className="text-purple-600 group-hover:scale-95 transition-all duration-700" />
      </div>
      <div>
        <Link href={link} className="text-gray-700 group-hover:text-white transition-all duration-700">{heading}</Link>
      </div>
    </div>
  );
}
