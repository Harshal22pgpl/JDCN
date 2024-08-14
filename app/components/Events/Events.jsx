import React from 'react';



export default function Events({eventData}) {
   
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Events at Narain Shree Homeopathic Medical College and Hospital</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {eventData.map((event, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <img className="h-56 w-full object-cover" src={event.imageUrl} alt={event.title} />
                <div className="px-4 py-4">
                  <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{event.enddate}</p>
                  <p className="mt-2 text-base text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
}
