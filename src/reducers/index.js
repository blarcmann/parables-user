import { combineReducers } from 'redux';
import parablesReducer from './parables';
import authReducer from './auth';

export default combineReducers({
    parables: parablesReducer,
    auth: authReducer
});