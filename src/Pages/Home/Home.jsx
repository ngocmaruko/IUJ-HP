import React from 'react';
import './Home.css'
import Slideshow from '../../components/Slider/Slideshow';
import PageDes from '../../components/PageDes/PageDes';
import Test from '../../components/Test/Test';
import NewsList from '../../components/NewsList/NewsList';
import ProductSum from '../../components/ProductSum/ProductSum';

const Home = () => {
  return (
    <div>
            <Slideshow />
            <Test />
            <ProductSum />
     
    </div>
  );
};

export default Home;