import React from 'react';
import './Video.css';

const Video = () => {
  return (

      <div className="video-container">
      <div className="title-wrap">
        <h2 className='title'>PRODUCT INTRODUCTION VIDEO</h2>
        <h3 className="title-sub shippori"><span>商品紹介動画</span></h3>
      </div>
      
      <iframe
        width="600"
        height="400"
        src="https://www.youtube.com/embed/JxiWyppIeN8?autoplay=1&mute=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
      </div>
  );
};

export default Video;
