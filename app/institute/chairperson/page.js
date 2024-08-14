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
        <h1 className=" uppercase font-bold text-5xl">chairperson</h1>
      </div>
      <div className="w-full  border-2 p-20 ">
        <div className=" flex  rounded-xl bg-sky-100">
          <div className="w-1/3 flex flex-col gap-2 bg-purple-300">
            <div className="w-full h-72 border-2 relative overflow-hidden flex justify-center items-center">
              <Image
                src="/pratibha.jpg"
                alt="chairman"
                width="200"
                height="100"
              />
            </div>
            <div>
              <h1 className="py-2 px-10 font-bold text-2xl">
                Smt. Pratibha Chouksey
              </h1>
              <h2 className="py-2 px-10 text-lg">
                Managing Trustee and Chairperson
              </h2>
              <h3 className="py-2 px-10 "> LNCT Group</h3>
            </div>
          </div>
          <div className="w-2/3 p-10">
            <p className="text-sm mb-3">
              NARAYAN SHRI HOMOEOPATHIC MEDICAL COLLEGE & HOSPITAL is one of the
              leading Medical College of central, India and I am glad to be the
              Director of this prestigious Institute. This college came in
              existence in the year 1999 and in 14 years today the college has
              developed into a well established medical college. The Institute
              has a renowned faculty, plenty of clinical material and good
              infrastructure for the basic requirement for making of good
              Homoeopathic doctors . Our students are spread all over the India
              and are excelling in their fields. In addition to acquiring sound
              scientific knowledge, good technical and communications skills,
              our students have been nurtured & transformed into compassionate
              good human beings having attitude benifitted to medical
              profession.
              <p>
                In the recent past some of our students have been shown
                outstanding achievements in University and have been honored &
                felicitated for their excellence.
              </p>
              <p>
                Our facilities in education and health care are continuously
                expanding and modernizing. Recently, all efforts are on to start
                Post graduate courses in the Institute.
              </p>
              I hope this website of the college will be helpful for new
              students who wants to make their future in the field of
              Homoeopathy and also for existing students of the college.
              <p>
                I am sure we shall jointly take positive steps to take this
                Institute to further heights. I convey my best wishes to dear
                students, faculty & staff of the Institution.
              </p>
            </p>

            <p className="text-sm mb-3 font-bold">Smt. Pratibha Chouksey</p>
            <p className="text-sm mb-3">Managing Trustee and Chairperson</p>
            <p className="text-sm mb-3">LNCT Group</p>
          </div>
        </div>
      </div>
    </>
  );
}
