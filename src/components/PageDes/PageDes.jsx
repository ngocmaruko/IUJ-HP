import React from 'react';
import './PageDes.css';

const PageDes = ({verticalText, imageSrc, textContainerYoko }) => {
  return (
    <section>
      <div className="title-wrap">
        <h2 className='title'>CONCEPT</h2>
        <h3 className="title-sub shippori"><span>コンセプト</span></h3>
      </div>
      <div className="page-des">
        <div className="text-container">
          <div className="vertical-text">
            <h3 dangerouslySetInnerHTML={{__html: verticalText.title}}　/>
            <p dangerouslySetInnerHTML={{__html: verticalText.content}}/>
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
