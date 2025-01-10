import React from 'react';
import PageDes from '../../components/PageDes/PageDes';
import Product from '../../components/Product/Product';
import { products } from '../../assets/data/productData';
import NMN3 from '../../assets/NMN31200_banner.jpg'; 
import Video from '../../components/Video/Video';

const NMN31200 = () => {
  const verticalText = {
    title: "【匠の仕事で完成された究極のNMN】",
    content: "プロの仕事の流儀から、企画開発されたNMN史上最高クラスの製品がここに誕生！1カプセル260mgの高配合NMNサプリメントを是非お試しください。",
  };

  const textContainerYoko = (
    <>
      <h3>NMN（ニコチンアミドモノヌクレオチド）は、</h3>
      <p>NMNにはNAD量を増加させ、水素はNADを活性化させる効果があるとされております。そこで、日本国内では唯一無二の水素発生原料のマイクロクラスターHDを世界で初めて配合したことにより、NMNのもつ本来の力をより相乗させる効果に目し、設計された製品が「NMN31200 MICROCLUSTER PREMIUM」なのです。</p>
    </>
  );

  return (
    <div>
      <PageDes
        verticalText={verticalText}
        imageSrc={NMN3}
        horizontalTitle="NMN（ニコチンアミドモノヌクレオチド）は、"
        textContainerYoko={textContainerYoko}
      />
      <Video />
      <Product product={products.NMN31200} />
    </div>
  );
};

export default NMN31200;
