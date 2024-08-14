import FacultyCard from "@/app/components/FacultyCard/FacultyCard";
import RelatedLink from "@/app/components/RelatedLink/RelatedLink";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React from "react";

export default function page() {
    const images=[
        "/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"
      ]
  return (
    <div>
      <SliderMain images={images} heading="Former directors" />
      <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-20 pt-[36px]">
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
