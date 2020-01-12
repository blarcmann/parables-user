import { FETCH_ADVERT } from '../constants';
import axios from 'axios';
import globals from '../globals';


export function fetchRandomAdvert() {
    const userToken = localStorage.getItem('userToken');
    return dispatch => {
        axios.get(`${globals.base_url}/showcase/rand`, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.data.status === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'fetch random advert not successful');
                }
                let res = response.data;
                console.log('response random', res);
                dispatch(randomAdvert(res.data));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function clickAdvert(id) {
    const userToken = localStorage.getItem('userToken');
    return dispatch => {
        axios.get(`${globals.base_url}/showcase/click/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.data.status === false) {
                    return console.log(response, 'fetch random advert not successful');
                }
                let res = response.data;
                console.log('response random', res);
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

function randomAdvert(payload) {
    return {
        type: FETCH_ADVERT,
        payload
    }
}

