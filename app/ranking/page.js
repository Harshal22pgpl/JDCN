import React from "react";
import SliderMain from "../components/SliderMain/SliderMain";
import RelatedLink from "../components/RelatedLink/RelatedLink";
import Image from "next/image";

export default function page() {
  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  return (
    <div>
      <SliderMain images={images} heading="Finance Commitee" />
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-20 ">
          <div className=" border rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto p-3 flex justify-center items-center  bg-gray-100">
            <div className="w-1/3 h-48">
              <Image
                src="/ar-1.jpg" // Replace with your image path
                alt="Description of the image"
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="w-2/3 p-6 flex flex-col">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">NIRF Ranking -2024</h2>
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="p-4 bg-purple-100 rounded flex gap-2 items-center">
<h1 className=" font-bold text-3xl">16</h1>
<h2 className=" text-base">Engineering</h2>
                </div>
                <div className="p-4 bg-lime-100 rounded flex gap-2 items-center">
<h1 className=" font-bold text-3xl">15</h1>
<h2 className=" text-base">Nursing</h2>
                </div>
                <div className="p-4 bg-pink-100 rounded flex gap-2 items-center">
<h1 className=" font-bold text-3xl">19</h1>
<h2 className=" text-base">Pharmacy</h2>
                </div>
                <div className="p-4 bg-sky-100 rounded flex gap-2 items-center">
<h1 className=" font-bold text-3xl">24</h1>
<h2 className=" text-base">Management</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
