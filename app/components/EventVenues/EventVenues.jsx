import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EventVenues() {
  return (
    <>
    <div className="mx-auto flex justify-center items-center ">
      <Image 
      src="/clgImg.jpg"
      alt="audiImg"
      
      width={1180}
      height={900}
      />
    </div>
    <div className="w-5/6 mx-auto">
      <h1 className="pt-1 px-20 text-md">
        
        <Link href="/" className="text-purple-500">
          Home
        </Link>
        /Event Venues
      </h1>
      <div className=" p-20 pt-10  ">
        <h1 className="text-5xl text-gray-700 ">Event Venues</h1>
        <p className="pt-5 text-gray-800">
         LNCT offers a variety of venues suitable for different purposes, including lectures, seminars, conferences, and personal events. Below, you`&apos;`ll find details about each venue, including their capacity and associated rules.
        </p>
      </div>

      <div className="gap-[110px] pb-20  mx-auto flex justify-center items-center">
        <div className="border-2"> 
          
          <Image 
          src="/audi.jpeg"
          alt="img"
          width={500}
          height={900}
          />
          <h1 className="p-2 " >Seating capacity 300</h1>
        </div>
        <div className="border-2"> 
          <Image 
          src="/event1.webp"
          alt="img"
          width={500}
          height={900}
          />
          <h1 className="p-2" >Event in  lnct indore</h1>
        </div>
        
      </div>
      </div>

    </>
  );
}
