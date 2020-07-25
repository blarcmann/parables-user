import { RANDOM_PARABLE, MULTIPLE_RANDOM_PARABLE, FETCH_PARABLE, Q_PARABLE, CLEAR } from '../constants';

const initialState = {
    randomParable: {},
    parable: {},
    qResult: [],
    multipleRandParables: [],
}

export default function parables(state = initialState, action) {
    switch (action.type) {
        case RANDOM_PARABLE:
            const randPara = Object.assign({}, action.payload);
            return {
                ...state,
                randomParable: randPara
            }
        case MULTIPLE_RANDOM_PARABLE:
            const multipleRandPara = action.payload
            return {
                ...state,
                multipleRandParables: multipleRandPara
            }
        case FETCH_PARABLE:
            const parable = Object.assign({}, action.payload);
            return {
                ...state,
                parable: parable
            }
        case Q_PARABLE:
            return {
                ...state,
                qResult: [...state.qResult, action.payload]
            }
        case CLEAR:
            return {
                ...state,
                qResult: []
            }
        default:
            return state;
    }
}