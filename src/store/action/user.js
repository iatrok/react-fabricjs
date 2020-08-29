import { 
    FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED 
} from '../type/user';

import axios from 'axios';

const fetchUser = () => ({type: FETCH_USER});

const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    payload: {user}
});

const fetchUserFailed = error => ({type: FETCH_USER_FAILED, payload: {error}});

export const getUser = username => {
    return async dispatch => {
        dispatch(fetchUser());
        return await axios.get(`https://api.github.com/users/${username}`)
        .then(res => {
            dispatch(fetchUserSuccess(res.data))
        })
        .catch(error => {            
            dispatch(fetchUserFailed(error));
        })
    }
}