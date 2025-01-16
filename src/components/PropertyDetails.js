import React, { useState, useEffect } from "react";

const PropertyDetails = ({
  title,
  subheading,
  longDescription,
  images = [], // Array of images for the carousel
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(slideInterval); // Clear the interval when the component unmounts
  }, [images.length]);

  // Split the description into sentences
  const sentences = longDescription.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/);

  // Determine whether truncation is necessary
  useEffect(() => {
    if (sentences.length > 5) {
      setIsTruncated(true);
    }
  }, [sentences]);

  const truncatedDescription = sentences.slice(0, 5).join(" ");

  return (
    <div className="property-details-container">
      <div className="property-details-content">
        {/* Subheading */}
        <h3 className="property-details-subheading">House Floor Plan</h3>

        {/* Title */}
        <h1 className="property-details-title">{title}</h1>

        {/* Long Description */}
        <p className="property-details-description">
          {isTruncated && !isExpanded ? truncatedDescription : longDescription}
          {isTruncated && (
            <button
              className="property-details-readmore"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      </div>

      <div className="property-details-carousel">
        {/* Large Preview of Selected Image */}
        <div
          className="property-details-carousel-preview"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="property-details-carousel-image"
            />
          ))}
        </div>

        {/* Thumbnails for Image Selection */}
        <div className="property-details-carousel-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`property-details-thumbnail ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)} // Change displayed image on click
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
