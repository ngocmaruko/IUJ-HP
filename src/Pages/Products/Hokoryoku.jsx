import React from 'react';
import PageDes from '../../components/PageDes/PageDes';
import Product from '../../components/Product/Product';
import { products } from '../../assets/data/productData';
import hokoryokuImage from '../../assets/hokoryoku_banner.jpg'; // Ensure you have the correct image path

const Hokoryoku = () => {
  const verticalText = {
    title: "【従来のグルコサミン・コンドロイチンに加えプロテオグリカン・非変成Ⅱ型コラーゲン配合】",
    content: "従来のグルコサミン＆コンドロイチンはそのままに、新たに配合されたプロテオグリカンと非変成Ⅱ型コラーゲンで、軟骨の構成成分は、約75％がⅡ型コラーゲンで、約15％がプロテオグリカンといわれています。",
  };

  const horizontalText = "つまりプロテオグリカンとⅡ型コラーゲンを補うことで、ほとんどの軟骨成分を補うことができるのです。これを同時摂ることは、普段の食事からは、難しいといえます。IUJの新歩行力EXは、グルコサミン・コンドロイチン・MSMの従来成分の他に、軟骨成分の基の「プロテオグリカン」「非変成Ⅱ型コラーゲン」を贅沢に使用した商品となります。";

  return (
    <div>
      <PageDes
        title="PRODUCT"
        subtitle="製品情報"
        verticalText={verticalText}
        imageSrc={hokoryokuImage}
        horizontalTitle="つまりプロテオグリカンとⅡ型コラーゲンを"
        horizontalText={horizontalText}
      />
      <Product product={products.hokoryoku} />
    </div>
  );
};

export default Hokoryoku;
