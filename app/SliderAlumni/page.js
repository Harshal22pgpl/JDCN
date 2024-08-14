import React from "react";
import ImgSlider from "@/app/components/ImgSlider/ImgSlider.jsx";

export default function EminmentSlider() {
  
  const images = [
    {
      id: 1,
      url: "/lnct-awards2.jpg",
    },
    {
      id: 2,
      url: "/md-sir.JPG",
    },
    {
      id: 3,
      url: "/speaker.JPG",
    },
    {
      id: 4,
      url: "/speaker.JPG",
    },
    {
      id: 5,
      url: "/studentgrp.jpg",
    },
    {
      id: 6,
      url: "/teach1.jpg",
    },
    {
      id: 7,
      url: "/speaker.JPG",
    },
    {
      id: 8,
      url: "/studentgrp.jpg",
    },
    {
      id: 9,
      url: "/teach1.jpg",
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl text-center font-bold">Distinguished alumni awardees</h2>
      <div className="overflow-hidden">
        <ImgSlider images={images} />
      </div>
    </div>
  );
}
