'use client';
import React, { useEffect, useState } from 'react';

const images = [
  // Replace with your image URLs
  'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg',
  'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg',
  'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg',
  'image13.jpg', 'image14.jpg', 'image15.jpg', 'image16.jpg',
];

const ImageGrid = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden px-4 py-16">
      {Array.from({ length: 4 }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex justify-center transition-transform duration-700`}
          style={{
            transform: `translateX(${rowIndex % 2 === 0 ? '-' : ''}${Math.min(scrollY / 25, 100)}%)`,
            // opacity: 1 - Math.min(scrollY / 400, 1) // Adjust opacity based on scroll
          }}
        >
          {images.slice(rowIndex * 4, rowIndex * 4 + 4).map((src, index) => (
            <div className="m-2" key={index}>
              <img src={src} alt={`image ${index}`} className="w-24 h-auto" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
