"use client";

import React, { useRef } from "react";
import Image from "next/image";

const Page = ({ images }) => {
  const sliderRef = useRef(null);
  const scrollAmount = 100;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="flex max-w-full overflow-x-scroll scroll-smooth"
          ref={sliderRef}
        >
          {images.map((image) => (
            <Image
              width={300}
              height={150}
              className="m-5 rounded-lg object-cover"
              alt="sliderImage"
              key={image.id}
              src={image.url}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={scrollLeft}
          className="px-4 py-2 mr-2 shadow rounded-md"
        >
          <Image
            alt="image"
            src={"/left-arrow.svg"}
            width={30}
            height={30}
          />
        </button>
        <button onClick={scrollRight} className="px-4 py-2 shadow rounded-md">
          <Image
            alt="image"
            src={"/right-arrow.svg"}
            width={30}
            height={30}
          />
        </button>
      </div>
    </>
  );
};

export default Page;
