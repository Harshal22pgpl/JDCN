"use client";
import Image from "next/image";
import React from "react";
import Counter from "@/app/components/Counter";

export default function AcademicEngineering() {
  return (
    <>
      <div className="w-full flex h-[650px]  ">
        <div className="w-[850px] h-full flex flex-col justify-center items-center p-4 ">
          <h1 className="text-4xl font-semibold flex items-center text-purple-600 ">
            Engineering at -LNCT INDORE
          </h1>
          <p className="text-black text-justify pt-2">
            {" "}
            NIT Rourkela is one of the institutes of national importance under
            Ministry of Education, Government of India. Government of India has
            elevated the Regional Engineering College, Rourkela to an autonomous
            institution under the name of National Institute of Technology,
            Rourkela.
          </p>
        </div>
        <div className="w-full  relative -z-10 ">
          {" "}
          <Image src="/mainImg.jpeg" alt="img" fill />
        </div>
      </div>
      <h1 className="text-3xl bg-purple-600 p-6  text-white "> DEPARTMENT</h1>
      <div className="w-full grid grid-cols-3 justify-around   bg-purple-600 p-4">
        <div className="mx-auto p-4">
          <Image src="/bme.png" alt="img" width={80} height={80} />
          <h1 className="text-xl font-semibold w-80 ">
            Biotechnology and Medical Engineering
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/ce-icon.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">Chemical Engineering</h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/cse.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
            Computer Science and Engineering
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/civil.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
            Computer Science and Engineering
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/me.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
            Computer Science and Engineering
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/ee.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
            Computer Science and Engineering
          </h1>
        </div>
      </div>
      <section>
        <div className=" flex flex-col justify-center  mx-auto items-center p-10">
          <h1 className="text-purple-600 font-light  text-center  text-4xl">
            Engineering @ NITR at a glance
          </h1>
        </div>
        <div className="w-11/12 mx-auto  rounded-full   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dpurple  mb-12">
          <div className=" ">
            <Counter
              initialValue={0}
              targetValue={2000}
              speed={0.001}
              text="Seed"
              textColor="text-purple-600"
              title="First Counter"
              color="bg-[#bd5638]"
            />
          </div>
          <div className=" ">
            <Counter
              initialValue={20}
              targetValue={100}
              speed={100}
              text="Seed"
              textColor="text-green-700"
              title="Second Counter"
              color="bg-[#5a3224]"
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Seed"
              textColor="text-red-600"
              title="Third Counter"
              color="bg-[#223250]"
            />
          </div>

          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Seed"
              textColor="text-red-600"
              title="Third Counter"
              color="bg-[#22472d]"
            />
          </div>
        </div>
      </section>
      <div className=" flex flex-col justify-center  mx-auto items-center p-10">
        <h1 className="text-purple-600 font-light  text-center  text-4xl">
          Engineering is not only about making things work, but about making
          things work better.
        </h1>
        <p className="text-black text-xl">- Henry Petroski</p>
      </div>
    </>
  );
}
