import React from 'react';
import './PageDes.css';
import NMN23400 from '../../assets/NMN_banner.jpg'

const PageDes = () => {
  return (
    <section>
      <div className="title-wrap">
        <h2 className='title'>CONCEPT</h2>
        <h3 class="title-sub shippori"><span>コンセプト</span></h3>
      </div>
      <div className="page-des">
        <div className="text-container">
          <div className="vertical-text">
            <h3>【人生100年時代！】</h3>
            <p>
              いつまでもあの時のままで
              天然酵母由来の日本国産NMNに唯一無二の
              ※マイクロクラスターを配合した 国内最高クラスの純度99.999％のNMNがここに誕生。</p>
          </div>
        </div>
        <div className="image-container">
          <img src={NMN23400} alt="description" />
        </div>
      </div>
      <div class='text-container-yoko'>
        <h3>NMN（ニコチンアミドモノヌクレオチド）は、</h3>
        <p>近年日本国内のみならず世界でも注目のサプリメントです。
          国内産原料且つ天然酵母由来の純度100％のNMNを1カプセルに260㎎配合し、
          1日あたり260㎎～780㎎のNMNを摂取することができます。
          NMNにはNAD量を増加させ、水素はNADを活性化させる効果があるとされております。
          そこで、日本国内では唯一無二の水素発生原料のマイクロクラスターHDを世界で初めて配合したことにより、NMNのもつ本来の力をより相乗させる効果に
          目し、
          設計された製品が「NMN23400MICROCLUSTERPREMIUM」なのです。
        </p>
      </div>
    </section>
  );
};

export default PageDes;
