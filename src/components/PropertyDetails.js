import React from 'react';

const PropertyDetails = ({ title, subheading, longDescription, longImage }) => {
  return (
    <div className="property-details">
      <div className="details-content">
        {/* Subheading */}
        <h3 className="subheading">{subheading}</h3>
        
        {/* Title */}
        <h1 className="title">{title}</h1>
        
        {/* Long Description */}
        <p className="description">{longDescription}</p>
      </div>
      
      <div className="details-image">
        <img src={longImage} alt={title} className="image" />
      </div>
    </div>
  );
};

export default PropertyDetails;
