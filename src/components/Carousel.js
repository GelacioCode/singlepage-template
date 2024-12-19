// src/components/Carousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const Carousel = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="image-carousel">
      <h2>Inside the House</h2>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image" onClick={() => openModal(image)}>
            <img src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </Slider>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
