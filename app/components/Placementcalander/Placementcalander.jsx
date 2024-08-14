import Image from "next/image";
import React from "react";
import SliderMain from "../SliderMain/SliderMain";

export default function Placementcalander() {
  const images=[];
  return (
    <>
     <SliderMain images={images} />
      <h1 className=" font-semibold text-4xl border-b-2 p-8 text-center w-3/4 mx-auto border-purple-600 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-b-2xl">
        Placement Process
      </h1>

      <div className=" w-11/12 mx-auto flex  justify-around p-10">
        {" "}
        <div className="  w-80  flex-col flex  items-center p-2 ">
          <h1 className="p-1 font-semibold">Step 1</h1>
          <Image src="/pc1.png" alt="" width={100} height={100} />
          <p className="p-2">
            The company shares the Job Description with the Placement Committee
            with other relevant details via email to LNCT.ac.in
          </p>
        </div>
        <div className="  w-80  flex-col flex  items-center p-2 ">
          <h1 className="p-1 font-semibold">Step 2</h1>
          <Image src="/pc2.png" alt="" width={100} height={100} />
          <p className="p-2">
            Student&apos;s Registration process based on their interest in the JD
          </p>
        </div>
        <div className="  w-80  flex-col flex  items-center p-2 ">
          <h1 className="p-1 font-semibold">Step 3</h1>
          <Image src="/pc3.png" alt="" width={90} height={90} />
          <p className="p-2">
            Sharing CVs of the concerned students and consolidated profile
            sheets with the Company
          </p>
        </div>
        <div className="   w-80  flex-col flex  items-center p-2 ">
          <h1 className="p-1 font-semibold">Step 4</h1>
          <Image src="/pc4.png" alt="" width={100} height={100} />
          <p className="p-2">
            The company sends a shortlist of students and the Recruitment
            Process details to the Placement Office
          </p>
        </div>
        <div className="   w-80  flex-col flex  items-center p-2 ">
          <h1 className="p-1 font-semibold">Step 5</h1>
          <Image src="/pc5.png" alt="" width={100} height={100} />
          <p className="p-2">
            The company conducts a preplacement Talk to provide information
            regarding themselves and other details including roles and profiles
          </p>
        </div>
      </div>
      <div className="  w-11/12 mx-auto flex justify-around p-10">
        {" "}
        <div className="   w-80  flex-col flex  items-center p-2 ">
          <h1 className="p-1 font-semibold">Step 6</h1>
          <Image src="/pc6.png" alt="" width={100} height={100} />
          <p className="p-2">Confirmation & Acknowledgment by the student</p>
        </div>
        <div className="   w-80  flex-col flex  items-center p-2 ">
          <h1 className="p-1 font-semibold">Step 7</h1>
          <Image src="/pc7.png" alt="" width={100} height={100} />
          <p className="p-2">Receipt of Offer Letter from the Company</p>
        </div>
        <div className="   w-80  flex-col flex  items-center p-2 ">
          <h1 className="p-1 font-semibold">Step 8</h1>
          <Image src="/pc8.png" alt="" width={90} height={90} />
          <p className="p-2">
            Freezing candidature of the concerned candidate for the Company by
            the Placement Committee
          </p>
        </div>
        <div className="   w-80  flex-col flex  items-center p-2 ">
          <h1 className="p-1 font-semibold">Step 9</h1>
          <Image src="/pc9.png" alt="" width={100} height={100} />
          <p className="p-2">
            The company completes its selection process and announces the final
            results
          </p>
        </div>
        <div className="   w-80  flex-col flex  items-center p-2 ">
          <h1 className="p-1 font-semibold">Step 10</h1>
          <Image src="/pc10.png" alt="" width={100} height={100} />
          <p className="p-2">
            Conducting Campus Selection Processes (Test / GD / Case Studies /
            PL)
          </p>
        </div>
      </div>
      <p className=" font-light w-5/6 mx-auto">
        Over the years, the training and placement cell has consistently worked
        towards making the recruitment process a hassle-free affair for both the
        recruiters and the students. The scheduling of the selection process
        termed as the slot, is indicated to the recruiting organization. The
        institute also has a dream slot policy. Medi-Caps University prides
        itself on being digitally savvy and has conducted many of the interview
        processes digitally as well. The institute does not follow the practice
        of placement/participation fees.
      </p>
      <h1 className=" font-semibold text-4xl border-b-2 p-8 text-center w-3/4 mx-auto border-purple-600">
        Placement Calendar
      </h1>
      <div className="w-11/12  mx-auto pt-5 pb-10 ml-15">
        <div className="flex  mx-auto justify-center  items-center shadow-[0_20px_50px_rgba(0,_0,_00,_0.3)]">
          <div className="bg-white w-[750px]   h-[360px] text-black  p-10 translate-x-[5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  ">
            <h1 className="text-2xl pb-2 text-center">Placement Calendar</h1>
            <div className=" p-2 justify-center items-center">
              <h1 className="text-xl pb-2 text-center">
                Click Here to Download 👇
              </h1>
              <button className="bg-purple-600 mx-auto flex justify-center items-center w-2/3 hover:bg-purple-500 text-center p-5 rounded-2xl text-white">
                Download
              </button>
            </div>
          </div>
          <div className="">
            <Image src="/audi1.jpeg" alt="asdfghjk" width={700} height={600} />
          </div>
        </div>
      </div>
    </>
  );
}
