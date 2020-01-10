import { FETCH_PARABLES, FETCH_PARABLE } from '../constants';
import axios from 'axios';

const url = `http://localhost:5000/api`;

export function fetchParables() {
    return (dispatch) => {
        axios.get(`${url}/parables/all`)
            .then(response => {
                if (response.data.success === false) {
                    alert(response.status);
                    return console.log(response, 'not successful');
                }
                const payload = response.data;
                dispatch(allParables(payload))
            })
    }
}

export function fetchParable(id) {
    return (dispatch) => {
        axios.get(`${url}/parables/parable/${id}`)
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

function allParables(payload) {
    return {
        type: FETCH_PARABLES,
        payload
    }
}

