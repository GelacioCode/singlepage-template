import React, { useState, useEffect, useRef } from "react";
import areaIcon from "../assets/icons/area.jpg";
import bathIcon from "../assets/icons/bath.jpg";
import bedIcon from "../assets/icons/bed.jpg";
import graniteIcon from "../assets/icons/graniteCounterTops.jpg";
import poolIcon from "../assets/icons/pool.jpg";
import squareFeetIcon from "../assets/icons/squarefeet.jpg";
import stainlessIcon from "../assets/icons/stainless.jpg";
import waterFrontIcon from "../assets/icons/waterFront.jpg";

const Amenities = ({ details = {} }) => {
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
        }, 2000);
      };

      if (details.bedrooms) animateNumbers("bedrooms", details.bedrooms);
      if (details.baths) animateNumbers("baths", details.baths);
      if (details.lot) animateNumbers("lot", details.lot);
      if (details.squareFeet) animateNumbers("squareFeet", details.squareFeet);
    }
  }, [isVisible, details]);

  return (
    <div className="amenities" ref={sectionRef}>

      <div className="amenities-list">
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
          <img src={areaIcon} alt="Acre" className="amenity-icon" />
          <h3>{animatedValues.lot || 0}</h3>
          <span>Lot</span>
        </div>

        <div className="amenity-item">
          <img src={squareFeetIcon} alt="Area" className="amenity-icon" />
          <h3>{animatedValues.squareFeet || 0}</h3>
          <span>Area (sqft)</span>
        </div>

        <div className="amenity-item">
          <img src={waterFrontIcon} alt="Waterfront" className="amenity-icon" />
          <h3>{details.waterFront || "No"}</h3>
          <span>Waterfront</span>
        </div>

        <div className="amenity-item">
          <img src={poolIcon} alt="Pool Area" className="amenity-icon" />
          <h3>{details.poolArea || "No"}</h3>
          <span>Pool Area</span>
        </div>

        <div className="amenity-item">
          <img src={graniteIcon} alt="Granite Countertops" className="amenity-icon" />
          <h3>{details.graniteCounterTops || "No"}</h3>
          <span>Granite Countertops</span>
        </div>

        <div className="amenity-item">
          <img src={stainlessIcon} alt="Stainless" className="amenity-icon" />
          <h3>{details.stainless || "No"}</h3>
          <span>Stainless</span>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
