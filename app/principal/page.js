import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div
        className="w-full h-96 flex justify-center  items-center"
        style={{
          backgroundImage: "url('/logo1.png')",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Principal</h1>
      </div>
      <div className="w-full  border-2 p-20 ">
        <div className=" flex  rounded-xl bg-sky-100">
          <div className="w-1/3 flex flex-col gap-2 bg-purple-300">
            <div className="w-full h-72 border-2 relative overflow-hidden flex justify-center">
              <Image
                src="/principaln.jpg"
                alt="chairman"
                width="200"
                height="100"
              />
            </div>
            <div>
              <h1 className="py-2 px-10 font-bold text-2xl">
              Dr. R. S. Agrawal 
              </h1>
              <h2 className="py-2 px-10 text-lg">Principal -NSHMC</h2>
              <h3 className="py-2 px-10 ">Associate Professor</h3>
            </div>
          </div>
          <div className="w-2/3 p-10">
            <p className="text-sm mb-3">
              A deep sense of joy prevails in the very care of my heart to place
              this official website of Narayanshri Homoeopathic Medical college
              and hospital, Bhopal at your disposal.
              <p>
                Narayan Shree Homoeopathic Medical College & Hospital is fully
                equipped with all facilities in both academic as well as in
                clinical side. We are providing best education and clinical
                training by eminent and specialized physicians and teachers of
                various fields eg. Homoeopathy, Modern Medicine, Surgery,
                Gynaecology, ENT, Ophthalmology etc. Our institute is having
                well equipped hospital and research centre and we are providing
                free consultation and medication to the poor patients.
              </p>
              <p>
                Our main aim is to take initiative to give a platform to budding
                homoeopaths to enrich and enhance the knowledge base and at the
                same time strengthen the skill sets with the latest development
                in medical science. This will also give a platform to reach out
                to the society and impart best of the health care and awareness
                to the society.
              </p>
              The popularity of this institute has grown over the years and
              today it is one of the pioneer homoeopathic institutions in the
              state of Madhya Pradesh. This is due to the continuous support of
              the CCH, Government of M.P. and Barkatullah university, as well
              as, continuous teamwork of the institution’s faculty, staff,
              students. In last, I welcome you to join us, I hope that you will
              take this institution a long way with the helpful hands of
              Homoeopathy fraternity.
            </p>
            <p>
              <h1>Warm regards,</h1>
              <h1>Dr. R.S. Agrawal

</h1>
              <h1>Principal & Hospital Superintendent</h1>
              <h1>-NSHMC Bhopal</h1>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
