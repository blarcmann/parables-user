import { combineReducers } from 'redux';
import parablesReducer from './parables';
import authReducer from './auth';
import advertReducer from './adverts';

export default combineReducers({
    parables: parablesReducer,
    auth: authReducer,
    adverts: advertReducer
});