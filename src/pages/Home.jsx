import React, { useState } from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import EditVideoModal from '../components/EditVideoModal';
import LazyLoad from 'react-lazyload';

const Home = ({ frontendVideos, backendVideos, innovationVideos, handleDelete, handleSaveEdit, handleAddVideo }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [originalSection, setOriginalSection] = useState('');

  const handleEdit = (video, section) => {
    setSelectedVideo(video);
    setOriginalSection(section);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setOriginalSection('');
  };

  return (
    <div>
      <Banner />
      <div>
        <img src="/img/frontend.png" alt="Front End" />
        <Carousel
          videos={frontendVideos}
          onDelete={handleDelete}
          onEdit={(video) => handleEdit(video, 'frontend')}
          section="frontend"
        />
      </div>
      <div>
        <img src="/img/backend.png" alt="Back End" />
        <Carousel
          videos={backendVideos}
          onDelete={handleDelete}
          onEdit={(video) => handleEdit(video, 'backend')}
          section="backend"
        />
      </div>
      <div>
        <img src="/img/innovacion-y-gestion.png" alt="Innovación y Gestión" />
        <Carousel
          videos={innovationVideos}
          onDelete={handleDelete}
          onEdit={(video) => handleEdit(video, 'innovation')}
          section="innovation"
        />
      </div>
      {selectedVideo && (
        <EditVideoModal
          video={selectedVideo}
          onSave={(updatedVideo)  => {
            handleSaveEdit(updatedVideo, originalSection);
            handleCloseModal();
          }}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Home;
