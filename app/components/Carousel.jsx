'use client'

import React, { useState, useEffect } from 'react';

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  useEffect(() => {
    // Reset index to 0 and restart scrolling after displaying all images
    if (currentIndex === images.length - 1) {
      const resetIndex = setTimeout(() => {
        setCurrentIndex(0);
      }, interval);
      
      // Clear the timeout when component unmounts or index changes
      return () => clearTimeout(resetIndex);
    }
  }, [currentIndex, images.length, interval]);

  return (
    <div className="relative w-full h-96 overflow-hidden -z-10">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;
