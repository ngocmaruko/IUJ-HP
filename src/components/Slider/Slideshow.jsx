import React from 'react';
import Slider from 'react-slick';
import './Slideshow.css';
import NMN23400 from '../../assets/NMN_banner.jpg'
import NMN31200 from '../../assets/NMN31200_banner.jpg'
import Natto10000 from '../../assets/Natto10000_banner.jpg'
import Natto5000 from '../../assets/Natto5000_banner.jpg'
import CoQ10EX from '../../assets/CoO10EX_banner.jpg'
import hokoryoku from '../../assets/hokoryoku_banner.jpg'

const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Adjust speed for smoother transitions
        fade: true, // Enable fade transitions
        autoplay: true,
        autoplaySpeed: 3000, // Adjust for slower or faster transitions
        arrows: false,
        pauseOnHover: true
    };

    return (
        <div className="slideshow">
            <Slider {...settings}>
            <div className="slide">
                    <img src={NMN31200} alt="Slide 1" />
                </div>
                <div className="slide">
                    <img src={NMN23400} alt="Slide 2" />
                </div>
                <div className="slide">
                    <img src={Natto10000} alt="Slide 3" />
                </div>
                <div className="slide">
                    <img src={Natto5000} alt="Slide 4" />
                </div>
                <div className="slide">
                    <img src={CoQ10EX} alt="Slide 5" />
                </div>
                <div className="slide">
                    <img src={hokoryoku} alt="Slide 6" />
                </div>
            </Slider>
        </div>
    );
};

export default Slideshow;
