import { SIGN_UP, LOGIN, FETCH_USER } from '../constants';
import axios from 'axios';
import globals from '../globals';

export function register(props, payload) {
    return (dispatch) => {
        axios.post(`${globals.base_url}/user/register`, payload)
            .then((response) => {
                if (response.data.success === false) {
                    const msg = response.data.msg || 'Registration failed!';
                    globals.createToast(msg, 2500, 'top');
                    return console.log(response, 'not successful');
                }
                const user = response.data;
                console.log(user);
                const msg = 'Account successfully created!';
                globals.createToast(msg, 2500, 'bottom-right');
                dispatch(accountCreated(user));
                props.history.push("/login");
            })
            .catch(error => {
                const msg = error.data.msg || 'Some error occured, please try later!';
                globals.createToast(msg, 2500, 'top');
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function login(props, payload) {
    return dispatch => {
        axios.post(`${globals.base_url}/user/login`, payload)
            .then(response => {
                if (response.success === false) {
                    const msg = response.data.msg || 'Failed, please retry.';
                    globals.createToast(msg, 2500, 'top');
                    return console.log(response, 'not successful');
                }
                const msg = 'Authentication successful!';
                globals.createToast(msg, 2500, 'bottom-right');
                let res = response.data;
                localStorage.setItem('userId', res.data.user_id);
                localStorage.setItem('userToken', res.data.user_token);
                dispatch(loginUser(res.data));
                props.history.push("/");
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function fetchUserDetails(id) {
    const userToken = localStorage.getItem('userToken');
    return dispatch => {
        axios.get(`${globals.base_url}/user/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    return console.log(response, 'fetch user detsild not successful');
                }
                let res = response.data;
                localStorage.setItem('userDetails', JSON.stringify(res.data));
                dispatch(fetchUser(res.data));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

function loginUser(data) {
    return {
        type: LOGIN,
        payload: data
    };
}

function accountCreated(user) {
    return {
        type: SIGN_UP,
        payload: user
    }
}

function fetchUser(user) {
    return {
        type: FETCH_USER,
        payload: user
    }
}