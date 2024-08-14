"use client";

import React, { useEffect, useState } from "react";
import InfiniteMovingCards from "../infinite-moving-cards/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative w-full  ">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "/speaker.JPG",
  },
  {
    image: "/award.JPG",
  },
  {
    image: "/principals.JPG",
  },
  {
    image: "/lnct-awards.jpg",
  },
  {
    image: "/mdsir.jpg",
  },
  {
    image: "/mdmaam.jpg",
  },
];
