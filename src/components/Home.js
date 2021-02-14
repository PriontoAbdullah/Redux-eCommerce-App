import React from 'react';
import Categories from './Categories';
import Header from './Header';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Header />
            <Categories />
            <Products />
        </div>
    );
};

export default Home;