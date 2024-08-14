import Link from "next/link";
import React from "react";
import { FaFilePdf } from "react-icons/fa6";

export default function RuleCard({ bgcolor, link, heading }) {
  return (
    <div className={`w-48 h-60  rounded-lg flex flex-col p-2 ${bgcolor}`}>
      <div className="flex justify-center items-center p-4">
        <FaFilePdf size={45} className="text-red-600" />
      </div>
      <div className="p-3">
        <Link href={link}>
          <h1 className="p-1  text-center">{heading}</h1>
        </Link>
      </div>
    </div>
  );
}
