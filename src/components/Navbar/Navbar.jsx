import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    if (!isMenuOpen) {
      setOpenSubmenuIndex(null); // Close all submenus when opening the main menu
    }
  };

  const handleSubmenuClick = (index) => {
    if (isMobile) {
      setOpenSubmenuIndex(prev => (prev === index ? null : index));
    }
  };

  const handleMenuItemClick = (index) => {
    if (isMobile) {
      // Toggle submenu if it has one
      if (index !== null) {
        setOpenSubmenuIndex(prev => (prev === index ? null : index));
      }
      // Close the menu if item has no submenu
      if (index === null) {
        setIsMenuOpen(false);
        setOpenSubmenuIndex(null);
      }
    }
  };

  const handleClickOutside = useCallback((e) => {
    if (isMenuOpen && !e.target.closest('.navbar')) {
      setIsMenuOpen(false);
      setOpenSubmenuIndex(null);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

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
        <li
          className={`menu-item ${openSubmenuIndex === 0 ? 'open' : ''}`}
          onClick={() => handleMenuItemClick(0)}
          onMouseEnter={() => !isMobile && setOpenSubmenuIndex(0)}
          onMouseLeave={() => !isMobile && setOpenSubmenuIndex(null)}
        >
          <a href="#">
            NMN <span className="arrow"></span>
          </a>
          <ul className={`submenu ${openSubmenuIndex === 0 ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <li><a href="#">NMN23400</a></li>
            <li><a href="#">新NMN 31200</a></li>
          </ul>
        </li>
        <li
          className={`menu-item ${openSubmenuIndex === 1 ? 'open' : ''}`}
          onClick={() => handleMenuItemClick(1)}
          onMouseEnter={() => !isMobile && setOpenSubmenuIndex(1)}
          onMouseLeave={() => !isMobile && setOpenSubmenuIndex(null)}
        >
          <a href="#">
            新 納豆精EX <span className="arrow"></span>
          </a>
          <ul className={`submenu ${openSubmenuIndex === 1 ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <li><a href="#">新・納豆精EX SKⅢPREMIUM 10000FU</a></li>
            <li><a href="#">新 納豆精EX PREMIUM 5000FU</a></li>
          </ul>
        </li>
        <li className="menu-item" onClick={() => handleMenuItemClick(null)}>
          <a href="#">新還元型CoQ10EX</a>
        </li>
        <li className="menu-item" onClick={() => handleMenuItemClick(null)}>
          <a href="#">新・歩行力EX</a>
        </li>
        <li className="menu-item" onClick={() => handleMenuItemClick(null)}>
          <a href="#">お問い合わせ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
