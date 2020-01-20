import { FETCH_QUIZ_DATA, FETCH_QUIZ_OPTIONS, LEADERBOARD_SCORES } from '../constants';
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
                if (response.data.status === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'fetch quiz not successful');
                }
                let res = response.data;
                dispatch(quizData(res.data));
                let quizz = Object.values(res.data);
                localStorage.setItem('quizId', res._id);
                localStorage.setItem('q0', JSON.stringify(quizz[0]));
                localStorage.setItem('q1', JSON.stringify(quizz[1]));
                localStorage.setItem('q2', JSON.stringify(quizz[2]));
                localStorage.setItem('q3', JSON.stringify(quizz[3]));
                localStorage.setItem('q4', JSON.stringify(quizz[4]));
                let q0 = {title: quizz[0].title};
                let q1 = {title: quizz[1].title};
                let q2 = {title: quizz[2].title};
                let q3 = {title: quizz[3].title};
                let q4 = {title: quizz[4].title};
                this.fetchQuizOptions('q0', q0);
                this.fetchQuizOptions('q1', q1);
                this.fetchQuizOptions('q2', q2);
                this.fetchQuizOptions('q3', q3);
                this.fetchQuizOptions('q4', q4);
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function fetchQuizOptions(index, payload) {
    const userToken = localStorage.getItem('userToken');
    return dispatch => {
        axios.post(`${globals.base_url}/quiz/options`, payload, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.data.status === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'fetch quiz not successful');
                }
                let res = response.data;
                if(index === 0) {localStorage.setItem('option0', JSON.stringify(res.data))};
                if(index === 1) {localStorage.setItem('option1', JSON.stringify(res.data))};
                if(index === 2) {localStorage.setItem('option2', JSON.stringify(res.data))};
                if(index === 3) {localStorage.setItem('option3', JSON.stringify(res.data))};
                if(index === 4) {localStorage.setItem('option4', JSON.stringify(res.data))};
                dispatch(quizOptions(res.data));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function fetchScores() {
    const userToken = localStorage.getItem('userToken');
    return dispatch => {
        axios.get(`${globals.base_url}/quiz/leaderboard`, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.data.status === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'Leaderboard score not found not successful');
                }
                let res = response.data;
                dispatch(scores(res.data));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function finishQuiz(payload) {
    const userToken = localStorage.getItem('userToken');
    return dispatch => {
        axios.put(`${globals.base_url}/quiz/finish/${payload._id}`, payload, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.data.status === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'fetch quiz not successful');
                }
                let res = response.data;
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

function scores(payload) {
    return {
        type: LEADERBOARD_SCORES,
        payload
    }
}
