import React from 'react';
import PageDes from '../../components/PageDes/PageDes';
import Product from '../../components/Product/Product';
import { products } from '../../assets/data/productData';
import Natto5 from '../../assets/Natto5000_banner.jpg'; 

const Natto5000 = () => {
  const verticalText = {
    title: "【日本ナットウキナーゼ協会審査認定製品　日本初5000FU製品】",
    content: "日国内産納豆菌培養エキス末 ナットウキナーゼNSK-SD使用納豆菌培養エキス末、黒酢もろみ酢、ビタミンE、イチョウ葉エキス末を配合！紅麹原料は一切使用していません。",
  };
  return (
    <div>
      <PageDes
        title="CONCEPT"
        subtitle="コンセプト"
        verticalText={verticalText}
        imageSrc={Natto5}
      />
      <Product product={products.Natto5000} />
    </div>
  );
};

export default Natto5000;
