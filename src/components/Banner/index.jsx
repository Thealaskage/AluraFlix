import React from 'react';
import YouTube from 'react-youtube';
import './Banner.css';

const Banner = () => {
  const videoOptions = {
    width: '300',
    height: '170',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="banner" style={{ backgroundImage: "url(/img/banner.jpg)" }}>
      <div className="banner-content">
        <div className="badge">
          <img src="/img/frontend.png" alt="Front End Badge" />
        </div>
        <h1>Challenge React</h1>
        <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
      </div>
      <div className="video-placeholder">
        <YouTube videoId="ov7vA5HFe6w" opts={videoOptions} />
      </div>
    </div>
  );
};

export default Banner;
