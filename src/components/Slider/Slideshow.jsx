import React from 'react';
import Slider from 'react-slick';
import './Slideshow.css'; // Import your custom styles
import NMN23400 from '../../assets/NMN_banner.jpg'
import Natto10000 from '../../assets/Natto10000_banner.jpg'
import Natto5000 from '../../assets/Natto5000_banner.jpg'

const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Adjust speed for smoother transitions
        fade: true, // Enable fade transitions
        autoplay: true,
        autoplaySpeed: 5000, // Adjust for slower or faster transitions
        arrows: false,
        pauseOnHover: true
    };

    return (
        <div className="slideshow">
            <Slider {...settings}>
                <div className="slide">
                    <img src={NMN23400} alt="Slide 1" />
                </div>
                <div className="slide">
                    <img src={Natto10000} alt="Slide 2" />
                </div>
                <div className="slide">
                    <img src={Natto5000} alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
};

export default Slideshow;
