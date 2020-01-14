import { FETCH_QUIZ_DATA, FETCH_QUIZ_OPTIONS, LEADERBOARD_SCORES } from '../constants';

const initialState = {
    quizData: {},
    q0: {},
    q1: {},
    q2: {},
    q3: {},
    q4: {},
    option0: {},
    option1: {},
    option2: {},
    option3: {},
    option4: {},
    quizOptions: [],
    scores: []
}

export default function quiz(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZ_DATA:
            const quizData = Object.assign({}, action.payload);
            const q0 = Object.assign({}, JSON.parse(localStorage.getItem('q0')));
            const q1 = Object.assign({}, JSON.parse(localStorage.getItem('q1')));
            const q2 = Object.assign({}, JSON.parse(localStorage.getItem('q2')));
            const q3 = Object.assign({}, JSON.parse(localStorage.getItem('q3')));
            const q4 = Object.assign({}, JSON.parse(localStorage.getItem('q4')));
            return {
                ...state,
                quizData: quizData,
                q0: q0,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
            }
        case FETCH_QUIZ_OPTIONS:
            let option = [];
            option.push(action.payload);
            const option0 = Object.assign({}, JSON.parse(localStorage.getItem('option0')));
            const option1 = Object.assign({}, JSON.parse(localStorage.getItem('option1')));
            const option2 = Object.assign({}, JSON.parse(localStorage.getItem('option2')));
            const option3 = Object.assign({}, JSON.parse(localStorage.getItem('option3')));
            const option4 = Object.assign({}, JSON.parse(localStorage.getItem('option4')));
            return {
                ...state,
                quizOptions: [...state.quizOptions, action.payload],
                option0: option0,
                option1: option1,
                option2: option2,
                option3: option3,
                option4: option4,
            }
        case LEADERBOARD_SCORES:
            return {
                ...state,
                scores: [...state.scores, action.payload]
            }
        default:
            return state;
    }
}