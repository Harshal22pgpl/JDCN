import React from 'react'
import Image from 'next/image'

export default function TimeTable() {
  return (
   
     <>
      <div className="w-full h-screen  relative ">
        {" "}
        <Image src="/mainImg.jpeg" alt="img" fill />
      </div>
     
      
      <h1 className=" font-semibold text-4xl border-b-2 p-8 text-center w-3/4 mx-auto border-purple-600">
      Time Table
      </h1>
      <div className="w-full mx-auto pt-5 pb-10 ml-15">
        <div className="flex  mx-auto justify-center  items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <div className="bg-white w-[750px]   h-[360px] text-black  p-10 translate-x-[5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  ">
            <h1 className="text-2xl pb-2 text-center">Time Table</h1>
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
   
  )
}
