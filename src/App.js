import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import './App.css';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import Popup from './components/Popup';

function App() {
  const [frontendVideos, setFrontendVideos] = useState([
    { id: 'ov7vA5HFe6w', title: 'Qué Significa Pensar Como Programador', url: 'https://www.youtube.com/watch?v=ov7vA5HFe6w', category: 'frontend' },
    { id: '8EGjkxDAAeY', title: 'Ruta de aprendizaje para Desarrollador frontend', url: 'https://www.youtube.com/watch?v=8EGjkxDAAeY', category: 'frontend' },
    { id: '_EFQxTdgw7g', title: 'React, Angular o Vue...', url: 'https://www.youtube.com/watch?v=_EFQxTdgw7g', category: 'frontend' }
  ]);
  const [backendVideos, setBackendVideos] = useState([
    { id: 'eymgiK3y2mU', title: '¿Cuál es el mejor lenguaje para backend?', url: 'https://www.youtube.com/watch?v=eymgiK3y2mU', category: 'backend' },
    { id: '8X2acANBuLk', title: 'Master Class de Spring Boot', url: 'https://www.youtube.com/watch?v=8X2acANBuLk', category: 'backend' },
    { id: 'K1RkG_irE9I', title: 'Express.js Tutorial', url: 'https://www.youtube.com/watch?v=K1RkG_irE9I', category: 'backend' }
  ]);
  const [innovationVideos, setInnovationVideos] = useState([
    { id: 'WZ8U_NHVdhI', title: '¿Qué es Scrum?', url: 'https://www.youtube.com/watch?v=WZ8U_NHVdhI', category: 'innovation' },
    { id: 'Smf2BKwiBmM', title: 'Metodologías Ágiles', url: 'https://www.youtube.com/watch?v=Smf2BKwiBmM', category: 'innovation'},
    { id: '6sF0Or9fk9Y', title: 'Innovación, Diseño y Tecnología', url: 'https://www.youtube.com/watch?v=6sF0Or9fk9Y', category: 'innovation' }
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddVideo = (video, section, isNew = true) => {
    if (section === 'frontend') {
      setFrontendVideos([...frontendVideos, video]);
    } else if (section === 'backend') {
      setBackendVideos([...backendVideos, video]);
    } else if (section === 'innovation') {
      setInnovationVideos([...innovationVideos, video]);
    }
    if (isNew) {
      setPopupMessage('¡Nuevo video agregado con éxito!');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  const handleDelete = (videoId, section) => {
    if (section === 'frontend') {
      setFrontendVideos(frontendVideos.filter(video => video.id !== videoId));
    } else if (section === 'backend') {
      setBackendVideos(backendVideos.filter(video => video.id !== videoId));
    } else if (section === 'innovation') {
      setInnovationVideos(innovationVideos.filter(video => video.id !== videoId));
    }
  };

  const handleSaveEdit = (editedVideo, originalSection) => {
    const updateVideoList = (videoList, setVideoList) => {
      const videoIndex = videoList.findIndex(video => video.id === editedVideo.id || video.title === editedVideo.title);
      if (videoIndex !== -1) {
        const updatedVideos = [...videoList];
        updatedVideos[videoIndex] = editedVideo;
        setVideoList(updatedVideos);
      }
    };

    if (originalSection === editedVideo.category) {
      if (originalSection === 'frontend') {
        updateVideoList(frontendVideos, setFrontendVideos);
      } else if (originalSection === 'backend') {
        updateVideoList(backendVideos, setBackendVideos);
      } else if (originalSection === 'innovation') {
        updateVideoList(innovationVideos, setInnovationVideos);
      }
    } else {
      handleDelete(editedVideo.id, originalSection);
      handleAddVideo(editedVideo, editedVideo.category, false);
    }
  };


  
  return (
    <Router>
      <div className="App">
        <GlobalStyles/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home
           frontendVideos={frontendVideos} 
           backendVideos={backendVideos} 
           innovationVideos={innovationVideos} 
           handleDelete={handleDelete}
           handleSaveEdit={handleSaveEdit} 
           handleAddVideo={handleAddVideo}
            />} 
           />
          <Route path="/nuevo-video" element={<NuevoVideo onAddVideo={handleAddVideo} />} />
        </Routes>
        <Footer/>
        {showPopup && <Popup message={popupMessage} />}
      </div>
    </Router>
  );
}

export default App;
