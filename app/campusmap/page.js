import React from "react";
import CampusMap from "../components/CampusMap/CampusMap";
import Navbar from "@/app/components/Navbar";
import AcademicEngineering from "../components/AcademicEngineering/AcademicEngineering";
import Image from "next/image";

export default function page() {
  return (
    <>
     <div className=" text-purple-600   relative  w-full h-[450px]  mx-auto border-2">
          <Image src="/clg.jpg" alt="" fill />
          </div>
      <CampusMap
        heading="Our buildings"
        paragraph="Biju Patnaik Central Library (BPCL) of NIT Rourkela, named after the legendary industrialist and statesman, and the founding Chairman of Board of Governors of REC Rourkela, is functioning since 1965. It acts as main learning resource centre of the institute which constitutes robust collections in both print and electronic resources. The central library supports teaching and research activities of faculty, students and research scholars. For more details visit http://library.nitrkl.ac.in/. Phone : (0661) 246 2101"
        img="/baggi.jpg"
        heading2="Our buildings"
        paragraph2="Biju Patnaik Central Library (BPCL) of NIT Rourkela, named after the legendary industrialist and statesman, and the founding Chairman of Board of Governors of REC Rourkela, is functioning since 1965. It acts as main learning resource centre of the institute which constitutes robust collections in both print and electronic resources. The central library supports teaching and research activities of faculty, students and research scholars. For more details visit http://library.nitrkl.ac.in/. Phone : (0661) 246 2101"
        img2="/baggi.jpg"
      />
    </>
  );
}
