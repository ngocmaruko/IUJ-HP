import React from 'react';
import './Footer.css';

const Footer = ({logo}) => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <h1 className="logo-image">
          <img src={logo} alt="Company Logo" />
        </h1>
      </div>

      <ul className="footer-links">
        <li className="footer-item">
          <h4 className="footer-jp-title">
            <a href="https://www.held.jp/contact/" target="_blank" rel="noopener noreferrer">
              お問い合わせフォームはこちらから
            </a>
          </h4>
          <p className="footer-description">お気軽にお問い合わせください</p>
        </li>
        <li className="footer-item">
          <h4 className="footer-en-title">
            <small>TEL.</small>03-5840-8435
          </h4>
          <p className="footer-description">東京本社</p>
        </li>
        <li className="footer-item">
          <h4 className="footer-en-title">
            <small>TEL.</small>06-6942-2532
          </h4>
          <p className="footer-description">大阪支社</p>
        </li>
      </ul>

      <p className="footer-copy">Held, Ltd.</p>

      {/* Mobile CTA Section */}
      <div className="cta">
        <ul>
          <li>
            <a href="https://www.held.jp/contact/" alt="メールでお問い合わせ">メール</a>
          </li>
          <li>
            <a href="tel:03-5840-8435">
              <i className="fa-solid fa-square-phone"></i>
              <i className="fas fa-phone-alt"></i>
              東京本社
            </a>
          </li>
          <li>
            <a href="tel:06-6942-2532">
              <i className="fa-solid fa-square-phone"></i>
              <i className="fas fa-phone-alt"></i>
              大阪支社
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
