// src/App.js
import React from 'react';
import Slideshow from './components/Slider/Slideshow';
import InquiryForm from './components/InquiryForm/InquiryForm';
import NewsList from './components/NewsList/NewsList';
import Navbar from './components/Navbar/Navbar';
import Describe from './components/Describe/Describe';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Slideshow />
            <Describe />
            <NewsList />
        </div>
    );
};

export default App;
