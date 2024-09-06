import React from 'react';
import PageDes from '../../components/PageDes/PageDes';
import Product from '../../components/Product/Product';
import { products } from '../../assets/data/productData';
import Natto1 from '../../assets/Natto10000_banner.jpg'; 

const Natto10000 = () => {
  const verticalText = {
    title: "【日本ナットウキナーゼ協会審査認定製品　日本初10000FU製品】",
    content: "日本ナットウキナーゼ協会では、ヒト臨床試験をこれまでに10000FUまでのヒト安全性試験が行われてきております。",
  };

  const textContainerYoko = (
    <>
      <p>ヒト臨床試験は日本ナットウキナーゼ協会が審査認定をした、国内製造原料※特許原料納豆菌培養エキス末「NSK-SD」のみを使用された原料に限定されます。その「NSK-SD」を使用した納豆菌培養エキス末（納豆キナーゼ）を、上限値の10000FUの製品を設計開発致しました。※弊社　生物環境学博士　DOCTOR　CHIBA</p>
      <h3>ナットウキナーゼのもつ「めぐり」の部分以外に、</h3>
      <p>特許原料ルンブルクスルベルス末（SKⅢ末）を配合することで、より「うっかりが増えた方」「あれ？これ？が増えてきた方」などに、おすすめのサプリメントです。またW特許原料を贅沢に使用し、新たな可能性を持つ次世代の納豆キナーゼサプリが誕生しました。</p>
    </>
  );

  return (
    <div>
      <PageDes
        title="CONCEPT"
        subtitle="コンセプト"
        verticalText={verticalText}
        imageSrc={Natto1} // Use the renamed image import here
        textContainerYoko={textContainerYoko}
      />
      <Product product={products.Natto10000} />
    </div>
  );
};

export default Natto10000;
