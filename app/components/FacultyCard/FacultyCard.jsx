import Image from "next/image";
import React from "react";

export default function FacultyCard({img,name,post,post2,sub}) {
  return (
    <div className="w-full mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
      <div className="w-full flex gap-6 ">
        <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
          <Image
            src={img}
            alt="foddiesssss"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className=" py-4">
          <h1 className="my-2 font-bold text-lg mt-1">{name}</h1>
          <h1 className="text-sm mt-1">{post}</h1>
          <h2 className="text-sm">{post2}</h2>
          <h3 className="text-sm mt-1">{sub}</h3>
        </div>
      </div>
    </div>
  );
}
