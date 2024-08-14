import FacultyCard from "@/app/components/FacultyCard/FacultyCard";
import GovernorCard from "@/app/components/GovernorCard/GovernorCard";
import RelatedLink from "@/app/components/RelatedLink/RelatedLink";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <div
          className="w-full h-96 flex justify-center  items-center"
          style={{
            backgroundImage: "url('/logo1.png')",
            backgroundSize: "cover",
          }}
        >
          <h1 className=" uppercase font-bold text-5xl">board of governors</h1>
        </div>
        <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-10 pt-[36px]">
            <h1 className="my-1 p-2">Board of Governers (Members)</h1>
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            <GovernorCard />
            
          </div>
          <div className="w-1/3 h-[600px] sticky top-20 left-0  py-10 ">
            <RelatedLink/>
          </div>
        </div>
      </div>
    </>
  );
}
