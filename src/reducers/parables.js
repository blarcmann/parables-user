import { FETCH_PARABLES, FETCH_PARABLE } from '../constants';

const initialState = {
    parables: [],
    parable: {}
}

export default function parables(state = initialState, action) {
    switch (action.type) {
        case FETCH_PARABLES:
            return {
                ...state,
                parables: action.payload.parables
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