"use client";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import Image from "next/image";
import React from "react";
import Counter from "@/app/components/Counter";
import { MdEmail } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function page() {
  const images = ["/ar-3.jpg"];
  return (
    <div>
      <SliderMain images={images} />
      <div className="w-10/12 p-20 mx-auto  flex flex-col gap-4 ">
        <h1 className=" text-center text-3xl font-bold text-purple-600">
          CENTRAL RESEARCH FACILITY
        </h1>
        <h2 className=" text-center">
          Providing central facility of advanced techniques for research in
          various areas of science and technology.
        </h2>
        <div className="flex gap-5 my-5 ">
          <div className="w-1/2 h-[400px]  relative">
            <Image src="/ar-1.jpg" alt="img" fill />
          </div>
          <div className="w-1/2 ">
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              quas temporibus, consectetur ipsa, provident repudiandae voluptas
              quaerat minus, voluptatem fuga est pariatur tenetur similique
              accusamus dolore optio exercitationem veniam aliquam nemo? Aliquam
              inventore corrupti nesciunt harum cum repellendus, libero
              reprehenderit, quas repellat suscipit commodi voluptas?
            </p>
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              quas temporibus, consectetur ipsa, provident repudiandae voluptas
              quaerat minus, voluptatem fuga est pariatur tenetur similique
              accusamus dolore optio exercitationem veniam aliquam nemo? Aliquam
              inventore corrupti nesciunt harum cum repellendus, libero
              reprehenderit, quas repellat suscipit commodi voluptas?
            </p>
          </div>
        </div>

        <section>
          <div className="w-full mx-auto  rounded-full py-10   border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dpurple my-4">
            <div className=" ">
              <Counter
                initialValue={0}
                targetValue={12}
                speed={0.001}
                text="DEPARTMENTS UNDER"
                textColor="text-purple-600"
                title="First Counter"
                color="bg-[#bd5638]"
                textsize="text-base"
              />
            </div>
            <div className=" ">
              <Counter
                initialValue={20}
                targetValue={20}
                speed={100}
                text="HIGHEND INSTRUMENTS"
                textColor="text-green-700"
                title="Second Counter"
                color="bg-[#5a3224]"
                textsize="text-base"
              />
            </div>
            <div className="">
              <Counter
                initialValue={5}
                targetValue={15}
                speed={200}
                text="OTHER INSTRUMENTS
              "
                textColor="text-red-600"
                title="Third Counter"
                color="bg-[#223250]"
                textsize="text-base"
              />
            </div>

            <div className="">
              <Counter
                initialValue={5}
                targetValue={30}
                speed={200}
                text="EXTERNAL BOOKINGS"
                textColor="text-red-600"
                title="Third Counter"
                color="bg-[#22472d]"
                textsize="text-base"
              />
            </div>
          </div>
        </section>

        <div className="w-full  flex gap-4 justify-between  p-2 items-center">
          <div className=" w-72 h-20  p-2 flex gap-3 rounded-lg bg-gray-100">
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
              <h2 className=" text-sm">
                 LNCT, INDORE, Madhya Pradesh, India, 111111
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
              <h2 className=" text-sm">lnct@gmailcom</h2>
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
              <h2 className=" text-sm">(0661) 246 - 2020 / 2002</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
