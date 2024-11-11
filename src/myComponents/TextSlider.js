import React, { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      text: "First slide text",
      imageSrc: "https://via.placeholder.com/300",
    },
    {
      text: "Second slide text",
      imageSrc: "https://via.placeholder.com/300",
    },
    {
      text: "Third slide text",
      imageSrc: "https://via.placeholder.com/300",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative top-24">
      <div className="absolute inset-0 top-12 flex items-center justify-center">
        <img src={slides[currentIndex].imageSrc} alt={slides[currentIndex].text} className="object-cover h-64 w-full" />
      </div>
      <div className="absolute inset-x-0 top-8 flex justify-center bg-gray-900 bg-opacity-50">
        <button onClick={prevSlide} className="mx-2 text-white cursor-pointer">
          Prev
        </button>
        <button onClick={nextSlide} className="mx-2 text-white cursor-pointer">
          Next
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center py-2 bg-gray-900 bg-opacity-50">
        <p className="text-white">{slides[currentIndex].text}</p>
      </div>
    </div>
  );
};

export default Slider;
