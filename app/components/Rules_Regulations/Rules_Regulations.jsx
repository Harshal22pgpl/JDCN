import React from 'react'
import SliderMain from '@/app/components/SliderMain/SliderMain'
import FacultyCard from '../FacultyCard/FacultyCard';
import Image from 'next/image';
import RuleCard from '../RuleCard/RuleCard';

export default function Rules_Regulations() {
    const images = ["/ar-3.jpg"];
  return (
    <div>
     <SliderMain images={images} heading="Rules and Regulations"/>
     <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px]  grid grid-cols-3  gap-5 justify-evenly pb-10 ">
        <RuleCard bgcolor="bg-red-200" link="/" heading="B.Tech., B.Arch., Int.M.Sc. (5 yr), B.Tech. M.Tech. Dual Degree (5 yr) Summarized"/>
        <RuleCard bgcolor="bg-green-200" link="/" heading="heading"/>
        <RuleCard bgcolor="bg-gray-200" link="/" heading="heading"/>
        <RuleCard bgcolor="bg-purple-200" link="/" heading="heading"/>
        <RuleCard bgcolor="bg-pink-200" link="/" heading="heading"/>
        <RuleCard bgcolor="bg-purple-200" link="/" heading="heading"/>
        <RuleCard bgcolor="bg-lime-200" link="/" heading="heading"/>
        <RuleCard bgcolor="bg-purple-200" link="/" heading="heading"/>
      
        
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
        <div className="relative h-full ">
              <Image
                src="/welcome.jpeg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
        </div>
      </div>
    </div>
    
  )
}
