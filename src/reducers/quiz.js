import { FETCH_QUIZ_DATA, FETCH_QUIZ_OPTIONS } from '../constants';

const initialState = {
    quizData: {},
    quizOptions: []
}

export default function quiz(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZ_DATA:
            const quizData = Object.assign({}, action.payload);
            return {
                ...state,
                quizData: quizData
            }
        case FETCH_QUIZ_OPTIONS:
            let option = [];
            option.push(action.payload);
            return {
                ...state,
                quizOptions: [...state.quizOptions, action.payload]
            }
        default:
            return state;
    }
}