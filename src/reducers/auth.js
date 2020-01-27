import { LOGIN, FETCH_USER } from '../constants';

const initialState = {
    user: {},
    userDetails: {}
}

export default function auth(state = initialState, action) {
    switch (action.type) {
            case LOGIN:
            let user = Object.assign({}, action.payload);
            return {
                ...state,
                user
            }
            case FETCH_USER:
            let userDetails = Object.assign({}, action.payload);
            return {
                ...state,
                userDetails
            }
        default:
            return state;
    }
}