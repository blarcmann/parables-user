import { RANDOM_PARABLE, FETCH_PARABLE } from '../constants';
import axios from 'axios';
import globals from '../globals';


export function fetchRandomParable() {
    const userToken = localStorage.getItem('userToken');
    return dispatch => {
        axios.get(`${globals.base_url}/parable/rand`, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'fetch random parables not successful');
                }
                let res = response.data;
                console.log('response random', res);
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
        axios.get(`${globals.base_url}/parables/parable/${id}`)
            .then(response => {
                if (response.data.success === false) {
                    alert(response.status);
                    return console.log(response, 'not successful');
                }
                const parable = response.data.parable;
                console.log('retrieved parable details', parable)
                dispatch(singleParable(parable))
            })
    }
}

function singleParable(parable) {
    return {
        type: FETCH_PARABLE,
        parable
    }
}

function randomParable(payload) {
    return {
        type: RANDOM_PARABLE,
        payload
    }
}

