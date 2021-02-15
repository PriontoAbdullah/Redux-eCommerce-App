import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import ProductDetails from './components/ProductDetails';
import store from './store';

function App() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Nav />
				<Route path="/" exact component={Home} />
				<Route path="/cart" exact component={Cart} />
				<Route path="/details/:id" exact component={ProductDetails} />
				<Footer />
			</Router>
		</Provider>
	);
}

export default App;
