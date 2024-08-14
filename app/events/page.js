import React from 'react'
import Events from '../components/Events/Events'
import { getEvent } from '../lib/services/events/events';


export default async function  page() {
    
 
        const eventDatas = await getEvent();
        const eventItemsWithType = eventDatas.map((event) => ({
          ...event,
          type: "event",
        }));
         const eventData= eventItemsWithType;

        

  return (
    <div>
      <Events eventData={eventData}/>
    </div>
  )
}
