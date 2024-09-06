import React from 'react';
import PageDes from '../../components/PageDes/PageDes';
import Product from '../../components/Product/Product';
import { products } from '../../assets/data/productData';
import NMN3 from '../../assets/NMN31200.jpg'; 

const NMN31200 = () => {
  const verticalText = {
    title: "【人生100年時代！】",
    content: "いつまでもあの時のままで 天然酵母由来の日本国産NMNに唯一無二の ※マイクロクラスターを配合した 国内最高クラスの純度99.999％のNMNがここに誕生。",
  };

  const horizontalText = "NMN（ニコチンアミドモノヌクレオチド）は、近年日本国内のみならず世界でも注目のサプリメントです。国内産原料且つ天然酵母由来の純度100％のNMNを1カプセルに260㎎配合し、1日あたり260㎎～780㎎のNMNを摂取することができます。NMNにはNAD量を増加させ、水素はNADを活性化させる効果があるとされております。そこで、日本国内では唯一無二の水素発生原料のマイクロクラスターHDを世界で初めて配合したことにより、NMNのもつ本来の力をより相乗させる効果に目し、設計された製品が「NMN23400MICROCLUSTERPREMIUM」なのです。";

  return (
    <div>
      <PageDes
        title="CONCEPT"
        subtitle="コンセプト"
        verticalText={verticalText}
        imageSrc={NMN3} // Use the renamed image import here
        horizontalTitle="NMN（ニコチンアミドモノヌクレオチド）は、"
        horizontalText={horizontalText}
      />
      <Product product={products.NMN31200} />
    </div>
  );
};

export default NMN31200;
