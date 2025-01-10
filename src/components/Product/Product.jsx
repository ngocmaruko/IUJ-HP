import React from 'react';
import './Product.css';
import FadeInUp from '../FadeInUp/FadeInUp';
import PurchaseButton from '../PurchaseButton/PurchaseButton';

const Product = ({ product }) => {
  const { title, images, content, purchaseLink } = product;
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
    <FadeInUp delay={0}>
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
             <PurchaseButton link={purchaseLink} />
          </div>
          
          <div className="product-info">
            <h2 className="product-title">{title}</h2>
            <div className="info-columns">
              <div className="info-column">
                <h3 className="info-title">内容量</h3>
                <p className="info-text">{content.quantity}</p>
              </div>
              <div className="info-column">
                <h3 className="info-title">原産国</h3>
                <p className="info-text">{content.origin}</p>
              </div>
              <div className="info-column">
                <h3 className="info-title">品目</h3>
                <p className="info-text">{content.type}</p>
              </div>
            </div>
            <h3 className="info-title">希望小売価格</h3>
            <p className="info-text">{content.price}</p>
            <h3 className="info-title">カプセル情報</h3>
            <p className="info-text">{content.capsuleInfo}</p>
            <h3 className="info-title">原材料</h3>
            <p className="info-material">
              {content.ingredients.map((item, index) => (
                <span key={index} className="info-material-item">{item}</span>
              ))}
            </p>
            <h3 className="info-title">含まれるアレルギー</h3>
            <p className="info-text">{content.allergies}</p>
            <h3 className="info-title">保存方法</h3>
            <p className="info-text">{content.storage}</p>
            <h3 className="info-title">栄養成分情報</h3>
            <p className="info-text" dangerouslySetInnerHTML={{ __html: content.nutrition }} />
            <h3 className="info-title">召し上がり方</h3>
            <p className="info-text">{content.usage}</p>
            <h3 className="info-title">取り扱い上の注意</h3>
            <p className="info-text" dangerouslySetInnerHTML={{ __html: content.precautions }} />
          </div>
        </div>
      </section>
    </FadeInUp>
  );
};

export default Product;
