import React, { useState } from 'react';
import Splash from '../../components/Splash/Splash';
import './Home.css';
import Slideshow from '../../components/Slider/Slideshow';
import Test from '../../components/Test/Test';
import ProductSum from '../../components/ProductSum/ProductSum';

const Home = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleSplashAnimationEnd = () => {
    setIsContentVisible(true);
  };

  return (
    <div>
      {!isContentVisible && <Splash onAnimationEnd={handleSplashAnimationEnd} />}
      <div className={`main-content ${isContentVisible ? 'visible' : ''}`}>
        <Slideshow />
        <Test />
        <ProductSum />
        {/* Include PageDes and NewsList if needed */}
      </div>
    </div>
  );
};

export default Home;
