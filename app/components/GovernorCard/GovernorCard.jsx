import React from "react";
import Image from "next/image";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function GovernorCard() {
  return (
    <div>
      <div className="w-full mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
        <div className="w-full flex gap-6 ">
          <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
            <Image
              src="/welcome.jpeg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" py-4">
            <h1 className="my-2 font-bold text-lg mt-1">
              Prof. Suparbhat Chouksey
            </h1>
            <h1 className="text-sm  mt-1">Professor</h1>
            <h1 className="text-xs  mt-1">
                <FaPhoneAlt className="inline mr-1"/>
                022-67525656</h1>
            <h1 className="text-xs  mt-1">
                <MdEmail className="inline mr-1"/>
                sns@lntecc.com</h1>
            <h1 className="text-xs  mt-1 w-96">
              <FaLocationPin className="inline mr-1" />
              Chairman & Managing Director,Larsen & Toubro Ltd., L & T House,
              N.M. Marg,Ballard Estate, P.O. Box: 278,Mumbai-400 001, India
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
