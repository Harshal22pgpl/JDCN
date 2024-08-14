import GovernorCard from "@/app/components/GovernorCard/GovernorCard";
import RelatedLink from "@/app/components/RelatedLink/RelatedLink";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React from "react";

export default function page() {
  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  return (
    <div>
      <SliderMain images={images} heading="Finance Commitee" />
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-20 ">
          <h1 className="mb-1 p-2 mt-4">
            Buildings and Works Committee (Chairperson)
          </h1>
          <GovernorCard />

          <h1 className="mb-1 p-2 mt-4">
            Buildings and Works Committee (Members)
          </h1>
          <GovernorCard />
          <GovernorCard />
          <GovernorCard />

          <GovernorCard />
          <h1 className="mb-1 p-2 mt-4">
            Buildings and Works Committee (Secretary)
          </h1>
          <GovernorCard />

          <h1 className="mb-1 p-2 mt-4">
            Buildings and Works Committee (Special Invitee)
          </h1>
          <GovernorCard />
          <GovernorCard />
          <GovernorCard />

          <GovernorCard />
        </div>

        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
