import { RANDOM_PARABLE, FETCH_PARABLE, Q_PARABLE, CLEAR } from '../constants';

const initialState = {
    randomParable: {},
    parable: {},
    qResult: []
}

export default function parables(state = initialState, action) {
    switch (action.type) {
        case RANDOM_PARABLE:
            const randPara = Object.assign({}, action.payload);
            return {
                ...state,
                randomParable: randPara
            }
        case CLEAR:
        return {
            ...state,
            qResult: []
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
        default:
            return state;
    }
}