import React from 'react';
import './Popup.css';

const Popup = ({ message }) => {
  return (
    <div className="popup">
      <div className="popup-message">
        {message}
      </div>
    </div>
  );
};

export default Popup;
