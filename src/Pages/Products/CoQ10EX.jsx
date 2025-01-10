import React from 'react';
import PageDes from '../../components/PageDes/PageDes';
import Product from '../../components/Product/Product';
import { products } from '../../assets/data/productData';
import CoQ10EXImage from '../../assets/CoO10EX_banner.jpg'; // Ensure you have the correct image path

const CoQ10EX = () => {
  const verticalText = {
    title: "【最高の健康サポート！】",
    content: "コエンザイムQ10は、エネルギーの生成をサポートし、体内の酸化ストレスを軽減することで知られています。高品質のコエンザイムQ10を使い、あなたの健康をサポートします。",
  };

  const horizontalText = "コエンザイムQ10（CoQ10）は、体内でエネルギーを生成する重要な成分であり、健康な生活を維持するために不可欠です。私たちの製品は、最高の品質と純度を誇るコエンザイムQ10を使用し、あなたの健康をしっかりとサポートします。";

  return (
    <div>
      <PageDes
        verticalText={verticalText}
        imageSrc={CoQ10EXImage}
        horizontalTitle="コエンザイムQ10（CoQ10）について"
        horizontalText={horizontalText}
      />
      <Product product={products.CoQ10EX} />
    </div>
  );
};

export default CoQ10EX;
