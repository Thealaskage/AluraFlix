import React from 'react';
import './VideoCard.css';

const VideoCard = ({ image, title, category }) => {
  return (
    <div className={`video-card ${category}`}>
      <img src={image} alt={title} className="video-image" />
      <div className="video-info">
        <p>{title}</p>
        <div className="video-actions">
          <button>Borrar</button>
          <button>Editar</button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
