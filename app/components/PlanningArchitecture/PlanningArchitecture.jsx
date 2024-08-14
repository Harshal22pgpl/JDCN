"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function PlanningArchitecture() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);
  const images = ["/ar-3.jpg", "/ar-1.jpg", "/ar-2.jpg"];

  return (
    <>
      <div className="md:w-full lg:w-full sm:w-full w-full flex justify-center items-center">
        <h1 className=" absolute text-center text-5xl text-white">
          Planning and Architecture
        </h1>
        <Image
          className="duration-500 w-full min-h-[500px] max-h-[500px]"
          src={images[currentSlide]}
          alt="Hero Image"
          width={700}
          height={650}
        />
      </div>
      <div className=" flex ">
        <div className="  w-full">
          <Image
            src="/archi-about1.jpg"
            alt="archi-about img"
            width={700}
            height={500}
          />
        </div>
        <div
          className="w-full     fill "
          style={{
            background: "url('/ar-bg-1.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-purple-600 text-5xl p-10">About the Department</h1>
          <p className="px-10">
            The Department of Planning and Architecture (PA) was established in
            2013 with the objective of amalgamating the aesthetics and
            technology together into a piece of art, in a creative way, not only
            to fulfil the societal need of shelter and to solve the
            infrastructure problem but also to take care of the emerging concern
            of energy and environmental issues. The department is providing
            multidisciplinary research and teaching programmes in the field of
            architecture and planning. The faculty members have diverse research
            interests and they conduct basic and applied research in the area of
            Sustainable Architecture, Energy Efficient Architecture, Green
            Architecture, Acoustics, Illumination, Landscape Architecture,
            Interior Design, Urban Planning, Transportation Planning,
            Infrastructure Planning, Environmental Planning and Housing
          </p>
        </div>
      </div>
      <div className=" bg-[#af8025]">
        <h1 className="text-center text-4xl text-white font-semibold p-10">
          Our Programs
        </h1>
        <div className=" text-white flex justify-around items-center p-5 h- w-full">
          <div className=" bg-[#af8025]  w-[400px] h-64 border border-[#f59e54]">
            <h1 className=" p-2 text-xl bg-[#bf8c2a] ">Undergraduate</h1>
            <h1 className="text-md p-2 ">B.tech</h1>
            <h1 className="border-b px-4 ">Architecture </h1>

            <h1 className="text-md p-2 ">Admission Through</h1>
            <h1 className="border-b px-4 ">JEE / JEE MAINS</h1>
          </div>
          <div className=" bg-[#af8025] w-[400px]  h-64 border border-[#f59e54]">
            <h1 className=" text-xl p-2 bg-[#bf8c2a] ">Research</h1>

            <h1 className="text-md p-2">Ph.D.</h1>
            <h1 className="border-b px-4">Planning and Architecture</h1>
            <h1 className="text-md p-2">M.Tech</h1>
            <h1 className="border-b px-4">Planning and Architecture</h1>
          </div>
        </div>
      </div>
    </>
  );
}
