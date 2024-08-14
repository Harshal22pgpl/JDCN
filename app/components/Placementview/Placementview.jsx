import Image from "next/image";
import React from "react";

export default function Placementview() {
  return (
    <>
      <div className=" w-full h-80 bg-cover capitalize flex justify-center items-center "
                style={{ backgroundImage: `url('about-banner.jpg')` }}>

                <h2 className="font-bold text-4xl uppercase  text-center text-white" >
                    PLACEMENT OVERVIEW
                </h2>
                

            </div>
      <div className=" p-10 -z-10  ">
        <h1 className="text-4xl text-center border-b-2  font-semibold ">
          Placement Overview At <span className="text-red-500"></span> LNCT
        </h1> 
        <div className="w-full mx-auto pt-5 ml-15">
          <div className="flex  mx-auto justify-center  items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="bg-white w-[750px]   h-[360px] text-black  p-10 translate-x-[5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] -z-12 ">
              <h1 className="text-2xl pb-2">
                Bridging the Gap Between Institute and Industry
              </h1>
              <p className="  ">
                Our Training and Placement Cell not only onboards companies for
                campus placements but also strives to bridge the gap between the
                institute and industry through various initiatives. We organize
                regular workshops, seminars, and expert sessions to help
                students stay up-to-date with the latest industry trends and for
                their future careers. These initiatives have yielded measurable
                outcomes, as evidenced by our students&apos; high placement rates and
                successful careers after graduation.
              </p>
            </div>
            <div className="">
              <Image
                src="/audi3.jpeg"
                alt="asdfghjk"
                width={700}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl text-center mt-10   font-semibold ">
        Placement <span className="text-red-500">Students </span>
        List{" "}
      </h1>
      <div className=" gap-2 w-11/12 mx-auto flex   justify-around pt-10 pb-20 ">
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          <Image src="/logo1.jpeg" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-purple-400  text-3xl">
            12 LPA.
          </h1>
        </div>
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          <Image src="/ibm.png" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-purple-400  text-3xl">
            12 LPA.
          </h1>
        </div>
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          <Image src="/ibm.png" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-purple-400  text-3xl">
            12 LPA.
          </h1>
        </div>
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          <Image src="/ibm.png" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-purple-400  text-3xl">
            12 LPA.
          </h1>
        </div>
      </div>
    </>
  );
}
