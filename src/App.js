// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './assets/logo.png';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import './App.css';
import Footer from './components/Footer/Footer';
import NMN23400 from './Pages/Products/NMN23400';
import Natto10000 from './Pages/Products/Natto10000';
import Natto5000 from './Pages/Products/Natto5000';
import NMN31200 from './Pages/Products/NMN31200';
import CoQ10EX from './Pages/Products/CoQ10EX';
import Confirmation from './Pages/Contact/Confirmation';
import ThankYou from './Pages/Contact/ThankYou';
import Contact from './Pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';
import Hokoryoku from './Pages/Products/Hokoryoku';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import BackToTop from './components/BackToTop/BackToTop';

const App = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleSplashAnimationEnd = () => {
        setIsContentVisible(true); 
    };

    return (
        <Router basename="/IUJ">
            <div className="App">
                <Navbar logo={logo} />
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home onSplashEnd={handleSplashAnimationEnd} />} />
                    <Route path='/products/NMN23400' element={<NMN23400 />} />
                    <Route path='/products/NMN31200' element={<NMN31200 />} />
                    <Route path='/products/Natto10000' element={<Natto10000 />} />
                    <Route path='/products/Natto5000' element={<Natto5000 />} />
                    <Route path='/products/CoQ10EX' element={<CoQ10EX />} />
                    <Route path='/products/hokoryoku' element={<Hokoryoku />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                </Routes>
                {isContentVisible && <LanguageSelector />} {/* Show LanguageSelector after splash */}
                <BackToTop />
                <Footer logo={logo} />
            </div>
        </Router>
    );
};

export default App;
