// src/components/Gallery.js
import React, { useState } from 'react';
import Amenities from './Amenities';
import propertyData from '../data/propertyData';
import '../index.css';

const Gallery = ({ section2Image, title, address, description, details }) => {

  console.log("Property details:", propertyData.details);

  return (
    <div className="gallery">
      {/* Property Title and Address */}
      <div className="gallery-title">
        <h1>{title}</h1>
        <h3>{address}</h3>
      </div>

      {/* Centered Main Image */}
      <div className="gallery-main-image">
        <img src={section2Image} alt={title} className="main-image" />
      </div>

      {/* Property Description */}
      <div className="gallery-description">
        <p>{description}</p>
      </div>

      {/* Property Details */}
      <div className="gallery-amenities">
        <Amenities details={propertyData.details} />
      </div>
    </div>
  );
};

export default Gallery;
