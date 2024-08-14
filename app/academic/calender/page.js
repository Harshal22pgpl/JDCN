"use client";
import CalenderCard from "@/app/components/CalenderCard/CalenderCard";
import RelatedLink from "@/app/components/RelatedLink/RelatedLink";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React, { useState } from "react";

export default function Page() {  // Capitalized component name
  const [selectedYear, setSelectedYear] = useState("all"); // Initial year selected

  const pdfData = {
    2024: [
      { year: 2024, title: "PDF Title 2024", link: "/pdfs/pdf_2024.pdf" },
      // Add PDF data for 2024 here if needed
    ],
    2023: [
      { year: 2023, title: "PDF Title 2023", link: "/pdfs/pdf_2023.pdf" },
      // Add PDF data for 2023 here if needed
    ],
    2022: [
      { year: 2022, title: "PDF Title 2022", link: "/pdfs/pdf_2022.pdf" },
      // Add PDF data for 2022 here if needed
    ],
    2021: [
      { year: 2021, title: "PDF Title 2021", link: "/pdfs/pdf_2021.pdf" },
      // Add PDF data for 2021 here if needed
    ],
    2020: [
      { year: 2020, title: "PDF Title 2020", link: "/pdfs/pdf_2020.pdf" },
      // Add PDF data for 2020 here if needed
    ],
    // Add more years and PDF data here if needed
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const images = ["/ar-3.jpg"];
  return (
    <div>
      <SliderMain images={images} heading="academic calender" />

      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-20 ">
          <div className=" w-full  mx-auto py-20 px-5">
            <div className="flex justify-between mb-4">
              <button
                className={`px-4 py-2 text-sm rounded-md ${
                  selectedYear === "all"
                    ? "bg-purple-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={() => handleYearChange("all")}
              >
                All
              </button>
              {Object.keys(pdfData)
                .filter((year) => year !== "all") // Exclude 'all' from the list
                .sort((a, b) => b - a) // Sort in descending order
                .map((year) => (
                  <button
                    key={year}
                    className={`px-4 py-2 text-sm rounded-md ${
                      selectedYear === year
                        ? "bg-purple-500 text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
                    onClick={() => handleYearChange(year)}
                  >
                    {year - 1}-{year}
                  </button>
                ))}
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">
                {selectedYear !== "all"
                  ? `Academic Calender for ${selectedYear}`
                  : "Academic Calender for All Years"}
              </h2>
              <div className="w-full  grid grid-cols-3 gap-5">
                {(selectedYear === "all"
                  ? Object.values(pdfData).flat()
                  : pdfData[selectedYear]
                ).map((pdf) => (
                  <CalenderCard
                    key={pdf.year}
                    link={pdf.link}
                    title={pdf.title}
                    year={pdf.year}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
