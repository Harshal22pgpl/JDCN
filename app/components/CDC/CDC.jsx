import Image from 'next/image'
import React from 'react'
import SliderMain from '../SliderMain/SliderMain'

export default function CDC() {
    const images = ["/cdc-1.jpg.webp"];
  return (
   <>
   <SliderMain images={images} heading="CDC" />
   <h1 className=" p-10 text-4xl text-center   font-semibold ">
         Career Development Cell<span className="text-red-500"> At  LNCT</span>
        </h1>
    <div className=" w-11/12 flex gap-2 mx-auto   justify-around pt-10 pb-20 ">
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          
          <Image src="/logo1.jpeg" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-purple-400  text-3xl" >12 LPA.</h1>
        </div>
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          
          <Image src="/ibm.png" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-purple-400  text-3xl" >12 LPA.</h1>
        </div>
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          
          <Image src="/ibm.png" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-purple-400  text-3xl" >12 LPA.</h1>
        </div>
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          
          <Image src="/ibm.png" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-purple-400  text-3xl" >12 LPA.</h1>
        </div>
      </div>

      <div className="text-center w-3/4 mx-auto  rounded-b-2xl ">
        <h1 className=" font-semibold text-4xl p-2 ">Regular Activite</h1>
        <p className="text-md pb-2">Department for Career Development</p>
      </div>
      <div className="flex mx-auto  px-20 pt-20">
        <div>
          <h1 className="text-4xl">Our Activities</h1>
          <ul className=" p-10 list-disc">
            <li>
              Arranging in Campus, Pool Campus and Off Campus for Corporate in
              Offline and online Mode.
            </li>
            <li>Aptitude &Training Classes</li>
            <li>Personality Development Training</li>
            <li>Organizing Mock Interviews and GD.</li>
            <li>Mock Tests and Company Specific Training.</li>
            <li>Placed students Interactions.</li>
            <li>Entrepreneurship Cell</li>
            <li>Industry Institute Partnership Cell</li>
          </ul>
        </div>
        <div>
          <Image src="/RA1.png" alt="ok" width={500} height={400} />
        </div>
      </div>
   </>
  )
}
