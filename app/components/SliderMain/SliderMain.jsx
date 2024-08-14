"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SliderMain({ images, heading }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 1300); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  return (
    <>
      <div className="md:w-full lg:w-full sm:w-full w-full flex justify-center items-center ">
        <h1 className=" absolute text-center text-5xl text-white uppercase z-10">
          {heading}
        </h1>
        <Image
          className="duration-500 w-full min-h-[330px] max-h-[330px]"
          src={images[currentSlide]}
          alt={"i"}
          width={700}
          height={650}
        />
      </div>
    </>
  );
}
