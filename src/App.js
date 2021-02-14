import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/cart" exact component={Cart}/>
    </Router>
  );
}

export default App;
