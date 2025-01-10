import React, { useState, useEffect } from 'react';
import './Describe.css';

const Describe = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100 && !isAnimating) {
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimating]);

  return (
    <div className='contain'>
      <div className="title-wrap">
        <h2 className='title'>WHAT IS IUJ?</h2>
        <h3 className="title-sub shippori"><span>IUJとは？</span></h3>
      </div>
      <div className={`contact-container ${isAnimating ? 'animate' : ''}`}>
        <svg className="contact-svg" viewBox="0 0 600 150">
          <rect x="10" y="10" width="580" height="130" />
        </svg>
        <div className="contact-content">
          <h2>IUJブランドシリーズ</h2>
          <p>I＝Industry</p>
          <p>U＝University</p>
          <p>J＝JAPANブランド</p>
        </div>
      </div>
      <div className="des-content">
        <p>IUJブランドシリーズは、産学連携を図り、学術研究機関の知見や研究成果を活用した製品を提供致します。<br />
          一製品一原料毎に、最適な原料調達及び最適な配合比率を実現するべく、<br />
          管理栄養士並びに博士、医師を含めたチーム形成の基、設計管理されたブランドシリーズを指します。<br />
          毎日続けて頂く製品こそ、最高品質の原料・最高のスタッフで皆様にご提供をすることが、IUJブランドの使命です。</p>
      </div>
    </div>
  );
};

export default Describe;
