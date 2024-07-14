import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NuevoVideo.css';

const NuevoVideo = ({ onAddVideo }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const videoId = videoUrl.split('v=')[1];
    const newVideo = { id: videoId, title, videoUrl, category };
    onAddVideo(newVideo, category);
    setTitle('');
    setCategory('');
    setVideoUrl('');
    navigate('/')
  };

  return (
    <div className="nuevo-video">
      <h2>Nuevo Video</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Título" 
          name="Título"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
        >
          <option value="">Selecciona una categoría</option>
          <option value="frontend">Front End</option>
          <option value="backend">Back End</option>
          <option value="innovation">Innovación y Gestión</option>
        </select>
        <input 
          type="text" 
          placeholder="URL del Video"
          name="Url del Video" 
          value={videoUrl} 
          onChange={(e) => setVideoUrl(e.target.value)} 
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default NuevoVideo;
