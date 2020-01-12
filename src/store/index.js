import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialstate = {};
const middleware = [thunk];

export const store = createStore(
    rootReducer, initialstate,
    compose(
        applyMiddleware(...middleware)
    ));