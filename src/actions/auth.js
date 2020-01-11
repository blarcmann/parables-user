import { SIGN_UP, LOGIN } from '../constants';
import axios from 'axios';
import globals from '../globals';
// const userToken = localStorage.getItem('userToken');
// const local = true;
const url = `http://159.89.85.116/v1`;

export function register(props, payload) {
    return (dispatch) => {
        axios.post(`${url}/user/register`, payload)
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
                localStorage.setItem('userToken', user.data.user_token);
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
        axios.post(`${url}/user/login`, payload)
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
                dispatch(loginUser(res.data));
                props.history.push("/");
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