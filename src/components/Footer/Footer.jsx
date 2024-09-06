import React from 'react';
import './Footer.css';
import FadeInUp from '../FadeInUp/FadeInUp';
import { Link } from 'react-router-dom';

const Footer = ({ logo }) => {
  return (
    <FadeInUp delay={0}>
      <div className="footer-container">
        <div className="footer-logo">
          <h1 className="logo-image">
            <img src={logo} alt="Company Logo" />
          </h1>
        </div>

        <ul className="footer-links">
          <li className="footer-item">
            <h5 className="footer-jp-title">
              <Link to="/contact" alt="メールでお問い合わせ">
                お問い合わせフォームはこちらから
              </Link>
            </h5>
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
              <Link to="/contact" alt="メールでお問い合わせ">メール</Link>
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
    </FadeInUp>
  );
};

export default Footer;
