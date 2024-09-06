import React from 'react';
import './PageDes.css';

const PageDes = ({ title, subtitle, verticalText, imageSrc, textContainerYoko }) => {
  return (
    <section>
      <div className="title-wrap">
        <h2 className='title'>{title}</h2>
        <h3 className="title-sub shippori"><span>{subtitle}</span></h3>
      </div>
      <div className="page-des">
        <div className="text-container">
          <div className="vertical-text">
            <h3>{verticalText.title}</h3>
            <p>{verticalText.content}</p>
          </div>
        </div>
        <div className="image-container">
          <img src={imageSrc} alt="description" />
        </div>
      </div>
      <div className='text-container-yoko'>
        {textContainerYoko}
      </div>
    </section>
  );
};

export default PageDes;
