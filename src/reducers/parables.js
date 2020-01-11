import { RANDOM_PARABLE, FETCH_PARABLE } from '../constants';

const initialState = {
    randomParable: {},
    parable: {}
}

export default function parables(state = initialState, action) {
    switch (action.type) {
        case RANDOM_PARABLE:
            const randPara = Object.assign({}, action.payload);
            return {
                ...state,
                randomParable: randPara
            }
        case FETCH_PARABLE:
            return {
                ...state,
                parable: action.parable
            }
        default:
            return state;
    }
}