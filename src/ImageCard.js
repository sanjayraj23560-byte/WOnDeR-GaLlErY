import React from 'react';

function ImageCard({ title, description, url }) {
  return (
    <div className="card">
      <div className="card-img-wrap">
        <img src={url} alt={title} className="card-img" loading="lazy" />
        <div className="card-overlay">
          <span className="overlay-text">✦ View Photo</span>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <span className="card-tag">Wonder World</span>
      </div>
    </div>
  );
}

export default ImageCard;