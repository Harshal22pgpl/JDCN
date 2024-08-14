import Image from "next/image";
import React from "react";

export default function CampusMap({
  heading1,
  paragraph1,
  img1,
  heading2,
  paragraph2,
  img2,
}) {
  return (
    <>
    
      <div className="flex justify-around w-11/12 mx-auto ">
        <div className="w-1/2   justify-center  bg-purple-200 flex flex-col">
          <h1 className=" text-3xl px-7  py-2  capitalize text-black font-semibold">
            {heading1}
          </h1>

          <p className="p-7  text-justify text-gray-700 ">{paragraph1}</p>
        </div>
        <div className="w-1/2   ">
          <Image src={img1} alt="img" width={700} height={200} />
        </div>
      </div>

      <div className="flex justify-around w-11/12 mx-auto ">
        <div className="w-1/2     ">
          <Image src={img2} alt="img" width={700} height={200} />
        </div>
        <div className="w-1/2  justify-center bg-sky-300 flex flex-col">
          <h1 className=" text-3xl px-7  py-2  capitalize text-black font-semibold">
            {heading2}
          </h1>

          <p className="p-7  text-justify text-gray-700 ">{paragraph2}</p>
        </div>
      </div>
    </>
  );
}
