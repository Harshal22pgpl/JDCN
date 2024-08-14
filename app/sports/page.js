import React from 'react'
import Sports from '../components/Sports/sports'

import SliderMain from '../components/SliderMain/SliderMain'

export default function page() {
    const images = ["/sport.webp", "/sport.webp", "/sport.webp"];
  return (
    <>
    <SliderMain images={images} heading="Sports" />
    
    <Sports/>
    </>
  )
}
