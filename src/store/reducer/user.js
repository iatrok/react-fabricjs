import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from '../type/user';

const initialState = {loading: false, error: null, user:null }

export const user = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USER: 
            return {
                loading: true,
                error: null,
                user: null
            }
        case FETCH_USER_SUCCESS: {
            return {
                loading: false,
                user: action.payload.user,
                error: null
            }
        }
        case FETCH_USER_FAILED: {
            return {
                loading: false,
                user: null,
                error: action.payload.error
            }
        }
        default:
            return state;
    }
}