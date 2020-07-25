import { RANDOM_PARABLE, MULTIPLE_RANDOM_PARABLE, FETCH_PARABLE, Q_PARABLE , CLEAR} from '../constants';
import axios from 'axios';
import globals from '../globals';

export function fetchMultipleRandomParable() {
    const userToken = localStorage.getItem('userToken');
    return dispatch => {
        axios.get(`${globals.base_url}/parable/rand`, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                loadOnce();
                if (response.data.status === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'fetch random parables not successful');
                }
                let res = response.data;
                localStorage.setItem('pc', JSON.stringify(res.data));
                dispatch(multipleRandomParable(res.data));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function fetchRandomParable() {
    const userToken = localStorage.getItem('userToken');
    return dispatch => {
        axios.get(`${globals.base_url}/parable/rand`, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.data.status === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                }
                let res = response.data;
                dispatch(randomParable(res.data));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function fetchParable(id) {
    return (dispatch) => {
        axios.get(`${globals.base_url}/parable/${id}`)
            .then(response => {
                if (response.data.status === false) {
                    return console.log(response, 'not successful');
                }
                const parable = response.data.data;
                dispatch(singleParable(parable))
            })
    }
}

export function parableSearch(q) {
    return (dispatch) => {
        dispatch(clearData(''));
        axios.get(`${globals.base_url}/parable/search`, {
            params: {
                term: q
            }
        })
            .then(response => {
                if (response.data.status === false) {
                    const msg = response.data.msg || 'Search not completed, please retry';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'not successful');
                }
                const searchResults = response.data.data;
                if(!searchResults.length) {
                }
                dispatch(qParable(searchResults));
            })
    }
}

function singleParable(payload) {
    return {
        type: FETCH_PARABLE,
        payload
    }
}

function randomParable(payload) {
    return {
        type: RANDOM_PARABLE,
        payload
    }
}

function multipleRandomParable(payload) {
    return {
        type: MULTIPLE_RANDOM_PARABLE,
        payload
    }
}

function clearData(payload) {
    return {
        type: CLEAR,
        payload
    }
}

function qParable(payload) {
    return {
        type: Q_PARABLE,
        payload
    }
}

function loadOnce() {
    if (!localStorage.justOnce) {
        localStorage.setItem('justOnce', 'true')
        window.location.reload()
    }
}
