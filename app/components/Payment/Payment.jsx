import React from 'react'

export default function Payment() {
  return (
    <>
    <div className='bg-green-300 rounded-lg w-1/2 mx-auto p-10'>
        <div className='text-black'>
            <h1 className='text-5xl text-center'>
                HERE SOME INFORMATION
            </h1>
            <h1 className='text-xl pb-5 text-center'>
                HERE SOME INFORMATION
            </h1>
            
        </div>
        <div className=' bg-green-300 flex justify-center items-end gap-5 p-2 '>
           <button className='bg-green-500  p-2 rounded-lg  hover:bg-green-400'>
                HERE BUTTON
           </button>
           <button className='bg-red-500 p-2 rounded-lg hover:bg-red-400 '>
                HERE BUTTON
           </button>
           </div>
           <div className='text-gray-800 text-center'>
          <h1>Thank You </h1>
          <h1 className='text-purple-500'>Clink here to return home page  </h1>
          </div>
    </div>
    </>
  )
}
