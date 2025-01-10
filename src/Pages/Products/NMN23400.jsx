import React from 'react';
import PageDes from '../../components/PageDes/PageDes';
import Product from '../../components/Product/Product';
import { products } from '../../assets/data/productData';
import NMNImage from '../../assets/NMN_banner.jpg';

const NMN23400 = () => {
  const verticalText = {
    title: "【人生100年時代！】",
    content: "いつまでもあの時のままで <br /> 天然酵母由来の日本国産NMNに、唯一無二の ※マイクロクラスターを配合した 国内最高クラスの純度100％のNMNがここに誕生。",
  };

  const textContainerYoko = (
    <>
      <h3>NMN（ニコチンアミドモノヌクレオチド）は、</h3>
      <p>NMNにはNAD量を増加させ、水素はNADを活性化させる効果があるとされております。そこで、日本国内では唯一無二の水素発生原料のマイクロクラスターHDを世界で初めて配合したことにより、NMNのもつ本来の力をより相乗させる効果に目し、設計された製品が「NMN23400 ＆MICROCLUSTER PREMIUM」なのです。</p>
    </>
  );

  return (
    <div>
      <PageDes
        verticalText={verticalText}
        imageSrc={NMNImage}
        textContainerYoko={textContainerYoko}
      />
      <Product product={products.NMN23400} />
    </div>
  );
};

export default NMN23400;
