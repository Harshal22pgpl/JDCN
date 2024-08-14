import FacultyCard from "@/app/components/FacultyCard/FacultyCard";
import GovernorCard from "@/app/components/GovernorCard/GovernorCard";
import RelatedLink from "@/app/components/RelatedLink/RelatedLink";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import Image from "next/image";
import React from "react";

export default function page() {
  const images = ["/ar-3.jpg"];
  return (
    <div>
      <SliderMain images={images} heading="lawn and garden" />
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-20 ">
          <div className=" w-full mx-auto  p-3">
            <h1 className="text-4xl font-bold py-2 border-b-4 border-red-500 inline-block ">
              Overview
            </h1>
            <div className="w-[530px] h-[440px]  relative my-8">
              <Image src="/a-o.png" alt="image" fill />
              <div className=" absolute w-[500px] h-[400px]  top-5 left-[200px] bg-purple-100 p-8">
                <h1 className="text-2xl font-bold">
                  Nature is pleased with simplicity
                </h1>
                <p className=" py-3 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis cumque repellendus id dolore quidem quod, assumenda
                  voluptate, nisi sequi delectus, magnam cum veritatis molestiae
                  incidunt autem repudiandae? Voluptates, doloribus modi autem
                  odio magni eum neque obcaecati cupiditate excepturi placeat
                  porro a repellat quasi iure expedita impedit molestiae cumque.
                  Ratione dolore nobis numquam, atque ipsum totam quae explicabo
                  quam earum commodi illum. Nostrum iusto fugit, quae harum
                  temporibus omnis unde saepe at ab eos, praesentium id nam.
                  Amet numquam repellendus maiores pariatur error a magni
                  exercitationem, fugit facere animi, laudantium, aliquam ipsum
                  adipisci quibusdam sit necessitatibus hic deleniti! Tenetur,
                  libero culpa.
                </p>
              </div>
            </div>
          </div>

          <div className=" w-full  p-3 text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            minima nesciunt sunt reprehenderit quaerat iure molestias corporis
            animi doloremque odit esse praesentium veniam quo quisquam adipisci
            modi, ullam reiciendis asperiores dolores, necessitatibus doloribus
            ipsam cumque beatae dolorem! Laborum reiciendis enim asperiores sint
            laudantium. Sint, explicabo.
          </div>
          <h1 className="my-2 p-2 text-lg text-purple-500 ">
            Professor in Charge
          </h1>
          <div className="px-5 py-2">
            <GovernorCard />
          </div>
        </div>

        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
