import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null); // Track which submenu is open

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index); // Toggle the submenu visibility
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">LOGO</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li className={`menu-item ${openSubmenuIndex === 0 ? 'open' : ''}`}>
          <a href="#" onClick={() => toggleSubmenu(0)}>
            NMN <span className="arrow"></span>
          </a>
          <ul className="submenu">
            <li><a href="#">NMN23400</a></li>
            <li><a href="#">新NMN 31200</a></li>
          </ul>
        </li>
        <li className={`menu-item ${openSubmenuIndex === 1 ? 'open' : ''}`}>
          <a href="#" onClick={() => toggleSubmenu(1)}>
            新 納豆精EX <span className="arrow"></span>
          </a>
          <ul className="submenu">
            <li><a href="#">新・納豆精EX SKⅢPREMIUM 10000FU</a></li>
            <li><a href="#">新 納豆精EX PREMIUM 5000FU</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">新還元型CoQ10EX</a>
        </li>
        <li className="menu-item">
          <a href="#">新・歩行力EX</a>
        </li>
        <li className="menu-item">
          <a href="#">お問い合わせ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
