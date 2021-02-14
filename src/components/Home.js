import React from 'react';
import Categories from './Categories';
import Footer from './Footer';
import Header from './Header';
import Products from './Products';
import SaleOffer from './SaleOffer';

const Home = () => {
    return (
        <div>
            <Header />
            <Categories />
            <Products />
            <SaleOffer />
            <Footer />
        </div>
    );
};

export default Home;