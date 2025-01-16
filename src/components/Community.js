import React, { useState } from "react";
import School from '../assets/Communities/School.jpg';
import CityHall from '../assets/Communities/CityHalls.jpg';
import Docks from '../assets/Communities/Docks.jpg';
import PoolShore from '../assets/Communities/PoolShore.jpg';
import ResidentClubs from '../assets/Communities/Resident Clubs.jpg';
import WaterFrontHomes from '../assets/Communities/WaterFrontHomes.jpg';

const CommunitySection = () => {
    const [currentImage, setCurrentImage] = useState(School);


  const communityFeatures = [
    {
      title: "Near School",
      description: "Convenient access to top-rated schools.",
      image: School,
      icon: "🏫", // Example icon
    },
    {
      title: "Waterfront Home",
      description: "Enjoy picturesque lakefront living.",
      image: WaterFrontHomes,
      icon: "🌊",
    },
    {
      title: "Docks",
      description: "Private docks for boating and water activities.",
      image: Docks,
      icon: "🚤",
    },
    {
      title: "Pool",
      description: "Relax and swim in our community pool.",
      image: PoolShore,
      icon: "🏊",
    },
    {
      title: "Resident Clubs",
      description: "Join clubs and connect with neighbors.",
      image: ResidentClubs,
      icon: "🤝",
    },
    {
      title: "City Hall",
      description: "Nearby city hall for your administrative needs.",
      image: CityHall,
      icon: "🏛️",
    },
  ];

  return (
    <section className="community-section">
      {/* Top Part */}
      <div className="community-top">
        {/* Left Column */}
        <div className="community-image">
        <img
            src={currentImage}
            alt="Community Feature"
            className="dynamic-image"
            />
        </div>

        {/* Right Column */}
        <div className="community-cards">
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              className="community-card"
              onClick={() => setCurrentImage(feature.image)} // Update the image
            >
              <div className="card-icon">{feature.icon}</div>
              <div className="card-title">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Part */}
      <div className="community-description">
        <h2>Why Choose Candlewood Shores?</h2>
        <p>
          Candlewood Shores offers residents exclusive access to one of the most beautiful private beaches on
          Candlewood Lake, complete with lifeguard supervision from Memorial Day to Labor Day and a swim dock
          for endless summer enjoyment.
        </p>
        <p>
          The community features excellent recreational facilities including a large ball field, basketball
          and volleyball courts, and an impressive children's playground, making it perfect for families and
          active lifestyles.
        </p>
        <p>
          Boating enthusiasts will appreciate the convenient boat ramp with dock facilities for launching
          watercraft, along with storage racks for kayaks, paddleboards, and canoes, plus moorings located
          about 50 feet from the shore.
        </p>
        <p>
          The recently renovated clubhouse serves as a vibrant community hub, hosting various annual events
          like holiday celebrations and providing a rentable space for residents to organize their own
          gatherings.
        </p>
        <p>
          With approximately 500 families calling it home, Candlewood Shores offers a strong sense of
          community governance through monthly board meetings and annual gatherings, ensuring residents have
          a voice in maintaining this private lakeside paradise.
        </p>
      </div>
    </section>
  );
};

export default CommunitySection;
