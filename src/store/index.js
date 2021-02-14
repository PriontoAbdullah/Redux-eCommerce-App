import { combineReducers, createStore } from 'redux';
import ProductReducer from './reducers/ProductsReducer';

const root = combineReducers({
    ProductReducer
});

const store = createStore(root);

export default store;