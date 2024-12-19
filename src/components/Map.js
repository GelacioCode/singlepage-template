import React from 'react';

const Map = ({ title, contactLink }) => {
    const mapEmbedUrl =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.038639194221!2d-73.40973398459742!3d41.46684597925742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7f6a5a1a5e0ff%3A0x8f08748d6d6f2f6d!2s75%20S%20Lake%20Shore%20Dr%2C%20Brookfield%2C%20CT%2006804%2C%20USA!5e0!3m2!1sen!2s!4v1699722923491!5m2!1sen!2s" ;
    
    const handleButtonClick = () => {
        window.location.href = contactLink; // Redirect to the specified link
      };

    return (
      <div className="map-section">
        <h2 className="map-title">Where You'll Be</h2>
        <div className="map-container">
          <iframe
            title="Google Map"
            src={mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        {/* Contact Button */}
        <div className="contact-button-container">
            <button className="contact-button" onClick={handleButtonClick}>
            Contact Now
            </button>
        </div>
      </div>
    );
  };

  export default Map;
