import React from "react";
import SliderMain from "../SliderMain/SliderMain";
import Image from "next/image";
import RelatedLink from "../RelatedLink/RelatedLink";

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import { IoMdTrain } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";

export default function Contact() {
  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  

  return (
    <>
      <SliderMain images={images} heading="Contact Us" />

      <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px] ">
          <div className="w-full  flex gap-4 justify-between  p-2 items-center">
            <div className=" w-64 h-20  p-2 flex gap-3 rounded-lg bg-gray-100">
              <div className=" flex justify-center items-center">
                <FaLocationDot
                  size={50}
                  className=" text-purple-400 bg-white rounded-full  p-2 "
                />
              </div>
              <div className=" flex  flex-col">
                <h1 className="text-black text-lg font-semibold capitalize">
                  Address
                </h1>
                <h2 className=" text-xs">
                   LNCT, INDORE, Madhya Pradesh
                </h2>
              </div>
            </div>
            <div className=" w-64 h-20  p-2 flex gap-3 rounded-lg bg-gray-100">
              <div className=" flex justify-center items-center">
                <MdEmail
                  size={50}
                  className=" text-purple-400 bg-white rounded-full  p-2 "
                />
              </div>
              <div className=" flex  flex-col">
                <h1 className="text-black text-lg font-semibold capitalize">
                  Email
                </h1>
                <h2 className=" text-xs">lnct@gmailcom</h2>
              </div>
            </div>
            <div className=" w-64 h-20  p-2 flex gap-3 rounded-lg bg-gray-100">
              <div className=" flex justify-center items-center">
                <FaHeadphones
                  size={50}
                  className=" text-purple-400 bg-white rounded-full  p-2 "
                />
              </div>
              <div className=" flex  flex-col">
                <h1 className="text-black text-lg font-semibold capitalize">
                  Phone Number
                </h1>
                <h2 className=" text-xs">(0661) 246 - 2020 / 2002</h2>
              </div>
            </div>
          </div>
          <div className="w-full   p-2 flex justify-between gap-2  ">
            <div className="w-1/2 "></div>
            <div className="w-1/2  bg-gray-100 p-2">
              <h1 className="p-2 text-black font-semibold text-xl my-3 ">
                How to Reach  LNCT
              </h1>

              <div className="w-full  p-2 bg-gray-50 my-2">
                <div className="flex p-3 gap-5 items-center">
                  <FaRoad
                    size={60}
                    className=" text-purple-400 rounded-full border-8 p-2 border-purple-400 bg-white"
                  />
                  <h1 className=" font-semibold text-xl ">By Train</h1>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque corporis nobis nemo perspiciatis laborum aut quod
                    voluptates velit impedit, ea distinctio facilis ratione.
                  </p>
                </div>
              </div>
              <div className="w-full  p-2 bg-gray-50 my-2">
                <div className="flex p-3 gap-5 items-center">
                  <IoMdTrain
                    size={60}
                    className=" text-purple-400 rounded-full border-8 p-2 border-purple-400 bg-white"
                  />
                  <h1 className=" font-semibold text-xl ">By Air</h1>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque corporis nobis nemo perspiciatis laborum aut quod
                    voluptates velit impedit, ea distinctio facilis ratione.
                  </p>
                </div>
              </div>
              <div className="w-full  p-2 bg-gray-50 my-2">
                <div className="flex p-3 gap-5 items-center">
                  <IoAirplane
                    size={60}
                    className=" text-purple-400 rounded-full border-8 p-2 border-purple-400 bg-white"
                  />
                  <h1 className=" font-semibold text-xl ">By Road</h1>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque corporis nobis nemo perspiciatis laborum aut quod
                    voluptates velit impedit, ea distinctio facilis ratione.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center p-4">
            <table className="">
              <thead>
                <tr>
                  <th className="border p-3">City</th>
                  <th className="border p-3">
                    Rail Distance from Indore / Journey time
                  </th>
                  <th className="border p-3">
                    Road distance from Indore / Journey time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-2">Bhopal</td>
                  <td className="border py-2 px-2">135 Km, 1 hrs 30 mins</td>
                  <td className="border py-2 px-2">135 Km, 2hrs 30 mins</td>
                </tr>
                <tr>
                  <td className="border py-2 px-2">Gwalior</td>
                  <td className="border py-2 px-2">413 Km, 6 hrs</td>
                  <td className="border py-2 px-2">525 Km, 9hrs</td>
                </tr>
                <tr>
                  <td className="border py-2 px-2">Dewas</td>
                  <td className="border py-2 px-2">462 Km, 7 hrs</td>
                  <td className="border py-2 px-2">320 Km, 5hrs</td>
                </tr>
                <tr>
                  <td className="border py-2 px-2">Ujjain</td>
                  <td className="border py-2 px-2">166 Km, 3 hrs 30 minutes</td>
                  <td className="border py-2 px-2">222 Km, 4hrs</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <div className="relative h-full ">
            <RelatedLink />
          </div>
        </div>
      </div>
    </>
  );
}
