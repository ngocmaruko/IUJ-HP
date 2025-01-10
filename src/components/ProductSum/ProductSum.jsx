import React from 'react';
import './ProductSum.css';
import { Link } from 'react-router-dom';
import FadeInUp from '../FadeInUp/FadeInUp';
import { products as productData } from '../../assets/data/productData';

import NMN31200 from '../../assets/NMN31200/NMN31200_set.jpg';
import NMN23400 from '../../assets/NMN23400/NMN_set.jpg';
import Natto10000 from '../../assets/natto10000/nattokinase10000_set.jpg';
import Natto5000 from '../../assets/natto5000/natto5000.jpg';
import CoQ10EX from '../../assets/CoQ10EX/Coq10_set.jpg';
import hokoryoku from '../../assets/hokoryoku/hokoryoku_set.jpg';

const products = [
  {
    id: 'NMN31200',
    imgSrc: NMN31200,
    imgAlt: "NMN31200 Product Image",
    details: [
      { label: "内容量", value: "45.24g（377mg×120カプセル）" },
      { label: "1カプセル当たりNMN配合量", value: "260mg" },
      { label: "NMN 原料分析純度", value: "100%" },
      { label: "希望小売価格", value: "75,384円(税込)" },
    ],
    link: "/products/NMN31200"
  },
  {
    id: 'NMN23400',
    imgSrc: NMN23400,
    imgAlt: "NMN23400 Product Image",
    details: [
      { label: "内容量", value: "33.93g（377mg×90カプセル）" },
      { label: "1カプセル当たりNMN配合量", value: "260mg" },
      { label: "NMN 原料分析純度", value: "100%" },
      { label: "希望小売価格", value: "64,584円(税込)" },
    ],
    link: "/products/NMN23400"
  },
  {
    id: 'Natto10000',
    imgSrc: Natto10000,
    imgAlt: "Natto10000 Product Image",
    details: [
      { label: "内容量", value: "52.92g（294㎎×180カプセル）" },
      { label: "ナットウキナーゼ活性", value: "10000FU（3カプセルあたり）" },
      { label: "希望小売価格", value: "64,584円(税込)" },
    ],
    link: "/products/Natto10000"
  },
  {
    id: 'Natto5000',
    imgSrc: Natto5000,
    imgAlt: "Natto5000 Product Image",
    details: [
      { label: "内容量", value: "125.1g（417mg×300カプセル）" },
      { label: "ナットウキナーゼ活性", value: "5000FU（6カプセルあたり）" },
      { label: "希望小売価格", value: "42,984円(税込)" },
    ],
    link: "/products/Natto5000"
  },
  {
    id: 'CoQ10EX',
    imgSrc: CoQ10EX,
    imgAlt: "CoQ10EX Product Image",
    details: [
      { label: "内容量", value: "67.86g（377mg×180カプセル）" },
      { label: "還元型コエンザイムQ10", value: "100mg※" },
      { label: "PQQ（ピロロキノリンキノン二ナトリウム塩）", value: "0.8mg※" },
      { label: "", value: "※2粒あたり" },
      { label: "希望小売価格", value: "53,784円(税込)" },
    ],
    link: "/products/CoQ10EX"
  },
  {
    id: 'hokoryoku',
    imgSrc: hokoryoku,
    imgAlt: "Hokoryoku Product Image",
    details: [
      { label: "内容量", value: "178.2g（330mg×540粒）" },
      { label: "グルコサミン", value: "1200mg※" },
      { label: "コンドロイチン", value: "300mg※" },
      { label: "MSM（メチルサルフォニルメタン）", value: "150mg※" },
      { label: "コンドロイチン", value: "300mg※" },
      { label: "", value: "※6粒あたり" },
      { label: "希望小売価格", value: "53,784円(税込)" },
    ],
    link: "/products/hokoryoku"
  },
];

const ProductSum = () => {
  return (
    <section id="inner" className="product-sum">
      <FadeInUp delay={0}>
        <div className="product-sum-inner">
          <div className="title-wrap">
            <h2 className="title">PRODUCT SUMMARY</h2>
            <h3 className="title-sub"><span>製品概要</span></h3>
          </div>
        </div>
      </FadeInUp>

      {/* Dynamically loop through the products */}
      {products.map((product, index) => {
        // Access the product info from the object using product.id
        const productInfo = productData[product.id]; // Use product.id as a key
        return (
          <FadeInUp key={index} delay={index * 100}>
            <div className={`product-sum-menu-wrap ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="product-sum-menu-img">
                <Link to={product.link}>
                  <img src={product.imgSrc} alt={product.imgAlt} className="product-sum-img" />
                </Link>
              </div>
              <div className="product-sum-menu-txt">
                <h4 className="product-sum-menu-name">{productInfo?.title}</h4>
                <dl className="product-sum-info">
                  {product.details.map((detail, i) => (
                    <React.Fragment key={i}>
                      <dt>{detail.label}</dt>
                      <dd>
                        {/* Check if the label is "希望小売価格" and render it from productInfo */}
                       {detail.label === '希望小売価格' ? productInfo?.content.price : detail.value}
                      </dd>
                    </React.Fragment>
                  ))}
                </dl>
              </div>
            </div>
          </FadeInUp>
        );
      })}
    </section>
  );
};

export default ProductSum;
