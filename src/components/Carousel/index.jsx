import React from 'react';
import YouTube from 'react-youtube';
import './Carousel.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Carousel = ({ videos = [], onDelete, onEdit, section }) => {
  const videoOptions = {
    height: '180',
    width: '300',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="carousel">
      {videos.map((video) => (
        <div key={video.id} className={`carousel-item ${section}`}>
          <YouTube videoId={video.id} opts={videoOptions} />
          <div className="video-title">{video.title}</div>
          <div className="video-actions">
            <button onClick={() => onDelete(video.id, section)}><FaTrash /></button>
            <button onClick={() => onEdit(video)}><FaEdit /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
