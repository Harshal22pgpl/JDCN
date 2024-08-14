import Link from 'next/link'
import React from 'react'


export default function Sports() {
  return (
    <>
     <h1 className='pt-1 px-20 text-md'> <Link href="/" className='text-purple-500' >Home</Link>/Sports</h1>
   <div className=' p-20 pt-10 '>
   

    <h1 className='text-5xl text-gray-700 '>
    Sports 
    </h1 >
    <p className='pt-5 text-gray-800'> LNCT offers a range of sports, both for internal and external participation. Internal sports encompass activities like badminton, table tennis, chess, yoga, etc. External sports include basketball, football, hockey, volleyball, and more. These sports facilities are organized and overseen by students, but they are also open to faculty and staff members. Please refer to the provided rules and timings for accessing these sports facilities.</p>
   </div>
    </>
  )
}
