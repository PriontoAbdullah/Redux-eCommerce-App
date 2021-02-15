import { combineReducers, compose, createStore } from 'redux';
import CartReducer from "./reducers/CartReducer";
import ProductReducer from './reducers/ProductsReducer';


const root = combineReducers({
	ProductReducer, CartReducer
});

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(root, composeEnhancers());



export default store;
