import DocCard from "@/app/components/DocCard/DocCard";
import RelatedLink from "@/app/components/RelatedLink/RelatedLink";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React from "react";

export default function page() {
  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  return (
    <div>
      <SliderMain images={images} />
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-10 py-10 grid grid-cols-2 gap-10 ">
          <DocCard link="#" heading="Annual Reports 2022-23" />
          <DocCard link="#" heading="Annual Reports 2022-23" />
          <DocCard link="#" heading="Annual Reports 2022-23" />
          <DocCard link="#" heading="Annual Reports 2022-23" />
          <DocCard link="#" heading="Annual Reports 2022-23" />
          <DocCard link="#" heading="Annual Reports 2022-23" />
          <DocCard link="#" heading="Annual Reports 2022-23" />
        </div>

        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 px-4 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
