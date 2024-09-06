import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({logo}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Debounce function to limit the rate at which the handleScroll function is called
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 10); // Adjust the debounce time for smoothness

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    if (!isMenuOpen) {
      setOpenSubmenuIndex(null);
    }
  };

  const handleSubmenuClick = (index) => {
    if (isMobile) {
      setOpenSubmenuIndex(prev => (prev === index ? null : index));
    }
  };

  const handleMenuItemClick = (index) => {
    if (isMobile) {
      setIsMenuOpen(false);
      setOpenSubmenuIndex(null);
    }
  };

  const handleClickOutside = useCallback((e) => {
    if (
      isMenuOpen &&
      !e.target.closest('.navbar') &&
      !e.target.closest('.menu-item') &&
      !e.target.closest('.submenu')
    ) {
      setIsMenuOpen(false);
      setOpenSubmenuIndex(null);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li
          className={`menu-item ${openSubmenuIndex === 0 ? 'open' : ''}`}
          onClick={() => handleSubmenuClick(0)}
          onMouseEnter={() => !isMobile && setOpenSubmenuIndex(0)}
          onMouseLeave={() => !isMobile && setOpenSubmenuIndex(null)}
        >
          <Link to="#">
            NMN <span className="arrow"></span>
          </Link>
          <ul className={`submenu ${openSubmenuIndex === 0 ? 'open' : ''}`}>
            <li onClick={() => handleMenuItemClick(0)}>
              <Link to="/products/NMN23400">NMN23400</Link>
            </li>
            <li onClick={() => handleMenuItemClick(0)}>
              <Link to="/products/NMN31200">新 NMN 31200</Link>
            </li>
          </ul>
        </li>
        <li
          className={`menu-item ${openSubmenuIndex === 1 ? 'open' : ''}`}
          onClick={() => handleSubmenuClick(1)}
          onMouseEnter={() => !isMobile && setOpenSubmenuIndex(1)}
          onMouseLeave={() => !isMobile && setOpenSubmenuIndex(null)}
        >
          <Link to="#">
            新 納豆精EX <span className="arrow"></span>
          </Link>
          <ul className={`submenu ${openSubmenuIndex === 1 ? 'open' : ''}`}>
            <li onClick={() => handleMenuItemClick(1)}>
              <Link to="/products/Natto10000">新 納豆精EX SKⅢPREMIUM 10000FU</Link>
            </li>
            <li onClick={() => handleMenuItemClick(1)}>
              <Link to="/products/Natto5000">新 納豆精EX PREMIUM 5000FU</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item" onClick={() => handleMenuItemClick(null)}>
          <Link to="/products/CoQ10EX">新 還元型CoQ10EX</Link>
        </li>
        <li className="menu-item" onClick={() => handleMenuItemClick(null)}>
          <Link to="/products/hokoryoku">新 歩行力EX</Link>
        </li>
        <li className="menu-item" onClick={() => handleMenuItemClick(null)}>
          <Link to="/contact">お問い合わせ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
