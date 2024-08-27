import React, { useState, useEffect } from 'react';
import './Describe.css';

const Describe = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight > document.querySelector('.box-container').offsetTop) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`box-container ${animate ? 'animate' : ''}`}>
      <svg className="box-svg" viewBox="0 0 600 400" preserveAspectRatio="none">
        <path d="M10,10 H590 V390 H10 Z" />
      </svg>
      <div className="text-content">
        <h1>IUJブランドシリーズ</h1>
        <p>
          I = Industry<br />
          U = University<br />
          J = JAPANブランド
        </p>
      </div>
      <div className="additional-content">
        <p>
          IUJブランドシリーズは、産学連携を図り、学術研究機関の知見や研究成果を活用した製品を提供致します。<br />
          一製品一原料毎に、最適な原料調達及び最適な配合比率を実現するべく、<br />
          管理栄養士並びに博士、医師を含めたチーム形成の基、設計管理されたブランドシリーズを指します。<br />
          毎日続けて頂く製品こそ、最高品質の原料・最高のスタッフで皆様にご提供をすることが、IUJブランドの使命です。
        </p>
      </div>
    </div>
  );
};

export default Describe;
