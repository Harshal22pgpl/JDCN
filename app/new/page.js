import React from 'react'
import { TextRevealCard } from '../components/TextRevealCard/TextRevealCard'
import { Lamp } from '../components/Lamp/Lamp'

export default function page() {
  return (
    <div>
      {/* <TextRevealCard text="My Name is Harshal" revealText="I am Harshal Khairnar"/> */}
      <div className=' flex '>
      <Lamp heading="MISSION" content="Check your Internet speed in under 30 seconds. The speed test usually transfers less than 40 MB of data, but may transfer more data on fast connections."/>
      <Lamp heading="VISION" content="lorem hfhof w oweufofufuufnbn"/>
      </div>
    </div>
  )
}
