import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Nav from './components/Nav';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Nav />
				<Route path="/" exact component={Home} />
				<Route path="/cart" exact component={Cart} />
			</Router>
		</Provider>
	);
}

export default App;
