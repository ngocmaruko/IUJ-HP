import React, { useEffect } from 'react';
import './Test.css'; // Import the CSS file for styles

const Test = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.lineTrigger');
      const scroll = window.scrollY;
      const windowHeight = window.innerHeight;

      elements.forEach(elem => {
        const elemPos = elem.getBoundingClientRect().top + scroll - 50;

        if (scroll >= elemPos - windowHeight) {
          elem.classList.add('lineanime');
        } else {
          elem.classList.remove('lineanime');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='web-des'>
        <div className="title-wrap">
        <h2 className='title'>WHAT IS IUJ?</h2>
        <h3 class="title-sub shippori"><span>IUJとは？</span></h3>
      </div>
      <div className="lineTrigger">
        <div className="box">
          <span className="text">
            IUJブランドシリーズ <br />
            I＝Industry <br />
            U＝University <br />
            J＝JAPANブランド
          </span>
        </div>
      </div>
      <p className="des-content">
        IUJブランドシリーズは、産学連携を図り、学術研究機関の知見や研究成果を活用した製品を提供致します。<br />
        一製品一原料毎に、最適な原料調達及び最適な配合比率を実現するべく、
        管理栄養士並びに博士、医師を含めたチーム形成の基、設計管理されたブランドシリーズを指します。<br />
        毎日続けて頂く製品こそ、最高品質の原料・最高のスタッフで皆様にご提供をすることが、IUJブランドの使命です。
      </p>
    </div>
  );
};

export default Test;
