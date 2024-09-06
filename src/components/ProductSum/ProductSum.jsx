import React from 'react';
import './ProductSum.css';
import NMN31200 from '../../assets/NMN31200/NMN31200_set.jpg';
import NMN23400 from '../../assets/NMN23400/NMN_set.jpg';
import Natto10000 from '../../assets/natto10000/nattokinase10000_set.jpg';
import Natto5000 from '../../assets/natto5000/natto5000.jpg';
import CoQ10EX from '../../assets/CoQ10EX/Coq10_set.jpg';
import hokoryoku from '../../assets/hokoryoku/hokoryoku_set.jpg';
import { Link } from 'react-router-dom';
import FadeInUp from '../FadeInUp/FadeInUp';


const products = [
  {
    imgSrc: NMN31200,
    imgAlt: "NMN31200 Product Image",
    name: "新 NMN31200 & MICROCLUSTER PREMIUM",
    details: [
      { label: "内容量", value: "45.24g（377mg×120カプセル）" },
      { label: "NMN 原料分析純度", value: "100%" },
      { label: "希望小売価格", value: "未定" },
    ],
    link: "/products/NMN31200"
  },
  {
    imgSrc: NMN23400,
    imgAlt: "NMN23400 Product Image",
    name: "新 NMN23400 & MICROCLUSTER PREMIUM",
    details: [
      { label: "内容量", value: "33.93g（377mg×90カプセル）" },
      { label: "NMN 原料分析純度", value: "100%" },
      { label: "希望小売価格", value: "59,800円(税抜)" },
    ],
    link: "/products/NMN23400"
  },
  {
    imgSrc: Natto10000,
    imgAlt: "Natto10000 Product Image",
    name: "新 納豆精EX10000FU SKⅢPREMIUM",
    details: [
      { label: "内容量", value: "52.92g（294㎎×180カプセル）" },
      { label: "ナットウキナーゼ活性", value: "10000FU（3カプセルあたり）" },
      { label: "希望小売価格", value: "49,800(税抜)" },
    ],
    link: "/products/Natto10000"
  },
  {
    imgSrc: Natto5000,
    imgAlt: "Natto5000 Product Image",
    name: "新 納豆精EX PREMIUM 5000FU",
    details: [
      { label: "内容量", value: "125.1g（417mg×300カプセル）" },
      { label: "ナットウキナーゼ活性", value: "5000FU（6カプセルあたり）" },
      { label: "希望小売価格", value: "39,800円(税抜)" },
    ],
    link: "/products/Natto5000"
  },
  {
    imgSrc: CoQ10EX,
    imgAlt: "CoQ10EX Product Image",
    name: "新 還元型CoQ10EX",
    details: [
      { label: "内容量", value: "67.86g（377mg×180カプセル）" },
      { label: "還元型コエンザイムQ10", value: "100mg※" },
      { label: "PQQ（ピロロキノリンキノン二ナトリウム塩）", value: "0.8mg※" },
      { label: "", value: "※2粒あたり" },
      { label: "希望小売価格", value: "39,800円(税抜)" },
    ],
    link: "/products/CoQ10EX"
  },
  {
    imgSrc: hokoryoku,
    imgAlt: "Hokoryoku Product Image",
    name: "新 歩行力EX MSM＆プロテオグリカン＆非変成Ⅱ型コラーゲン",
    details: [
      { label: "内容量", value: "178.2g（330mg×540粒）" },
      { label: "グルコサミン", value: "1200mg※" },
      { label: "コンドロイチン", value: "300mg※" },
      { label: "MSM（メチルサルフォニルメタン）", value: "150mg※" },
      { label: "コンドロイチン", value: "300mg※" },
      { label: "", value: "※6粒あたり" },
      { label: "希望小売価格", value: "49,800(税抜)" },
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
      {products.map((product, index) => (
        <FadeInUp key={index} delay={index * 100}>
          <div
            className={`product-sum-menu-wrap ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="product-sum-menu-img">
              <Link to={product.link} >
                <img src={product.imgSrc} alt={product.imgAlt} className="product-sum-img" />
              </Link>
            </div>
            <div className="product-sum-menu-txt">
              <h4 className="product-sum-menu-name">{product.name}</h4>
              <dl className="product-sum-info">
                {product.details.map((detail, i) => (
                  <React.Fragment key={i}>
                    <dt>{detail.label}</dt>
                    <dd>{detail.value}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
          </div>
        </FadeInUp>
      ))}
    </section>
  );
};

export default ProductSum;