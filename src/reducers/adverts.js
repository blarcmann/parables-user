import { FETCH_ADVERT } from '../constants';

const initialState = {
    advert: {}
}

export default function adverts(state = initialState, action) {
    switch (action.type) {
        case FETCH_ADVERT:
            const advert = Object.assign({}, action.payload);
            return {
                ...state,
                advert: advert
            }
        default:
            return state;
    }
}