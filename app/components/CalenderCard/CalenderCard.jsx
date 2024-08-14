import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa6";

export default function CalenderCard({ year, title, link }) {
  return (
    <div className="w-[210px] h[100px] flex-col flex gap-2 p-5 border-2 text-center rounded-md ">
      <h1>
        {year - 1}-{year - 2000}
      </h1>
      <h2 className="text-sm text-gray-400">{title}</h2>
      <Link
        href={link}
        className="bg-purple-400 hover:bg-purple-500 flex items-center justify-center gap-3 p-1 rounded-md "
      >
        {" "}
        <FaDownload /> Download
      </Link>
    </div>
  );
}
