import React from 'react';
import './Product.css'; // Import the CSS file for styling
import image1 from '../../assets/NMN23400/NMN_bot.jpg';
import image2 from '../../assets/NMN23400/NMN_pkg.jpg';
import image3 from '../../assets/NMN23400/NMN_set.jpg';

const images = [image1, image2, image3];

const Product = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <section id='inner'>
      <div className="title-wrap">
        <h2 className='title'>PRODUCT INFORMATION</h2>
        <h3 className="title-sub"><span>商品情報</span></h3>
      </div>
      <div className="product-container">
        <div className="product-slider">
          <div className="image-wrapper">
            <button className="arrow left-arrow" onClick={goToPreviousImage}>
              &lt;
            </button>
            <div className="main-image">
              <img src={currentImage} alt="Product" />
            </div>
            <button className="arrow right-arrow" onClick={goToNextImage}>
              &gt;
            </button>
          </div>
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h2 className="product-title">新NMN 23400 ＆MICROCLUSTER PREMIUM</h2>
          <div className="info-columns">
            <div className="info-column">
              <h3 className="info-title">内容量</h3>
              <p className="info-text">33.93g（377mg×90カプセル）</p>
            </div>
            <div className="info-column">
              <h3 className="info-title">原産国</h3>
              <p className="info-text">日本</p>
            </div>
            <div className="info-column">
              <h3 className="info-title">品目</h3>
              <p className="info-text">健康補助食品</p>
            </div>
          </div>
          <h3 className="info-title">希望小売価格</h3>
          <p className="info-text">59,800円(税抜)</p>
          <h3 className="info-title">原材料</h3>
          <p className="info-material">
            <span className="info-material-item">β-ニコチンアミド・モノヌクレオチド（国内製造）</span>
            <span className="info-material-item">澱粉分解物</span>
            <span className="info-material-item">ヒマワリ油／ゼラチン</span>
            <span className="info-material-item">ステアリン酸Ca</span>
            <span className="info-material-item">微粒ニ酸化ケイ素</span>
            <span className="info-material-item">クエン酸K</span>
            <span className="info-material-item">炭酸K</span>
            <span className="info-material-item">着色料（二酸化チタン）</span>
            <span className="info-material-item">硫酸Mg</span>
            <span className="info-material-item">水素</span>
          </p>
          <h3 className="info-title">含まれるアレルギー</h3>
          <p className="info-text">ゼラチン</p>
          <h3 className="info-title">保存方法</h3>
          <p className="info-text">直射日光、高温多湿を避けて保存してください。</p>
          <h3 className="info-title">栄養成分情報</h3>
          <p className="info-text">
            1カプセル377mgあたり<br />
            エネルギー：1.44kcal ／ たんぱく質：0.19g ／ 脂質：0.008g ／ 炭水化物：0.15g ／ 食塩相当量：0.0004g　/　NMN（ニコチンアミドモノヌクレオチド）：250mg
          </p>
          <h3 className="info-title">お召し上がり方</h3>
          <p className="info-text">
            食品として、一日に1～3カプセルを目安に水などでお召し上がりください。<br />
            一日の摂取目安量をお守りください。<br />
            食生活は、主食、主菜、副菜を目安に、食事のバランスを。
          </p>
          <h3 className="info-title">お取り扱いの注意</h3>
          <p className="info-text">
            開封後はなるべく早くお召し上がりください。<br />
            植物由来の原料を使用しているため、多少色のバラツキが生じる場合がございますが、品質には全く問題ありません。<br />
            万一体質に合わない場合はご利用を中止してください。<br />
            原材料をご確認のうえ、食物アレルギーのある方はご利用をお控えください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
