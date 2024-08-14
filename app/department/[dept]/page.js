import DeptEr from '@/app/components/DeptEr/DeptEr'
import React from 'react'

export default function page({params}) {
  const dept=params.dept;
  return (
   <>
   <div>
    <DeptEr dept={dept}/>
   </div>
   </>
  )
}
