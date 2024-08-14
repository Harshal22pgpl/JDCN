import React from "react";
import SliderMain from "../components/SliderMain/SliderMain";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import FacultyCard from "../components/FacultyCard/FacultyCard";
import RelatedLink from "../components/RelatedLink/RelatedLink";

export default function page() {
  const images = ["/ar-3.jpg"];
  return (
    <div>
      <SliderMain images={images} heading="health center" />
      <div>
        <div className=" w-11/12 mx-auto  p-3">
          <h1 className="text-4xl font-bold py-2 border-b-4 border-red-500 inline-block ">
            Health Centre
          </h1>
          <div className="w-[650px] h-[540px]  relative my-8 ml-[500px] ">
            <Image src="/a-o.png" alt="image" fill />
            <div className=" absolute w-[620px] h-[320px]  top-24  right-[520px] bg-purple-600 p-8">
              <h1 className="text-3xl font-bold">Health is Wealth</h1>
              <p className=" py-2 text-gray-200 p-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                cumque repellendus id dolore quidem quod, assumenda voluptate,
                nisi sequi delectus, magnam cuma veritatis molestiae incidunt
                autem repudiandae? Voluptates, doloribus modi autem odio magni
                eum neque obcaecati cupiditate excepturi placeat porro a
                repellat quasi iure expedita impedit molestiae cumque. Ratione
                dolore nobis numquam, atque ipsum totam quae explicabo cere
                animi, laudantium, aliquam ipsum adipisci quibusdam sit
                necessitatibus hic deleniti! Tenetur, libero culpa.
              </p>
            </div>
          </div>
          <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
            <div className="w-2/3">
              <h1 className="my-1 p-2">Head of Centre</h1>
              <div className="p-10">

              <FacultyCard />
              </div>
            </div>
            <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
              <RelatedLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
