import React, { useState, useEffect } from 'react';

// Import your images here
import image1 from '../assets/outside/1.jpg';
import image2 from '../assets/outside/2.jpg';
import image3 from '../assets/outside/3.jpg';
import image4 from '../assets/outside/4.jpg';
import image5 from '../assets/outside/5.jpg';
import image6 from '../assets/outside/6.jpg';

const Section1 = ({ title, address }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images to cycle through
  const images = [image1, image2, image3, image4, image5, image6];

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval); // Clean up the interval
  }, [images.length]);

  return (
    <div id="section1">
      <div id="section1-left">
        <div id="contents">
          <h1>Stunning Waterfront Lake House For Sale</h1>
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>

      <div id="section1-right">
        {/* Loop through images and render the active image */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`fade-image ${
              currentImageIndex === index ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Section1;