import React, { useState, useEffect, useRef } from "react";
import areaIcon from "../assets/icons/area.jpg";
import bathIcon from "../assets/icons/bath.jpg";
import bedIcon from "../assets/icons/bed.jpg";
import brickIcon from "../assets/icons/bricklayer.png";
import garageIcon from "../assets/icons/garage.png";
import squareFeetIcon from "../assets/icons/squarefeet.jpg";
import communityIcon from "../assets/icons/handshake.png";
import waterFrontIcon from "../assets/icons/waterFront.jpg";

const Amenities = ({ section2Image, title, address, description, details = {} }) => {
  const [animatedValues, setAnimatedValues] = useState({
    bedrooms: 0,
    baths: 0,
    lot: 0,
    squareFeet: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateNumbers = (key, targetValue) => {
        let currentValue = 0;

        const interval = setInterval(() => {
          currentValue = Math.floor(Math.random() * (targetValue + 1));
          setAnimatedValues((prev) => ({ ...prev, [key]: currentValue }));
        }, 50);

        setTimeout(() => {
          clearInterval(interval);
          setAnimatedValues((prev) => ({ ...prev, [key]: targetValue }));
        }, 5000);
      };

      if (details.bedrooms) animateNumbers("bedrooms", details.bedrooms);
      if (details.baths) animateNumbers("baths", details.baths);
      if (details.lot) animateNumbers("lot", details.lot);
      if (details.squareFeet) animateNumbers("squareFeet", details.squareFeet);
    }
  }, [isVisible, details]);

  return (
    <div className="amenities" ref={sectionRef}>
  <div className="amenities-container">
    {/* Left Column */}
    <div className="amenities-column">
      <div className="amenity-item">
        <img src={bedIcon} alt="Bedrooms" className="amenity-icon" />
        <h3>{animatedValues.bedrooms || 0}</h3>
        <span>Bedrooms</span>
      </div>
      <div className="amenity-item">
        <img src={bathIcon} alt="Baths" className="amenity-icon" />
        <h3>{animatedValues.baths || 0}</h3>
        <span>Baths</span>
      </div>
      <div className="amenity-item">
        <img src={areaIcon} alt="Lot" className="amenity-icon" />
        <h3>{animatedValues.lot || 0}</h3>
        <span>Lot</span>
      </div>
      <div className="amenity-item">
        <img src={squareFeetIcon} alt="Area" className="amenity-icon" />
        <h3>{animatedValues.squareFeet || 0}</h3>
        <span>Area sqft</span>
      </div>
    </div>

    {/* Center Column (Gallery) */}
    <div className="gallery">
      <div className="gallery-title">
        <h1>{title}</h1>
        <h3>{address}</h3>
      </div>
      <div className="gallery-main-image">
        <img src={section2Image} alt={title} />
      </div>
      <div className="gallery-description">
        <p>{description}</p>
      </div>
    </div>

    {/* Right Column */}
    <div className="amenities-column">
      <div className="amenity-item">
        <img src={waterFrontIcon} alt="Waterfront" className="amenity-icon" />
        <h3>{details.waterFront || "No"}</h3>
        <span>Waterfront</span>
      </div>
      <div className="amenity-item">
        <img src={garageIcon} alt="Pool Area" className="amenity-icon" />
        <h3>{details.poolArea || "No"}</h3>
        <span>Garage</span>
      </div>
      <div className="amenity-item">
        <img src={communityIcon} alt="Granite Countertops" className="amenity-icon" />
        <h3>{details.graniteCounterTops || "No"}</h3>
        <span>Lake Community</span>
      </div>
      <div className="amenity-item">
        <img src={brickIcon} alt="Stainless" className="amenity-icon" />
        <h3>{details.stainless || "No"}</h3>
        <span>Year Built</span>
      </div>
    </div>
  </div>
</div>
  );
};

export default Amenities;
