import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div
        className="w-full h-96 flex justify-center  items-center"
        style={{
          backgroundImage: "url('/logo1.png')",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl"> Managing Director</h1>
      </div>
      <div className="w-full  border-2 p-20 ">
        <div className=" flex  rounded-xl bg-purple-100">
          <div className="w-1/3 flex flex-col gap-2 bg-sky-100">
            <div className="w-full h-72 border-2 relative overflow-hidden flex justify-center items-center">
              <Image
                src="/dir.jpg"
                alt="chairman"
                width="200"
                height="100"

              />
            </div>
            <div>
              <h1 className="py-2 px-10 font-bold text-2xl">Mr.Suprabhat Chouksey</h1>
              <h2 className="py-2 px-10 text-lg">Managing Director</h2>
              <h3 className="py-2 px-10 "></h3>
            </div>
          </div>
          <div className="w-2/3 p-10">
            <p className="text-sm mb-3">
            Narayan Shree Homoeopathic medical college and Hospital, established in the year 1999 , in Bhopal -the city of lakes and capital of Madhya Pradesh. The college is having an excellent team of experienced faculties imparting high class Homoeopathic medical education, using modern teaching techniques.
The college is serving the humanity and country by producing excellent crop of Homoeopathic doctors, and we are committed towards Homoeopathic medical education to serve the sick providing  rapid , gentle and permanent restoration of health.
Do come be a part of our mission, promise to provide better health to the society by means of Homoeopathic Medical system of medicine. 

            </p>

            <p className="text-sm mb-3">
              Warm regards,
</p>
              <p className="text-sm mb-3 font-bold">
              Mr. Suprabhat Chouksey
              </p>
              <p>Managing Director</p>
              <p>-LNCT Group</p>
         
          </div>
        </div>
      </div>
    </>
  );
}
