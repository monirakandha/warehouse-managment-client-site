import React from 'react';
import AboutBookSelf from '../AboutBookSelf/AboutBookSelf';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import OurFeature from '../OurFeature/OurFeature';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Books></Books>
        <OurFeature></OurFeature>
        <AboutBookSelf></AboutBookSelf>
        </div>
    );
};

export default Home;