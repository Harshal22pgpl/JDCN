import React from 'react'
import ImgSlider from "@/app/components/ImgSlider/ImgSlider"

export default function Eminment() {

    const images = [
        {
            id:1,
            url:"/director.png"
        },
        {
            id:2,
            url:"/director.png"
        },
        {
            id:3,
            url:"/director.png"
        },
        {
            id:4,
            url:"/director.png"
        },
        {
            id:5,
            url:"/director.png"
        },
        {
            id:6,
            url:"/director.png"
        },
    ]
  return (
    <>
    <ImgSlider images={images}/>
    </>
  )
}
