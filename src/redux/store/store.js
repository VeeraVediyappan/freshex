import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';
import initialState from './initialState';


export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));