import React, { useState, useEffect } from 'react';

const Carousel = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-transform transform ${
            index === currentImageIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ transitionDuration: `${interval / 1000}s` }}
        />
      ))}
    </div>
  );
};

const AwardsRecognition = () => {
  const images = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    // Add more image URLs as needed
  ];

  return (
    <section className="flex">
      <Carousel images={images} />
      {/* Your StatisticsCards component here */}
    </section>
  );
};

export default AwardsRecognition;


