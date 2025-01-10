import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeClass, setFadeClass] = useState('');

  // Toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      if (!isVisible) {
        setIsVisible(true);
        setTimeout(() => {
          setFadeClass('fade-in'); // Set fade-in class after visibility changes
        }, 10); // A short delay to allow React to update the DOM
      }
    } else {
      if (isVisible) {
        setFadeClass('fade-out'); // Set fade-out class when it should disappear
        setTimeout(() => {
          setIsVisible(false); // Hide after fade-out animation completes
          setFadeClass(''); // Reset fade class
        }, 300); // Match duration with CSS
      }
    }
  };

  // Scroll to the top of the page when clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {isVisible && (
        <div className={`back-to-top-btn ${fadeClass}`} onClick={scrollToTop}>
          <FaArrowUp className="back-to-top-icon" />
        </div>
      )}
    </div>
  );
};

export default BackToTop;
