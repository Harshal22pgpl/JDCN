import Link from "next/link";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function Navlink({ name, link }) {
  return (
    <div className=" py-3  px-1 text-gray-700 hover:text-purple-600">
      <Link className="flex gap-1 items-center" href={link}>
        <IoMdArrowDropright/>
        {name}
      </Link>
    </div>
  );
}
