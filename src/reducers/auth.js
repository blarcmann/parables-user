import { SIGN_UP } from '../actions/action-constants';

const initialState = {
    user: {}
}

export default function articles(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
            let user = Object.assign({}, action.payload);
            return {
                ...state,
                user
            }
        default:
            return state;
    }
}