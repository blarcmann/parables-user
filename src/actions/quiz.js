import { FETCH_QUIZ_DATA, FETCH_QUIZ_OPTIONS } from '../constants';
import axios from 'axios';
import globals from '../globals';


export function fetchQuizData(userId) {
    const userToken = localStorage.getItem('userToken');
    return dispatch => {
        axios.get(`${globals.base_url}/quiz/start/${userId}`, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'fetch quiz not successful');
                }
                let res = response.data;
                dispatch(quizData(res.data));
                let quizz = Object.values(res.data);
                quizz.forEach(quiz => {
                    console.log(quiz.title);
                    let payload = {
                        title: quiz.title
                    }
                    this.fetchQuizOptions(payload);
                })
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function fetchQuizOptions(payload) {
    const userToken = localStorage.getItem('userToken');
    return dispatch => {
        axios.post(`${globals.base_url}/quiz/options`, payload, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'fetch quiz not successful');
                }
                let res = response.data;
                console.log('response random', res);
                dispatch(quizOptions(res.data));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

function quizData(payload) {
    return {
        type: FETCH_QUIZ_DATA,
        payload
    }
}

function quizOptions(payload) {
    return {
        type: FETCH_QUIZ_OPTIONS,
        payload
    }
}

