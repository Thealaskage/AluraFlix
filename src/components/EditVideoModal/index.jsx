import React, { useState, useEffect } from 'react';
import './EditVideoModal.css';

const EditVideoModal = ({ video, onSave, onClose }) => {
  const [title, setTitle] = useState(video.title);
  const [url, setUrl] = useState(video.url);
  const [category, setCategory] = useState(video.category || 'frontend');

  useEffect(() => {
    setTitle(video.title);
    setUrl(video.url);
    setCategory(video.category || 'frontend');
  }, [video]);

  const extractVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'www.youtube.com' && urlObj.searchParams.has('v')) {
        return urlObj.searchParams.get('v');
      } else if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.slice(1);
      } else {
        throw new Error('Invalid YouTube URL');
      }
    } catch (error) {
      console.error('Failed to extract video ID:', error);
    return '';
    }
  };

  const handleSave = () => {
    const id = extractVideoId(url);
    const updatedVideo = { ...video, title, url, id, category };
    onSave(updatedVideo);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <div className="modal-header">EDITAR CARD</div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          className="input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select"
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="innovation">Innovación y Gestión</option>
        </select>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL"
          className="input"
        />
        <div className="modal-actions">
          <button onClick={handleSave} className="save-button">Guardar</button>
          <button onClick={onClose} className="cancel-button">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default EditVideoModal;
