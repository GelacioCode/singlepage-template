// src/components/Iframe3d.js
import React from 'react';

const Iframe3d = ({ src, title = '3D Embed', width = '100%', height = '500px' }) => (
  <div className="iframe-container">
    <iframe
      src={src}
      title={title}
      width={width}
      height={height}
      className="iframe-3d"
    ></iframe>
  </div>
);

export default Iframe3d;