// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './assets/logo.png';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import NMNFirst from './Pages/NMN23400/NMNFirst';
import './App.css'
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar logo={logo} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/NMN23400' element={<NMNFirst />} />
                </Routes>
                <Footer logo={logo}/>
            </div>
        </Router>
    );
};

export default App;
