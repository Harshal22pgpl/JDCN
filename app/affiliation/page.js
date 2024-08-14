import React from "react";
import RelatedLink from "../components/RelatedLink/RelatedLink";

export default function page() {
  return (
    <>
      <div
        className="w-full border-2 h-96 flex justify-center  items-center"
        style={{
          backgroundImage: "url('/nsimg.jpg')",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">
          Affiliation and Approval
        </h1>
      </div>
      <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-12 pt-[36px] flex flex-col gap-4">
          <h1 className=" font-bold text-xl">
            Approved by National Commission for Homoeopathy, Ministry of AYUSH,
            Govt. of India
          </h1>
          <h1 className=" font-bold text-xl">
            Affiliated to Madhya Pradesh Medical Science University, Jabalpur
            (M.P.)
          </h1>
          <p>
            Suresh Kumar Educational &amp; Social Welfare Society, Bhopal.,
            registered in 2008 (registration No. 01/01/01/19406/08 dated 23th
            Aug. 2008 Under M.P. Society Registration Act. 1973 by the
            registrar, firms and society M.P.) Established First Private
            Engineering College of Bhopal named LAKSHMI NARAIN COLLEGE OF
            TECHNOLOGY (LNCT) in the year 1994-95.
          </p>
          <p>
            Since 1999 Suresh Kumar Educational &amp; Social Welfare Society,
            Bhopal. is running Homoeopathic Medical College &amp; Hospital,
            named as NARAYAN SHREE HOMOEOPATHIC MEDICAL COLLEGE &amp; HOSPITAL,
            CLINICAL &amp; RESEARCH CENTRE. This institute does not receive any
            grant-in aid or any financial help from the Government of India or
            the state government. It is running exclusively on its own
            resources. The college is situated at Pushpa Nagar, Near Main
            Railway Station, Bhopal.
          </p>
          <p>
            College is located at Bhopal, the capital of Madhya Pradesh. Bhopal
            is beautiful and historical city. There are number of historical
            places like Bhojpur (Mahadev Temple), Bhim Betka, Sanchi, Rani
            Kamlapati Mahal, Sadar Manzil and an ancient palace with Mughal
            Garden at Halalpura near Bhopal. Bhopal city is situated on the
            fringe of Malwa and hence it is endowed with a moderate climate with
            cool nights and pleasant weather round the year. It is a city famous
            for lakes which are life line for the inhabitants. There are number
            of water bodies near about Bhopal such as Kairwa Projec, Ajanl Dam,
            Hathai Khera Project and Kolar Dam and greenery around Bhopal makes
            it comparable with Bangalore and other beautiful cities of the
            country.
          </p>
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0  py-10 ">
          <RelatedLink />
        </div>
      </div>
    </>
  );
}
