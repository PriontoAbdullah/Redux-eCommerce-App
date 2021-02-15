import React, { useEffect } from 'react';
import Categories from './Categories';
import Header from './Header';
import Products from './Products';
import SaleOffer from './SaleOffer';

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Header />
			<Categories />
			<Products />
			<SaleOffer />
		</div>
	);
};

export default Home;
