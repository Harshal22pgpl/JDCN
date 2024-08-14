import React from 'react'

export default function WhyCard({content}) {
  return (
    <div className=' w-74 h-40  shadow-[0_3px_10px_rgb(0,0,255,0.5)]  rounded-lg p-3 flex justify-center items-center text-gray-500 hover:bg-purple-900 hover:text-white transition-all duration-500 cursor-pointer '>
      <p className=' text-center text-sm font-semibold '>
      {content}
      </p>
    </div>
  )
}
