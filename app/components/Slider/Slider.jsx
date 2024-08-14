"use client";

import React, { useRef } from "react";

import Image from "next/image";
import DeptFacultyCard from "../DeptFacultyCard/DeptFacultyCard";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Slider({ data }) {
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
      <div className="flex justify-center items-center ">
        <div
          className="flex  "
          ref={sliderRef}
        >
          {data.map((d,index) => {
            return <DeptFacultyCard key={index} />;
          })}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={scrollLeft}
          className="px-4 py-2 mr-2 shadow rounded-md"
        >
          <IoIosArrowBack size={30} />
        </button>
        <button onClick={scrollRight} className="px-4 py-2 shadow rounded-md">
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </>
  );
}
