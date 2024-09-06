import React, { useState, useEffect } from 'react';
import './Splash.css';

const Splash = ({ onAnimationEnd }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      onAnimationEnd(); // Notify when animation ends
    }, 1000); // Adjust time based on your animation duration

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className={`splash-container ${showSplash ? 'show' : 'hide'}`}>
      <div className="splash-text">INDUSTRY & UNIVERSITY JAPAN</div>
    </div>
  );
};

export default Splash;
