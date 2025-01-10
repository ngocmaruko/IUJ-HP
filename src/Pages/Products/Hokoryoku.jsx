import React from 'react';
import PageDes from '../../components/PageDes/PageDes';
import Product from '../../components/Product/Product';
import { products } from '../../assets/data/productData';
import hokoryokuImage from '../../assets/hokoryoku_banner.jpg';

const Hokoryoku = () => {
  const verticalText = {
    title: "【従来のグルコサミン <br /> ＆コンドロイチン】",
    content: "はそのままに、軟骨成分の大半を占める「プロテオグリカン」と「非変性Ⅱ型コラーゲン」を贅沢に配合致しました。",
  };

  const horizontalText = "";

  return (
    <div>
      <PageDes
        verticalText={verticalText}
        imageSrc={hokoryokuImage}
        textContainerYoko={horizontalText}
      />
      <Product product={products.hokoryoku} />
    </div>
  );
};

export default Hokoryoku;
